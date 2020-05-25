<template>
    <v-content>
        <v-content></v-content>
        <v-row justify="center">
            <v-col cols="12">
                <div class="font-italic text--black text--secondary display-2 text-center center font-weight-bold">Skills</div>
                <v-divider></v-divider>
            </v-col>
        </v-row>
    <v-container class="mt-12">
        <v-row justify="center">
            <v-col lg="6" md="12">
                <v-layout justify-center class="text--black mb-5 text--secondary text--secondary title font-weight-bold">Web関連</v-layout>
            <v-expansion-panels popout>
                <v-expansion-panel v-for="(item,i) in items" :key="i">
                    <v-expansion-panel-header >
                        <v-layout class="black--text" v-text="item.title"></v-layout>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content v-text="item.text"></v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
            <v-col lg="6" md="12">
                <v-layout justify-center class="text--black mb-5 text--secondary title font-weight-bold">その他</v-layout>
                <v-expansion-panels popout>
                    <v-expansion-panel v-for="(item,i) in items" :key="i">
                        <v-expansion-panel-header >
                            <v-layout class="black--text" v-text="item.title"></v-layout>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content v-text="item.text"></v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
    </v-content>
</template>
<script>
    export default {
        data: () => ({
            colors: [
                'warning',
                'pink darken-2',
                'red lighten-1'
            ],
            items: [
                {
                    color: 'grey lighten-4',
                    title: '企画・サービス立ち上げスキル',
                    text:'友人のゲームエンジニアとカジュアル\n' +
                        'ゲームを製作しております。IOS、Androidともに対応予定です。\n' +
                        '私の主な担当は企画、画面の設計・実装、外注先折衝などです。\n' +
                        'リリースは2020年7月頃を予定しております。(画像はイメージです。)',
                },
                {
                    color: 'grey lighten-4',
                    title: 'デザイン・コーディングスキル',
                    text:'wordpressを使用し、レスポンシブ対応のWebサイトを制作しました。\n' +
                        'WordPressの構築からドメインの取得・レンタルサーバー設定まで全ての工程を担当しました。\n' +
                        '現在もバージョンアップ対応、改修を含む、運用・保守を行なっております。',
                },
                {
                    color: 'grey lighten-4',
                    title: 'プログラミングスキル',
                    text:'本ポートフォリオサイトです。vue.js＋firebaseでサーバーレスかつSPA\n' +
                        '設計にしました。CMS等を使用せずに1からWebサイトを作るのが初めてだった為、分からない\n'+
                        'ことも多々ありましたが、なんとか完成させることができました。\n' ,
                },
                {
                    color: 'grey lighten-4',
                    title: 'プログラミングスキル',
                    text:'本ポートフォリオサイトです。vue.js＋firebaseでサーバーレスかつSPA\n' +
                        '設計にしました。CMS等を使用せずに1からWebサイトを作るのが初めてだった為、分からない\n'+
                        'ことも多々ありましたが、なんとか完成させることができました。\n' ,
                },
                {
                    color: 'grey lighten-4',
                    title: 'プログラミングスキル',
                    text:'本ポートフォリオサイトです。vue.js＋firebaseでサーバーレスかつSPA\n' +
                        '設計にしました。CMS等を使用せずに1からWebサイトを作るのが初めてだった為、分からない\n'+
                        'ことも多々ありましたが、なんとか完成させることができました。\n' ,
                }
            ],
        }),
    }
</script>
