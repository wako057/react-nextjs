import Link from "next/link";

export default function MealsSharePage() {
    return (
        <>
            <h1>Meals Share Page</h1>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/meals">Meals Page</Link></p>
            <p><Link href="/meals/youhou">Meals  Dynamic Page</Link></p>
            <p><Link href="/community">Community Page</Link></p>
        </>
    )
}