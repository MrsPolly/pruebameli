<template>
<div>
    <b-col cols="10" class="bread" >
        <b-breadcrumb class="breadcrum" :items="this.$route.meta.breadcrumb"></b-breadcrumb>
    </b-col>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    text: 'Admin',
                    href: '#'
                },
                {
                    text: 'Manage',
                    href: '#'
                },
                {
                    text: 'Library',
                    active: true
                }
            ]
        }
    }

}
</script>
<style lang="scss">
.bread{
    margin: auto;
}

.breadcrum{    
    font-size: 14px;
    color: #999999;
}

    
</style>
