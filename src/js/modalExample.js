import React from 'react';

const ModalExample = () => {
	const onClickModalActive = () => {
		console.log('here');
	};

	return (
		<div>
			<button onClick={onClickModalActive}>Modal Active</button>
		</div>
	);
};

export default ModalExample;
