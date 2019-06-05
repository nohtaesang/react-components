import React, { useState, useEffect } from 'react';
import './pagination.css';

const Pagination = (props) => {
	const { curPage, setCurPage, pageCount, contentLength, contentCount } = props;
	const [ lastPage, setLastPage ] = useState(Math.ceil(contentLength / contentCount));
	const [ pageBtns, setPageBtns ] = useState([]);

	useEffect(
		() => {
			const nextLastPage = Math.ceil(contentLength / contentCount);
			setLastPage(nextLastPage);
		},
		[ contentLength ]
	);

	useEffect(
		() => {
			const nextPageBtns = [];
			for (let i = 0; i < pageCount; i++) {
				nextPageBtns.push(i - parseInt(pageCount / 2) + curPage);
			}
			setPageBtns(nextPageBtns);
		},
		[ curPage ]
	);

	return (
		<div className="kirin-pagination">
			<div
				className={`btn first`}
				onClick={() => {
					setCurPage(1);
				}}
			>
				{'<<'}
			</div>
			<div
				className={`btn prev ${curPage === 1 ? 'hidden' : ''}`}
				onClick={() => {
					setCurPage(curPage - 1);
				}}
			>
				{'<'}
			</div>
			{pageBtns.map((no, i) => (
				<div
					key={no}
					className={`btn page ${no >= 1 && no <= lastPage ? '' : 'hidden'} ${no === curPage
						? 'cur-page'
						: ''}`}
					onClick={() => {
						setCurPage(no);
					}}
				>
					{no}
				</div>
			))}
			<div
				className={`btn next`}
				onClick={() => {
					setCurPage(curPage + 1);
				}}
			>
				{'>'}
			</div>
			<div
				className={`btn last`}
				onClick={() => {
					setCurPage(lastPage);
				}}
			>
				{'>>'}
			</div>
		</div>
	);
};

export default Pagination;
