<template>
    <v-content>
        <v-content></v-content>
        <v-row>
            <v-col cols="12">
                <div class=" font-italic text--black text--secondary display-2 text-center font-weight-bold mb-5"> Introduce</div>
                <v-divider></v-divider>
            </v-col>
        </v-row>
            <v-container>
                <v-row>
                    <v-col lg="5" md="5" sm="12" class="justify-center">
                        <v-card width="auto" min-width="250">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="15vw" min-height="200px"></v-img>
                            <v-card-title>自己紹介</v-card-title>
                            <v-card-subtitle>
                                初めまして、東京都在住のKoooZiiiと申します。
                                フリーランスエージェント・SES営業を経て、現在はWebサービスの立ち上げに従事しております。
                                また、個人的にはゲームやアプリを開発するコミュニティーを運営しております。
                                私でお力になれることがございましたら、是非お声がけ頂けると嬉しいです。
                                どうぞよろしくお願いいたします。
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-btn color="#00acee" text href="https://twitter.com/Koooziii1" >Twitter</v-btn>
                                <v-btn color="#008000" text href="https://github.com/Kooziiii">Github</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="show = !show">
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        Hi, my name is KoooZiii and I live in Tokyo.
                                        After working as a freelance agent and SES sales,
                                        I am currently engaged in launching Web services.
                                        Also, I personally run a community that develops games and apps.
                                        If you have any experience with me, I would be happy if you could speak out!
                                        Please see another page for the applicable range.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                    <v-col lg="7" md="7" sm="12">
                        <v-timeline>
                            <v-timeline-item
                                    v-for="(event, i) in events"
                                    :key="i"
                                    color="#536DFE"
                            >
                                <template v-slot:opposite>
                                    <span class="text--black" v-text="event.time"></span>
                                </template>
                                <v-card class="elevation-2">
                                    <v-card-text v-text="event.text"></v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </v-container>
    </v-content>
</template>
<script>
    export default {
        data: () => ({
            show: false,
            events: [
                {
                    time: "1996年",
                    text: '鹿児島県鹿児島市で生まれる',
                },
                {
                    time: "2014年",
                    text: '鹿児島の公立高校卒業後、国立信州大学経済学部に入学',
                },
                {
                    time: "2017~18年",
                    text: '大学在学中に、不動産ベンチャーにてインターンを経験',
                },
                {
                    time: "2018年",
                    text: 'プログラミングスクールを経て、フリーランス支援会社に営業職として就職',
                },
                {
                    time: "2019年~現在",
                    text: '競合会社へ転職、その後、転職先上司と共に会社の立ち上げ、Webサービス開発に従事',
                },
            ],
        }),
    }
</script>


    <!-- <template>
    <v-container>
        <v-content></v-content>
        <v-row dense>
            <v-col class="px-3" lg="4" sm="12" md="12">
                <v-card color='grey lighten-4' elevation="15" dark>
                    <div class="justify-space-between">
                        <v-card-title class="black--text font-weight-black pt-2 pb-2 pl-5">PROFILE</v-card-title>
                        <v-divider color="red"></v-divider>
                        <v-card-actions>
                            <v-list-item class="grow">
                                <v-list-item-avatar width="8vw" height="8vw" min-width="60px" min-height="60px" class="ml-3 my-8">
                                    <v-img height="100%" class="elevation-6" src="../assets/portfoio.jpg"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content class="ml-2">
                                    <v-list-item-text class="black--text font-weight-bold py-0 caption">ニックネーム</v-list-item-text>
                                    <v-list-item-text class="black--text font-weight-bold py-0 title">KoooZiii</v-list-item-text>
                                    <v-list-item class="pl-0">
                                        <v-btn class="px-2" href="https://qiita.com/KoooZiiii">Qiita</v-btn>
                                        <v-btn class="ml-2 px-2" href="https://github.com/Kooziiii">Github</v-btn>

                                    </v-list-item>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
            <v-col lg="8" sm="12" md="12" class="px-3">
                <v-card color='grey lighten-4' elevation="15" dark>
                    <div class="justify-space-between">
                        <v-card-title class="black--text font-weight-black pt-2 pb-2 pl-5">INTRODUCTION</v-card-title>
                        <v-divider color="deep-orange"></v-divider>
                        <v-card-subtitle class="black--text font-weight-bold mt-2" size="10">
                            こんにちは。KoooZiiiと申します。本ページをご覧頂きありがとうございます。
                            信州大学経済学部を卒業後、ベンチャー企業にてフリーランスエンジニアへの
                            案件紹介エージェントを経て、現在は前職の上司とともに、 同業種での会社の
                            立ち上げを行っております。 仕事柄、エンジニアの方と触れ合うことが多く、
                            その中で「自分の手でサービスを作れるようになりたい」という想いが強くなり、
                            エンジニアを志すようになりました。 もともと大学時代からプログラミングの学習を
                            継続しており、3ヶ月間プログラミングスクールにも通っておりましたので、
                            プログラミングの基礎の基礎の基礎は理解できていると思います。
                            まだまだ駆け出しの身ではありますが、どうぞよろしくお願い致します！</v-card-subtitle>
                    </div>
                </v-card>
            </v-col>
            <v-col v-for="(item, i) in items" :key="i" lg="4" sm="12" md="12" class="mt-3 px-3">
                <v-card color='grey lighten-4' elevation="15" dark>
                    <div class="justify-space-between">
                        <v-card-title class="black--text font-weight-black pt-2 pb-2 pl-5" v-text="item.title"></v-card-title>
                        <v-divider :color="item.bordercolor"></v-divider>
                        <v-list color="grey lighten-4">
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
                        </v-list>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
      items: [
          {
              height: '0',
              bordercolor:'green',
              title:'QUALIFICATION',
              text01: 'TOEICスコア 640',
              text02:'宅地建物取引主任者資格',
              text03:'ITパスポート etc...',
              icon01:'mdi-numeric-1-box-multiple',
              icon02:'mdi-city',
              icon03:'mdi-clipboard-account',
              icon01color:'green',
              icon02color:'green',
              icon03color:'green'
          },
          {
              height: '0',
              bordercolor:'blue',
              title: 'EXPERIENCE',
              text01:'設計士アシスタント(学生時代)',
              text02:'不動産営業(学生インターン)',
              text03:'フリーランスエージェント(現職)',
              icon01:'mdi-map',
              icon02:'mdi-bank',
              icon03:'mdi-human-child',
              icon01color:'blue',
              icon02color:'blue',
              icon03color:'blue'
          },
          {
              height: '0',
              bordercolor:'purple',
              title: 'HOBBY',
              text01:'旅行(温泉&御朱印集め)',
              text02:'運動(ランニング&筋トレ)',
              text03:'サービス作り(Web・ゲーム)',
              icon01:'mdi-beach',
              icon02:'mdi-run',
              icon03:'mdi-web',
              icon01color:'purple',
              icon02color:'purple',
              icon03color:'purple'
          }
      ]
    })
  }
</script>-->
