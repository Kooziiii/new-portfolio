<template>
    <v-row align="center" justify-center>
        <v-item-group
                v-model="window"
                class="shrink mr-6"
                mandatory
                tag="v-flex"

        >
            <v-item
                    v-for="n in length"
                    v-slot:default="{active, toggle}"
            >
                <div>
                    <v-btn
                            v-on:click="toggle_switch()"
                            :input-value="active"
                            icon
                            @click="toggle"
                    >
                        <v-icon>mdi-record</v-icon>
                    </v-btn>
                </div>
            </v-item>
        </v-item-group>

        <v-col
                class="mt-12"
        >
            <v-window
                    v-model="window"
                    class="elevation-15"
                    vertical
            >
                <v-window-item
                        length="3"
                        v-for="(item, i) in items"
                        :key="i"
                >
                    <v-card height="500px" class="pt-12 px-12">
                        <v-row>
                        <v-col cols="6">
                            <chart></chart>
                        </v-col>
                        <v-col cols="6">
                            <v-card-text
                                    v-text="item.headtext"
                            >
                            </v-card-text>
                                <v-card-title
                                        v-text="item.text"
                                >
                                </v-card-title>
                        </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
</template>
<script>
    import Chart from "../components/Chart";
    export default {
        components: {Chart},
        data: () => (
            {
            length: 3,
            window: 0,
                items:[
                    {
                        headtext:"フロントエンド技術の習得具合です。HTML/CSSは基本的な考え方は" +
                            "理解できていると思います。JavaSvriptは画面の動きを作るのによく使う程度で" +
                            "サーバー側との連携はあまり経験がありません。vue.jsは本ポートフォリオを" +
                            "作る過程で学び、componentの理解等は一定できたかと思ってます。" +
                            "※全て「個人的見解」です。現場での業務経験はありません。",
                        text:"ノーマル"
                    },
                    {
                        text:"アプノーマル"
                    },
                    {
                        text:"結果ノーマル"
                    }
                ]
            }
        ),
    }
</script>
<style>
    .v-content{
        width:80%;
        margin-left:10%;
    }
</style>
