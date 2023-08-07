import { error } from "@sveltejs/kit";

export async function load({ locals: { supabase } }) {
	let { data, error: err } = await supabase
		.from("news")
		.select("*")
		.order("created_at", { ascending: false })
		.range(0, 11);
	if (err) throw error(500, { message: "Server error. Try again later." });
	return { data: data || [] };
}

/** @type {import('./$types').Actions} */
export const actions = {
	getNews: async ({ request, locals: { supabase } }) => {
		/* Get Data */
		const params = await request.formData();
		const oldLength = params.get("oldLength");

		/* Request */
		let { data, error: err } = await supabase
			.from("news")
			.select("*")
			.order("created_at", { ascending: false })
			.range(oldLength, oldLength + 11);
		if (err) throw error(500, { message: "Server error. Try again later." });

		return JSON.stringify(data);
	}
};
