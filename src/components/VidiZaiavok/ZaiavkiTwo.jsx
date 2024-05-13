import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createStrahovanie } from '../../redux/features/strahovanie/strahovanieSlice'
import InputMask from 'react-input-mask';

import { toast } from 'react-toastify'

const ZaiavkiTwo = (props) => {
	const [tarif, setTarif] = useState('Тариф 1'); const [name, setName] = useState('');
	const [fio, setFio] = useState(''); const [passport, setPassport] = useState('');
	const [birth, setBirth] = useState(''); const [snilsinn, setSnilsinn] = useState('');
	const [telephone, setTelephone] = useState(''); const [email, setEmail] = useState('@mail.ru');
	const [voenik, setVoenik] = useState(''); const [staj, setStaj] = useState('');
	const [work, setWork] = useState(''); 
	const DateTime = new Date();
	const dispatch = useDispatch()

	const handleCartChange = (event) => {
		const selectedValue = event.target.value;
		setTarif(selectedValue);
	}

	const submitHandler = () => {
		try {
			if (
				tarif.trim() === '' || name.trim() === '' || fio.trim() === '' || passport.trim() === '' || birth.trim() === '' || snilsinn.trim() === '' || 
				telephone.trim() === '' || email.trim() === '' || voenik.trim() === '' || staj.trim() === '' || work.trim() === '' || !DateTime
			) {
				toast('Вы не ввели одно из значений');
			} else {
				dispatch(
					createStrahovanie({
						tarif, name, fio, passport, birth, snilsinn, telephone, email, voenik, staj, work, DateTime,
					})
				);
				// Очищаем поля после создания вклада
				setTarif(''); setName(''); setFio(''); setPassport(''); setBirth(''); setSnilsinn(''); setTelephone(''); setEmail('@mail.ru'); setVoenik(''); setStaj(''); setWork(''); 
				toast('Ваша заявка на рассмотрении');
			}
		} catch (error) {
			console.log(error);
			toast('Вы ввели что-то не то');
		}
	}

	return (
		<form className="mt-[100px] text-Melody" onSubmit={(e) => e.preventDefault()}>
			<span className="2xl:text-[36px] sm:text-[32px]">{props.maintext}</span>
			<div className="2xl:mt-[45px] sm:mt-[20px] 2xl:w-[1180px] sm:w-[100%] bg-Tom rounded-[40px] p-[56px] shadow-xxA">
				<div className="2xl:flex justify-between sm:block">
					<ul className=' '>
						<li className='2xl:mb-[130px] sm:mb-[90px]'>
							{/* Инпут 1*/}
							<select className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' value={tarif} onChange={handleCartChange}>
								<option value="Тариф 1">Тариф 1</option>
								<option value="Тариф 2">Тариф 2</option>
								<option value="Тариф 3">Тариф 3</option>
							</select>
							<h1 className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>Введите вид карты</h1>
						</li>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 2*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={fio} onChange={(e) => setFio(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input12}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 3*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="date"
								value={birth} onChange={(e) => setBirth(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input13}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 4*/}
						<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]'
								type="telephone" mask="+7 (999) 999-99-99" value={telephone} onChange={(e) => setTelephone(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input14}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 5*/}
							<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								mask="№ 9999999" value={voenik} onChange={(e) => setVoenik(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input15}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 6*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={work} onChange={(e) => setWork(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input16}</li>
						</div>
					</ul>

					<ul className=''>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 1*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={name} onChange={(e) => setName(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input21}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 2*/}
							<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="string"
								mask="99 99 999999" value={passport} onChange={(e) => setPassport(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input22}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 5*/}
							<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								mask="999-999-999 99,  9|9|9|9|9|9|9|9|9|9|9|9" value={snilsinn} onChange={(e) => setSnilsinn(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input23}</li>
						</div>

						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 4*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="email"
								value={email} onChange={(e) => setEmail(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input24}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 5*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number"
								value={staj} onChange={(e) => setStaj(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-88px] ml-[30px]'>{props.input25}</li>
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