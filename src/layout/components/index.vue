<template>
    <div class=''></div>
</template>

<script>
import { ref, reactive, toRefs,computed } from 'vue';
import { useStore } from 'vuex';

export default {

setup(props){
const store = useStore()
const data = reactive({})

return{...toRefs(data)}
}
};

</script>

<style lang='scss'>

</style>
