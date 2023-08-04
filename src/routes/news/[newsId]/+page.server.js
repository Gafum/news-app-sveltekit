import { error, redirect } from "@sveltejs/kit";

let myId = 0,
	serverMyNews = false;

export async function load({ parent, params, locals: { supabase } }) {
	let { session } = await parent();
	if (!session) {
		session.user.email = "GO";
	}

	myId = params.newsId.toString();

	if (!myId) {
		throw error(404, { message: "Not Found" });
	}

	/* Request */
	let { data, error: err } = await supabase.from("news").select("*").eq("id", myId);

	/* Catch errors */
	if (err) throw error(500, { message: "Server error" });
	if (!data[0]) {
		throw error(404, { message: "Not found" });
	}

	/* Create Response */
	let myResponse = { title: "", content: "", author: "", myNews: false, imgURL: undefined };
	try {
		myResponse.title = data[0].title;
		myResponse.content = data[0].content;
		myResponse.author = data[0].created_by;
		myResponse.imgURL = data[0].imgURL || undefined;
		serverMyNews = myResponse.myNews = data[0].created_by === session.user.email;
	} catch (err) {
		throw error(500, { message: "Server error" });
	}

	return { ...myResponse };
}

/** @type {import('./$types').Actions} */
export const actions = {
	goToUpdate: async () => {
		if (!serverMyNews) {
			throw error(404, { message: "Not allowed" });
		}
		if (!myId) {
			throw error(404, { message: "Not Found" });
		}
		throw redirect(301, `/news/edit?id=${myId}`);
	},
	deleteNews: async ({ locals: { supabase } }) => {
		if (!serverMyNews) {
			throw error(400, { message: "Not allowed" });
		}
		if (!myId) {
			throw error(404, { message: "Not Found" });
		}
		const { error: err } = await supabase.from("news").delete().eq("id", myId);

		if (err) {
			throw error(500, { message: "Server error" });
		}

		throw redirect(301, "/");
	}
};
