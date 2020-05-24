<template>
    <v-content class="mt-7">
    <v-container>
        <v-row no-gutters>
            <v-col lg="8" sm="8" md="8" class="pa-2" order-md="12">

                <v-img src="../assets/HomeImage.svg"></v-img>

            </v-col>
            <v-col lg="4" sm="4" md="4" class="px-7 mt-12" align-self="center" order-md="1">
                <div class="title font-weight-bold text-justify text-center text--black text--secondary">
                    私のポートフォリオサイトへお越し頂き、 誠にありがとうございます。
                    何かお困りごとがありましたらお気軽にお声掛けくださいませ。</div>
                <v-btn
                        router to='/contact'
                        x-large width="100%"
                        color="#536DFE"
                        elevation="15"
                        rounded
                        class="white--text font-weight-bold mt-5">相談する</v-btn>
            </v-col>
        </v-row>
    </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>