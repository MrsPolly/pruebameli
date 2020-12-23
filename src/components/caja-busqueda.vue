<template>
<div class="busca">
    <b-row>
        <b-col class="search mt-3" cols="10">
            <b-input-group>
                <b-col cols="2">
                    <img src="../assets/Logo_ML.png" alt="">
                </b-col>
                <b-col cols="8">
                    <b-input-group-append>
                        <b-form-input autofocus v-model="params.q" placeholder="Nunca dejes de buscar" />
                        <router-link to="/items/search=" class="lupa">
                            <img src="../assets/ic_Search.png" class="img-lupa" @click="search(params.q)">
                        </router-link>
                    </b-input-group-append>
                </b-col>
            </b-input-group>
        </b-col>
    </b-row>
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
        search() {
            this.fetchProducts()
        },
        ...mapActions('tienda', [
            'fetchProducts'
        ])
    },
    computed: {
        ...mapState('tienda', [
            'params'

        ])

    },

}
</script>

<style lang="scss">
.busca {
    background-color: #ffe600;
    height: 70px;
}

.search {
    font-size: 18px;
    margin: auto;
}

a.lupa {
    background-color: #eeeeee;
    border-radius: 1px;
    padding: 5px;
}
</style>
