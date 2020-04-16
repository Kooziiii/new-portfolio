<template>
    <v-app>
        <TabMenu/>
        <v-spacer width="100%" height="200px"></v-spacer>
        <v-content class="justify-center mt-12">
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

