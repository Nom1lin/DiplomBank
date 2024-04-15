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

			<div className="mt-[100px] flex justify-evenly text-Melody text-[20px]">
				<NavLink to={'/admincredit'}>Кредиты </NavLink>
				<NavLink to={'/admincart'}>Вклады и карты</NavLink>
			</div>

			<div className="bg-Melody p-[1px] my-[13px] mt-[20px]" /> {/* Разделяющая линия */}

			<ZaiavkiAdmin maintext='Онлайн заявка на кредит'
				inputopacity=' mb-[-300px] opacity-0' inputopacityPlan2=' mb-[130px] opacity-1'
				input11='Сумма кредита' input21='Срок кредита'
				input12='Цели кредита' input22='ФИО'
				input13='Паспортные данные' input23='Дата рождения'
				input14='СНИЛС И ИНН' input24='Трудовая книжка'
				input15='Мобильный телефон' input25='Электронная почта'
				miniPravila11='от 0 до 6 000 000 рублей' miniPravila21='от 0 до 100 месяцев'

				inputmin1='0' inputmin2='1'
				inputmax1='6000000' inputmax2='100'
				vid='Кредит на любые цели'
			/>

			<Gaid maintext='Как работать?'
				text01='Выберите заявку'
				text02='Выберите, что будете делать с заявкой? (Одобрить, Отклонить, Создать)'
				text03='Позвонить'
			/> {/* Раздел Как получить кредит */}

			<div className="mt-[100px] text-[16px]">
				<h1 className='text-Melody text-[40px] mb-[40px]'>Заявки на кредит</h1>
				{
					credits?.map((credit, idx) => (
					<Credit key={idx} credit={credit} />
				))}
			</div>
		</>
	)
}
