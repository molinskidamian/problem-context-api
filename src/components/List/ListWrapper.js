import React from 'react';
import styles from './ListWrapper.module.scss';
import ListItem from './ListItem';

const ListWrapper = props => (
	<ul>
		{props.items.map(item => (
			<ListItem
				name={item.name}
				image={item.image}
				link={item.link}
				description={item.description}
				key={item.name}
			/>
		))}
	</ul>
);

export default ListWrapper;
