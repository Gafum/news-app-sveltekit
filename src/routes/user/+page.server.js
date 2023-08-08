import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ parent, locals: { supabase } }) {
	/* Get params */
	const { session } = await parent();
	if (!session) return { myNews: [] };

	/* Request */
	let { data, error: err } = await supabase
		.from("news")
		.select("*")
		.order("created_at", { ascending: false })
		.eq("created_by", session.user.email.toString());

	/* catch error */
	if (err) {
		return { myNews: [] };
	}
	return { myNews: data };
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ locals: { supabase } }) => {
		/* Request */
		let { error: err } = await supabase.auth.signOut();

		if (err) {
			throw error(500, { message: "Server error. Try again later." });
		}
		throw redirect(303, "/");
	}
};
