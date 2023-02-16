import React from 'react';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';

const ListItem = ({ name, image, link, description }) => (
	<li>
		<img src={image} className={styles.image} alt={name} />
		<strong>{name}</strong>:{description}
		<Button href={link}>Visit profile</Button>
	</li>
);

export default ListItem;
