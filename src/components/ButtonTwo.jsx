import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ButtonTwo = (props) => {
	return (
		<NavLink to={props.silki} >
			<div className={`w-[258px] h-[82px] ${props.color} shadow-xxA border ${props.colorborder} rounded-[40px] ${props.colortxt} flex justify-center items-center text-[24px] ${props.opacity}`} >{props.text}</div>
		</NavLink>
	)
}

export default ButtonTwo;

ButtonTwo.defaultProps = { opacity: 'opacity-0' }
ButtonTwo.defaultProps = { color: 'bg-Jerry' }
ButtonTwo.defaultProps = { colortxt: 'text-Melody' }
ButtonTwo.defaultProps = { colorborder: 'border-Melody' }
