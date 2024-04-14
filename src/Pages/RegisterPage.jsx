import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { registerUser, checkIsAuth } from '../redux/features/auth/authSlice'

export const RegisterPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [fio, setFio] = useState('')
	const [birth, setBirth] = useState('')
	const [passport, setPassport] = useState('')
	const [telephone, setTelephone] = useState('')
	const [email, setEmail] = useState('')
	const [snils, setSnils] = useState('')
	const [inn, setInn] = useState('')
	const [trudbook, setTrudbook] = useState('')

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
			dispatch(registerUser({ username, password, fio, birth, telephone, email, passport, snils, inn, trudbook })) // передает в виде объекта данные с полей ввода 
			setUsername(''); setPassword('') // очисщяем
			setFio(''); setBirth('')
			setPassport(''); setTelephone('')
			setEmail(''); setInn(''); setSnils('')
			setTrudbook('');

		} catch (error) {
			console.log(error)

		}
	}

	return (
		< >
			<form className='flex justify-center mt-[10px] text-Melody' onSubmit={(e) => e.preventDefault()}>
				<div className='w-[1100px] bg-Tom rounded-[40px] shadow-xxA p-[40px]'>
					<h1 className='text-[48px] mb-[45px] flex justify-center mt-[-10px]'>Регистрация</h1>
					<div className='flex justify-between'>
						<ul>
							<li>
								<h1 className='text-[20px] ml-[30px] mb-[5px]'>Придумайте себе Логин</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите ваше ФИО</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={fio} onChange={(e) => setFio(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите ваш номер телефон</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите серию и номер пасспорта</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number" value={passport} onChange={(e) => setPassport(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите СНИЛС</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number" value={snils} onChange={(e) => setSnils(e.target.value)} />
							</li>
						</ul>

						<ul>
							<li>
								<h1 className='text-[20px] ml-[30px] mb-[5px]'>Придумайте себе пароль</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите вашу дату рождения</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="date" value={birth} onChange={(e) => setBirth(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите вашу почту</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите данные трудовой книги</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number" value={trudbook} onChange={(e) => setTrudbook(e.target.value)} />
							</li>

							<li>
								<h1 className='text-[20px] mt-[20px] ml-[30px] mb-[5px]'>Введите ИНН</h1>
								<input className='w-[500px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number" value={inn} onChange={(e) => setInn(e.target.value)} />
							</li>
						</ul>
					</div>

					<div className='mt-[60px] ml-[381px]'>
						<button type='submit' onClick={handleSubmit} className={`w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px]`}>Зарегистрироваться</button>
						<NavLink to={'/login'} className='text-[#00C2FF] text-[13px] ml-[55px]'>У вас уже есть аккаунт?</NavLink>
					</div>
				</div>
			</form >
		</>
	)
}