import { fail } from "@sveltejs/kit";

export async function load({ params, locals: { supabase } }) {
	/* Request */
	let { data, error } = await supabase.from("news").select("*").eq("id", params.newsId.toString());
	if (error) return console.log(error);
	if (!data[0]) {
		return fail(404, { message: "Not found" });
	}

	/* Create Response */

	let myResponse = {};
	try {
		myResponse.title = data[0].title;
		myResponse.content = data[0].content;
		myResponse.author = data[0].created_by;
	} catch (err) {
		return fail(500, { message: "Server error" });
	}
	return { ...myResponse };
}
