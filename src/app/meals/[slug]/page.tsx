import React from "react";

type IMealItemPageProps = {
    params: { slug: string };
}

const MealItemPage: React.FC<IMealItemPageProps> = ({params}) => {
    return(
        <main>
            <h1>Meal Item</h1>
            <h2>{params.slug}</h2>
        </main>
    )
}

export default MealItemPage;