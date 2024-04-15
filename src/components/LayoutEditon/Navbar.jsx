import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { checkIsAuth } from '../../redux/features/auth/authSlice'

import Logo from '../../img/Logo.png'
import PopUp from './PopUp'


export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth) // Подриси профиля профиля 
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области

	const fio = useSelector(state => state.auth.user?.fio ?? 'Нет данных');// Получение фамилии из хранилища Redux

	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})


	return (
		<header className='flex max-w-[1420px] h-[76px] justify-between '> {/* тело */}
			<NavLink to={'/'}><img src={Logo} alt="картинки нет" className='w-[140px] mt-[-28px]' /></NavLink> {/* лого старые настройки: className='w-[158px] h-[76px] bg-Kuromi text-[24px] flex justify-center items-center' */}
			{isAuth && (<ul className='flex items-center mr-[-200px]'> {/* менюшка хедер */}
				<PopUp spisok='Кредиты'
					heading='Все кредиты'
					style='pb-[10px]'
					style2='pb-[10px]'
					body={['На любые цели', 'Автокредит', 'На образование', 'Кредитная карта', 'Ипотека', 'Кредит для бизнеса']}
					silki={['/credit/lunieceli', '/credit/avto', '/credit/obrazovanie', '/credit/creditcart', '/credit/ipoteka', '/credit/business']} />

				<PopUp spisok='Карты'
					heading='Все карты'
					style2='pb-[10px]'
					body={['Кредитная карта', 'Дебетовая карта', 'Дебетовая карта "Золото"', 'Виртуальная карта']}
					silki={['/credit/creditcart', '/carts/debetovcart', '/carts/debetovcartzoloto', '/carts/virtualiticart']} />

				<PopUp spisok='Вклады'
					heading='Все вклады'
					style3='pb-[10px]'
					body={['Вклад Доходный', 'Вклад Максимальный', 'Вклад Минимальный', 'Вклад Сберегательный', 'Вклад Универсальный']}
					silki={['/vkkad/dohod', '/vkkad/max', '/vkkad/min', '/vkkad/sber', '/vkkad/universal']} />

				<PopUp spisok='Страхование'
					heading='Все страхования'
					body={['На несчастные случаи', 'На имущество']}
					silki={['/strahovka/neschastie', '/strahovka/imusestva']} />

				<li>
					<NavLink to={'/karta'} className='text-[16px]'>Офисы и банкоматы</NavLink>
				</li>
			</ul>)
			}

			<div className='flex'>
				{isAuth && (<ul className='text-[16px] mr-[30px] mt-[25px]'> {/* Подриси профиля профиля */}
					<li className=''>{fio}</li>
				</ul>)}
				{isAuth ? <NavLink to='/aboutvas'><div className='text-Jerry flex justify-center items-center mt-[13px] border p-[9px] border-Jerry'>Мой аккаунт</div></NavLink> : <NavLink to='/login'><div className='text-Jerry flex justify-center items-center mt-[13px] border p-[9px] border-Jerry'>Войти</div></NavLink>}
			</div>

		</header>
	)
}
