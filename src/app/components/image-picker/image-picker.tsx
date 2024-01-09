'use client'

import classes from "./image-picker.module.css";
import React, {ChangeEvent, useRef, useState} from "react";
import Image from "next/image";

interface IPropsImagePicker {
    label: string,
    name: string,
}

export const ImagePicker: React.FC<IPropsImagePicker> = ({
    label,
    name,
}) => {
    const [image, setImage] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (!inputRef) {
            return;
        }

        inputRef.current?.click()
    }

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if(!files) {
            setImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => (
            setImage(fileReader.result as string)
        )
        fileReader.readAsDataURL(files[0])
    }

    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {
                        image
                            ? (
                                <Image
                                    src={image}
                                    alt='Image selected by user'
                                    fill
                                />
                            )
                            : <p>No loaded image</p>
                    }
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={inputRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type='button'
                    onClick={handleClick}
                >
                Pick an image
                </button>
            </div>
        </div>
    )
}