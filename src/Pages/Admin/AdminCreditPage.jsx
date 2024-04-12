import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { NavLink } from 'react-router-dom'

import Face from '../../components/Face'
import Zaiavki from '../../components/Zaiavki'
import Gaid from '../../components/Gaid'

import Logo from '../../img/Main/PngMain.png'

export const AdminCreditPage = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is2Open, set2Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
		if (is2Open) setTimeout(() => set2Open(false), 50)
	})

	return (
		<>
			<Face main='Административная панель.'
				body='На этой страничке вы сможете просматривать заявки на кредит, открывать вклады и создавать карты. '
				img={Logo}
				opacity='opacity-0'
				opacity1='opacity-0'
				button='Войти'
			/>

			<div className="mt-[100px] flex justify-evenly text-Melody text-[20px]">
				<NavLink to={'/admincredit'}>Кредиты </NavLink>
				<NavLink to={'/admincart'}>Вклады и карты</NavLink>
			</div>

			<div className="bg-Melody p-[1px] my-[13px] mt-[20px]" /> {/* Разделяющая линия */}

			<Zaiavki maintext='Онлайн заявка на кредит'
				inputopacity=' mb-[-300px] opacity-0' inputopacityPlan2=' mb-[130px] opacity-1'
				input11='Сумма кредита' input21='Срок кредита'
				input12='Цели кредита' input22='ФИО'
				input13='Паспортные данные' input23='Дата рождения'
				input14='СНИЛС И ИНН' input24='Трудовая книжка'
				input15='Мобильный телефон' input25='Электронная почта'
				miniPravila11='от 30 000 до 6 000 000 рублей' miniPravila21='от 2 до 73 месяцев'

				inputmin1='30000' inputmin2='2'
				inputmax1='6000000' inputmax2='33'
				vid='Кредит на любые цели'
			/>

			<Gaid maintext='Как работать?'
				text01='Выберите заявку'
				text02='Выберите, что будете делать с заявкой? (Одобрить, Отклонить, Создать)'
				text03='Позвонить'
			/> {/* Раздел Как получить кредит */}

			<div className="mt-[100px] text-[16px]">
				<h1 className='text-Melody text-[48px] mb-[40px]'>Заявки на кредит</h1>

				<div className="w-[1420px] p-[30px] text-Melody bg-Tom shadow-xxA mb-[25px]">
					<h1 className="text-[24px]">Кредиты наличными</h1>
					<div className="bg-Melody p-[1px] my-[13px]" /> {/* Разделяющая линия */}
					<div className='flex justify-between w-[800px] mb-[14px] text-Melody/70'>
						<h1>ФИО: Сардак Андрей Андреевич</h1>
						<h1>Сумма: 100000 Р</h1>
					</div>
					<div className='flex justify-between w-[800px] mb-[14px] text-Melody/70'>
						<h1>Телефон: +7 978 504-65-69</h1>
						<h1>Срок: 12 месяцев</h1>
					</div>
					<h1 className='ml-[1276px]' onClick={() => setOpen(!isOpen)}>Раскрыть</h1>
					<ul className={'absolute bg-Tom px-[30px] pb-[30px] w-[1420px] ml-[-30px] text-[16px] ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Цель крелита: Покупка телевизора</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Паспортные данные: +7 978 504-65-69</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Дата рождения: 27.08.2005</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>СНИЛС и ИНН:  435435345345345 34435345345</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Трудовая книжка: 3434223423424</h1>
						<h1 className='text-Melody/70 text-[16px]'>Электронная почта: andrey.sardak.005@mail.ru</h1>
					</ul>
				</div>

				<div className="w-[1420px] p-[30px] text-Melody bg-Tom shadow-xxA mb-[25px]">
					<h1 className="text-[24px]">Кредиты наличными</h1>
					<div className="bg-Melody p-[1px] my-[13px]" /> {/* Разделяющая линия */}
					<div className='flex justify-between w-[800px] mb-[14px] text-Melody/70'>
						<h1>ФИО: Сардак Андрей Андреевич</h1>
						<h1>Сумма: 100000 Р</h1>
					</div>
					<div className='flex justify-between w-[800px] mb-[14px] text-Melody/70'>
						<h1>Телефон: +7 978 504-65-69</h1>
						<h1>Срок: 12 месяцев</h1>
					</div>
					<h1 className='ml-[1276px]' onClick={() => set2Open(!is2Open)}>Раскрыть</h1>
					<ul className={'absolute bg-Tom px-[30px] pb-[30px] w-[1420px] ml-[-30px] text-[16px] ' + `menu ${is2Open ? "active" : ""}`} ref={menuRef}> {/* список */}
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Цель крелита: Покупка телевизора</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Паспортные данные: +7 978 504-65-69</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Дата рождения: 27.08.2005</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>СНИЛС и ИНН:  435435345345345 34435345345</h1>
						<h1 className='text-Melody/70 mb-2 text-[16px]'>Трудовая книжка: 3434223423424</h1>
						<h1 className='text-Melody/70 text-[16px]'>Электронная почта: andrey.sardak.005@mail.ru</h1>
					</ul>
				</div>

			</div>



		</>
	)
}
