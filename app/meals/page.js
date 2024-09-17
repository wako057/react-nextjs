import Link from "next/link";

export default function MealsPage() {
    return (
        <>
        <h1>Meals Page</h1>
        <p><Link href="/">Home</Link></p>
        <p><Link href="/meals/share">Share Page</Link></p>
        <p><Link href="/meals/youhou">Meals  Dynamic Page</Link></p>
        <p><Link href="/community">Community Page</Link></p>
        </>
    );
}