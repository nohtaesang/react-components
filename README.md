
# react-components
## list
|Name|
|----|
|pagination|
|toastify|
|modal|
|date-picker|

## react-pagination
#### Props

|Name|Type|Description|
|-----|-----|-----|
|curPage|Number|Current page number|
|setCurPage|Function|The method's parameter type is Number. And change the curPage to the Number|
|pageCount|Number|Number of page buttons shown|
|contentLength|Number|Number of contents|
|contentCount|Number|Number of contents shown on one page|


#### Example
```javascript
import React, { useState, useEffect } from 'react';
import Pagination from './pagination/index';

const App = () => {
	const [ data, setData ] = useState([]);
	const [ contentCount ] = useState(10);
	const [ curPage, setCurPage ] = useState(1);
	useEffect(() => {
		const dummy = [];
		for (let i = 0; i < 100; i++) {
			dummy.push({
				value: `data no#${i}`
			});
		}
		setData(dummy.slice());
	}, []);

	return (
        <div>
			{data
				.slice((curPage - 1) * contentCount, curPage * contentCount)
				.map((d, i) => <div key={i}>{d.value}</div>)}
			<Pagination
				curPage={curPage}
				setCurPage={setCurPage}
				pageCount={5}
				contentLength={data.length}
				contentCount={contentCount}
			/>
		</div>
	);
};
export default App;
```

## react-toastify
#### How to use

##### 1. Init ToastContainer
```javascript
import ToastContainer from './toastify/components/toastContainer';
/*
code
*/
<ToastContainer autoClose={5000} />
```
|Name|Type|Description|
|---|---|---|
|autoClose|Number|Close after 'autoClose' time|
##### 2. Use eventManager
when you want to generate toast, use this code.
```javascript
import eventManager from './toastify/utils/eventManager';
/*
code
*/
eventManager.emit('PUSH', '<success msg>', { type: 'success' });
eventManager.emit('PUSH', '<error msg>', { type: 'error' });
```

#### Example
```javascript
import React from 'react';
import ToastContainer from './toastify/components/toastContainer';
import eventManager from './toastify/utils/eventManager';

const App = () => {
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

export default App;
```