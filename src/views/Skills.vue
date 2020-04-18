<template>
    <v-container><v-content width="100%" height="300px"></v-content>
    <v-row dense justify="center" align-content="center" align="center">
        <v-item-group
                v-model="window"
                class="mr-6"
                mandatory
        >
            <v-item
                    v-for="(n ,key) in length"
                    v-slot:default="{active, toggle}"
                    :key="key"
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

        <v-col>
            <v-window v-model="window" class="elevation-15" vertical >
                <!-- windowごとのchartの切り替えの方法が分からなかった為、3回記述を繰り返し-->
                <v-window-item>
                    <v-card class="justify-center font-weight-bold pt-12 px-12">
                        <v-row>
                        <v-col cols="6"><chart></chart></v-col>
                        <v-col cols="6">
                            <v-card-title class="justify-center font-weight-bold">フロントエンド
                            </v-card-title>
                            <v-card-text class="font-weight-bold">
                                フロントエンド周りの経験のある技術になります。
                                目に見える箇所を作ることがモチベーションが上がるので
                                フロント側の方が好きです。
                            </v-card-text>
                            <v-list>
                                <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">HTML/CSS: WebサイトやLPの制作経験有り。レスポンシブ対応可。</v-list-item-content>
                                <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">JavaScript : 要素に動きをつけるのに使用している程度です。</v-list-item-content>
                                <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">jQuery     : JavaScriptと同じくらいです。</v-list-item-content>
                                <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Vue.js     : 本サイトを使用するのに使用。componentの理解はOK。</v-list-item-content>
                                <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">WordPress :コーポレートサイトの制作〜運用までの経験あり。</v-list-item-content>
                                <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                            </v-list>
                            <v-card-text
                                    class="py-0 font-weight-bold"
                            >※なお現場での経験はありません。私の主観による評価になります。</v-card-text>
                            <v-card-text class="font-weight-bold">チャートの見方：①基本的な構文の理解 ②数ヶ月学んだ ③ものを作ったことがある ④1人称で動ける(つもり) ⑤他人に説明ができる</v-card-text>
                        </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
                <v-window-item>
                    <v-card class="justify-center font-weight-bold pt-12 px-12">
                        <v-row>
                            <v-col cols="6"><chart02></chart02></v-col>
                            <v-col cols="6">
                                <v-card-title class="justify-center font-weight-bold">サーバーサイド
                                </v-card-title>
                                <v-card-text class="font-weight-bold">
                                    サーバーサイド周りの経験のある技術になります。
                                    フロント側に比べて知見が少ないですが、広く浅く経験し、
                                    知見を深めているところです。
                                </v-card-text>
                                <v-list>
                                    <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Ruby(Rails) : プログラミングスクールにて学習経験あり。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Python  : 趣味でNampy,Matplotlibを使用してデータ分析を行った。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">PHP   : WordPress使用時に少々手を加えた程度。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Node.js  : VueやReactの環境構築に使用する程度。 </v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">MySQL  :プログラミングスクールにて経験あり。</v-list-item-content>
                                    <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                </v-list>
                                <v-card-text
                                        class="py-0 font-weight-bold"
                                >※なお現場での経験はありません。私の主観による評価になります。</v-card-text>
                                <v-card-text class="font-weight-bold">チャートの見方：①基本的な構文の理解 ②数ヶ月学んだ ③ものを作ったことがある ④1人称で動ける(つもり) ⑤他人に説明ができる</v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
                <v-window-item>
                    <v-card class="justify-center font-weight-bold pt-12 px-12">
                        <v-row>
                            <v-col cols="6"><chart03></chart03></v-col>
                            <v-col cols="6" >
                                <v-card-title class="justify-center font-weight-bold">その他</v-card-title>
                                <v-card-text class="font-weight-bold">
                                    フロント・サーバー以外(?)の経験のある技術になります。
                                    "仲間とのサービス開発や、一時の気の迷いで触った技術をまとめました。
                                </v-card-text>
                                <v-list>
                                    <v-list-item-content class="py-0 pl-5 font-weight-bold">======================</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Unity( C#) : エンジニアと共同で、ゲーム開発経験あり。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Swift    : 簡易的なアプリの製作経験あり(アップルストア非公開)。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Firebase   : 本サイトとスマホアプリで使用経験あり。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">GCP      : 運用中サービスにて使用した経験あり。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Git/Github : チーム開発時に使用経験あり。</v-list-item-content>
                                    <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                </v-list>
                                <v-card-text
                                        class="py-0 font-weight-bold"
                                >※なお現場での経験はありません。私の主観による評価になります。</v-card-text>
                                <v-card-text class="font-weight-bold">チャートの見方：①基本的な構文の理解 ②数ヶ月学んだ ③ものを作ったことがある ④1人称で動ける(つもり) ⑤他人に説明ができる</v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
    </v-container>
</template>
<script>
    import Chart from "../components/Chart";
    import Chart02 from "../components/Chart02";
    import Chart03 from "../components/Chart03";
    export default {
        components: {Chart03, Chart02, Chart},
        data: () => (
            {
            length: 3,
            window: 0
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
