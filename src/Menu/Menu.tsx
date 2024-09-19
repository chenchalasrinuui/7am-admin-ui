import React, { useEffect, useState } from 'react'
import menuItems from './config.json'
import Link from 'next/link'
import styles from './Menu.module.css'
export const Menu = () => {
    const [isMobileView, setIsMobileView] = useState(document.body.offsetWidth < 700)
    const handleResize = () => {
        window.addEventListener('resize', () => {
            setIsMobileView(document.body.offsetWidth < 700)
        })
    }
    useEffect(() => {
        handleResize()
    }, [])
    return (<>
        {isMobileView && <button>menu</button>}
        <ul className={styles.menu}>

            {
                menuItems?.map(({ id, name, path }) => {
                    return <li><Link id={id} href={path}>{name}</Link></li>
                })
            }
        </ul>
    </>
    )
}
