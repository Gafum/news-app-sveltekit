import categoryList from "$lib/const/categoryList";

import { redirect, error } from "@sveltejs/kit";

let myId = 1;

/** @type {import('./$types').PageLoad} */
export async function load({ url, parent, locals: { supabase } }) {
	/* Get Params */
	let newsId = url.searchParams.get("id");
	if (!newsId) {
		throw error(404, { message: "Not found" });
	}
	myId = newsId;

	/* Check for Auth */
	const { session } = await parent();
	if (!session) {
		throw redirect(303, "/user");
	}

	/* Request */
	let { data, error: err } = await supabase.from("news").select("*").eq("id", newsId);
	if (err) {
		throw error(500, { message: "Server error" });
	}
	if (!data[0]) {
		throw error(404, { message: "Not found" });
	}

	let news = data[0];

	/* this is mot user`s news */
	if (news.created_by !== session.user.email) {
		throw error(400, { message: "Not allowed" });
	}

	/* Create response */
	let myResponse = { myTitle: "", content: "", myClass: "" };

	try {
		myResponse.myTitle = news.title;
		myResponse.content = news.content;
		myResponse.myClass = news.class;
	} catch (e) {
		throw error(500, { message: "Server error" });
	}

	return { data: myResponse };
}

/** @type {import('./$types').Actions} */
export const actions = {
	updateNews: async ({ request, locals: { supabase, getSession } }) => {
		/* Get user`s email */
		const session = await getSession();
		if (!session) throw error(400);

		/* Get Params */
		const params = await request.formData();
		let title = params.get("myTitle");
		let content = params.get("myContent");
		let myClass = params.get("myClass");
		if (!title || !content || !categoryList.includes(myClass)) {
			throw error(400, "Give the right data");
		}

		/* check Id */
		if (!myId) {
			throw error(400, { message: "Not allowed" });
		}

		/* main request */
		const { error: err } = await supabase
			.from("news")
			.update([{ title, content, class: myClass }])
			.eq("id", myId)
			.select();

		if (err) {
			throw redirect(303, "/");
		}

		throw redirect(303, `/news/${myId}`);
	}
};
