import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ButtonOne = (props) => {
	return (
		<NavLink to={props.silki} >
			<div className={`w-[258px] h-[82px] ${props.color} shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px] ${props.mr}`}>{props.text}</div>
		</NavLink>
	)
}

export default ButtonOne;
