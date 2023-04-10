import Image from "next/image"
import React, { useEffect, useState } from "react"
import {
	MagnifyingGlassIcon,
	Bars3Icon,
	ShoppingCartIcon,
} from "@heroicons/react/24/outline"
import { signIn, signOut, useSession } from "next-auth/react"
import { Router, useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectItems } from "../features/basketSlice"
import { Product } from "../types/producttypes"
import { useReadLocalStorage } from "usehooks-ts"

function Header() {
	const [count, setCount] = useState<{ items: Product[] }>({ items: [] })

	useEffect(() => {
		const count = JSON.parse(localStorage.getItem("count")!)
		if (count) {
			setCount(count)
		}
	}, [])

	const items = useSelector(selectItems)

	const { data: session } = useSession()
	const router = useRouter()
	const itemsList = useSelector(selectItems)

	return (
		<header>
			{/* Enclosed in one big div */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				{/* AmazonLogo */}
				<div className="mt-1 flex items-center flex-grow sm:flex-grow-0 mr-1 cursor-pointer">
					<Image
						onClick={() => router.push("/")}
						src="/amazonlogo.png"
						width={150}
						height={40}
						style={{ objectFit: "contain" }}
						alt="AmazonLogo"
					/>
				</div>
				{/* Search */}
				<div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor pointer focus:outline-none">
					<input
						type="text"
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
					/>
					<MagnifyingGlassIcon className="h-12 p-4" />
				</div>

				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div
						onClick={() =>
							session
								? signOut({
										redirect: false,
										callbackUrl: `${window.location.origin}`,
								  })
								: signIn("google")
						}
						className="link cursor-pointer"
					>
						<p className="hover:underline">
							{session ? `Hello ${session.user?.name}` : "SignIn"}
						</p>
						<p className="font-extrabold md:text-sm">Account & Lists</p>
					</div>

					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm">&Orders</p>
					</div>

					<div
						onClick={() => router.push("/checkout")}
						className="relative link flex items-center"
					>
						<span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
							{items.length}
						</span>
						<ShoppingCartIcon className="h-10" />
						<p className="hidden md:inline font-extrabold md:text-sm mt-2">
							Basket
						</p>
					</div>
				</div>
			</div>

			{/* Bottom nav */}

			<div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
				<p className="link flex items-center">
					<Bars3Icon className="h-6 mr-1" />
					All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Amazon Business</p>
				<p className="link">Today's Deals</p>
				<p className="link hidden lg:inline-flex">Electronics</p>
				<p className="link hidden lg:inline-flex">Food & Grocery</p>
				<p className="link hidden lg:inline-flex">Prime</p>
				<p className="link hidden lg:inline-flex">Buy Again</p>
				<p className="link hidden lg:inline-flex">Shopper Toolkit</p>
				<p className="link hidden lg:inline-flex">Health & Personal Care</p>
			</div>
		</header>
	)
}

export default Header
