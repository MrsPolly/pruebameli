<template>
<div>
    <b-col class="productos" cols="10">
        <b-card>
            <b-row>
                <b-col cols="8">
                    <img :src="selectedProduct.pictures[0].url" width="680" alt="">
                </b-col>
                <b-col cols="3" class="mt-5">
                    <b-row>
                        <div style="font-size:14px">{{selectedProduct.condition}} - </div>
                        <div style="font-size:14px;margin-bottom:16px">{{selectedProduct.sold_quantity}} vendidos</div>
                    </b-row>
                    <b-row>
                        <div style="font-size:24px"><strong>{{selectedProduct.title}}</strong></div>
                    </b-row>
                    <b-row>
                        <div style="font-size:46px">{{selectedProduct.price | currency}}</div>
                    </b-row>
                    <div>
                        <b-button style="width:100%" variant="primary">
                            Comprar
                        </b-button>
                    </div>
                </b-col>
            </b-row>
            <b-col cols="8">
                <div style="font-size:28px; padding-left:32px"> Descripción del producto</div> <br>
                <div style="font-size:16px; padding-left:32px"> {{description}}</div>
            </b-col>

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
    async created() {
        //   await this.getProduct(this.$route.params.id)
        await this.fetchDescription(this.$route.params.id)

    },
    methods: {
        ...mapActions('tienda', [
            'getProduct',
            'fetchDescription'

        ])
    },
    computed: {
        ...mapState('tienda', [
            'params',
            'selectedProduct',
            'description'

        ])

    },

}
</script>
