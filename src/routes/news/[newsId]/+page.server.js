export async function load({ params, locals: { supabase } }) {
	/* Request */
	let { data, error } = await supabase.from("news").select("*").eq("id", params.newsId.toString());
	if (error) return console.log(error);

	/* Create Response */
	let myResponse = {};
	myResponse.title = data[0].title;
	myResponse.content = data[0].content;
	myResponse.author = data[0].created_by;

	return { ...myResponse };
}
