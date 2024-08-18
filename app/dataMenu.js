export const dataMenu = [
    {
        name: 'Inicio',
        href: '/'
    },
    {
        name: 'Productos',
        href: '/productos',
        submenu: [
            {
                name: 'Ver todo',
                href: '/products/todo',
                inIndex: false,
            },
            {
                name: 'Notebooks',
                href: '/products/notebooks',
                image: '/products/01.jpg',
                inIndex: true
            },
            {
                name: 'Bullet Journal',
                href: '/products/bullet-journal',
                image: '/products/02.jpg',
                inIndex: true
            },
            {
                name: 'Washi Tapes',
                href: '/products/washi-tapes',
                image: '/products/washi-01.jpg',
                inIndex: true
            },
            {
                name: 'Estuches',
                href: '/products/estuches',
                image: '/products/case-01.jpg',
                inIndex: true
            },
            {
                name: 'Lápices',
                href: '/products/lapices',
                image: '/products/pens-01.jpg',
                inIndex: true
            },
            {
                name: 'Mochilas',
                href: '/products/mochilas',
                image: '/products/bags-01.jpg',
                inIndex: true
            },
        ]
    },
    {
        name: 'Contacto',
        href: '/contacto'
    }
]

/*
{
                name: '',
                href: '/productos/',
                image: '',
                inIndex: true
            },
            */