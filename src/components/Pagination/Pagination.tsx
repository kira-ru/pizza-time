import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

interface PaginationProps {
	currentPage: number;
	onChangePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, onChangePage }) => (
	<ReactPaginate
		className={styles.wrapper}
		breakLabel='...'
		nextLabel='>'
		previousLabel='<'
		onPageChange={event => onChangePage(event.selected + 1)}
		pageRangeDisplayed={4}
		pageCount={4}
		forcePage={currentPage - 1}
	/>
);
