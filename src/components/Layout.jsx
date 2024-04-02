import React from 'react'
import { Navbar } from './LayoutEditon/Navbar'
import { Buttom } from './LayoutEditon/Buttom'

export const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<div className='h-[936px] bg-Melody rounded-b-[40px] shadow-xxB pt-[7px]'>
				<div className='px-[250px]'><Navbar /></div>
				<div className='px-[250px]'>{children}</div>
				<div className='px-[-250px]'><Buttom /></div>
			</div>
		</React.Fragment>
	)
}


