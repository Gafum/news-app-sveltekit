import supabase from "$lib/db";

export async function load({ params }) {
	let { data, error } = await supabase.from("news").select("*");
	if (error) return console.log(error);
	let news = data.find(({ id }) => id.toString() == params.newsId.toString());
	if (!news) return;
	return { ...news };
}
