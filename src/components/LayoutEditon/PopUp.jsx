import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Link, NavLink } from 'react-router-dom'

const PopUp = (props) => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})

	return (
		<li>
			<nav className='text-[16px]  pr-[35px]' onClick={() => setOpen(!isOpen)}>{props.spisok}</nav> {/* Список */}
			<ul className={'absolute bg-Jerry rounded-[20px] p-[20px] mt-2 ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
				<li className='text-[24px] font-medium pb-[16px] text-Melody'>{props.heading}</li>
				<li className={`text-[16px] pb-[10px] text-Melody`}><NavLink to={props.silki[0]}>{props.body[0]}</NavLink> </li>
				<li className={`text-[16px] ${props.style2} ${props.style} ${props.style3} text-Melody`}><NavLink to={props.silki[1]}>{props.body[1]}</NavLink></li>
				<li className={`text-[16px] ${props.style2} ${props.style} ${props.style3}  text-Melody`}><NavLink to={props.silki[2]}>{props.body[2]}</NavLink></li>
				<li className={`text-[16px] ${props.style} ${props.style3}  text-Melody`}><NavLink to={props.silki[3]}>{props.body[3]}</NavLink></li>
				<li className={`text-[16px] ${props.style} text-Melody`}><NavLink to={props.silki[4]}>{props.body[4]}</NavLink></li>
				<li className={`text-[16px] text-Melody`}><NavLink to={props.silki[5]}>{props.body[5]}</NavLink></li>
				<li className='text-[9px] pt-[10px] text-[#007CC1]'><NavLink to={'/questions'}>Часто задаваемые вопросы по кредитам?</NavLink></li>
			</ul>
		</li>
	)
}

export default PopUp;

