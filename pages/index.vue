<template>
    <Alert/>
    <h1>This is the Index Page</h1>
    <img src="@/assets/pic-1.png" alt="image"/>
</template>

<script>
import { useUtils } from '~/composables/useUtils';
export default{


    methods:{
        show(){
            console.log('Hry there')
        },
    },
    mounted(){
        const {sayHello} = useUtils()
        this.show()
        sayHello()
    }

}


</script>
