import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createCredid } from '../../redux/features/credits/creditSlice'

import { toast } from 'react-toastify'

const Zaiavki = (props) => {
	const [value11, setValue11] = useState(10000); const [value21, setValue21] = useState(1);
	const [client, setClient] = useState(''); const [vid, setVid] = useState('');
	const [value12, setValue12] = useState(''); const [value22, setValue22] = useState('');
	const [value13, setValue13] = useState(''); const [value23, setValue23] = useState('');
	const [value14, setValue14] = useState(''); const [value24, setValue24] = useState('');
	const [value15, setValue15] = useState(props.celi); const [value25, setValue25] = useState(props.srok);
	const DateTime = new Date();
	const Stavka = 0.156 / 12; // Процентная ставка
	const Mesiac = (Math.round((value11 * Math.pow(1 + Stavka, value21) * Stavka) / (Math.pow(1 + Stavka, value21) - 1).toFixed(2)))
	const dispatch = useDispatch()

	const submitHandler = () => {
		try {
			if (
				vid.trim() === '' || value11.trim() === '' || value21.trim() === '' || value12.trim() === '' || value22.trim() === '' || value13.trim() === '' || value23.trim() === '' || value14.trim() === '' || value24.trim() === '' || value15.trim() === '' || value25.trim() === '' || !DateTime
			) {
				toast('Вы не ввели одно из значений');
			} else {
				dispatch(
					createCredid({
						client, vid, value11, value21, value12, value22, value13, value23, value14, value24, value15, value25, DateTime, Mesiac
					})
				);
				// Очищаем поля после создания вклада
				setValue11(''); setValue21(''); setValue12(''); setValue22(''); setValue13(''); setValue23(''); setValue14(''); setValue24(''); setValue15(''); setValue25('');
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

						<div className='mb-[29px] mt-[-13px]'> {/* Инпут 1*/}  {/*--- Сумма займа */}
							<li className='text-[20px] mb-[12px]'>{props.inputtext1}</li>
							<div className="w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px] pt-[]"><li className='text-[20px] mb-[8px]'>{props.input11}</li>{value11} рублей</div>
							<li className='mt-[-12px] pl-[30px]'><input className='w-[440px] accent-Melody' type="range" min={props.inputmin1} max={props.inputmax1} step='10000' value={value11} onChange={(e) => setValue11(e.target.value)} /></li>
							<li className='text-[13px] mt-[-6px] text-Melody/70 flex justify-between'>
								<h1>{props.inputmin1} рублей</h1>
								<h1>{props.inputmax1} рублей</h1>
							</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут client*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={client} onChange={(e) => setClient(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>Введите логин клиента</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 2*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value12} onChange={(e) => setValue12(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input12}</li>

						</div>
						<div className='mb-[130px]'> {/* Инпут 3*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value13} onChange={(e) => setValue13(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input13}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 4*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value14} onChange={(e) => setValue14(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input14}</li>
						</div>
						<div className={props.inputopacityPlan2}> {/* Инпут 5*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value15} onChange={(e) => setValue15(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input15}</li>
						</div>
					</ul>

					<ul className=''>
						<div className='mb-[29px] mt-[-13px]'> {/* Инпут 1*/}  {/*--- Сумма займа */}
							<li className='text-[20px] mb-[12px]'>{props.inputtext1}</li>
							<div className="w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px] pt-[]"><li className='text-[20px] mb-[8px]'>{props.input21}</li>{value21} месяцев</div>
							<li className='mt-[-12px] pl-[30px]'><input className='w-[440px] accent-Melody' type="range" min={props.inputmin2} max={props.inputmax2} step='1' value={value21} onChange={(e) => setValue21(e.target.value)} /></li>
							<li className='text-[13px] mt-[-6px] text-Melody/70 flex justify-between'>
								<h1>{props.inputmin2} месяцев</h1>
								<h1>{props.inputmax2} месяцев</h1>
							</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут vid*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={vid} onChange={(e) => setVid(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>Введите вид кредита</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 2*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value22} onChange={(e) => setValue22(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input22}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 3*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value23} onChange={(e) => setValue23(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input23}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 4*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value24} onChange={(e) => setValue24(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input24}</li>
						</div>
						<div className={props.inputopacityPlan2}> {/* Инпут 5*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text"
								value={value25} onChange={(e) => setValue25(e.target.value)}
							/></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input25}</li>
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