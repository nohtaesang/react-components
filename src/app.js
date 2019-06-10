import React, { useState, useEffect } from 'react';
import PaginationExample from './js/paginationExample';
import ToastifyExample from './js/toastifyExample';
import ModalExample from './js/modalExample';
const App = () => {
	return (
		<div>
			<PaginationExample />
			<ToastifyExample />
			<ModalExample />
		</div>
	);
};

export default App;
