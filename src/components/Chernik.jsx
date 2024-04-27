import React, { useState, useRef, useEffect } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import Logo from '../../img/Logo.png';
import PopUp from './PopUp';

export const Navbar = () => {
    const isAuth = useSelector(checkIsAuth);
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const fio = useSelector(state => state.auth.user?.fio ?? 'Нет данных');

    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            if (header) {
                if (window.pageYOffset > header.offsetTop) {
                    header.classList.add('fixed', 'top-0', 'z-50', 'bg-white');
                } else {
                    header.classList.remove('fixed', 'top-0', 'z-50', 'bg-white');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" className="flex max-w-[1420px] h-[76px] justify-between">
            <NavLink to={'/'}>
                <img src={Logo} alt="картинки нет" className="w-[140px] mt-[3px]" />
            </NavLink>
            {isAuth && (
                <ul className="flex items-center mr-[-200px]">
                    <PopUp
                        spisok="Кредиты"
                        heading="Все кредиты"
                        style="pb-[10px]"
                        style2="pb-[10px]"
                        body={['На любые цели', 'Автокредит', 'На образование', 'Кредитная карта', 'Ипотека', 'Кредит для бизнеса']}
                        silki={['/credit/lunieceli', '/credit/avto', '/credit/obrazovanie', '/credit/creditcart', '/credit/ipoteka', '/credit/business']}
                    />
                    {/* Другие пункты меню */}
                </ul>
            )}
            <div className="flex">
                {isAuth && (
                    <ul className="text-[16px] mr-[30px] mt-[25px]">
                        <li className="">{fio}</li>
                    </ul>
                )}
                {isAuth ? (
                    <NavLink to="/aboutvas">
                        <div className="text-Jerry flex justify-center items-center mt-[13px] border p-[9px] border-Jerry">Мой аккаунт</div>
                    </NavLink>
                ) : (
                    <NavLink to="/login">
                        <div className="text-Jerry flex justify-center items-center mt-[13px] border p-[9px] border-Jerry">Войти</div>
                    </NavLink>
                )}
            </div>
        </header>
    );
};
