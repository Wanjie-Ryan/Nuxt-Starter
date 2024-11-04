<template>
    <div>
        Single Person Id: {{ $route.params.id }}
    </div>
</template>

<script>


export default{
    data(){
        return{
            personId: this.$route.params.id
        }
    },
    // the watch property only logs the id to the console when the route changes
    watch:{
        '$route.params.id'(newId){
            this.personId = newId
            console.log('The id',this.personId)
        }
    },
    // the mounted hook logs the id to the console when the component mounts
    mounted(){
        console.log('The id',this.personId)
        // nuxt is a built in composable that provides a way to acess shared runtime context of Nuxt available on both client and server side. it helps you access vue app instance runtime hooks, runtime config vars and internal states.
        console.log('Nuxt app', this.$nuxt)

    }
}

</script>
