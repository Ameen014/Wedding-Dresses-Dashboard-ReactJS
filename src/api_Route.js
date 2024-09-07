const Host = "https://maryapi.laimonah-scc.com/api"

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
    dresses: {
        view: `${Host}/dresses`,
        add: `${Host}/dresses`,
        bulkDelete: (id) => (`${Host}/dresses/${id}`),
        getOne: (id) => (`${Host}/dresses/${id}`),
        update: (id) => (`${Host}/dresses/${id}`),
    },
    
}
