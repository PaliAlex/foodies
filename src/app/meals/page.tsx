import Link from "next/link";
import React from "react";

const MealsPage = () => {
    return(
        <main>
            <h1>Meals</h1>
            <p><Link href='/meals/burger'>Burger</Link></p>
            <p><Link href='/meals/pasta'>Pasta</Link></p>
            <p><Link href='/meals/khinkali'>Khinkali</Link></p>
            <p><Link href='/meals/share'>Share</Link></p>
        </main>
    )
}

export default MealsPage;