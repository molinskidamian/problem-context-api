import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';

const Header = ({ openModalFn }) => (
	<header className={styles.wrapper}>
		<img src={logo} className={styles.logo} alt='logo' />
		<HeaderNavigation />
		<Button onClick={openModalFn} secondary>
			Add item
		</Button>
	</header>
);

export default Header;
