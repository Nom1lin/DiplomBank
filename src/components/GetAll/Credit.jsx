import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'

const Credit = ({ credit }) => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	
	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})

	if (!credit) {
		return (
			<div className='text-xl text-center text-white py-10'>
				Загрузка...
			</div>
		)
	}

	return (
		<div className="w-[1420px] p-[30px] text-Melody bg-Tom shadow-xxA mb-[25px]">
			<h1 className="text-[24px]">{credit.vid}</h1>
			<div className="bg-Melody p-[1px] my-[13px]" /> {/* Разделяющая линия */}
			<div className='flex justify-between w-[800px] mb-[14px] text-Melody/70'>
				<h1>ФИО: {credit.value22}</h1>
				<h1>Сумма: {credit.value11} рублей</h1>
			</div>
			<div className='flex justify-between w-[800px] mb-[14px] text-Melody/70'>
				<h1>Телефон: {credit.value15}</h1>
				<h1>Срок: {credit.value21}</h1>
			</div>
			<h1 className='ml-[1276px]' onClick={() => setOpen(!isOpen)}>Раскрыть</h1>
			<ul className={'absolute bg-Tom px-[30px] pb-[30px] w-[1420px] ml-[-30px] text-[16px] ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
				<h1 className='text-Melody/70 mb-2 text-[16px]'>Логин клиента: {credit.client}</h1>
				<h1 className='text-Melody/70 mb-2 text-[16px]'>Цель крелита: {credit.value12}</h1>
				<h1 className='text-Melody/70 mb-2 text-[16px]'>Паспортные данные: {credit.value13}</h1>
				<h1 className='text-Melody/70 mb-2 text-[16px]'>Дата рождения: {credit.value23}</h1>
				<h1 className='text-Melody/70 mb-2 text-[16px]'>СНИЛС и ИНН:  {credit.value14}</h1>
				<h1 className='text-Melody/70 mb-2 text-[16px]'>Трудовая книжка: {credit.value24}</h1>
				<h1 className='text-Melody/70 mb-2 text-[16px]'>Электронная почта: {credit.value25}</h1>
				<h1 className='text-Melody/70 text-[16px]'>Время подачи заявки: {credit.DateTime}</h1>
			</ul>
		</div>
	)
}

export default Credit