export interface IPizza {
	id: number
	imageUrl: string
	name: string
	type: number[]
	size: number[]
	price: number
	category: number
	rating: number
}

export interface SearchPizzaParams {
	sortBy: string
	category?: string | null
}
