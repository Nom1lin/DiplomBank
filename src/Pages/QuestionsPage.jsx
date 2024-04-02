import React, { useState, useRef } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'
import { Link, NavLink } from 'react-router-dom'

import Face from '../components/Face'
import ButtonOne from '../components/ButtonOne'
import Logo from '../img/Main/PngMain.png'

export const QuestionsPage = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [isOpen2, setOpen2] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [isOpen3, setOpen3] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [isOpen4, setOpen4] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [isOpen5, setOpen5] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
		if (isOpen2) setTimeout(() => setOpen2(false), 50)
		if (isOpen3) setTimeout(() => setOpen3(false), 50)
		if (isOpen4) setTimeout(() => setOpen4(false), 50)
		if (isOpen5) setTimeout(() => setOpen5(false), 50)
	})

	return (
		<>
			<Face main='Ответы на частозадаваемые вопросы'
				body=' '
				img={Logo}
				opacity='opacity-0'
				opacity1='opacity-0'
				button='Войти'
			/>
			<div className='mt-[100px] text-Melody '>
				<span className='text-[32px] '>Вопросы - ответы</span>
				<div className='flex justify-between mt-[10px]'>
					<ul>
						<li className='w-[950px] h-[126px] bg-Tom rounded-[40px] shadow-xxA my-[20px] py-[53px] pl-[32px]' onClick={() => setOpen(!isOpen)}>Как получить кредит?</li>
						<ul className={'absolute bg-Jerry rounded-[20px] border border-Melody p-[20px] mt-[-30px] w-[950px] text-Melody ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
							<li className='text-[24px] font-medium pb-[30px] text-Melody'>Чтобы получить кредит есть ли 2 варианта:</li>
							<li className='pb-[16px] '>1) Можете созвониться с оператором банка по номеру +7 978 505-65-69</li>
							<li className='pb-[16px] '>2) Можете перейти на страницу кредита любого вида в верхней части страницы и отправить онлайн заявку</li>
						</ul>

						<li className='w-[950px] h-[126px] rounded-[40px] shadow-xxB my-[20px] py-[53px] pl-[32px] border border-Melody'  onClick={() => setOpen2(!isOpen2)}>Где получить карту? </li>
						<ul className={'absolute bg-Tom rounded-[20px] border border-Melody p-[20px] mt-[-30px] w-[950px] text-Melody ' + `menu ${isOpen2 ? "active" : ""}`} ref={menuRef}> {/* список */}
							<li className='text-[24px] font-medium text-Melody'>Чтобы получить карту, перейдите по данной<NavLink className='text-[#007CC1]' to='/karta'> ссылке</NavLink> </li>
						</ul>

						<li className='w-[950px] h-[126px] bg-Tom rounded-[40px] shadow-xxA my-[20px] py-[53px] pl-[32px]'  onClick={() => setOpen3(!isOpen3)}>Где мои данные?</li>
						<ul className={'absolute bg-Jerry rounded-[20px] border border-Melody p-[20px] mt-[-30px] w-[950px] text-Melody ' + `menu ${isOpen3 ? "active" : ""}`} ref={menuRef}> {/* список */}
							<li className='text-[24px] font-medium text-Melody'>Все данные об себе вы можете узнать после авторизации на веб-приложение, нажав на кнопку в вверхней-левой части страницы</li>
						</ul>

						<li className='w-[950px] h-[126px] rounded-[40px] shadow-xxB my-[20px] py-[53px] pl-[32px] border border-Melody'  onClick={() => setOpen4(!isOpen4)}>Как открыть вклад?</li>
						<ul className={'absolute bg-Tom rounded-[20px] border border-Melody p-[20px] mt-[-30px] w-[950px] text-Melody ' + `menu ${isOpen4 ? "active" : ""}`} ref={menuRef}> {/* список */}
							<li className='text-[24px] font-mediumtext-Melody'>Чтобы открыть вклад созвонитесь с нашим менеджером +7 978 504-65-69</li>
						</ul>

						<li className='w-[950px] h-[126px] bg-Tom rounded-[40px] shadow-xxA my-[20px] py-[53px] pl-[32px]'  onClick={() => setOpen5(!isOpen5)}>В безопасности ли мои данные?</li>
						<ul className={'absolute bg-Jerry rounded-[20px] border border-Melody p-[20px] mt-[-30px] w-[950px] text-Melody ' + `menu ${isOpen5 ? "active" : ""}`} ref={menuRef}> {/* список */}
							<li className='text-[24px] font-medium text-Melody'>Все вашие данные в безопасности и хранять на защифровоном сервере</li>
						</ul>
					</ul>
					<ul>
						<li className='text-[36px] pt-[90px]'>+7 978 504-65-69</li>
						<li className=''>Бесплатно по Крыму</li>
						<li className='pt-[60px]'><input className='w-[400px] h-[99px] bg-Tom shadow-xxB rounded-[40px] pl-[30px] text-[24px] ' type="text" /></li>
						<li className='pt-[20px] pl-[70px]'><ButtonOne color='bg-Melody' text='Отправить сообщение' /></li>
					</ul>

				</div>
			</div>

		</>
	)
}