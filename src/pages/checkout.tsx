import React from "react"
import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems } from "../features/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct"
import { useReadLocalStorage } from "usehooks-ts"
import { Product } from "../types/producttypes"

function Checkout() {
	const items = useSelector(selectItems)

	return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/* Left */}
				<div className="flex-grow m-5 shadow-sm">
					<Image
						src="/checkout.webp"
						alt="checkoutImg"
						width={1020}
						height={250}
						style={{ objectFit: "contain" }}
					/>
					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-3xl border-b pb-4">
							{items.length === 0
								? "Your Amazon basket is empty"
								: "Shopping Basket"}
						</h1>
						{items.map((item, i) => (
							<CheckoutProduct />
						))}
					</div>
				</div>
				{/* Right */}
				<div></div>
			</main>
		</div>
	)
}

export default Checkout
