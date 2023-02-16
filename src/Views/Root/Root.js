import React from 'react';
import AppContext from '../../context';
import styles from './Root.module.scss';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import ListWrapper from '../../components/List/ListWrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class Root extends React.Component {
	state = {
		items: {
			twitters: [],
			articles: [],
			notes: [],
		},
		isModalOpen: false,
	};

	addItem = e => {
		e.preventDefault();
		console.log('It works!');

		// const newItem = {
		// 	name: e.target[0].value,
		// 	image: e.target[1].value,
		// 	link: e.target[2].value,
		// 	description: e.target[3].value,
		// };

		// this.setState(prevState => ({
		// 	items: [...prevState.items, newItem],
		// }));

		// e.target.reset();
	};

	openModal = () => {
		this.setState({
			isModalOpen: true,
		});
	};

	closeModal = () => {
		this.setState({
			isModalOpen: false,
		});
	};

	render() {
		const { isModalOpen } = this.state;
		const contextElements = {
			...this.state,
			addItem: this.addItem,
		};
		return (
			<div className={styles.wrapper}>
				<BrowserRouter>
					<AppContext.Provider value={contextElements}>
						<Header openModalFn={this.openModal} />
						<Routes>
							<Route path='/' element={<TwittersView />} />
							<Route path='/articles' element={<ArticlesView />} />
							<Route path='/notes' element={<NotesView />} />
						</Routes>
						{/* <ListWrapper items={this.state.items} /> */}
					</AppContext.Provider>
				</BrowserRouter>
				{isModalOpen && <Modal closeModalFn={this.closeModal} />}
			</div>
		);
	}
}

export default Root;
