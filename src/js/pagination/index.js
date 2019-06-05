import React, { useState, useEffect } from 'react';
import './index.css';
const Pagination = (props) => {
	const { page, setPage, pageNum, contentLength, contentNum } = props;
	const [ lastPage, setLastPage ] = useState(1);
	const [ pageBtns, setPageBtns ] = useState([]);

	useEffect(
		() => {
			const nextLastPage = Math.ceil(contentLength / contentNum);
			setLastPage(nextLastPage);
		},
		[ contentLength ]
	);

	useEffect(
		() => {
			const nextPageBtns = [];
			for (let i = 0; i < pageNum; i++) {
				nextPageBtns.push(i - parseInt(pageNum / 2) + page);
			}
			setPageBtns(nextPageBtns);
		},
		[ page ]
	);

	return (
		<div className="kirin-pagination">
			<div
				className={`first`}
				onClick={() => {
					setPage(1);
				}}
			>
				{'<<'}
			</div>
			<div
				className={`prev ${page === 1 ? 'hidden' : ''}`}
				onClick={() => {
					setPage(page - 1);
				}}
			>
				{'<'}
			</div>
			{pageBtns.map((no, i) => (
				<div
					key={no}
					className={`page ${no >= 1 && no <= lastPage ? '' : 'hidden'} ${no === page ? 'cur-page' : ''}`}
					onClick={() => {
						setPage(no);
					}}
				>
					{no}
				</div>
			))}
			<div
				className={`next`}
				onClick={() => {
					setPage(page + 1);
				}}
			>
				{'>'}
			</div>
			<div
				className={`last`}
				onClick={() => {
					setPage(lastPage);
				}}
			>
				{'>>'}
			</div>
		</div>
	);
};

export default Pagination;
