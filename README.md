
## react-pagination


### Props

|Name|Type|Dscription|
|-----|-----|-----|
|curPage|Number|Current page number|
|setCurPage|Function|The method's parameter type is Number. And change the curPage to the Number|
|pageCount|Number|Number of page buttons shown|
|contentLength|Number|Number of contents|
|contentCount|Number|Number of contents shown on one page|


### Example
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