import { redirect, error } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ request, locals: { supabase } }) => {
		/* Get Params */
		const params = await request.formData();
		const email = params.get("email");
		const password = params.get("password");

		/* request */
		let { error: err } = await supabase.auth.signUp({
			email,
			password
		});

		/* Catch error */
		if (err) {
			console.log("my err:", err);
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
