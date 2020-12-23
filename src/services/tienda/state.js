export const defaultSelectedProduct = () => {
    return {
        price:0,
        title:'',
        long_description:'',
        condition:'',
        sold_quantity:'',
        thumbnail:'',
       
    }
}
export default {
    description:'',
    selectedProduct: defaultSelectedProduct(),
    products: [],
    error: false,
    errorMessage: '',
    params: {
        q:'',
        paginate: true,
        page: 1,
    }
}
