import Link from "next/link";

export default function MealsDynamic({params}) {
    console.log(params);

    return (
        <>
            <h1>Meals Dynamic Page</h1>

            <p> Argument Given: <code>{JSON.stringify(params)}</code></p>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/meals">Meals Page</Link></p>
            <p><Link href="/community">Community Page</Link></p>

        </>
    );
}