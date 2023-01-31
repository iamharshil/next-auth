import { NextPage } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react";
import requireAuth from "@/utils/requireAuth";

const securePage = ({ session }) => {
	return (
		<>
			<Head>
				<title>Create t3 app</title>
				<meta />
			</Head>
			<main>we should not see this it is billion dollor text right here</main>
		</>
	);
};

export async function getServerSideProps(context) {
	return requireAuth(context, ({ session }) => {
		return {
			props: { session },
		};
	});
}

export default securePage;
