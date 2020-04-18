<template>
    <v-app>
        <TabMenu/>
        <v-spacer></v-spacer>
            <v-layout>
                <router-view></router-view>
            </v-layout>

    </v-app>
</template>

<script>
    import TabMenu from "./components/TabMenu";

    export default {
        name: 'App',
        components: {
            TabMenu
        },
        data () {
            return {
                //
            }
        }
    }
</script>

<style scoped>
</style>

