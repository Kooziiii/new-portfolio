<template>
    <v-container>
        <v-row dense>
            <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="4"
                    class="mt-3 px-3"
            >
                <v-card
                        :color="item.color"
                        elevation="15"
                        dark
                        class="mx-auto"
                >
                    <div class="justify-space-between">
                        <div>
                            <v-card-title
                                    class="black--text font-weight-bold pt-2 pb-2"
                                    v-text="item.title"
                            ></v-card-title>
                            <v-divider
                                    :inset="inset"
                                    class="grey lighten-1"
                            ></v-divider>
                            <v-carousel
                                    cycle
                                    height="400"
                                    hide-delimiter-background
                                    show-arrows-on-hover
                            >
                                <v-carousel-item
                                        v-for="(slide, i) in slides"
                                        :key="i"
                                >
                                    <v-sheet
                                            :color="colors[i]"
                                            height="100%"
                                    >
                                        <v-row
                                                class="fill-height"
                                                align="center"
                                                justify="center"
                                        >
                                            <div class="display-3">{{ slide }} Slide</div>
                                        </v-row>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                            <v-card-subtitle
                                    class="black--text font-weight-bold pt-10 body"
                                    v-text="item.subtitle"
                            ></v-card-subtitle>
                            <v-divider
                                    :inset="inset"
                                    class="grey lighten-1"
                            >
                            </v-divider>
                            <v-card-text
                                    class="black--text font-weight-bold"
                            >・言語/FW/TOOL
                            </v-card-text>
                            <v-card-text
                                    class="black--text font-weight-bold"
                                    v-text="item.textmain"
                            >
                            </v-card-text>
                            <v-card-text
                                    class="black--text font-weight-bold"
                            >・サイトはこちらから↓
                            </v-card-text>
                            <v-card-text
                                    class="black--text font-weight-bold"
                                    v-text="item.textmain"
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
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            items: [
                {
                    color: 'grey lighten-4',
                    title: '企業Webサイト制作',
                    subtitle:'wordpressを使用して企業のHPを制作致しました。\n' +
                        '公式のテーマ「Lightning」を使用したのでレスポンシ\n' +
                        'ブ対応です。ドメインの取得・レンタルサー\n' +
                        'バー設定までまるっと行いました。制作期間が一週\n' +
                        '間程だったので満足のいく出来ではないので更新中。',
                    textmain:'',
                    text: 'Foster the People',
                },
                {
                    color: 'grey lighten-4',
                    title: 'ポートフォリオサイト',
                    text: 'Ellie Goulding',
                },
                {
                    color: 'grey lighten-4',
                    title: 'カジュアルゲーム製作',
                    text: 'Ellie Goulding',
                }
            ],
        }),
    }
</script>
