'use server'

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export const shareMeal = async (formData) => {
    const meal = {
        title: formData.get('title'),
        image: formData.get('image'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    await saveMeal(meal);
    redirect('/meals');
};