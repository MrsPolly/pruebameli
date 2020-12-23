const routes = [
    {
        path: '/',
        component: resolve =>
            require(['../views/Home.vue'], resolve),
        children: [
            {
                path: '/items/search=',
                component: resolve =>
                    require(['../components/resultado-busqueda.vue'], resolve),
                meta: {
                    title: "Resultado Busqueda",
                    breadcrumb: [
                        {
                            text: "Resultado Busqueda",
                            href: "/items?search=",
                        },
                    ],
                },
            },
            {
                path: "/items/:id",
                component: resolve =>
                    require(['../components/detalle-producto.vue'], resolve),
                meta: {
                    title: "Detalle de Producto",
                    breadcrumb: [
                        {
                            text: "Detalle de Producto",
                            href: "/items/:id",
                        },
                    ],
                },
            },
        ],
    },
];

export default routes;
