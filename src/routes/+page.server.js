import supabase from "$lib/db";

export async function load() {
	let { data, error } = await supabase.from("news").select("*").range(0, 20);
	if (error) return;
	return { data };
}
