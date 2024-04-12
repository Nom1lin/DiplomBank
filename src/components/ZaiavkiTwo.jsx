import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createStrahovanie } from '../redux/features/strahovanie/strahovanieSlice'

import { toast } from 'react-toastify'

const ZaiavkiTwo = (props) => {
	const [tarif, setTarif] = useState('Тариф 1'); const [name, setName] = useState('');
	const [fio, setFio] = useState(''); const [passport, setPassport] = useState('');
	const [birth, setBirth] = useState(''); const [snilsinn, setSnilsinn] = useState('');
	const [telephone, setTelephone] = useState(props.celi); const [email, setEmail] = useState(props.srok);
	const DateTime = new Date();
	const dispatch = useDispatch()

	const handleCartChange = (event) => {
		const selectedValue = event.target.value;
		setTarif(selectedValue);
	}

	const submitHandler = () => {
		try {
			if (
				tarif.trim() === '' || name.trim() === '' || fio.trim() === '' || passport.trim() === '' || birth.trim() === '' || snilsinn.trim() === '' || telephone.trim() === '' || email.trim() === '' || !DateTime
			) {
				toast('Вы не ввели одно из значений');
			} else {
				dispatch(
					createStrahovanie({
						tarif, name, fio, passport, birth, snilsinn, telephone, email, DateTime,
					})
				);
				// Очищаем поля после создания вклада
				setTarif(''); setName(''); setFio(''); setPassport(''); setBirth(''); setSnilsinn(''); setTelephone(''); setEmail('');
				toast('Ваша заявка на рассмотрении');
			}
		} catch (error) {
			console.log(error);
			toast('Вы ввели что-то не то');
		}
	}


	return (
		<form className="mt-[100px] text-Melody" onSubmit={(e) => e.preventDefault()}>
			<span className="text-[48px]">{props.maintext}</span>
			<div className="mt-[45px] w-[1180px] bg-Tom rounded-[40px] p-[56px] shadow-xxA">
				<div className="flex justify-between">
					<ul className=' '>
						<li className='mb-[130px]'>
							{/* Инпут 1*/}
							<select className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' value={tarif} onChange={handleCartChange}>
								<option value="Тариф 1">Тариф 1</option>
								<option value="Тариф 2">Тариф 2</option>
								<option value="Тариф 3">Тариф 3</option>
							</select>
							<h1 className='text-[20px] mt-[-100px] ml-[30px]'>Введите вид карты</h1>
						</li>
						<div className='mb-[130px]'> {/* Инпут 2*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={fio} onChange={(e) => setFio(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input12}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 3*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="date"
								value={birth} onChange={(e) => setBirth(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input13}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 4*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="tel"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								value={telephone} onChange={(e) => setTelephone(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input14}</li>
						</div>
					</ul>

					<ul className=''>
						<div className='mb-[130px]'> {/* Инпут 1*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={name} onChange={(e) => setName(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input21}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 2*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number"
								value={passport} onChange={(e) => setPassport(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input22}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 3*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number"
								value={snilsinn} onChange={(e) => setSnilsinn(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input23}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 4*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="email"
								value={email} onChange={(e) => setEmail(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input24}</li>
						</div>
					</ul>
				</div>
				<button type='submit' onClick={submitHandler} className={`w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px] `}>Отправить</button>

			</div>
		</form >
	)
}

ZaiavkiTwo.defaultProps = { inputopacity: 'opacity-0' }

ZaiavkiTwo.defaultProps = { srok: '' }
ZaiavkiTwo.defaultProps = { celi: '' }

export default ZaiavkiTwo