import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Face from '../../components/Face'
import ZaiavkiAdmin from '../../components/VidiZaiavok/ZaiavkiAdmin'
import Credit from '../../components/GetAll/Credit'
import Gaid from '../../components/Gaid'

import Logo from '../../img/Main/PngMain.png'

import { getAllСredits } from '../../redux/features/credits/creditSlice'

export const AdminCreditPage = () => {
	const dispatch = useDispatch();
	const { credits } = useSelector((state) => state.credit)

	useEffect(() => {
		dispatch(getAllСredits())
	}, [dispatch])

	return (
		<>
			<Face main='Административная панель.'
				body='На этой страничке вы сможете просматривать заявки на кредит, открывать вклады и создавать карты. '
				img={Logo}
				opacity='opacity-0'
				opacity1='opacity-0'
				button='Войти'
			/>

			<div className="2xl:mt-[240px] sm:mt-[480px] flex justify-evenly text-Melody text-[20px]">
				<NavLink to={'/admincredit'}>Кредиты </NavLink>
				<NavLink to={'/admincart'}>Вклады и карты</NavLink>
			</div>

			<div className="bg-Melody p-[1px] mb-[-50px] mt-[20px]" /> {/* Разделяющая линия */}

			<ZaiavkiAdmin maintext='Онлайн заявка на кредит'
				input11='Сумма кредита' input21='Срок кредита'
				input12='Цели кредита' input22='ФИО'
				input13='Паспортные данные' input23='Дата рождения'
				input14='Мобильный телефон' input24='Электронная почта'
				input15='СНИЛС И ИНН ' input25='Номер военного билета'
				input16='Стаж работы на последнем месте' input26='Название вашей работы'

				vid='Кредит на любые цели'  stavka='0.156'
				inputmin1='0' inputmin2='1'
				inputmax1='6000000' inputmax2='100'
			/>

			<Gaid maintext='Как работать?'
				text01='Выберите заявку'
				text02='Выберите, что будете делать с заявкой? (Одобрить, Отклонить, Создать)'
				text03='Позвонить'
			/> {/* Раздел Как получить кредит */}

			<div className="mt-[100px] text-[16px]">
				<h1 className='text-Melody 2xl:text-[36px] sm:text-[32px] mb-[40px]'>Заявки на кредит</h1>
				{
					credits?.map((credit, idx) => (
					<Credit key={idx} credit={credit} />
				))}
			</div>
		</>
	)
}
