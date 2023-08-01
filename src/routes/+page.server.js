import { fail } from "@sveltejs/kit";

export async function load({ locals: { supabase } }) {
	let { data, error } = await supabase.from("news").select("*").range(0, 12);
	if (error) return fail;
	return { data: data || [] };
}
