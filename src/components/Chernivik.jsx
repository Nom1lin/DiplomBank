import React, { useState } from 'react';

function Chernivik(props) {
	const [date, setDate]=useState(0)
	return (
			<div className="">
				<input type="range" min='0' max='100' step='10' value={date} onChange={(e) => setDate(e.target.value)}/>
				<h2>{date}</h2>
			</div>
	)
}

export default Chernivik;