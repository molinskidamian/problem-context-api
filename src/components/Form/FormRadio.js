import React from 'react';
import styles from './FormRadio.module.scss';

const FormRadio = ({ id, checkedFn, onChangeFn, children }) => (
	<label htmlFor={id}>
		<input
			id={id}
			type='radio'
			checked={checkedFn}
			onChange={onChangeFn}
			className={styles.radio}
		/>
		{children}
	</label>
);

export default FormRadio;
