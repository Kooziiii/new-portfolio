<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                width="100%">
            <v-btn
                    width="100%"
                    color="white"
                    elevation="0"
                    class="font-weight-bold"
                    x-large
                    v-for="link in links" :key="link.text"
                    router :to="link.route">{{link.text}}</v-btn>
        </v-navigation-drawer>
        <v-app-bar app extended color="white" extension-height="40">
            <v-toolbar-title class="mt-10">
                <span class="display-2 font-weight-bold">KoooZiii's</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items
                    @click.stop="drawer = !drawer"
                    class="hidden-md-and-up mt-10"
            ><v-btn color="white" elevation="0"><v-icon x-large>mdi-menu</v-icon></v-btn>
            </v-toolbar-items>

            <v-toolbar-items class="hidden-sm-and-down mt-10">
                <v-btn
                        class="mx-2 mt-1
                        font-weight-bold"
                        x-large
                        v-for="link in links" :key="link.text"
                        router :to="link.route">
                        <v-icon left>{{link.icon}}</v-icon> {{link.text}}
            </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: "TabMenu",
        data() {
            return {
                drawer: null,
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