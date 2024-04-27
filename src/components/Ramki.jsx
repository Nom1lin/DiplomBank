import React from 'react'

const Ramki = (props) => {
	return (
		<div className={`p-[20px] ${props.px} shadow-xxA bg-Tom text-Tom rounded-[40px] ${props.w} ${props.h} 2xl:block ${props.hidden} `}>
			<img className={`${props.wi} ${props.hi}`} src={props.img} alt="" />
			<span className={`flex justify-center text-Melody ${props.pt}`}>{props.text}</span>
		</div>
	)
}

export default Ramki
