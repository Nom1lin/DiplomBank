import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Link, NavLink } from 'react-router-dom'

import PopUp from './PopUp'
import AboutVas from './AboutVas'


export const Navbar = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)

	})

	return (
		<header className='flex max-w-[1420px] h-[76px] justify-between '> {/* тело */}
			<NavLink to={'/'} className='w-[158px] h-[76px] bg-Kuromi text-[24px] flex justify-center items-center'>Logo</NavLink> {/* лого */}

			<ul className='flex items-center '> {/* менюшка хедер */}
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
					<NavLink to={'/karta'} className='text-[16px] mr-[70px]'>Офисы и банкоматы</NavLink>
				</li>

				<li>
					<ul className='text-[16px]  mr-[30px]'> {/* Подриси профиля профиля */}
						<li className=''>Сардак А. А.</li>
						<li className='pt-1'>счёт: 9 999 999 Р</li>
					</ul>
				</li>

				<AboutVas/> {/* About VAS */}
			</ul>
		</header>
	)
}
