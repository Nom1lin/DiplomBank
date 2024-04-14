import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useClickOutside } from '../hooks/useClickOutside'
import { IoIosSearch, IoMdMail, IoIosExit } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { FaRegUserCircle, FaTasks } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BsFillTelephoneFill, BsListTask } from "react-icons/bs";

import Ramki from '../components/Ramki'
import MyCredit from '../components/GetAll/MyCredit'
import MyCart from '../components/GetAll/MyCart'
import MyVklad from '../components/GetAll/MyVklad'
import MyStrahovanie from '../components/GetAll/MyStrahovanie'
import Nalogi from '../img/Manage money-bro.png'
import JKH from '../img/Stress-amico.png'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import axios from '../utils/axios';

export const AboutVasPage = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is2Open, set2Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	const dispatch = useDispatch()

	///
	const [credits, SetCredits] = useState([])
	const [carts, SetCarts] = useState([])
	const [vklads, SetVklads] = useState([])
	const [strahovanies, SetStrahovanies] = useState([])

	const admin = useSelector(state => state.auth.user?.admin ?? 'false');// Получение фамилии из хранилища Redux
	const username = useSelector(state => state.auth.user?.username ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const fio = useSelector(state => state.auth.user?.fio ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const birth = useSelector(state => state.auth.user?.birth ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const telephone = useSelector(state => state.auth.user?.telephone ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const email = useSelector(state => state.auth.user?.email ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const passport = useSelector(state => state.auth.user?.passport ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const snils = useSelector(state => state.auth.user?.snils ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const inn = useSelector(state => state.auth.user?.inn ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const trudbook = useSelector(state => state.auth.user?.trudbook ?? 'Нет данных')// Получение фамилии из хранилища Redux


	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
		if (is2Open) setTimeout(() => set2Open(false), 50)
	})
	const logoutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
		toast('Вы вышли из системы')
	}

	///
	const fetchMyCredits = async () => {
		try {
			const { data } = await axios.get('/credit/user/me')
			SetCredits(data)
		} catch (error) { console.log(error) }
	}
	const fetchMyCarts = async () => {
		try {
			const { data } = await axios.get('/cart/user/me')
			SetCarts(data)
		} catch (error) { console.log(error) }
	}
	const fetchMyVklads = async () => {
		try {
			const { data } = await axios.get('/vklad/user/me')
			SetVklads(data)
		} catch (error) { console.log(error) }
	}
	const fetchMyStrahovanies = async () => {
		try {
			const { data } = await axios.get('/strahovanie/user/me')
			SetStrahovanies(data)
		} catch (error) { console.log(error) }
	}

	///
	useEffect(() => {
		fetchMyCredits()
		fetchMyCarts()
		fetchMyVklads()
		fetchMyStrahovanies()
	}, [])

	return (
		<>
			<div className='flex justify-between'>  {/* About VAS */}
				<div className="flex justify-between w-[500px] text-Melody mt-[110px] bg-Jerry rounded-[40px] p-[30px]"> {/* Данные профиля */}
					<ul className="">
						<li className="text-[20px] pb-[10px]">Ваше ФИО:</li>
						<li className='pb-[10px] text-Melody/70 flex'><BsFillTelephoneFill className='mr-2 mt-[2px]' size='20px' /><span>Телефон:</span></li>
						<li className='pb-[10px] text-Melody/70 flex'><IoMdMail className='mr-2 mt-[2px]' size='20px' /><span>Эл. почта:</span></li>
						<nav className='text-Melody/70 flex cursor-pointer text-[16px]' onClick={() => setOpen(!isOpen)}><BsListTask className='mr-2 mt-[2px]' size='20px' />Еще данные...</nav>
						<ul className={'absolute bg-Tom rounded-[20px] p-[20px] mt-2 flex justify-between w-[430px] ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}>
							<ul className=''>
								<li className='text-Melody pb-[5px]'>Логин:</li>
								<li className='text-Melody pb-[5px]'>Дата рождения:</li>
								<li className='text-Melody pb-[5px]'>Пасспортные данные:</li>
								<li className='text-Melody pb-[5px]'>СНИЛС:</li>
								<li className='text-Melody pb-[5px]'>ИНН:</li>
								<li className='text-Melody pb-[5px]'>Трудовая книга:</li>
							</ul>
							<ul>
								<li className='text-Melody pb-[5px]'>{username}</li>
								<li className='text-Melody pb-[5px]'>{birth}</li>
								<li className='text-Melody pb-[5px]'>{passport}</li>
								<li className='text-Melody pb-[5px]'>{snils}</li>
								<li className='text-Melody pb-[5px]'>{inn}</li>
								<li className='text-Melody pb-[5px]'>{trudbook}</li>
							</ul>
						</ul>

						<li className='pb-[10px] pt-[60px] text-Melody/70 flex'><MdOutlineIncompleteCircle className='mr-2 mt-[2px]' size='20px' /><span>Анализ расходов</span></li>
						<li className='pb-[15px] text-Melody/70 flex'><FaTasks className='mr-2 mt-[2px]' size='20px' /><span>Условия обслуживания</span></li>
						<li className='pb-[15px] text-Melody/70 flex'><FaRegUserCircle className='mr-2 mt-[2px]' size='20px' /><span>ГосУслуги</span></li>
						<div className='flex '>
							<NavLink to={'/'}>
								<button onClick={logoutHandler} className='text-[#ED7D7D]/70 flex'>
									<IoIosExit className='mr-2 mt-[2px]' size='20px' />
									<span>Выйти</span>
								</button>
							</NavLink>
							{admin === 'да' && (
								<NavLink to={'/admincredit'} className='text-Kuromi/70 ml-[35px]'>Админ панель</NavLink>
							)}
						</div>


					</ul>
					<ul className="">
						<li className="text-[20px] pb-[10px]">{fio}</li> {/* Место для отображение фамилии */}
						<li className='pb-[10px] text-Melody/70'>{telephone}</li>
						<li className='pb-[12px] text-Melody/70'>{email}</li>
					</ul>
				</div >

				<div className="w-[860px] text-Melody mt-[110px] bg-Jerry rounded-[40px] p-[30px]">
					<h1 className='text-[20px]'>Ваши карты</h1>
					<div className="bg-Melody/80 p-[0.5px] my-[13px]" />
					<div> {/* Раздел вывода данных о карте */}
						{carts?.map((cart, idx) => (
							<MyCart key={1} cart={cart} />
						))}
						<div className="flex" onClick={() => set2Open(!is2Open)}>  {/* Третья карта */}
							<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center "><GoPlusCircle size='40px' /></div>
							<span className="ml-[23px] mt-[15px] text-Melody/80">Добавить карту</span>
						</div>
						<ul className={'absolute bg-Jerry border border-Melody rounded-[20px] w-[705px]  ml-[-23px] p-[24px] ' + `menu ${is2Open ? "active" : ""}`} ref={menuRef}> {/* список */}
							<li >
								<input className='w-[659px] h-[51px] bg-Melody shadow-xxB flex justify-between items-center text-Jerry pl-[30px]'
									type="text" placeholder={`Введите название банка `} />
								<IoIosSearch size='24px' className="mt-[-35px] mb-[25px] ml-[610px] text-Jerry/70" />
							</li>
							<div className="flex mt-[13px]">  {/* Первая карта */}
								<div className="w-[150px] h-[84px] bg-Melody text-Jerry flex justify-center items-center ">Карта</div>
								<span className="ml-[23px] mt-[15px] text-Melody">Wildberries Bank (Вайлдберис)</span>
							</div>
							<div className="bg-Tom/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
							<div className="flex mt-[13px]">  {/* Вторая карта */}
								<div className="w-[150px] h-[84px] bg-Melody text-Jerry flex justify-center items-center ">Карта</div>
								<span className="ml-[23px] mt-[15px] text-Melody">Avito Bank (Авито)</span>
							</div>
							<div className="bg-Tom/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
							<div className="flex mt-[13px]">  {/* Третья карта */}
								<div className="w-[150px] h-[84px] bg-Melody text-Jerry flex justify-center items-center ">Карта</div>
								<span className="ml-[23px] mt-[15px] text-Melody">Ozon Bank (Озон)</span>
							</div>
						</ul>

					</div>
				</div>
			</div >

			<div className='flex justify-between'>
				<div className='text-Melody rounded-[40px] bg-Jerry w-[680px] p-[30px] mt-[30px] shadow-xxA border border-Melody'> {/* Раздел ваших кредитов */}
					<h1 className='font-medium text-[20px]'>Ваши кредиты</h1>
					<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
					{credits?.map((credit, idx) => (
						<MyCredit key={idx} credit={credit} />
					))}

				</div>

				<div className='text-Melody rounded-[40px] bg-Jerry w-[680px] p-[30px] mt-[30px] shadow-xxA border border-Melody'> {/* Раздел ваших вкладов */}
					<h1 className='font-medium text-[20px]'>Ваши вклады</h1>
					<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
					{vklads?.map((vklad, idx) => (
						<MyVklad key={idx} vklad={vklad} />
					))}

					<h1 className='flex justify-center mt-[20px]'></h1>
				</div>
			</div>

			<div className="flex justify-between">
				<div className='text-Melody rounded-[40px] bg-Tom w-[680px] p-[30px] mt-[30px] shadow-xxA'> {/* Раздел ваших вкладов */}
					<h1 className='font-medium text-[20px]'>Ваши страхования</h1>
					<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}

					{strahovanies?.map((strahovanie, idx) => (
						<MyStrahovanie key={idx} strahovanie={strahovanie} />
					))}

				</div>
				<div className="flex justify-between mt-[30px] w-[680px]"> {/* Раздел показа не работающих услуг */}
					<Ramki text='Оплата ЖКХ' img={Nalogi} w='w-[320px]' h='h-[246px]' wi='w-[167px]' hi='h-[167px]' px='px-[76px]' pt='pt-[16px]' />
					<Ramki text='Налоги и штрафы' img={JKH} w='w-[320px]' h='h-[246px]' wi='w-[167px]' hi='h-[167px]' px='px-[76px]' pt='pt-[16px]' />
				</div>
			</div>


		</>
	)
}
