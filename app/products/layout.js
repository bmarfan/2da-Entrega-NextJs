import Navbar from "@/components/layout/navbar/Navbar"
import FooterContainer from "@/components/layout/footer/FooterContainer"

export default function AdminLayout({children}){
    return(
        <>
            <div className="grid grid-rows-layout-principal w-full min-h-screen">
                <Navbar />
                <main className="w-full justify-self-center flex justify-center flex-col items-center">
                    {children}
                </main>
                <FooterContainer />
            </div>

        </>
    )
}