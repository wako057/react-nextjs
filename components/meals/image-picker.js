'use client'
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();

    function handlePickClick() {
        imageInputRef.current.click();
    }

    function handlePickedImage(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor='image'>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Picked Yet.</p>}
                    {pickedImage &&
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user"
                            fill
                        />
                    }
                </div>
                <input
                    className={classes.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageInputRef}
                    onChange={handlePickedImage}
                    required
                />
                <button
                    className={classes.button}
                    type='button'
                    onClick={handlePickClick}
                >
                    Pick an image
                </button>
            </div>
        </div>
    );
}