import React from 'react';

const Toast = (props) => {
	const { options, closeToast, isRunning, setIsRunning } = props;
	const { delay, type } = options;

	const style = {
		animationDuration: `${delay}ms`,
		animationPlayState: isRunning ? 'running' : 'paused'
	};

	const animationEvent = {
		onAnimationEnd: () => {
			closeToast();
		}
	};

	return (
		<div className="toast-progress-bar" onClick={() => setIsRunning(!isRunning)}>
			<div className={`gauge ${type}`} style={style} {...animationEvent} />
		</div>
	);
};

export default Toast;
