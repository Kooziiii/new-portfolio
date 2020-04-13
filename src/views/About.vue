<template>
    <v-container>
      <v-row dense>
        <v-col class="mt-7 px-3" cols="4">
          <TabMenu/>
          <v-card
                  color='grey lighten-4'
                  elevation="15"
                  dark
          >
            <div class="justify-space-between">
              <div>
                <v-card-title
                        class="black--text font-weight-black pt-2 pb-2 pl-5"
                >USER PROFILE</v-card-title>
                <v-divider
                        color="red"
                >
                </v-divider>
                <v-list-item class="pl-5">
                  <v-col cols="6">
                    <v-list-item-avatar
                            width="100px"
                            height="100px"
                            class="mt-5 ml-3"
                    >
                      <v-img
                              class="elevation-6"
                              src="../assets/portfoio.jpg"
                      ></v-img>
                  </v-list-item-avatar>
                  </v-col>
                  <v-col cols="6" class="pl-0 py-0 mt-12 mb-10">
                    <v-card-text
                            class="black--text font-weight-bold py-0 caption"
                    >ニックネーム</v-card-text>
                    <v-card-text
                            class="black--text font-weight-bold pt-1 title"
                    >KoooZiii</v-card-text>
                    <div class="text-center mt-0">
                      <v-btn class="mx-1 px-3 body-2" width="30%" href="https://qiita.com/KoooZiiii" >Qiita</v-btn>
                      <v-btn class="mx-1 px-3 body-2" width="30%" href="https://github.com/Kooziiii">Github</v-btn>
                    </div>
                  </v-col>
                </v-list-item>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col
                cols="8"
                class="mt-7 px-3"
        >
          <TabMenu/>
          <v-card
                  color='grey lighten-4'
                  elevation="15"
                  dark
          >
            <div class="justify-space-between">
              <div>
                <v-card-title
                        class="black--text font-weight-black pt-2 pb-2 pl-5"
                >INTRODUCTION</v-card-title>
                <v-divider
                        color="deep-orange"
                >
                </v-divider>
                <v-card-subtitle
                        class="black--text font-weight-bold mt-2"
                >こんにちは。KoooZiiiと申します。本ページをご覧頂きありがとうございます。
                  信州大学経済学部を卒業後、ベンチャー企業にてフリーランスエンジニアへの
                  案件紹介エージェントとして勤務し、現在は前職の上司とともに、
                  同業種での会社の立ち上げを行っております。 仕事柄、エンジニアの方と
                  触れ合うことが多く、その中で「自分の手でサービスを作れるようになりたい」
                  という想いが強くなり、改めてエンジニアを志すようになりました。
                  もともと大学時代からプログラミングの学習を継続しており、 3ヶ月間
                  プログラミングスクールにも通っておりましたので、プログラミングの基礎の基礎の基礎は
                  理解できていると思います。 まだまだ駆け出しの身ではありますが、どうぞよろしくお願い致します！</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col
                v-for="(item, i) in items"
                :key="i"
                flex="4"
                class="mt-7 px-3"
        >
          <TabMenu/>
          <v-card
                  color='grey lighten-4'
                  elevation="15"
                  dark
          >
            <div class="justify-space-between">
              <div>
                <v-card-title
                        class="black--text font-weight-black pt-2 pb-2 pl-5"
                        v-text="item.title"
                ></v-card-title>
                <v-divider
                        :inset="inset"
                        :color="item.bordercolor"
                >
                </v-divider>
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
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
  import TabMenu from "../components/TabMenu";
  export default {
    components: {TabMenu},
    inset: false,
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
</script>
<style>
  .text-center{
    display: flex;
  }
</style>
