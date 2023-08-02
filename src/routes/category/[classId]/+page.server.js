import categoryList from "$lib/const/categoryList";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals: { supabase } }) {
	if (!categoryList.includes(params.classId.toString())) return { data: [] };
	let { data, error: err } = await supabase
		.from("news")
		.select("*")
		.eq("class", params.classId.toString())
		.range(0, 12);
	if (err) throw error(500, { message: "Server error" });
	return { data };
}
