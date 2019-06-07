import React, { useState, useEffect } from 'react';
import ToastContainer from './toastify/components/toastContainer';
import eventManager from './toastify/utils/eventManager';

const ToastifyExample = () => {
	const onClickToastSuccess = () => {
		eventManager.emit('PUSH', 'success', { type: 'success' });
	};
	const onClickToastError = () => {
		eventManager.emit('PUSH', 'error', { type: 'error' });
	};

	return (
		<div>
			<ToastContainer autoClose={5000} />
			<button onClick={onClickToastSuccess}>toast success </button>
			<button onClick={onClickToastError}>toast error </button>
		</div>
	);
};

export default ToastifyExample;
