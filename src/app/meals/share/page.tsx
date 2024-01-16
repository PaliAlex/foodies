'use client';

import classes from './page.module.css';
import {ImagePicker} from "@/app/components/image-picker/image-picker";
import {shareMeal} from "@/lib/actions";
import {MealsFormSubmit} from "@/app/components/meals/meals-form-submit/MealsFormSubmit";
import {useFormState} from "react-dom";

const MealsSharePage = () => {
    const [state, formAction] = useFormState(shareMeal, {message: ''})
    console.log(state);
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                        ></textarea>
                    </p>
                    <ImagePicker
                        name='image'
                        label='image'
                    />
                    {
                        state?.message.length !== 0 && <p>{state.message}</p>
                    }
                    <p className={classes.actions}>
                        <MealsFormSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}

export default MealsSharePage;