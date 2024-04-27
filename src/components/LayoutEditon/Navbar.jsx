import React, { useState, useRef, useEffect } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { checkIsAuth, logout } from '../../redux/features/auth/authSlice'

import Logo from '../../img/Logo.png'
import burger from '../../img/burger.png'
import PopUp from './PopUp'


export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth) // Подриси профиля профиля 
	const dispatch = useDispatch()
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is1Open, set1Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is2Open, set2Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is3Open, set3Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is4Open, set4Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	const fio = useSelector(state => state.auth.user?.fio ?? 'Нет данных');// Получение фамилии из хранилища Redux

	const logoutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
		toast('Вы вышли из системы')
	}

	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
		if (is1Open) setTimeout(() => set1Open(false), 50)
		if (is2Open) setTimeout(() => set2Open(false), 50)
		if (is3Open) setTimeout(() => set3Open(false), 50)
		if (is4Open) setTimeout(() => set4Open(false), 50)
	})

	useEffect(() => {
		const handleScroll = () => {
			const header = document.getElementById('header');
			if (header) {
				if (window.pageYOffset > header.offsetTop) {
					header.classList.add('fixed', 'top-2', 'z-50', 'bg-Melody', '2xl:w-[1410px]', 'sm:w-[610px]', 'flex', 'justify-between', 'rounded-[10px]', 'border', 'border-Jerry');
				} else {
					header.classList.remove('fixed', 'top-2', 'z-50', 'bg-Melody', '2xl:w-[1410px]', 'sm:w-[610px]', 'rounded-[10px]', 'border', 'border-Jerry');
				}
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header id="header" className='flex justify-between p-[5px]'> {/* тело */}
			<NavLink to={'/'}><img src={Logo} alt="картинки нет" className='w-[140px] mt-[3px]' /></NavLink> {/* лого старые настройки: className='w-[158px] h-[76px] bg-Kuromi text-[24px] flex justify-center items-center' */}
			{isAuth && (<ul className='flex items-center mr-[-200px] '> {/* менюшка хедер */}
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
					<NavLink to={'/karta'} className='text-[16px] 2xl:flex sm:hidden'>Офисы и банкоматы</NavLink>
				</li>
			</ul>)}

			<div className=''>
				{isAuth ? <>
					<div className=" 2xl:flex sm:hidden">
						<h1 className='text-[16px] mr-[30px] mt-[25px]'>{fio}</h1>
						<NavLink to='/aboutvas'><div className='text-Jerry flex justify-center items-center mt-[13px] border p-[9px] border-Jerry'>Мой аккаунт</div></NavLink>
					</div>
					<div className='text-Jerry 2xl:hidden sm:flex justify-center items-center mt-[5px] h-[60px] border p-[9px] border-Jerry' onClick={() => setOpen(!isOpen)}>Меню</div>
					<ul className={'absolute  bg-Jerry rounded-l-[20px] p-[20px] r-[0px] text-Melody ml-[-177px] mt-[-60px] ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
						<ul className='w-[200px] '>
							<NavLink className='flex justify-end mb-[20px] text-[#ED7D7D]/70' to={'/'}>
								<button onClick={logoutHandler} >Выйти</button>
							</NavLink>
							<NavLink to='/aboutvas' className='font-semibold'>Ваш профиль</NavLink>
							<div className="bg-Melody/50 p-[1px] my-[13px] " />
							<li className='mb-[7px] ' onClick={() => set1Open(!is1Open)}>Кредиты</li>
							<ul className={'absolute bg-[#202228] rounded-l-[20px] p-[20px] ml-[-245px] mt-[-40px] w-[225px] ' + `menu ${is1Open ? "active" : ""}`} ref={menuRef}>
								<li className='pb-[5px]'><NavLink to='/credit/lunieceli'  >На любые цели</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/credit/avto'  >Автокредит</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/credit/obrazovanie'  >На образование</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/credit/creditcart'  >Кредитная карта</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/credit/ipoteka'  >Ипотека</NavLink></li>
								<li><NavLink to='/credit/business' className='' >На бизнес</NavLink></li>
							</ul>
							<li className='mb-[7px] ' onClick={() => set2Open(!is2Open)}>Карты</li>
							<ul className={'absolute bg-[#202228] rounded-l-[20px] p-[20px] ml-[-245px] mt-[-40px] w-[225px] ' + `menu ${is2Open ? "active" : ""}`} ref={menuRef}>
								<li className='pb-[5px]'><NavLink to='/carts/debetovcart'  >Дебетовая</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/carts/debetovcartzoloto'  >Дебеторвая "Золото"</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/credit/creditcart'  >Кредитная</NavLink></li>
								<li><NavLink to='/carts/virtualiticart' className='' >Виртуальная</NavLink></li>
							</ul>
							<li className='mb-[7px] ' onClick={() => set3Open(!is3Open)} >Вклады</li>
							<ul className={'absolute bg-[#202228] rounded-l-[20px] p-[20px] ml-[-245px] mt-[-40px] w-[225px] ' + `menu ${is3Open ? "active" : ""}`} ref={menuRef}>
								<li className='pb-[5px]'><NavLink to='/vkkad/dohod'  >Доходный</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/vkkad/max'  >Максимальный</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/vkkad/min'  >Минимальный</NavLink></li>
								<li className='pb-[5px]'><NavLink to='/vkkad/sber'  >Сберегательный</NavLink></li>
								<li><NavLink to='/vkkad/universal/' className='' >Универсальный</NavLink></li>
							</ul>
							<li className='mb-[7px] ' onClick={() => set4Open(!is4Open)}>Страхование</li>
							<ul className={'absolute bg-[#202228] rounded-l-[20px] p-[20px] ml-[-245px] mt-[-40px] w-[225px] ' + `menu ${is4Open ? "active" : ""}`} ref={menuRef}>
								<li className='pb-[5px]'><NavLink to='/strahovka/neschastie'  >От несчастных случаев</NavLink></li>
								<li><NavLink to='/strahovka/imusestva' className='' >На имущество</NavLink></li>
							</ul>
							<NavLink to='/karta' className=''>Мы на карте</NavLink>
							<li className='text-[9px] mt-[20px] text-[#007CC1]'><NavLink to={'/questions'}>Часто задаваемые вопросы по кредитам?</NavLink></li>

						</ul>
					</ul>
				</>

					: <NavLink to='/login'><div className='text-Jerry flex justify-center items-center mt-[13px] border p-[9px] border-Jerry'>Войти</div></NavLink>}
			</div>
		</header >
	)
}
