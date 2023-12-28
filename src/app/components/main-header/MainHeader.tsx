import logoImage from '@/assets/logo.png';
import Link from "next/link";
import Image from "next/image";

import classes from './main-header.module.css'
import {MainHeaderBackground} from "./MainHeaderBackground";
import {NavLink} from "@/app/components/main-header/nav-link/NavLink";

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
                <NavLink href="/meals">Browse meals</NavLink>
                <NavLink href="/community">Community</NavLink>
            </nav>
        </header>
    </>
)