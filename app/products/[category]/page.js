import React, {Suspense} from 'react'
import ItemListContainer from '@/components/products/ItemListContainer'

export function generateStaticParams(){
    return[
        {category: 'todo'},
        {category: 'bullet-journal'},
        {category: 'washi-tapes'},
    ]
}

export async function generateMetadata({ params }) {
    return {
      title: `${params.category}`
    }
}

const page = ({params}) => {
    const category = params.category
    console.log(params)
  return (
    <div>
        <Suspense fallback={(
             <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-accent hover:bg-accent-light transition ease-in-out duration-150 cursor-not-allowed" disabled>
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
            </button>
        )}>
            <ItemListContainer category={category}/>
        </Suspense>
      
    </div>
  )
}

export default page
