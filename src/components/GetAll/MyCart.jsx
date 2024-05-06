import React, { useState, useRef } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { deleteCart } from '../../redux/features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FaCircleArrowRight } from "react-icons/fa6";
import InputMask from 'react-input-mask';

const MyCart = ({ cart }) => {
	const dispatch = useDispatch();
	const [balans, setBalans] = useState('')
	const [cartName, setCartName] = useState('')
	const [bal, setBal] = useState(cart.balans)
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области
	const handleDelete = (cartId) => {
		dispatch(deleteCart(cartId));
		toast('Карта заблокирована. Обновите страницу.');
	}
	const handleUpDate = (cartId) => {
		if (cartName.trim() === '') { // Проверяем на пустую строку с удалением начальных и конечных пробелов
			toast('Вы не ввели номер карты для перевода');
		} else if (cartName.length < 20) { // Проверяем на длину меньше 16 символов
			toast('Введите номер карты полностью');
		} else {
			// Ваша логика обновления состояния или другие действия, которые должны выполняться, если cartName не пустая строка и содержит не менее 16 символов
			setBal(bal - balans);
			toast('Перевод совершен');
		}
	}
	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})
	if (!cart) {
		return (
			<div className='text-xl text-center text-white py-10'>
				У вас нет карт
			</div>
		)
	}
	return (
		<>
			<div className="mt-[20px] flex">  {/* Первая карта */}
				<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center ">{cart.vidCart}</div>
				<ul className="ml-[23px] mt-[15px]">
					<li >{cart.number}</li>
					<li className=" mt-1 text-[13px] text-Melody/70">{bal} рублей</li>
					<div className='flex justify-end w-[600px] text-[13px]'>
						<button className=" mt-[-10px] mr-[20px] text-[13px] text-Melody" onClick={() => setOpen(!isOpen)}>Перевести</button>
						<div className={'absolute bg-Tom  rounded-[20px] p-[20px] mt-2 ' + `menu ${isOpen ? "active" : ""}`} ref={menuRef}>
							<div className='flex justify-between items-center'>
								<div className='p-[20px] bg-Jerry rounded-[20px] shadow-xxB'>
									<h1 className='text-[16px] mb-[10px]'>Откуда будет списано</h1>
									<h1>Карта: {cart.number}</h1>
									<div className='flex mt-[5px]'>
										<h1 className='mr-[5px]'>Сумма:</h1>
										<input className='w-[100px] rounded-[20px] bg-Tom pl-[10px]' type="number"
											value={balans} onChange={(e) => setBalans(e.target.value)} />
									</div>
								</div>
								<FaCircleArrowRight className='w-[40px] h-[40px] mx-[20px]' />
								<div className='p-[20px] bg-Jerry rounded-[20px] shadow-xxB'>
									<h1 className='text-[16px] mb-[10px] '>Куда будет переведенно</h1>
									<h1 className='mr-[5px] mb-[5px]'>Введите номер карты: </h1>
									<InputMask type="text" className='bg-Tom rounded-[20px] w-[150px] pl-[10px]'
										mask="9999 9999 9999 9999" value={cartName} onChange={(e) => setCartName(e.target.value)} />
								</div>
							</div>
							<button type='submit' className={`mt-[20px] ml-[150px] w-[200px] h-[50px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[16px]`}
								onClick={() => handleUpDate()}>Перевести</button>
						</div>
						<button className=" mt-[-10px] text-[13px] text-Melody" onClick={() => handleDelete(cart._id)}>Заблокировать</button>
					</div>
				</ul>
			</div>
			<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
		</>
	)
}

export default MyCart