import { redirect, error } from "@sveltejs/kit";

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		/* Get params */
		const params = await request.formData();
		const email = params.get("email");
		const password = params.get("password");

		/* request */
		let { error: err } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		/* Catch error */
		if (err) {
			if (err.status === 400) {
				throw error(400, { message: "Write right data!" });
			}
			throw error(500, {
				message: "Server error. Try again later."
			});
		}

		throw redirect(303, "/user");
	}
};
