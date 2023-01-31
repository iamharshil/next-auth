import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export default function middleware(req) {
	// get cookies from req
	const { cookies } = req;

	// get jwt from cookies
	const jwt = cookies.OursiteJWT;

	// get req url
	const url = req.url;

	// if it's login then don't redirect again to login
	if (url.includes("/login")) {
		// if jwt avail
		if (jwt) {
			try {
				// verify token
				verify(jwt, secret);
				// if true redirect secret route
				return NextResponse.redirect("/");
			} catch (error) {
				// if not return pass it
				return NextResponse.next();
			}
		}
	}

	// if dashboard
	if (url.includes("/dashboard")) {
		// if jwt not found redirect login
		if (jwt === undefined) {
			return NextResponse.redirect("/login");
		}
		try {
			// check and next if true
			verify(jwt, secret);
			return NextResponse.next();
		} catch (error) {
			// else redirect login
			return NextResponse.redirect("/login");
		}
	}
}
