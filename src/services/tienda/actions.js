import $http from '../../axios-instance'
import { Notification } from 'element-ui'

// Obtener banners
export async function fetchProducts({ commit, state, dispatch }, requestParameters = { params: state.params }) {
    await $http.get('sites/MLA/search', requestParameters)
        .then((response) => {
            commit('setProducts', response.data)
        }).catch((error) => {
            Notification.error({
                title: '¡Error!',
                message: error.message,
                type: 'error',
                duration: 1500,
                customClass: 'notification-box'
            })
            commit('productError', error.message)
        })
}

// Obtener banners
export async function getProduct({ commit, state, dispatch }, id) {
    await $http.get(`/items/${id}`)
        .then((response) => {
            commit('setProduct', response.data)
            dispatch('fetchDescription',id)
        }).catch((error) => {
            Notification.error({
                title: '¡Error!',
                message: error.message,
                type: 'error',
                duration: 1500,
                customClass: 'notification-box'
            })
            commit('productError', error.message)
        })
}

// Obtener banners
export async function fetchDescription({ commit, state, dispatch }, id) {
    await $http.get(`/items/${id}/description`)
        .then((response) => {
            commit('setDescription', response.data)
        }).catch((error) => {
            Notification.error({
                title: '¡Error!',
                message: error.message,
                type: 'error',
                duration: 1500,
                customClass: 'notification-box'
            })
            commit('productError', error.message)
        })
}

//------------------------ PAGINACIÓN ------------------------//

export function setFilterPagination({ commit, dispatch }, filter) {
    console.log(filter)
    commit('setFilter', filter.target.value)
    dispatch('fetchProducts')
}

export function setPerPagePagination({ commit, dispatch }, perPage) {
    commit('setPerPage', parseInt(perPage.target.value))
    dispatch('fetchProducts')
}

export function setPagePagination({ commit, dispatch }, page) {
    commit('setPage', parseInt(page))
    dispatch('fetchProducts')
}

export function setSortByPagination({ commit, dispatch }, sortBy) {
    commit('setSortBy', sortBy)
        // dispatch('fetchProducts')
}

export function setSortPagination({ commit, dispatch }, sort) {
    commit('setSort', sort)
        // dispatch('fetchProducts')
}
