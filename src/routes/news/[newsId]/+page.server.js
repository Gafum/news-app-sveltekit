import { error } from "@sveltejs/kit";

export async function load({ params, locals: { supabase } }) {
	/* Request */
	let { data, error: err } = await supabase
		.from("news")
		.select("*")
		.eq("id", params.newsId.toString());

	/* Catch errors */
	if (err) throw error(500, { message: "Server error" });
	if (!data[0]) {
		throw error(404, { message: "Not found" });
	}

	/* Create Response */
	let myResponse = {};
	try {
		myResponse.title = data[0].title;
		myResponse.content = data[0].content;
		myResponse.author = data[0].created_by;
	} catch (err) {
		throw error(500, { message: "Server error" });
	}
	return { ...myResponse };
}
