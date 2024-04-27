import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createCredid } from '../../redux/features/credits/creditSlice'
import InputMask from 'react-input-mask';

import { toast } from 'react-toastify'

const Zaiavki = (props) => {
	const [value11, setValue11] = useState('100000'); const [value21, setValue21] = useState('13'); // сумма срок
	const [value12, setValue12] = useState(''); const [value22, setValue22] = useState(''); // цель фио 
	const [value13, setValue13] = useState(''); const [value23, setValue23] = useState(''); // паспорт дата рождения
	const [value14, setValue14] = useState(''); const [value24, setValue24] = useState('@mail.ru'); // телефон почта
	const [value15, setValue15] = useState(''); const [value25, setValue25] = useState(''); // снилсИинн военник
	const [value16, setValue16] = useState(''); const [value26, setValue26] = useState(''); // стаж работа 
	const client = useSelector(state => state.auth.user?.username ?? 'Нет данных');// Получение фамилии из хранилища Redux 
	const DateTime = new Date(); const vid = props.vid;
	const Stavka = props.stavka / 12; // Процентная ставка
	const Mesiac = (Math.round((value11 * Math.pow(1 + Stavka, value21) * Stavka) / (Math.pow(1 + Stavka, value21) - 1).toFixed(2)))

	const dispatch = useDispatch()

	const submitHandler = () => {
		try {
			if (
				vid.trim() === '' || value11.trim() === '' || value21.trim() === '' || value12.trim() === '' || value22.trim() === '' || value13.trim() === '' || value23.trim() === '' ||
				value14.trim() === '' || value24.trim() === '' || value15.trim() === '' || value25.trim() === '' || value16.trim() === '' || value26.trim() === '' || !DateTime
			) {
				toast('Вы не ввели одно из значений');
			} else {
				dispatch(
					createCredid({
						client, vid, value11, value21, value12, value22, value13, value23, value14, value24, value15, value25, value16, value26, DateTime, Mesiac
					})
				);
				// Очищаем поля после создания вклада
				setValue11(''); setValue21(''); setValue12(''); setValue22(''); setValue13(''); setValue23('');
				setValue14(''); setValue24(''); setValue15(''); setValue25(''); setValue16(''); setValue26('');
				toast('Ваша заявка на рассмотрении');
			}
		} catch (error) {
			console.log(error);
			toast('Вы ввели что-то не то');
		}
	}


	return (
		<form className="mt-[100px] text-Melody" onSubmit={(e) => e.preventDefault()}>
			<span className="t2xl:text-[36px] sm:text-[32px]">{props.maintext}</span>
			<div className="2xl:mt-[45px] sm:mt-[20px] 2xl:w-[1180px] sm:w-[100%] bg-Tom rounded-[40px] p-[56px] shadow-xxA">
				<div className="2xl:flex justify-between sm:block">
					<ul className=' '>
						<div className='mb-[29px] mt-[-13px]'> {/* Инпут 1*/}  {/*--- Сумма займа */}
							<li className='text-[20px] mb-[12px]'>{props.inputext1}</li>
							<div className="2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px] pt-[]"><li className='text-[20px] 2xl:mb-[8px] '>{props.input11}</li>{value11} рублей</div>
							<li className='mt-[-12px] pl-[30px]'><input className='2xl:w-[440px] sm:w-[95%] accent-Melody' type="range" min={props.inputmin1} max={props.inputmax1} step='10000' value={value11} onChange={(e) => setValue11(e.target.value)} /></li>
							<li className='text-[13px] mt-[-6px] text-Melody/70 flex justify-between'>
								<h1>{props.inputmin1} рублей</h1>
								<h1>{props.inputmax1} рублей</h1>
							</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 2*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value12} onChange={(e) => setValue12(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input12}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 3*/}
							<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="string"
								mask="99 99 999999" value={value13} onChange={(e) => setValue13(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input13}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 4*/}
							<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]'
								type="telephone" mask="+7 (999) 999-99-99" value={value14} onChange={(e) => setValue14(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input14}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 5*/}
							<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								mask="999-999-999 99,  9|9|9|9|9|9|9|9|9|9|9|9" value={value15} onChange={(e) => setValue15(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input15}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 5*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="number"
								value={value16} onChange={(e) => setValue16(e.target.value)}
							/>
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input16}</li>
						</div>
					</ul>

					<ul className=''>
						<div className='mb-[29px] 2xl:mt-[-13px] sm:mt-[13px]'> {/* Инпут 1*/}  {/*--- Сумма займа */}
							<li className='text-[20px] mb-[12px]'>{props.inputext2}</li>
							<div className="2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px] pt-[]"><li className='text-[20px] 2xl:mb-[8px] '>{props.input21}</li>{value21} месяцев</div>
							<li className='mt-[-12px] pl-[30px]'><input className='2xl:w-[440px] sm:w-[95%] accent-Melody' type="range" min={props.inputmin2} max={props.inputmax2} step='1' value={value21} onChange={(e) => setValue21(e.target.value)} /></li>
							<li className='text-[13px] mt-[-6px] text-Melody/70 flex justify-between'>
								<h1>{props.inputmin2} месяцев</h1>
								<h1>{props.inputmax2} месяцев</h1>
							</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 2*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value22} onChange={(e) => setValue22(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input22}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 3*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="date"
								value={value23} onChange={(e) => setValue23(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input23}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 4*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="email"
								value={value24} onChange={(e) => setValue24(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input24}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 5*/}
							<InputMask className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								mask="№ 9999999" value={value25} onChange={(e) => setValue25(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input25}</li>
						</div>
						<div className='2xl:mb-[130px] sm:mb-[90px]'> {/* Инпут 6*/}
							<input className='2xl:w-[500px] 2xl:h-[99px] sm:w-[100%] sm:h-[85px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value26} onChange={(e) => setValue26(e.target.value)} />
							<li className='text-[20px] 2xl:mt-[-100px] sm:mt-[-85px] ml-[30px]'>{props.input26}</li>
						</div>
					</ul>
				</div>
				<button type='submit' onClick={submitHandler} className={`w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px] `}>Отправить</button>

			</div>
		</form >
	)
}

Zaiavki.defaultProps = { inputopacity: 'opacity-0' }

Zaiavki.defaultProps = { srok: '' }
Zaiavki.defaultProps = { celi: '' }

export default Zaiavki