import { IPizza } from 'types/IPizza';

type sortValueType = 'name' | 'price' | 'rating';

export const sortPizzas = (pizzas: IPizza[], sortByValue: sortValueType): IPizza[] => {
	console.log(pizzas);
	const result = pizzas.sort((a, b) => {
		if (a[sortByValue] < b[sortByValue]) {
			return -1;
		}
		if (a[sortByValue] > b[sortByValue]) {
			return 1;
		}
		return 0;
	});
	console.log(result);
	return result;
};
