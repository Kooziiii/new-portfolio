<template>
    <v-app>
        <TabMenu/>
        <v-layout>
            <router-view></router-view>
        </v-layout>
        <Footer/>
    </v-app>
</template>

<script>
    import TabMenu from "./components/TabMenu";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {Footer, TabMenu},
        data () {return {}}}
</script>
