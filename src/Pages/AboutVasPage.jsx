import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useClickOutside } from '../hooks/useClickOutside'
import { IoIosSearch, IoMdMail, IoIosExit } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { FaRegUserCircle, FaTasks } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BsFillTelephoneFill, BsListTask } from "react-icons/bs";

import { checkIsAuth } from '../redux/features/auth/authSlice'

import Ramki from '../components/Ramki'
import Nalogi from '../img/Manage money-bro.png'
import JKH from '../img/Stress-amico.png'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const AboutVasPage = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is2Open, set2Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	const dispatch = useDispatch()

	const admin = useSelector(state => state.auth.user?.admin ?? 'false');// Получение фамилии из хранилища Redux

	const username = useSelector(state => state.auth.user?.username ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const fio = useSelector(state => state.auth.user?.fio ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const birth = useSelector(state => state.auth.user?.birth ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const telephone = useSelector(state => state.auth.user?.telephone ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const email = useSelector(state => state.auth.user?.email ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const passport = useSelector(state => state.auth.user?.passport ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const snils = useSelector(state => state.auth.user?.snils ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const inn = useSelector(state => state.auth.user?.inn ?? 'Нет данных');// Получение фамилии из хранилища Redux
	const trudbook = useSelector(state => state.auth.user?.trudbook ?? 'Нет данных');// Получение фамилии из хранилища Redux

	const test = useSelector(state => state.auth.user?.vklads[0]?.summa ?? 'Нет данных');// Получение фамилии из хранилища Redux

	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
		if (is2Open) setTimeout(() => set2Open(false), 50)
	})
	const logoutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
		toast('Вы вышли из системы')
	}

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
						<NavLink to={'/'}>
							<button onClick={logoutHandler} className='text-[#ED7D7D]/70 flex'>
								<IoIosExit className='mr-2 mt-[2px]' size='20px' />
								<span>Выйти</span>
							</button>
						</NavLink>


						{ admin === 'да' && (
							<NavLink to={'/admincredit'} className='text-Kuromi/70 mt-[15px]'>Админ панель</NavLink>
						)}


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
						<div className="mt-[20px] flex">  {/* Первая карта */}
							<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center ">Карта</div>
							<ul className="ml-[23px] mt-[15px]">
								<li >2200 0444 7492 4212</li>
								<li className=" mt-1 text-[13px] text-Melody/70">9 999 999 P</li>
							</ul>
						</div>
						<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}

						<div className="flex">  {/* Вторая карта */}
							<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center ">Карта</div>
							<ul className="ml-[23px] mt-[15px]">
								<li >2200 0525 2346 8633</li>
								<li className=" mt-1 text-[13px] text-Melody/70">9 999 999 P</li>
							</ul>
						</div>
						<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}

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
				<div className='text-Melody rounded-[40px] bg-Jerry w-[680px] p-[30px] mt-[40px] shadow-xxA'> {/* Раздел ваших кредитов */}
					<h1 className='font-medium text-[20px]'>Ваши кредиты</h1>
					<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
					<div className='pr-[30px]'>
						<h1 className='text-[20px] text-Melody/80 font-medium pb-[20px] '>Кредит на любые цели</h1>
						<div className='flex justify-between text-Melody/80 text-[13px] '>
							<div className='flex justify-between w-[250px]'>
								<ul>
									<li className='pb-[5px]'>Сумма кредита: </li>
									<li className='pb-[5px]'>Срок кредитa: </li>
								</ul>
								<ul>
									<li className='pb-[5px]'>100000 Р</li>
									<li className='pb-[5px]'>12 месяцев</li>
								</ul>
							</div>
							<div className='flex justify-between w-[250px]'>
								<ul>
									<li className='pb-[5px]'>Ежемесячный взнос: </li>
									<li className='pb-[5px]'>Дата взятия кредита: </li>
								</ul>
								<ul>
									<li className='pb-[5px]'>4000 Р</li>
									<li className='pb-[5px]'>27082005</li>
								</ul>
							</div>
						</div>

					</div>
					<h1 className='flex justify-center mt-[20px]'>У вас нет кредитов</h1>
				</div>

				<div className='text-Melody rounded-[40px] bg-Jerry w-[680px] p-[30px] mt-[30px] shadow-xxA'> {/* Раздел ваших вкладов */}
					<h1 className='font-medium text-[20px]'>Ваши вклады</h1>
					<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
					<div className='pr-[30px]'>
						<h1 className='text-[20px] text-Melody/80 font-medium pb-[20px] '>Вклад "Доходный"</h1>
						<div className='flex justify-between text-Melody/80 text-[13px] '>
							<div className='flex justify-between w-[250px]'>
								<ul>
									<li className='pb-[5px]'>Первоначальный взнос: </li>
									<li className='pb-[5px]'>Срок взноса: </li>
								</ul>
								<ul>
									<li className='pb-[5px]'>{test}</li>
									<li className='pb-[5px]'>12 месяцев</li>
								</ul>
							</div>
							<div className='flex justify-between w-[250px]'>
								<ul>
									<li className='pb-[5px]'>Сумма в конце дохода:</li>
									<li className='pb-[5px]'>Дата начала вклада: </li>
								</ul>
								<ul>
									<li className='pb-[5px]'>104000 Р</li>
									<li className='pb-[5px]'>27082005</li>
								</ul>
							</div>
						</div>
					</div>
					<h1 className='flex justify-center mt-[20px]'>У вас нет вкладов</h1>
				</div>
			</div>

			<div className="flex justify-between">
				<div className='text-Melody rounded-[40px] bg-Tom w-[680px] p-[30px] mt-[30px] shadow-xxA'> {/* Раздел ваших вкладов */}
					<h1 className='font-medium text-[20px]'>Ваши страхования</h1>
					<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
					<div className=''>
						<h1 className='text-[20px] text-Melody/80 font-medium pb-[20px] '>Страхование от несчастных случаев: Тариф 1</h1>
						<div className='flex justify-between text-Melody/80 text-[13px] '>
							<div className='flex justify-between w-[250px]'>
								<h1 className='pb-[5px]'>Первоначальный взнос: </h1>
								<h1 className='pb-[5px]'>100000 Р</h1>
							</div>
							<div className='flex justify-between w-[250px]'>
								<h1 className='pb-[5px]'>Дата начала вклада: </h1>
								<h1 className='pb-[5px]'>27082005</h1>
							</div>

						</div>
					</div>
					<h1 className='flex justify-center mt-[20px]'>У вас нет страхований</h1>
				</div>
				<div className="flex justify-between mt-[30px] w-[680px]"> {/* Раздел показа не работающих услуг */}
					<Ramki text='Оплата ЖКХ' img={Nalogi} w='w-[320px]' h='h-[246px]' wi='w-[167px]' hi='h-[167px]' px='px-[76px]' pt='pt-[16px]' />
					<Ramki text='Налоги и штрафы' img={JKH} w='w-[320px]' h='h-[246px]' wi='w-[167px]' hi='h-[167px]' px='px-[76px]' pt='pt-[16px]' />
				</div>
			</div>


		</>
	)
}
