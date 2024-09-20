'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CloseCircle } from 'iconsax-react'
import style from '../../styles.module.scss'

export function Modal({ children }) {
    const router = useRouter()
    return (
        <div className='fixed bg-black/50 w-full h-full z-[99] inset-0 grid place-items-center'>
            <section className='min-w-[500px] relative bg-white rounded-lg border border-black/10'>
                <section className='flex justify-end'>
                    <button
                        onClick={() => {
                            router.back()
                        }}
                        className='absolute p-2'
                    >
                        <CloseCircle size="28" color="#333" variant="Bold" />
                    </button>
                </section>
                <div>{children}</div>
            </section>
        </div>
    )
}