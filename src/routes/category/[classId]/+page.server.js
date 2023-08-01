import categoryList from "$lib/const/categoryList";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals: { supabase } }) {
	if (!categoryList.includes(params.classId.toString())) return { data: [] };
	let { data, error } = await supabase
		.from("news")
		.select("*")
		.eq("class", params.classId.toString())
		.range(0, 12);
	if (error) return;
	return { data };
}
