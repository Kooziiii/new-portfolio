<template>
    <v-app>
        <TabMenu/>
        <v-spacer height="80px"></v-spacer>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer>
        </v-footer>
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

