import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Wild Beans",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    return (

        <div className={`${inter.className} max-w-screen`}>
            <div className="w-screen h-screen bg-[#006241]">
                {children}
            </div>
        </div>

    );
}
