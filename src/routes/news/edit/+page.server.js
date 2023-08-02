import categoryList from "$lib/const/categoryList";

import { redirect, fail } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ url, parent, locals: { supabase } }) {
	/* Get Params */
	let newsId = url.searchParams.get("id");
	if (!newsId) throw fail(404, { message: "Not found" });

	/* Check for Auth */
	const { session } = await parent();
	if (!session) {
		throw redirect(303, "/user");
	}

	/* Request */
	let { data, error } = await supabase.from("news").select("*").eq("id", newsId);
	if (error) throw fail(500, { message: "Server error" });
	if (!data[0]) {
		throw fail(404, { message: "Not found" });
	}

	let news = data[0];

	/* this is mot user`s news */
	if (news.created_by !== session.user.email) {
		throw fail(400, { message: "Not allowed" });
	}

	/* Create response */
	let myResponse = { myTitle: "", content: "", myClass: "" };

	try {
		myResponse.myTitle = news.title;
		myResponse.content = news.content;
		myResponse.myClass = news.class;
	} catch (err) {
		throw fail(500, { message: "Server error" });
	}

	return { data: myResponse };
}
