'use client'

import React, {ReactNode} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";

interface INavLinkProps {
    href: string;
    children: ReactNode;
}

export const NavLink: React.FC<INavLinkProps> = ({href, children}) => {
    const path = usePathname();
    const className = path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link;

    return(
        <Link
            href={href}
            className={className}
        >
            {children}
        </Link>
    )
}