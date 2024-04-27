import React from 'react'
import { Navbar } from './LayoutEditon/Navbar'
import { Buttom } from './LayoutEditon/Buttom'

export const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<div className='2xl:h-[936px] sm:h-[700px] bg-Melody rounded-b-[40px] shadow-xxB pt-[7px] '>
				<div className='2xl:px-[250px] sm:px-[25px]'><Navbar /></div>
				<div className='2xl:px-[250px] sm:px-[25px]'>{children}</div>
				<div className='2xl:px-[-250px] sm:px-[-25px]'><Buttom /></div>
			</div>
		</React.Fragment>
	)
}


