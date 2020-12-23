<template>
  <router-view></router-view>
</template>
<script>
import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/es'

Vue.use(ElementUI, { locale })
import VueCurrencyFilter from 'vue-currency-filter'
	Vue.use(VueCurrencyFilter, {
		symbol: '$', // El símbolo, por ejemplo €
		thousandsSeparator: '.', // Separador de miles
		fractionCount: 0, // ¿Cuántos decimales mostrar?
		fractionSeparator: ',', // Separador de decimales
		symbolPosition: 'front', // Posición del símbolo. Puede ser al inicio ('front') o al final ('') es decir, si queremos que sea al final, en lugar de front ponemos una cadena vacía ''
		symbolSpacing: true // Indica si debe poner un espacio entre el símbolo y la cantidad
	})

export default {
    name: 'app',
   
}

</script>

<style lang="scss">

  @import 'assets/scss/style.scss';

</style>
