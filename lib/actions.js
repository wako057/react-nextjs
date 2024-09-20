'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(previous, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    console.log(meal);
    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Invalid Input',
        };
    }

    await saveMeal(meal);

    redirect('/meals');
}