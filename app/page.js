import Image from "next/image";
import Header from "./components/index/Header";

import CategoriesContainer from "./components/index/CategoriesContainer";

export async function generateMetadata({ params }) {
    return {
      title: ` Cherrybooks`
    }
}

export default function Home() {
  return (
   <>
   <Header/>
   <CategoriesContainer/>
   </>
  );
}
