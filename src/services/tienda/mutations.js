export function setProducts(state, products) {  
    state.products = products;
}

export function setProduct(state, product) {
    state.selectedProduct = product;
}
export function setDescription(state, product) {
    state.description = product.plain_text
    console.log(state.description)
}

//------------------------ PAGINACIÓN ------------------------//

export function setFilter(state, filter) {
    state.params.page = 1
    state.params.filter = filter
}

export function setPerPage(state, perPage) {
    state.params.page = 1
    state.params.perPage = perPage
}

export function setPage(state, page) {
    state.params.page = page
}

export function setSortBy(state, sortBy) {
    state.params.sortBy = sortBy
}

export function setSort(state, sort) {
    state.params.sort = sort
}
