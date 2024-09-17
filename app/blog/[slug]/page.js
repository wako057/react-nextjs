import Link from "next/link";

export default function BlogPostPage({params}) {
    console.log(params);
    return (
        <main>
            <h1>The Blog Post</h1>
            {params.slug}
        </main>
    );
}