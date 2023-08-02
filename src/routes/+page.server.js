import { error } from "@sveltejs/kit";

export async function load({ locals: { supabase } }) {
	let { data, error: err } = await supabase.from("news").select("*").range(0, 12);
	if (err) throw error(500, { message: "Server error. Try again later." });
	return { data: data || [] };
}
