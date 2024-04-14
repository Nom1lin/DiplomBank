import React, { useState } from 'react';

const Reschet = (props) => {
	const [Summa, setSumma] = useState(30000); // Кредитная сумма
	const [Srock, setSrock] = useState(2); // Срок кредита
	const Stavka = props.stavka / 12; // Процентная ставка
	const Mountry = (Math.round((Summa * Math.pow(1 + Stavka, Srock) * Stavka) / (Math.pow(1 + Stavka, Srock) - 1).toFixed(2)))

	return (
		<div className="text-Melody">
			<h1 className='text-[32px] mb-[60px]'>{props.maintext}</h1> {/* Заголовок */}
			<div className='flex justify-between'>
				<ul className='w-580px'> {/* Раздел инпута */}
					<div className='mb-[33px] mr-[120px]'> {/* Инпут 1*/}  {/*--- Сумма займа */}
						<li className='text-[20px] mb-[13px]'>{props.inputtext1}</li>
						<div className="w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] pt-[25px] text-[24px]">{Summa}</div>
						<li className='mt-[-12px] pl-[30px]'><input className='w-[520px] accent-Melody' type="range" min={props.inputmin1} max={props.inputmax1} step='10000' value={Summa} onChange={(e) => setSumma(e.target.value)} /></li>
						<li className='text-[13px] mx-[15px] text-Melody/70 flex justify-between'>
							<h1>{props.inputmin1} рублей</h1>
							<h1>{props.inputmax1} рублей</h1>
						</li>
					</div>
					<div className='mr-[120px]'> {/* Инпут 2*/} {/*--- срок займа */}
						<li className='text-[20px] mb-[13px]'>{props.inputtext2}</li>
						<div className="w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] pt-[25px] text-[24px]">{Srock}</div>
						<li className='mt-[-12px] pl-[30px]'><input className='w-[520px] accent-Melody' type="range" min={props.inputmin2} max={props.inputmax2} step='1' value={Srock} onChange={(e) => setSrock(e.target.value)} /></li>
						<li className='text-[13px] mx-[15px] text-Melody/70 flex justify-between'>
							<h1>{props.inputmin2} месяцев</h1>
							<h1>{props.inputmax2} месяцев</h1> 
						</li>
					</div>
				</ul>
				<ul> {/* Раздел калоькулятора */}
					<ul className='w-[600px] h-[235px] bg-Tom shadow-xxA rounded-[40px] p-[30px]'>
						<li className='flex justify-between'>
							<ul>
								<li className='text-[40px]'>{(Math.round((Summa * Math.pow(1 + Stavka, Srock) * Stavka) / (Math.pow(1 + Stavka, Srock) - 1).toFixed(2)))}</li> {/*--- Ежемесячный процент */}
								<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext1}</li>
							</ul>
							<ul>
								<li className='text-[40px]'>{props.Chislotext2}</li>  	{/*--- Ставка */}
								<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext2}</li>
							</ul>
						</li>
						<li className='text-[40px] mt-[28px]'>{Mountry * Srock}</li> {/*--- Общая сумма выплат */}
						<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext3}</li>
					</ul>
					<li className='text-[13px] mt-[25px] text-Melody/70 w-[600px]'>Расчет калькулятора предварительный и не является публичной офертой. Точные условия по кредиту будут предоставленн после оформления заявок</li>
				</ul>
			</div>
		</div>
	)
}

export default Reschet