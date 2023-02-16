import React from 'react';
import styles from './HeaderNavigation.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => (
	<nav>
		<ul className={styles.menu}>
			<li>
				<NavLink to='/'>Twitters</NavLink>
			</li>
			<li>
				<NavLink to='/articles'>Articles</NavLink>
			</li>
			<li>
				<NavLink to='/notes'>Notes</NavLink>
			</li>
		</ul>
	</nav>
);

export default HeaderNavigation;
