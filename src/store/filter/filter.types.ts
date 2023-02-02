export interface SortType {
	name?: string
	queryParamName: string
}

export interface FilterState {
	categoryId: number
	sort: SortType
}
