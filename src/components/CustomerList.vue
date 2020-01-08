<template>
    <div>
        <h2>Our customers:</h2>
    <ul :class="{'active': active, 'inactive' : !active}" @click="handleClick">
        <li>Microsoft</li>
        <li>Twitter</li>
        <li>Google</li>
        <li>Facebook</li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "CustomerList",
        props:{
            active:{
                type: Boolean,
                required: true,
                default: true
            }
        },

        data(){
            return{
            }
        },
        methods:{
            handleClick(){
                this.$emit('click', 'customer list clicked...1,2,3')
            }
        }
    }
</script>

<style scoped>
    .active{
        color: red;
        font-size: 18px;
    }
    .inactive{
        color: blue;
        font-size: 18px;
    }
</style>
