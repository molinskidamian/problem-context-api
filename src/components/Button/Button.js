import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, href, secondary, ...props }) => {
	const btnClass = secondary ? styles.secondary : styles.button;

	return href ? (
		<a href={href} className={styles.link}>
			{children}
		</a>
	) : (
		<button {...props} className={btnClass}>
			{children}
		</button>
	);
};

export default Button;
