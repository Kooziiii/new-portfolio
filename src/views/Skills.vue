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
                    <v-card height="500px"
                            class="justify-center font-weight-bold pt-12 px-12">
                        <v-row>
                        <v-col cols="6">
                            <chart></chart>
                        </v-col>
                        <v-col cols="6">
                            <v-card-title
                                    class="justify-center"
                                    v-text="item.title"
                            >
                            </v-card-title>
                            <v-card-text
                                    v-text="item.headtext"
                            >
                            </v-card-text>
                            <v-list>
                                <v-list-item-content class="py-0 pl-5 font-weight-regular">======================</v-list-item-content>
                                <v-list-item-content v-text="item.skill01" class="body-2 py-0 pl-5 font-weight-regular"></v-list-item-content>
                                <v-list-item-content v-text="item.skill02" class="body-2 py-0 pl-5 font-weight-regular"></v-list-item-content>
                                <v-list-item-content v-text="item.skill03" class="body-2 py-0 pl-5 font-weight-regular"></v-list-item-content>
                                <v-list-item-content v-text="item.skill04" class="body-2 py-0 pl-5 font-weight-regular"></v-list-item-content>
                                <v-list-item-content v-text="item.skill05" class="body-2 py-0 pl-5 font-weight-regular"></v-list-item-content>
                                <v-list-item-content class="py-0 pl-5 font-weight-regular">======================</v-list-item-content>
                            </v-list>
                            <v-card-text
                                    class="py-0"
                            >※なお現場での経験はありません。私の主観による評価になります。</v-card-text>
                            <v-card-text>チャートの見方：①基本的な構文の理解 ②数ヶ月学んだ ③ものを作ったことがある ④1人称で動ける(つもり) ⑤他人に説明ができる</v-card-text>
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
                        headtext:
                            "フロントエンド周りの経験のある技術になります。" +
                            "目に見える箇所を作ることがモチベーションが上がるので" +
                            "フロント側の方が好きです。",
                        title:"フロントエンド",
                        skill01:"HTML/CSS: WebサイトやLPの制作経験有り。レスポンシブ対応可。",
                        skill02:"JavaScript : 要素に動きをつけるのに使用している程度です。",
                        skill03:"jQuery　 　: JavaScriptと同じくらいです。",
                        skill04:"Vue.js　 　: 本サイトを使用するのに使用。componentの理解はOK。",
                        skill05:"WordPress :コーポレートサイトの制作〜運用までの経験あり。"
                    },
                    {
                        headtext:
                            "サーバーサイド周りの経験のある技術になります。" +
                            "フロント側に比べて知見が少ないですが、広く浅く経験し、" +
                            "知見を深めているところです。",
                        title:"サーバーサイド",
                        skill01:"Ruby(Rails) : プログラミングスクールにて学習経験あり",
                        skill02:"Python　: 趣味でNampy,Matplotlibを使用してデータ分析を行った。",
                        skill03:"PHP 　　: WordPress使用時に少々手を加えた程度。",
                        skill04:"node.js　: VueやReactの環境構築に使用する程度。 ",
                        skill05:"MySQL　:プログラミングスクールにて経験あり。"
                    },
                    {
                        headtext:
                            "フロント・サーバー以外(?)の経験のある技術になります。" +
                            "仲間とのサービス開発や、一時の気の迷いで触った技術をまとめました。" ,
                        title:"その他",
                        skill01:"Unity( C#) : エンジニアと共同で、ゲーム開発経験あり。",
                        skill02:"Swift　 　 : 簡易的なアプリの製作経験あり(アップルストア非公開)。",
                        skill03:"firebase　 : 本サイトとスマホアプリで使用経験あり。",
                        skill04:"GCP　　　: 運用中サービスにて使用した経験あり。",
                        skill05:"Git/Github : チーム開発時に使用経験あり。"
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
