import Image from "next/image";
import Header from "@/components/layout/index/Header";
import Navbar from "@/components/layout/navbar/Navbar";
import FooterContainer from "@/components/layout/footer/FooterContainer";
import CategoriesContainer from "@/components/layout/index/CategoriesContainer";

export async function generateMetadata({ params }) {
    return {
        title: ` Cherrybooks`
    }
}

export default function Home() {
    return (
        <>
            
                <main className="w-full justify-self-center flex justify-center flex-col items-center">
                    <Header />
                    <CategoriesContainer />
                </main>
               

        </>
    );
}
