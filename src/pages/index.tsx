import type {
	GetServerSideProps,
	GetServerSidePropsContext,
	NextPage,
} from "next"
import Head from "next/head"
import Banner from "../components/Banner"
import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed"
import { Props } from "../types/producttypes"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

const Home: NextPage = ({ products }: Props) => {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Vamazon</title>
			</Head>
			<Header />

			<main className="max-w-screen-2xl mx-auto">
				{/* Banner */}
				<Banner />
				{/* ProductFeed */}
				<ProductFeed products={products} />
			</main>
		</div>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	// ...
	const products = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json()
	)

	let session = await getServerSession(context.req, context.res, authOptions)

	return {
		props: {
			products,
			session,
		},
	}
}

// https://fakestoreapi.com/products
