export interface rating {
	rate: number
	count: number
}

export interface Product {
	id: number
	title: string
	price: number
	category: string
	description: string
	image: string
	rating?: rating
}

export interface ProductListProps {
	products: Product[]
}

export interface Props {
	[key: string]: Product[]
}
