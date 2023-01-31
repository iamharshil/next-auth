import { getSession } from "next-auth/react";

export const requireAuth = async (context, cb) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: "/",
				parmanent: false,
			},
		};
	}
	return cb();
};

export default requireAuth;
