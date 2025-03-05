import SessionHandler from "@/components/SessionHandler";
import "../globals.css";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";

export const metadata = {
    title: "Wild Beans",
    description: "Generated by create next app",
};


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
    return (

        <SessionHandler>
            <div className={`${inter.className} max-w-screen max-h-screen overflow-hidden bg-[#F9FAFB]`}>
                <div className="w-screen h-20">
                    <NavBar />
                </div>
                <div className="w-screen h-[calc(100vh-5rem)]">
                    {children}
                </div>
            </div>
        </SessionHandler>

    );
}
