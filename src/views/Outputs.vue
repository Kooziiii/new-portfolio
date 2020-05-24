<template>
    <v-content>
        <v-content></v-content>
        <v-row>
            <v-col cols="12">
                <div class=" font-italic text--black text--secondary display-2 text-center font-weight-bold mb-5">Skills</div>
            </v-col>
        </v-row>
    <v-container class="mt-12">
        <v-row justify="center">
            <v-expansion-panels popout>
                <v-expansion-panel
                        v-for="(item,i) in 5"
                        :key="i"
                >
                    <v-expansion-panel-header>Item</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
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
                    title: '【運営中】コーポレートサイト',
                    subtitle:'wordpressを使用し、レスポンシブ対応のWebサイトを制作しました。\n' +
                        'WordPressの構築からドメインの取得・レンタルサーバー設定まで全ての工程を担当しました。\n' +
                        '現在もバージョンアップ対応、改修を含む、運用・保守を行なっております。',
                    skill:'　HTML/CSS/PHP/WordPress/x-server...',
                    image01:require('@/assets/corporate01.png'),
                    image02:require('@/assets/corporate02.png'),
                    image03:require('@/assets/corporate03.png'),
                    period:'　約1週間(20時間程度)'
                },
                {
                    color: 'grey lighten-4',
                    title: '【運営中】ポートフォリオサイト',
                    subtitle:'本ポートフォリオサイトです。vue.js＋firebaseでサーバーレスかつSPA\n' +
                        '設計にしました。CMS等を使用せずに1からWebサイトを作るのが初めてだった為、分からない\n'+
                        'ことも多々ありましたが、なんとか完成させることができました。\n' ,
                    skill:'　JavaScript(Vue.js,Chart.js)/firebase...',
                    image01:require('@/assets/portfolio01.png'),
                    image02:require('@/assets/portfolio02.png'),
                    image03:require('@/assets/portfolio03.png'),
                    period:'　約2週間(40時間程度)'
                },
                {
                    color: 'grey lighten-4',
                    title: '【製作中】スマホカジュアルゲーム',
                    subtitle:'友人のゲームエンジニアとカジュアル\n' +
                        'ゲームを製作しております。IOS、Androidともに対応予定です。\n' +
                        '私の主な担当は企画、画面の設計・実装、外注先折衝などです。\n' +
                        'リリースは2020年7月頃を予定しております。(画像はイメージです。)',
                    skill:'　Unity(C#)/JavaScript/GCP/Github...',
                    image01:require('@/assets/tanks.png'),
                    image02:require('@/assets/tanks.png'),
                    image03:require('@/assets/tanks.png'),
                    period:'　約3ヶ月(200時間程度)見込み'
                }
            ],
        }),
    }
</script>
