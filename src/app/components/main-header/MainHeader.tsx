import logoImage from '@/assets/logo.png';
import Link from "next/link";
import Image from "next/image";

import classes from './main-header.module.css'
import {MainHeaderBackground} from "./MainHeaderBackground";

export const MainHeader = () => (
    <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image
                    priority
                    src={logoImage} alt='A plate with food'
                />
                Nextlevel food
            </Link>
            <nav className={classes.nav}>
                <Link href="/meals">Browse meals</Link>
                <Link href="/community">Community</Link>
            </nav>
        </header>
    </>
)