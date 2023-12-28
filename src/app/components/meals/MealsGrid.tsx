import React from "react";
import classes from "./meals-grid.module.css";
import {MealItem} from "@/app/components/meals/item/MealItem";

interface IPropsMealsGrid {
    meals: IMealItem[];
}

interface IMealItem {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
}

export const MealsGrid: React.FC<IPropsMealsGrid> = ({meals}) => {
    return(
        <ul className={classes.meals}>
            {
                meals.map(it => (
                    <li key={it.id}>
                        <MealItem {...it} />
                    </li>
                ))
            }
        </ul>
    )
}