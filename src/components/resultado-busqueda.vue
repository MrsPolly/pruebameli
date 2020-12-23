<template>
<div>
    <b-col class="productos" cols="10">
        <b-card>
            <div v-for="prod in products.results" :key="prod.id">
               <b-row class="lista-prod">
                    <div>
                        <router-link :to="`/items/${prod.id}`" class="a-image">
                            <img :src="prod.thumbnail" alt="product image" width="180" @click="detalleProducto(prod.id)">
                        </router-link>
                    </div>
                    <b-col cols="6" @click="detalleProducto(prod.id)">
                        <router-link :to="`/items/${prod.id}`">
                            <div class="desc-product" style="font-size:24px">{{prod.price | currency}}</div>
                            <div class="desc-product" style="font-size:18px">{{prod.title}}</div>
                        </router-link>
                    </b-col>
                    <b-col cols="4" @click="detalleProducto(prod.id)">
                        <router-link :to="`/items/${prod.id}`">
                            <div class="desc-product" style="font-size:12px">{{prod.address.state_name}}</div>
                        </router-link>
                    </b-col>
                </b-row>
                <hr>
            </div>
        </b-card>
    </b-col>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from "vuex";
export default {
    data() {
        return {

        }
    },
    methods: {
        async detalleProducto(id) {
            await this.getProduct(id)
            await this.fetchDescription(id)
        },
        filterPagination() {
            this.fetchProducts()

        },
        ...mapActions('tienda', [
            'fetchProducts',
            'getProduct',
            'fetchDescription'

        ])
    },
    computed: {
        ...mapState('tienda', [
            'params',
            'products'

        ])

    },

}
</script>

<style lang="scss">
.desc-product{
    color:#666666;
    text-decoration:none;   
}

a:hover{
    text-decoration:none !important
}
.lista-prod{

}




</style>
