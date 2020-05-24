<template>
    <v-content>
        <v-content></v-content>
        <v-row>
            <v-col cols="12">
                <div class=" font-italic text--black text--secondary display-2 text-center font-weight-bold mb-5">Services</div>
            </v-col>
        </v-row>
        <v-container>
            <v-row>
                <v-col v-for="(item, i) in items" :key="i" cols="12" lg="6">
                    <v-card color='white' elevation="20">
                        <div class="justify-space-between">
                            <v-card-title class="black--text text--secondary font-weight-bold pt-2 pb-2 pl-5" v-text="item.title"></v-card-title>
                            <v-divider color="#536DFE" bold></v-divider>
                            <v-row justify="center">
                                <v-col cols="4" align-self="center" px="0">
                                    <v-layout justify-center>
                                    <v-avatar class="ml-5" tile width="10vw" min-width="100px" height="7vw" min-height="70px">
                                        <v-img height="100%" :src="item.img"></v-img>
                                    </v-avatar>
                                    </v-layout>
                                </v-col>
                                <v-col cols="8" px="0">
                                    <v-card-text class="black--text" v-text="item.text"></v-card-text>
                                </v-col>
                            </v-row>
                            <!--<v-card-title class="black--text font-weight-black pt-2 pb-2 pl-5" v-text="item.title"></v-card-title>
                            <v-divider color="#536DFE"></v-divider>
                            <v-list color="white">
                                <v-list-item>
                                    <v-list-item-avatar class="mt-1 ml-5">
                                        <v-icon large :color="item.icon01color">{{item.icon01}}</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-title v-text="item.text01" class="black--text subtitle-1 font-weight-bold"></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-avatar class="mt-1 ml-5">
                                        <v-icon large :color="item.icon02color">{{item.icon02}}</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-title v-text="item.text02" class="black--text subtitle-1 font-weight-bold"></v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-avatar class="mt-1 ml-5">
                                        <v-icon large :color="item.icon03color">{{item.icon03}}</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-title v-text="item.text03" class="black--text subtitle-1 font-weight-bold"></v-list-item-title>
                                </v-list-item>
                            </v-list>-->
                        </div>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {
                    title:'Webサイト制作・運用',
                    text:"企業や個人WEBサイトの制作が可能です。テキスト作成やデザイン・コーディング〜ドメイン取得・公開まで一貫して" +
                        "お任せ下さい。また、WordPress等のCMSを使用したWebサイトの制作も経験がございます。\n" +
                        "「こんなサイトが欲しい！」にお答えします。",
                    img:require('@/assets/avatar03.svg')
                },
                {
                    title: 'Webサービスの立ち上げ・ディレクション',
                    text:"これまで複数のWebサービスやアプリの企画・立ち上げ・ディレクションの経験がございます。" +
                        "企画書作成やワイヤーフレームの作成〜、マネタイズ考案、外注を含む全体の進捗管理等" +
                        "を経験しており、スムーズなサービス開発実現のお手伝いを致します。",
                    img:require('@/assets/avatar02.svg')
                },
                {
                    title: 'カジュアルゲーム開発・運用',
                    text:"エンジニア等のメンバー数名とゲーム開発チームを組んでおります。" +
                        "「こんなゲームがあったら絶対流行る！」というアイデアがありましたら是非ご連絡下さい。" +
                        "是非一緒に実現させましょう！※弊チームの第一弾ゲームは、2020年8月リリース予定です。",
                    img:require('@/assets/avatar01.svg')
                },
                {
                    title:'IT分野の何でも屋!!',
                    text:"「こんなサービスを思い付いたんだけど、どのくらいで作れるの?」や「プロジェクトでエンジニアが必要になったから" +
                        "紹介して欲しい!」等、サービス開発に関係することでしたら何でもご相談下さい！　お力になれるよう尽力致します。",
                    img:require('@/assets/avatar04.svg')
                }
            ]
        })
    }
