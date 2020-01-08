<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <customer-list :active="isActive" @click="handleClick($event)"/>
    </div>
</template>

<script>
    import CustomerList from "./CustomerList";

    export default {
        name: 'HelloWorld',
        components: {CustomerList},
        data() {
            return {
                isActive: true
            }
        }
        ,
        props: {
            msg: String
        },
        methods:{
            handleClick(event){
                // eslint-disable-next-line no-console
                console.log('captured: ', event);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
