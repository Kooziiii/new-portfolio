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
                        class="black--text font-weight-bold"
                        v-text="item.text"
                ></v-card-subtitle>
              </div>
              <v-avatar
                      class="ma-3"
                      tile
                      size="100"
              >
              </v-avatar>
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
          bordercolor:'red',
          color: 'grey lighten-4',
          title: 'USER PROFILE',
          text: 'Foster the People',
        },
        {
          bordercolor:'deep-orange',
          color: 'grey lighten-4',
          title: 'INTRODUCTION',
          text: 'こんにちは。小田幸治と申します。',
        },
        {
          bordercolor:'green',
          color: 'grey lighten-4',
          title: 'QUALIFICATION',
          text: 'Ellie Goulding',
        },
        {
          bordercolor:'blue',
          color: 'grey lighten-4',
          title: 'EXPERIENCE',
          text: 'Ellie Goulding',
        },
        {
          bordercolor:'purple',
          color: 'grey lighten-4',
          title: 'HOBBY',
          text: 'Ellie Goulding',
        },
        {
          bordercolor:'teal',
          color: 'grey lighten-4',
          title: 'FROM NOW ON',
          text: 'これまで不動産や人材の業界に携わっており、' +
                  'その中で様々な課題や問題・無駄があると' +
                  '感じてきました。世の中に必要とされるサービスを' +
                  '自分の手で作っていきたいと考えております。'
        }
      ],
    }),
  }
</script>
