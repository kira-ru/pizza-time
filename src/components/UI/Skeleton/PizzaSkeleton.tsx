import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaSkeleton: FC = () => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={500}
		viewBox='0 0 280 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<circle cx='130' cy='130' r='120' />
		<rect x='0' y='270' rx='10' ry='10' width='280' height='23' />
		<rect x='0' y='313' rx='10' ry='10' width='280' height='88' />
		<rect x='0' y='425' rx='10' ry='10' width='95' height='30' />
		<rect x='125' y='415' rx='24' ry='24' width='152' height='45' />
	</ContentLoader>
);
