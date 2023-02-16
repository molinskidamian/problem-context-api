import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ tag: Tag, name, label }) => (
	<label htmlFor={name}>
		<Tag
			type='text'
			className={Tag === 'textarea' ? styles.textarea : styles.input}
			placeholder={label}
			id={name}
		/>
	</label>
);

Input.propTypes = {
	tag: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
};

Input.defaultProps = {
	tag: 'input',
};

export default Input;
