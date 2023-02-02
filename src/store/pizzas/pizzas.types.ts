import { IPizza } from 'types/IPizza';

export interface PizzasState {
	items: IPizza[];
	isLoading: boolean;
	isError: boolean;
}
