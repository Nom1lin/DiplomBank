import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { registerUser, checkIsAuth } from '../redux/features/auth/authSlice'
import InputMask from 'react-input-mask';

export const RegisterPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [fio, setFio] = useState('')
	const [birth, setBirth] = useState('')
	const [passport, setPassport] = useState('')
	const [telephone, setTelephone] = useState('')
	const [email, setEmail] = useState('@mail.ru')
	const [snils, setSnils] = useState('')
	const [inn, setInn] = useState('')
	const [ticket, setTicket] = useState('')
	const [staj, setStaj] = useState('')
	const [work, setWork] = useState('')

	const { status } = useSelector(state => state.auth)
	const isAuth = useSelector(checkIsAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (status) {
			toast(status)
		}
		if (isAuth) navigate('/')
	}, [status, isAuth, navigate])

	const handleSubmit = () => {
		try {
			dispatch(registerUser({ username, password, fio, birth, telephone, email, passport, snils, inn, ticket, staj, work })) // передает в виде объекта данные с полей ввода 
			setUsername(''); setPassword('') // очисщяем
			setFio(''); setBirth('')
			setPassport(''); setTelephone('')
			setEmail('@mail.ru'); setInn(''); setSnils('')
			setTicket(''); setStaj(''); setWork('');

		} catch (error) {
			console.log(error)

		}
	}

	return (
		< >
			<form className='flex justify-center mt-[-30px] text-Melody' onSubmit={(e) => e.preventDefault()}>
				<div className='w-[900px] bg-Tom rounded-[40px] shadow-xxA px-[40px] py-[20px]'>
					<h1 className='text-[34px] mb-[25px] flex justify-center mt-[-10px]'>Регистрация</h1>
					<div className='flex justify-between'>
						<ul className=''>
							<li>
								<h1 className='ml-[30px] mb-[5px]'>Логин</h1>
								<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Пароль</h1>
								<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Электронная почта</h1>
								<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Номер телефон</h1>
								<InputMask className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="telephone"
									mask="+7 (999) 999-99-99" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>СНИЛС</h1>
								<InputMask className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="telephone" 
								mask="999-999-999 99" value={snils} onChange={(e) => setSnils(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>ИНН</h1>
								<InputMask className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="telephone"
								mask="9|9|9|9|9|9|9|9|9|9|9|9" value={inn} onChange={(e) => setInn(e.target.value)} />
							</li>

						</ul>

						<ul>
							<li>
								<h1 className='ml-[30px] mb-[5px]'>ФИО <span className='text-[13px] text-Melody/70'>(полностью)</span></h1>
								<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="text" value={fio} onChange={(e) => setFio(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Дата рождения</h1>
								<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="date" value={birth} onChange={(e) => setBirth(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Серия и номер пасспорта</h1>
								<InputMask className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="string"
								mask="99 99 999999" value={passport} onChange={(e) => setPassport(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Номер военного билета</h1>
								<InputMask className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="string" 
								mask="№ 9999999" value={ticket} onChange={(e) => setTicket(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Стаж работы на последнем месте</h1>
								<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="number" value={staj} onChange={(e) => setStaj(e.target.value)} />
							</li>

							<li>
								<h1 className='mt-[20px] ml-[30px] mb-[5px]'>Название вашей работы</h1>
								<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="string" value={work} onChange={(e) => setWork(e.target.value)} />
							</li>
						</ul>
					</div>
					<h1 className='mt-[20px] text-[13px] ml-[30px]'>Введенные вами, данные будут учитываться при работе с вами.</h1>
					<div className='flex justify-center mt-[30px]'>
						<button type='submit' onClick={handleSubmit} className={`w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[20px]`}>Зарегистрироваться</button>
					</div>
					<div className='flex justify-center mt-[10px]'>
						<NavLink to={'/login'} className='text-[#00C2FF] text-[13px] '>У вас уже есть аккаунт?</NavLink>
					</div>
				</div>
			</form >
		</>
	)
}