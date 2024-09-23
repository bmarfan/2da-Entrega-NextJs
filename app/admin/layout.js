
export default function AdminLayout({children}){
    return(
        <section className='container'>
            <nav>
                <div>
                    <span>
                        Panel de Administración
                    </span>
                </div>
            </nav>

            {children}
        </section>
    )
}