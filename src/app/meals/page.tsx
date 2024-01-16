import React, {Suspense} from "react";
import classes from "./page.module.css";
import Link from "next/link";
import {MealsGrid} from "@/app/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import LoadingOut from "@/app/components/loading/loading-out";

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals',
};

const Meals = async () => {
    const meals = await getMeals();

    return (
        <MealsGrid meals={meals}/>
    )
}

const MealsPage = async () => (
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
            <Suspense fallback={<LoadingOut/>}>
                <Meals/>
            </Suspense>
        </main>
    </>
)

export default MealsPage;