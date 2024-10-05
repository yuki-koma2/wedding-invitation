import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="招待状"/>
            <title>komatsu sawaki wedding invitation</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&display=swap"
                  rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap" rel="stylesheet"/>
            <meta property="og:image" content={'https://www.komatsu-sawaki.com/img/flower.jpeg'}/>
        </head>
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
);
}
