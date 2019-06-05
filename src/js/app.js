import React, { useState, useEffect } from 'react';
import Pagination from './pagination/index';
const App = () => {
	const [ data, setData ] = useState([]);
	const [ contentNum ] = useState(10);
	const [ page, setPage ] = useState(1);
	useEffect(() => {
		const dummy = [];
		for (let i = 0; i < 100; i++) {
			dummy.push({
				id: i,
				value: `${i} 번째 데이터`
			});
		}
		setData(dummy.slice());
	}, []);

	return (
		<div>
			{data.slice((page - 1) * contentNum, page * contentNum).map((d, i) => <div key={d.id}>{d.value}</div>)}
			<Pagination page={page} setPage={setPage} pageNum={7} contentLength={data.length} contentNum={contentNum} />
		</div>
	);
};

export default App;
