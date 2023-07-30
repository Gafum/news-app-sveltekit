import { fail, redirect } from "@sveltejs/kit";

import supabase from "$lib/db";

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async () => {
		let { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
			return fail(500);
		}
		throw redirect(303, "/");
	}
};
