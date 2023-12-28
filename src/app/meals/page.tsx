import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import {MealsGrid} from "@/app/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
    const meals = await getMeals();

    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals created
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook yourself. It is easy and fun.
                </p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={''}>
                <MealsGrid meals={meals}/>
            </main>
        </>
    )
}

export default MealsPage;