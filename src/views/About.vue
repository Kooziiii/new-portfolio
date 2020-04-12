<template>
    <v-container>
      <v-row dense>
        <v-col class="mt-7 px-3" cols="4">
          <TabMenu/>
          <v-card
                  color='grey lighten-4'
                  elevation="15"
                  dark
                  height="250px"
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
                            class="mt-9 ml-3"
                    >
                      <v-img
                              class="elevation-6"
                              src="../assets/portfoio.jpg"
                      ></v-img>
                  </v-list-item-avatar>
                  </v-col>
                  <v-col cols="6" class="pl-0 pt-0 mt-7">
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
                  height="250px"
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
                :cols="item.flex"
                class="mt-7 px-3"
        >
          <TabMenu/>
          <v-card
                  color='grey lighten-4'
                  elevation="15"
                  dark
                  height="250px"
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
                <v-card-subtitle
                        class="black--text font-weight-bold mt-2"
                        v-text="item.text"
                ></v-card-subtitle>
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
          flex:'4',
          height: '0',
          bordercolor:'green',
          color: 'grey lighten-4',
          title: 'QUALIFICATION',
          text: 'Ellie Goulding',
        },
        {
          flex:'4',
          height: '0',
          bordercolor:'blue',
          color: 'grey lighten-4',
          title: 'EXPERIENCE',
          text: 'Ellie Goulding',
        },
        {
          flex: '4',
          height: '0',
          bordercolor:'purple',
          color: 'grey lighten-4',
          title: 'HOBBY',
          text: 'Ellie Goulding',
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
