import supabase from "$lib/db";

export async function load({ params }) {
	let { data, error } = await supabase.from("news").select("*").eq("id", params.newsId.toString());
	if (error) return console.log(error);
	return { ...data["0"] };
}
