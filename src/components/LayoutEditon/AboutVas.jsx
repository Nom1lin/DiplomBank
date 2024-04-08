import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { IoIosSearch, IoMdMail } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import { FaRegUserCircle, FaTasks } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BsFillTelephoneFill, BsListTask } from "react-icons/bs";

import Ramki from '../Ramki'
import Nalogi from '../../img/Manage money-bro.png'
import JKH from '../../img/Stress-amico.png'

import { useDispatch } from 'react-redux'
import { logout } from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'


const AboutVas = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is2Open, set2Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	const dispatch = useDispatch()

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
		<div> {/* About VAS */}
			<nav className="w-[76px] h-[76px] bg-Kuromi flex justify-center items-center text-[30px]  " onClick={() => setOpen(!isOpen)}>А</nav>  {/* кнопка профиля */}
			<div className={'absolute bg-Melody rounded-[20px] p-[23px] ml-[-628px] mt-[-76px] w-[705px] h-[1000px] ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
				<div className='flex justify-between'> {/* Первый уровнь */}
					<div className=""><div className="w-[250px] h-[250px] rounded-full bg-Kuromi "></div><span className='flex justify-center pt-[10px] text-[20px]'>9 999 999 P</span></div> {/* Фото профиля */}
					<div className="flex justify-between pt-[5px]"> {/* Данные профиля */}
						<ul className="">
							<li className="text-[20px] pb-[10px]">Ваше ФИО:</li>
							<li className='pb-[10px] text-Jerry/70 flex'><BsFillTelephoneFill className='mr-2 mt-[2px]' size='20px' /><span>Телефон:</span></li>
							<li className='pb-[10px] text-Jerry/70 flex'><IoMdMail className='mr-2 mt-[2px]' size='20px' /><span>Эл. почта:</span></li>
							<li className='pb-[63px] text-Jerry/70 flex'><BsListTask className='mr-2 mt-[2px]' size='20px' /><span>Реквизиты:</span></li>
							<li className='pb-[10px] text-Jerry/70 flex'><MdOutlineIncompleteCircle className='mr-2 mt-[2px]' size='20px' /><span>Анализ расходов</span></li>
							<li className='pb-[10px] text-Jerry/70 flex'><FaTasks className='mr-2 mt-[2px]' size='20px' /><span>Условия обслуживания</span></li>
							<li className='pb-[10px] text-Jerry/70 flex'><FaRegUserCircle className='mr-2 mt-[2px]' size='20px' /><span>ГосУслуги</span></li>
						</ul>
						<ul className="">
							<li className="text-[20px] pb-[10px]">Сардак А. А.</li>
							<li className='pb-[10px] text-Jerry/70'>+7 978 504-65-69</li>
							<li className='pb-[12px] text-Jerry/70'>dron.lapshev@mail.ru</li>
							<li className='pb-[3px] text-[13px] text-Jerry/70'>ИНН: 54353453453</li>
							<li className='pb-[3px] text-[13px] text-Jerry/70'>ИНН: 43556454268</li>
							<li className='pb-[3px] text-[13px] text-Jerry/70'>СЧ: 4535 546 8 7655 766578</li>
						</ul>
					</div>
				</div>
				<div className="mt-[30px] flex">  {/* Первая карта */}
					<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center ">Карта</div>
					<ul className="ml-[23px] mt-[15px]">
						<li >2200 0444 7492 4212</li>
						<li className=" mt-1 text-[13px] text-Jerry/70">9 999 999 P</li>
					</ul>
				</div>
				<div className="bg-Tom/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}

				<div className="flex">  {/* Вторая карта */}
					<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center ">Карта</div>
					<ul className="ml-[23px] mt-[15px]">
						<li >2200 0525 2346 8633</li>
						<li className=" mt-1 text-[13px] text-Jerry/70">9 999 999 P</li>
					</ul>
				</div>
				<div className="bg-Tom/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}

				<div className="flex" onClick={() => set2Open(!is2Open)}>  {/* Третья карта */}
					<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center "><GoPlusCircle size='40px' /></div>
					<span className="ml-[23px] mt-[15px] text-Jerry/80">Добавить карту</span>
				</div>
				<ul className={'absolute bg-Jerry border border-Melody rounded-[20px] w-[705px] h-[408px] ml-[-23px] p-[24px] ' + `menu ${is2Open ? "active" : ""}`} ref={menuRef}> {/* список */}
					<li className='w-[659px] h-[51px] bg-Melody shadow-xxB flex justify-between items-center'>
						<span className="ml-[20px] text-Jerry/70">Введите название банка</span>
						<IoIosSearch size='24px' className="mr-[20px] text-Jerry/70" />
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

				<div className="flex justify-between mt-[30px]">
					<Ramki text='Оплата ЖКХ' img={Nalogi} w='w-[320px]' h='h-[246px]' wi='w-[167px]' hi='h-[167px]' px='px-[76px]' pt='pt-[16px]' />
					<Ramki text='Налоги и штрафы' img={JKH} w='w-[320px]' h='h-[246px]' wi='w-[167px]' hi='h-[167px]' px='px-[76px]' pt='pt-[16px]' />
				</div>
				<button onClick={logoutHandler} className='w-[705px] h-[53px] bg-[#ED7D7D] rounded-b-[20px] ml-[-23px] mt-[10px] flex justify-center items-center text-[24px] text-Tom'>Выйти</button>
			</div>
		</div>
	)
}

export default AboutVas;