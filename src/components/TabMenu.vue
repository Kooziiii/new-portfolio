<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
                width="70%">
            <v-btn
                    width="100%"
                    color="white"
                    elevation="0"
                    class="font-weight-bold"
                    x-large
                    v-for="link in links" :key="link.text"
                    router :to="link.route">{{link.text}}</v-btn>
        </v-navigation-drawer>
        <v-app-bar app extended color="white" extension-height="14" elevation="10">
            <v-toolbar-title class="mt-3">
                <v-tab color="transparent" :ripple="false" height="100%" width="100%" router to='/'>
                    <v-img width="15vw" min-width="150px" src="../assets/KoooZiii's-logo.png"></v-img>
                </v-tab>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items
                    @click.stop="drawer = !drawer"
                    class="hidden-md-and-up mt-3">
                <v-btn color="white" elevation="0"><v-icon x-large>mdi-menu</v-icon></v-btn>
            </v-toolbar-items>
            <v-tabs class="hidden-sm-and-down">
                <v-spacer></v-spacer>
                <v-tab
                        color="white"
                        class="mt-4 mr-10
                        font-weight-bold"
                        elevation="0"
                        large
                        v-for="link in links" :key="link.text" router :to="link.route">
                        <v-icon left>{{link.icon}}</v-icon> {{link.text}}</v-tab>
            </v-tabs>
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
                    {icon:"mdi-account-box",text: 'aboutme',route: '/about'},
                    {icon:"mdi-clipboard-text",text: 'service',route:'/skills'},
                    {icon: "mdi-message-text",text: 'contact',route:'/contact'}
                ]
            }
        }
    }
</script>


