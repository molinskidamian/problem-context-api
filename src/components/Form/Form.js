import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Radio from './FormRadio';

const types = {
	twitter: 'twitter',
	article: 'article',
	note: 'note',
};

class Form extends React.Component {
	state = {
		activeOption: types.twitter,
	};

	handleChangeRadio = type => {
		this.setState({
			activeOption: type,
		});
	};

	render() {
		const { activeOption } = this.state;
		return (
			<AppContext.Consumer>
				{(context) => (
					<form onSubmit={context.addItem}>
						<div className={styles.options}>
							<Radio
								id={types.twitter}
								checkedFn={activeOption === types.twitter}
								onChangeFn={() => this.handleChangeRadio(types.twitter)}>
								Twitter
							</Radio>
							<Radio
								id={types.article}
								checkedFn={activeOption === types.article}
								onChangeFn={() => this.handleChangeRadio(types.article)}>
								Article
							</Radio>
							<Radio
								id={types.note}
								checkedFn={activeOption === types.note}
								onChangeFn={() => this.handleChangeRadio(types.note)}>
								Note
							</Radio>
						</div>
						<Input
							name='name'
							label={activeOption === types.twitter ? 'Nazwa Twittera' : 'Tytuł'}
						/>
						{activeOption === types.twitter ? <Input name='image' label='Avatar' /> : null}
						{activeOption === types.note ? null : <Input name='link' label='Link...' />}
						<Input tag='textarea' name='description' label='Opis' />
						<Button>Dodaj!</Button>
					</form>
				)}
			</AppContext.Consumer>
		);
	}
}

export default Form;
