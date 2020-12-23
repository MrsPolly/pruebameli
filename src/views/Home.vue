<template>
<div class="app">
    <CajaBusqueda></CajaBusqueda>
    <main>
        <Breadcrumb></Breadcrumb>
        <router-view></router-view>
    </main>

</div>
</template>

<script>
// @ is an alias to /src
import CajaBusqueda from '../components/caja-busqueda.vue'
import Breadcrumb from '../components/breadcrumb.vue'

export default {
    name: 'Home',
    components: {
        CajaBusqueda,
        Breadcrumb
    }
}
</script>
