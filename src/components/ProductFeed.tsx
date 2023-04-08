import React from "react"
import { ProductListProps } from "../types/producttypes"
import Product from "./Product"

function ProductFeed({ products }: ProductListProps) {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{products
				.slice(0, 4)
				.map(({ id, title, price, category, description, image, rating }) => (
					// <p>{product.title}</p>
					<Product
						key={id}
						id={id}
						title={title}
						price={price}
						category={category}
						description={description}
						image={image}
						rating={rating}
					/>
				))}
			<img className="md:col-span-full mx-auto" src="/hori.jpg" alt="" />
			<div className="md:col-span-2">
				{products
					.slice(4, 5)
					.map(({ id, title, price, category, description, image, rating }) => (
						// <p>{product.title}</p>
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							category={category}
							description={description}
							image={image}
							rating={rating}
						/>
					))}
			</div>
			{products
				.slice(5, products.length)
				.map(({ id, title, price, category, description, image, rating }) => (
					// <p>{product.title}</p>
					<Product
						key={id}
						id={id}
						title={title}
						price={price}
						category={category}
						description={description}
						image={image}
						rating={rating}
					/>
				))}
		</div>
	)
}

export default ProductFeed
