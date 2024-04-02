import React from 'react'

import ButtonOne from './ButtonOne'
import ButtonTwo from './ButtonTwo'

const Face = (props) => {
	return (
		<>
			<div className="flex justify-between">
				<ul>
					<li className='text-[36px] text-Jerry font-semibold mt-[140px] w-[820px]' >{props.main}</li>
					<li className='text-Jerry mt-[12px] flex'>
						<ul className='mr-[210px]'>
							<li className='text-[20px]'>{props.body}</li>
							<li className={props.recklama}>{props.body3}</li>
						</ul>
						<ul>
							<li className='text-[20px]'>{props.body2}</li>
							<li className='text-Jerry/80 text-[13px]'>{props.body4}</li>
						</ul>
					</li>
				</ul>
				<img src={props.img} alt="картинки нет" className=' mt-[32px] w-[680px] h-[680px]' />
			</div>
			<div className="flex items-center">
				<ButtonOne text={props.button} color='bg-Kuromi' mr='mr-[50px]' silki='/login' />
				<ButtonTwo text='Зарегистрироваться' opacity={props.opacity} color='bg-Melody' colortxt='text-Jerry' silki='/register' />
			</div>
		</>
	)
}

Face.defaultProps = { recklama: 'text-Jerry/80 text-[13px]' }

export default Face;
