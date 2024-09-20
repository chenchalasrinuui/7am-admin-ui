import React, { useEffect, useState } from 'react'
import menuItems from './config.json'
import Link from 'next/link'
import styles from './Menu.module.css'
import Image from 'next/image'
export const Menu = () => {
    const [isMobileView, setIsMobileView] = useState(document.body.offsetWidth < 700)
    const [left, setLeft] = useState('-80vw')
    const handleResize = () => {
        window.addEventListener('resize', () => {
            setIsMobileView(document.body.offsetWidth < 700)
        })
    }
    useEffect(() => {
        handleResize()
    }, [])

    const handleMobileMenuBtnClick = () => {
        setLeft(left === '0' ? '-80vw' : '0')
    }
    const handleMenuItemClick = () => {
        if (isMobileView) {
            setLeft('-80vw')
        }
    }
    return (<>
        {isMobileView && <Image onClick={handleMobileMenuBtnClick} className={styles.mobileMenuIcon} src="/mobileMenu.png" width={40} height={30} alt="menu" />}
        <ul style={{ left }} className={isMobileView ? styles.mobileMenu : styles.menu}>

            {
                menuItems?.map(({ id, name, path }) => {
                    return <li onClick={handleMenuItemClick}><Link id={id} href={path}>{name}</Link></li>
                })
            }
        </ul>
    </>
    )
}


