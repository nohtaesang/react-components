import React, { Component } from 'react';
import eventManager from '../utils/eventManager';
import Toast from './toast';
import './toastify.css';

class ToastContainer extends Component {
	state = {
		toastIds: [],
		renderQueue: []
	};

	toastKey = 1;
	toastQueue = {};

	componentDidMount() {
		eventManager
			.on('PUSH', (msg, options) => this.pushToast(msg, options))
			.on('CHANGE', this.onChangeToastContainer);
	}

	componentWillUnmount() {
		eventManager.off('PUSH').off('CHANGE');
	}

	pushToast = (msg, options) => {
		const { autoClose } = this.props;
		const id = (this.toastKey++).toString();

		const nextOptions = {
			...options,
			id: id,
			delay: autoClose,
			deleteToast: () => this.deleteToast(id)
		};

		this.toastQueue = {
			...this.toastQueue,
			[id]: {
				msg,
				options: nextOptions
			}
		};

		this.setState(
			{
				toastIds: [ ...this.state.toastIds, id ]
			},
			eventManager.emit('CHANGE')
		);
	};

	deleteToast = (id) => {
		this.setState(
			{
				toastIds: this.state.toastIds.filter((v) => v !== id)
			},
			eventManager.emit('CHANGE')
		);
	};

	onChangeToastContainer = () => {
		const nextRenderQueue = [];
		let index = 0;
		Object.keys(this.toastQueue).forEach((id) => {
			const { msg, options } = this.toastQueue[id];
			if (this.state.toastIds.indexOf(id) !== -1) {
				nextRenderQueue.push(<Toast key={id} index={index} msg={msg} options={options} />);
				index++;
			} else {
				delete this.toastQueue[id];
			}
		});
		this.setState({
			renderQueue: nextRenderQueue
		});
	};

	render() {
		return <div className="toast-container">{this.state.renderQueue.map((toast) => toast)}</div>;
	}
}

export default ToastContainer;
