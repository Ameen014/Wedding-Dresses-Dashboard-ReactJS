const Host = "/api"

export const api_Routes = {
    auth: {
        login: `${Host}/auth/admins`,
    },
    role: {
        view: `${Host}/roles`,
        add: `${Host}/roles`,
        bulkDelete: (id) => (`${Host}/roles/${id}`),
        getOne: (id) => (`${Host}/roles/${id}`),
        update: (id) => (`${Host}/roles/${id}`),
    },
    permission: {
        view: `${Host}/permissions`,
        add: `${Host}/permissions/assign`,
        bulkDelete: (id) => (`${Host}/permissions/${id}`),
        getOne: (id) => (`${Host}/permissions/${id}`),
        update: (id) => (`${Host}/permissions/${id}`),
    },
    admin: {
        view: `${Host}/admins`,
        add: `${Host}/admins`,
        bulkDelete: (id) => (`${Host}/admins/${id}`),
        getOne: (id) => (`${Host}/admins/${id}`),
        update: (id) => (`${Host}/admins/${id}`),
    },
    product: {
        view: `${Host}/products`,
        add: `${Host}/products`,
        bulkDelete: (id) => (`${Host}/products/${id}`),
        getOne: (id) => (`${Host}/products/${id}`),
        update: (id) => (`${Host}/products/${id}`),
    },
    
}
