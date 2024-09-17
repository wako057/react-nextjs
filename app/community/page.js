import Link from "next/link";

export default function CommunityPage() {
    return (
        <>
            <h1>Community Page</h1>
            <p><Link href="/">Home</Link></p>
            <Link href="/meals">Meals page</Link>
            <p><Link href="/meals/youhou">Meals  Dynamic Page</Link></p>
            <p><Link href="/community">Community page</Link></p>
        </>
    );
}