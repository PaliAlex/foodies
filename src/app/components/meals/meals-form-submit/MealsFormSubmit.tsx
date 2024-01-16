'use client';

import React from "react";
import { useFormStatus } from "react-dom";


export const MealsFormSubmit: React.FC = () => {
    const  {pending} = useFormStatus()
    return(
        <button disabled={pending}>
            {
                pending
                    ? 'Submitting...'
                    : 'Share Meal'
            }
        </button>
    )
}