import React from 'react'
import ButtonOne from './ButtonOne'

const Zaiavki = (props) => {
	return (
		<div className="mt-[100px] text-Melody">
			<span className="text-[48px]">{props.maintext}</span>
			<div className="mt-[45px] w-[1180px] bg-Tom rounded-[40px] p-[56px] shadow-xxA">
				<div className="flex justify-between">
					<ul className=' '>
						<div className={props.mb11}> {/* Инпут 1*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input11}</li>
							<li className={`${props.t11} mt-[75px] ml-[30px] text-Melody/70`}>{props.miniPravila11}</li>
						</div>
						<div className={props.mb12}> {/* Инпут 2*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input12}</li>
							<li className={`${props.t12} mt-[75px] ml-[30px] text-Melody/70`}>{props.miniPravila12}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 3*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input13}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 4*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input14}</li>
						</div>
						<div className={props.inputopacityPlan2}> {/* Инпут 5*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input15}</li>
						</div>
						<div className={props.inputopacity}> {/* Инпут 6*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input16}</li>
						</div>
					</ul>

					<ul className=''>
						<div className={props.mb21}> {/* Инпут 1*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input21}</li>
							<li className={`${props.t21} mt-[75px] ml-[30px] text-Melody/70`}>{props.miniPravila21}</li>
						</div>
						<div className={props.mb22}> {/* Инпут 2*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input22}</li>
							<li className={`${props.t22} mt-[75px] ml-[30px] text-Melody/70`}>{props.miniPravila22}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 3*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input23}</li>
						</div>
						<div className='mb-[130px]'> {/* Инпут 4*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input24}</li>
						</div>
						<div className={props.inputopacityPlan2}> {/* Инпут 5*/}
							<li className=''><input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
							<li className='text-[20px] mt-[-100px] ml-[30px]'>{props.input25}</li>
						</div>
					</ul>
				</div>

				<div className="flex text-[13px] mb-[33px]">
					<input className="mr-[5px] w-[20px] h-[20px] bg-Tom " type="checkbox" />
					<h1 className="mr-[5px]">я принимаю </h1>
					<h1 className="text-[#00C2FF]"> условия обработки и передачи персональльных данных</h1>
				</div>
				<ButtonOne color='bg-Melody' silki='/carts/debetovcart' text='Отправить' />

			</div>
		</div>
	)
}

Zaiavki.defaultProps = { inputopacity: 'opacity-0' }
Zaiavki.defaultProps = { t0: 'text-[0px]' }
Zaiavki.defaultProps = { t13: 'text-[13px]' }

export default Zaiavki