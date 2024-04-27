import React, { useState, useEffect, useRef } from 'react'
import { RxQuestionMarkCircled } from "react-icons/rx";
import { useClickOutside } from '../hooks/useClickOutside'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask';

export const NalogiPage = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	const [electro, setElectro] = useState('')
	const [voda, setVoda] = useState('')
	const [otoplenie, setOtoplenie] = useState('')
	const [gaz, setGaz] = useState('')
	const [vodootvedenie, setVodootvedenie] = useState('')
	const [dom, setDom] = useState('')
	const summa = parseFloat(electro) + parseFloat(voda) + parseFloat(otoplenie) + parseFloat(gaz) + parseFloat(vodootvedenie) + parseFloat(dom);



	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})
	return (
		<form className='flex justify-center mt-[40px] text-Melody' onSubmit={(e) => e.preventDefault()}>
			<div className='w-[1420px] bg-Tom rounded-[40px] shadow-xxA p-[40px]'>
				<h1 className='text-[34px] mb-[25px] mt-[-10px]'>Оплата ЖКХ</h1>
				<div className='flex justify-between w-[1100px]'>
					<div>
						<h1 className='ml-[30px] mb-[5px]'>ФИО</h1>
						<input className='w-[350px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="text" />
					</div>
					<div>
						<h1 className='ml-[30px] mb-[5px]'>Адресс</h1>
						<input className='w-[350px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="text" />
					</div>
					<div>
						<h1 className='ml-[30px] mb-[5px]'>Период</h1>
						<div className='flex items-center'>
							от<input className='w-[120px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[10px] ml-[5px] mr-[5px]' type="date" />
							до<input className='w-[120px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[10px] ml-[5px] mr-[5px]' type="date" />
						</div>

					</div>
				</div>

				<div className='flex justify-between w-[740px] mt-[20px] ml-[30px]'>
					<div className=''>
						<div className='flex items-center mt-[10px]'>
							<h1 className='mr-[8px]'>Электроэнергия:</h1>
							<input className='w-[130px] h-[30px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] mr-[5px]' type="number" value={electro} onChange={(e) => setElectro(e.target.value)} /> руб.
						</div>
						<div className='flex items-center mt-[10px]'>
							<h1 className='mr-[90px]'>Вода:</h1>
							<input className='w-[130px] h-[30px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] mr-[5px]' type="number" value={voda} onChange={(e) => setVoda(e.target.value)} /> руб.
						</div>
						<div className='flex items-center mt-[10px]'>
							<h1 className='mr-[45px]'>Отопление:</h1>
							<input className='w-[130px] h-[30px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] mr-[5px]' type="number" value={otoplenie} onChange={(e) => setOtoplenie(e.target.value)} /> руб.
						</div>
					</div>
					<div className=''>
						<div className='flex items-center mt-[10px]'>
							<h1 className='mr-[140px]'>Газ</h1>
							<input className='w-[130px] h-[30px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] mr-[5px]' type="number" value={gaz} onChange={(e) => setGaz(e.target.value)} /> руб.
						</div>
						<div className='flex items-center mt-[10px]'>
							<h1 className='mr-[49px]'>Водоотведение</h1>
							<input className='w-[130px] h-[30px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] mr-[5px]' type="number" value={vodootvedenie} onChange={(e) => setVodootvedenie(e.target.value)} /> руб.
						</div>
						<div className='flex items-center mt-[10px]'>
							<h1 className='flex mr-[5px]'>Содержание дома <RxQuestionMarkCircled className='mt-[4px] ml-[3px]' onClick={() => setOpen(!isOpen)} />:</h1>
							<input className='w-[130px] h-[30px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] mr-[5px]' type="number" value={dom} onChange={(e) => setDom(e.target.value)} /> руб.
							<ul className={'absolute bg-Jerry rounded-[20px] p-[20px] mt-[150px] w-[500px] ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}> {/* список */}
								<span>услуги, которые оказывает управляющая компания, например, содержание лифта, уборка, вывоз мусора, взносы на капитальный ремонт и так далее.</span>
							</ul>
						</div>
					</div>
				</div>
				<div className='absolute ml-[865px] mt-[-88px] bg-Jerry p-[15px] shadow-xxB rounded-[40px]'>
					<h1 className=''>Итого: {summa} руб.</h1>
					<h1 className='text-Melody/60 text-[10px] w-[200px]'>Чтобы увидеть итоговую сумму заполните все поля, если нет, то ноль</h1>
				</div>

				<button type='submit' className={`w-[258px] h-[82px] mt-[30px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[20px]`}>Оплатить</button>
				<h1 className='text-Melody/60 text-[10px] w-[240px] ml-[10px]'>При оптате, деньги автоматически списываются с карты на счет ЖКХ.</h1>
			</div>
		</form >
	)
}
