<template>
    <v-container class="justify-center">
      <v-row dense>
        <v-col class="mt-5 px-3" lg="4" sm="12" md="12">
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
                >PROFILE</v-card-title>
                <v-divider color="red"></v-divider>
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar width="8vw" height="8vw" min-width="60px" min-height="60px" class="ml-3 mt-7 mb-6">
                      <v-img
                              height="100%"
                              class="elevation-6"
                              src="../assets/portfoio.jpg"
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content class="ml-2">
                      <v-list-item-text class="black--text font-weight-bold py-0 caption">ニックネーム</v-list-item-text>
                      <v-list-item-text class="black--text font-weight-bold py-0 title">KoooZiii</v-list-item-text>
                      <v-list-item class="pl-0">
                        <v-btn class="px-2"  max-width="10px" href="https://qiita.com/KoooZiiii">Qiita</v-btn>
                        <v-btn class="ml-2 px-2" href="https://github.com/Kooziiii">Github</v-btn>
                      </v-list-item>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col
                lg="8" sm="12" md="12"
                class="mt-5 px-3"
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
                        size="10"
                >こんにちは。KoooZiiiと申します。本ページをご覧頂きありがとうございます。
                  信州大学経済学部を卒業後、ベンチャー企業にてフリーランスエンジニアへの
                  案件紹介エージェントを経て、現在は前職の上司とともに、
                  同業種での会社の立ち上げを行っております。 仕事柄、エンジニアの方と
                  触れ合うことが多く、その中で「自分の手でサービスを作れるようになりたい」
                  という想いが強くなり、エンジニアを志すようになりました。
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
                lg="4" sm="12" md="12"
                class="mt-5 px-3"
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
<style scoped>

  .justify-center{
    padding: 0;
  }
  .text-center{
    display: flex;
  }
</style>
