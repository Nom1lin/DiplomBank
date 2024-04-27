import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { deleteCredit } from '../../redux/features/credits/creditSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Credit = ({ credit }) => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	const dispatch = useDispatch();
	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})
	const handleDelete = (creditId) => {
		dispatch(deleteCredit(creditId));
		toast('Кредит отклонен.');
	}
	const handleDobro = () => {
		toast('Кредит одобрен.');
		setOpen(false);
	}
	if (!credit) {
		return (
			<div className='text-xl text-center text-white py-10'>
				Загрузка...
			</div>
		)
	}

	return (
		<div className="w-[100%] p-[30px] text-Melody bg-Tom shadow-xxA mb-[25px]">
			<h1 className="text-[24px]">{credit.vid}</h1>
			<div className="bg-Melody p-[1px] my-[13px]" /> {/* Разделяющая линия */}
			<div className='flex justify-between 2xl:w-[800px] sm:w-[100%] mb-[14px] text-Melody/70'>
				<h1>ФИО: {credit.value22}</h1>
				<h1>Сумма: {credit.value11} рублей</h1>
			</div>
			<div className='flex justify-between w-[800px] mb-[14px] text-Melody/70'>
				<h1>Телефон: {credit.value14}</h1>
				<h1>Срок: {credit.value21}</h1>
			</div>
			<h1 className='flex justify-end' onClick={() => setOpen(!isOpen)}>
				{isOpen ? "Скрыть" : "Раскрыть"}
			</h1>
			<ul className={'absolute bg-Tom px-[30px] pb-[30px] w-[93%] ml-[-30px] ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
				<h1 className='text-Melody/70 mb-2'>Логин клиента: {credit.client}</h1>
				<h1 className='text-Melody/70 mb-2'>Цель крелита: {credit.value12}</h1>
				<h1 className='text-Melody/70 mb-2'>Паспортные данные: {credit.value13}</h1>
				<h1 className='text-Melody/70 mb-2'>Электронная почта: {credit.value24}</h1>
				<h1 className='text-Melody/70 mb-2'>Дата рождения: {credit.value23}</h1>
				<h1 className='text-Melody/70 mb-2'>СНИЛС и ИНН:  {credit.value15}</h1>
				<h1 className='text-Melody/70 mb-2'>Номер военного билета: {credit.value25}</h1>
				<h1 className='text-Melody/70 mb-2'>Стаж работы на последнем месте: {credit.value16}</h1>
				<h1 className='text-Melody/70 mb-2'>Название вашей работы: {credit.value26}</h1>
				<h1 className='text-Melody/70'>Время подачи заявки: {credit.DateTime}</h1>
				<div className='flex'>
					<button className='bg-Melody w-[158px] h-[42px] text-Jerry rounded-[40px] shadow-xxB mt-[20px] mr-[30px]' onClick={() => handleDelete(credit._id)}>Отклонить</button>
					<button className='bg-Melody w-[158px] h-[42px] text-Jerry rounded-[40px] shadow-xxB mt-[20px]' onClick={() => handleDobro()}>Одобрить</button>
				</div>

			</ul>
		</div>
	)
}

export default Credit