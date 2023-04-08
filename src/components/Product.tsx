import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import React, { useState } from "react"
import { Product } from "../types/producttypes"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket } from "../features/basketSlice"

function Product({
	id,
	title,
	category,
	description,
	image,
	price,
	rating,
}: Product) {
	const dispatch = useDispatch()

	const addItemToBasket = () => {
		const product = {
			id,
			title,
			category,
			description,
			image,
			price,
			rating,
		}

		// sending a product as an action to the redux store.

		dispatch(addToBasket(product))
	}

	return (
		<div className="relative flex flex-col m-5 bg-white z-30 p-10">
			<p className="absolute top-2 right-2 text-xs italic text-gray-400">
				{category}
			</p>
			<Image
				src={image}
				height={200}
				alt="RandomFuckallImage"
				width={200}
				style={{ objectFit: "contain" }}
			/>
			<h4>{title}</h4>
			<div className="flex">
				{[...Array(Math.round(rating!.rate))].map((i) => {
					return <StarIcon className="flex h-5 text-yellow-500" />
				})}
			</div>
			<p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>

			<div className="mb-5">
				<Currency quantity={price} />
			</div>
			<button onClick={addItemToBasket} className="mt-auto button">
				Add to Basket
			</button>
		</div>
	)
}

export default Product
