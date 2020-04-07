<template>
    <v-container>
      <v-row dense>
        <v-col
                v-for="(item, i) in items"
                :key="i"
                :cols="item.flex"
                class="mt-3 px-3"
        >
          <v-card
                  :color="item.color"
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
                <v-list-item :height="item.height" >
                  <v-list-item-avatar
                  >
                    <v-img
                            class="elevation-6"
                            :src="item.src"
                    ></v-img>
                  </v-list-item-avatar>

                </v-list-item>
                <v-card-subtitle
                        class="black--text font-weight-bold"
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
  export default {
    inset: false,
    data: () => ({
      items: [
        {
          flex:'4',
          height:'50px',
          bordercolor:'red',
          color: 'grey lighten-4',
          title: 'USER PROFILE',
          text: 'Foster the People',
          src:'https://cdn.vuetifyjs.com/images/cards/mountain.jpg'
        },
        {
          flex:'8',
          height:'none',
          bordercolor:'deep-orange',
          color: 'grey lighten-4',
          title: 'INTRODUCTION',
          text: 'こんにちは。KOOOZIIIと申します。\n' +
                  '信州大学経済学部を卒業後、ベンチャー企業にてフリーランスエンジニアへの\n' +
                  '案件紹介エージェントとして勤務し、現在は前職の上司とともに、\n' +
                  '同業種での会社の立ち上げを行っております。\n' +
                  '仕事柄、エンジニアと触れ合うことが多く、その中で「自分の手でサービス\n' +
                  'を作れるようになりたい」という想いが強くなり、エンジニアを志すように\n'+
                  'なりました。\n'+
                  'もともと大学時代からプログラミングの学習を継続しており、\n' +
                  '3ヶ月間プログラミングスクールにも通っておりましたので、プログラミングの基礎の基礎の基礎は\n'+
                  '理解できていると思います。\n' +
                  'まだまだ駆け出しの身ではありますが、ご興味を持って頂けますと幸いです。\n' +
                  'どうぞよろしくお願い致します！'
        },
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
