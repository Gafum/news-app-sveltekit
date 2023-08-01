import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ parent, locals: { supabase } }) {
	const { session } = await parent();
	if (!session) return { myNews: [] };

	let { data, error } = await supabase
		.from("news")
		.select("*")
		.eq("created_by", session.user.email.toString());
	if (error) {
		console.log(error);
		return { myNews: [] };
	}
	return { myNews: data };
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ locals: { supabase } }) => {
		let { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
			return fail(500);
		}
		throw redirect(303, "/");
	}
};
