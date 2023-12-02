import { Head } from "next/document"
import favicon from "@/assets/logo-devsolutions.png"


export default function MainSeo() {
    return (
        <Head>
            {/* fav icon */}
            <link rel="icon" href={favicon.src} />
            {/* font */}
        </Head>
    )
}