import React, { useState } from 'react';
import ProgressBar from './progressBar';

const Toast = (props) => {
	const { msg, options, index } = props;
	const { deleteToast } = options;
	const [ disappear, setDisappear ] = useState(false);
	const [ isRunning, setIsRunning ] = useState(true);

	const style = {
		top: 12 + index * 72 + 'px'
	};

	const closeToast = () => {
		setDisappear(true);
		setTimeout(() => {
			deleteToast();
		}, 500);
	};

	return (
		<div className={`toast ${disappear ? 'disappear' : ''}`} index={index} style={style}>
			<div className="toast-msg">{msg}</div>
			<ProgressBar options={options} closeToast={closeToast} isRunning={isRunning} setIsRunning={setIsRunning} />
			<div className="toast-close-btn" onClick={closeToast}>
				X
			</div>
		</div>
	);
};

export default Toast;