</script>
    <!--<v-container>
        <v-content></v-content>
        <v-row dense justify="center" align-content="center" align="center">
            <v-item-group v-model="window" class="mr-6" mandatory>
                <v-item v-for="(n ,key) in length" v-slot:default="{active, toggle}" :key="key">
                    <div>
                        <v-btn v-on:click="toggle_switch()" :input-value="active" icon @click="toggle">
                            <v-icon>mdi-record</v-icon>
                        </v-btn>
                    </div>
                </v-item>
            </v-item-group>
        <v-col class="mt-3">
            <v-window v-model="window" class="elevation-15" vertical>
                <v-window-item>
                    <v-card class="justify-center font-weight-bold pt-5 px-3">
                        <v-container>
                            <v-row align-content="center" align="center">
                                <v-col class="" lg="6" sm="12" md="12">
                                        <chart width="400%" height="250%" responsive></chart>
                                </v-col>
                                <v-col class="pt-0" lg="6" sm="12" md="12">
                                    <v-card-title class="justify-center font-weight-bold pt-0">フロントエンド</v-card-title>
                                    <v-card-text class="font-weight-bold pb-0">
                                        フロントエンド周りの経験のある技術になります。
                                        目に見える箇所を作ることがモチベーションが上がるのでフロント側の方が好きです。</v-card-text>
                                    <v-list>
                                        <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                        <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">HTML/CSS: WebサイトやLPの制作経験有り。レスポンシブ対応可能です。</v-list-item-content>
                                        <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">JavaScript : 要素に動きをつけるのに使用している程度です。</v-list-item-content>
                                        <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">jQuery     : JavaScriptと同じくらいです。</v-list-item-content>
                                        <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Vue.js     : 本サイトを使用するのに使用。componentの理解はOKです。</v-list-item-content>
                                        <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">WordPress :コーポレートサイトの制作〜運用までの経験あり。</v-list-item-content>
                                        <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                    </v-list>
                                    <v-card-text class="py-0 font-weight-bold">※なお現場での経験はありません。私の主観による評価になります。</v-card-text>
                                    <v-card-text class="font-weight-bold">チャートの見方：①基本的な構文の理解 ②数ヶ月学んだ ③ものを作ったことがある ④1人称で動ける(つもり) ⑤他人に説明ができる</v-card-text>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-window-item>
                <v-window-item>
                    <v-card class="justify-center pt-12 px-3">
                        <v-row dense align-content="center" align="center">
                            <v-col lg="6" sm="12" md="12">
                                <chart02 width="400%" height="250%" responsive></chart02>
                            </v-col>
                            <v-col class="pt-0" lg="6" sm="12" md="12">
                                <v-card-title class="justify-center font-weight-bold pt-0">サーバーサイド</v-card-title>
                                <v-card-text class="font-weight-bold pb-0">
                                    サーバーサイド周りの経験のある技術になります。 フロント側に比べて知見が少ないですが、
                                    広く浅く経験しながら、 知見を深めているところです。</v-card-text>
                                <v-list>
                                    <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Ruby(Rails) : プログラミングスクールにて学習経験があります。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Python  : 趣味でNampy,Matplotlibを使用してデータ分析を行いました。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">PHP   : WordPress使用時に手を加えました。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Node.js  : VueやReactの環境構築に使用したくらいです。 </v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">MySQL  :プログラミングスクールにて経験があります。</v-list-item-content>
                                    <v-list-item-content class="py-0 pl-5">======================</v-list-item-content>
                                </v-list>
                                <v-card-text class="py-0 font-weight-bold">※なお現場での経験はありません。私の主観による評価になります。</v-card-text>
                                <v-card-text class="font-weight-bold">チャートの見方：①基本的な構文の理解 ②数ヶ月学んだ ③ものを作ったことがある ④1人称で動ける(つもり) ⑤他人に説明ができる</v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
                <v-window-item>
                    <v-card class="justify-center font-weight-bold pt-12 px-3">
                        <v-row align-content="center" align="center">
                            <v-col lg="6" sm="12" md="12">
                                <chart03 width="400%" height="250%" responsive></chart03>
                            </v-col>
                            <v-col class="pt-0" lg="6" sm="12" md="12">
                                <v-card-title class="justify-center font-weight-bold pt-0">その他</v-card-title>
                                <v-card-text class="font-weight-bold pb-0">
                                    フロント・サーバー以外(?)の経験のある技術になります。
                                    "仲間とのサービス開発や、一時の気の迷いで触った技術をまとめました。
                                </v-card-text>
                                <v-list>
                                    <v-list-item-content class="py-0 pl-5 font-weight-bold">======================</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Unity( C#) : エンジニアと共同で、ゲーム開発経験があります。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Swift    : 簡易的なアプリの製作経験があります(アップルストア非公開)。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Firebase   : 本サイトとスマホアプリで使用経験があります。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">GCP      : 運用中サービスにて使用した経験があります。</v-list-item-content>
                                    <v-list-item-content class="body-2 py-0 pl-5 font-weight-bold">Git/Github : チーム開発時に使用経験があります。</v-list-item-content>
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
</script>-->