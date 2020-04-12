<template>
    <nav>
        <v-app-bar flat app class="mt-7 mx-10" color="white">
            <v-toolbar-title>
                <span class="display-2 font-weight-bold">KoooZiii's</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    class="mx-2 mt-1
                    font-weight-bold"
                    x-large
                    v-for="link in links" :key="link.text"
                    router :to="link.route">
                <v-icon left>{{link.icon}}</v-icon> {{link.text}}
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: "TabMenu",
        data() {
            return {
                drawer: false,
                links:[
                    {icon:"mdi-account-box",text: 'aboutme',route: '/'},
                    {icon:"mdi-chart-bar",text: 'outputs',route:'/outputs'},
                    {icon:"mdi-clipboard-text",text: 'skills',route:'/skills'},
                    {icon: "mdi-message-text",text: 'contact',route:'/contact'}
                ]
            }
        }

    }
</script>

<style scoped>

</style>