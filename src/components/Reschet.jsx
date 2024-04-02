import React from 'react'

const Reschet = (props) => {
	return (
		<div className="text-Melody">
			<h1 className='text-[32px] mb-[60px]'>{props.maintext}</h1> {/* Заголовок */}
			<div className='flex justify-between'>
				<ul className='w-580px'> {/* Раздел инпута */}

					<div className='mb-[33px] mr-[120px]'> {/* Инпут 1*/}
						<li className='text-[20px] mb-[13px]'>{props.inputtext1}</li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
						<li className='text-[13px] mt-[5px] text-Melody/70'>{props.inputminitext1}</li>
					</div> 
					<div> {/* Инпут 2*/}
						<li className='text-[20px] mb-[13px]'>{props.inputtext2}</li> 
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
						<li className='text-[13px] mt-[5px] text-Melody/70'>{props.inputminitext2}</li>
					</div>
				</ul>
				<ul> {/* Раздел калоькулятора */}
					<ul className='w-[600px] h-[235px] bg-Tom shadow-xxA rounded-[40px] p-[40px]'>
						<li className='flex justify-between'>
							<ul>
								<li className='text-[40px]'>{props.Chislotext1}</li>
								<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext1}</li>
							</ul>
							<ul>
								<li className='text-[40px]'>{props.Chislotext2}</li>
								<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext2}</li>
							</ul>
						</li>
						<li className='text-[40px] mt-[8px]'>{props.Chislotext3}</li>
						<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext3}</li>
					</ul>
					<li className='text-[13px] mt-[25px] text-Melody/70 w-[600px]'>Расчет калькулятора предварительный и не является публичной офертой. Точные условия по кредиту будут предоставленн после оформления заявок</li>
				</ul>
			</div>
		</div>
	)
}

export default Reschet