<template>
    <v-container>
        <v-row dense>
            <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="4"
                    class="pt-10 mt-12 px-3"
            >
                <v-card
                        :color="item.color"
                        elevation="15"
                        dark
                        class="mx-auto"
                        :href="item.link"
                >
                    <div class="justify-space-between">
                        <div>
                            <v-card-title
                                    class="black--text font-weight-bold pt-2 pb-1 subtitle-1"
                                    v-text="item.title"
                            ></v-card-title>
                            <v-divider
                                    :inset="inset"
                                    class="grey lighten-1"
                            ></v-divider>
                            <v-carousel
                                    height="180"
                                    hide-delimiter-background
                                    show-arrows-on-hover
                            >
                                <v-carousel-item
                                        v-for="(color, i) in colors"
                                        :key="i"
                                >
                                    <v-sheet
                                            :color="colors[i]"
                                            height="100%"
                                    >
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                            <v-card-subtitle
                                    class="black--text font-weight-bold pt-5 body"
                                    v-text="item.subtitle"
                            ></v-card-subtitle>
                            <v-divider
                                    :inset="inset"
                                    class="grey lighten-1"
                            >
                            </v-divider>
                            <v-card-text
                                    class="black--text font-weight-bold pb-1 pt-3"
                            >・言語/FW/TOOL
                            </v-card-text>
                            <v-card-text
                                    class="black--text font-weight-bold pb-2 pt-1"
                                    v-text="item.skill"
                            >
                            </v-card-text>
                        </div>

                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        inset: false,
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
                        'WordPressの構築からドメインの取得・レンタルサー\n' +
                        'バー設定まで全ての工程を担当しました。現在もバージョンアップ対応や\n' +
                        '改修を含む、運用・保守を行なっております。',
                    skill:'　HTML/CSS/PHP/WordPress/x-server...',
                    link: 'http://borderless-p.jp/',
                },
                {
                    color: 'grey lighten-4',
                    title: '【運営中】ポートフォリオサイト',
                    subtitle:'本ポートフォリオサイトです。vue.js＋firebaseでサーバーレスかつSPA\n' +
                        '設計にしました。CMS等を使用せずに1からWebサイトを作るのが初めてだった為、分からない\n'+
                        'ことも多々ありましたが、なんとか完成させることができました。\n' ,
                    skill:'　JavaScript(Vue.js,Chart.js)/firebase...',
                    link: 'https://sendmail-5a478.web.app',
                },
                {
                    color: 'grey lighten-4',
                    title: '【製作中】スマホカジュアルゲーム',
                    subtitle:'友人のゲームエンジニアとカジュアル\n' +
                        'ゲームを製作しております。IOS、Androidともに対応しております。\n' +
                        '私の主な担当は企画、画面の設計・実装、外注先折衝などです。\n' +
                        'リリースは2020年7月頃を予定しております。(画像はイメージです。)',
                    skill:'　Unity(C#)/JavaScript/GCP/Github...',
                }
            ],
        }),
    }
</script>
