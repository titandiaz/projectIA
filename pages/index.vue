<template>
  <v-app id="inspire" dark>

    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in tweets" :key="item.status_id" avatar @click="">
            <v-list-tile-avatar>
              <img :src="item.profile_image_url" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="blue" dense fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Analisis de sentimientos con R</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field :append-icon-cb="() => {}" v-model="word" @keyup.enter="getData" placeholder="Palabra clave..." single-line append-icon="search" color="white" hide-details>
        </v-text-field>
      </v-layout>
      
    </v-toolbar>

    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <table-info/>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import tableInfo from "@/components/data-table";
import axios from 'axios'
export default {
  components: {
    tableInfo
  },
  data: () => ({
    drawer: true,
    word: '',
    info: [],
    items: [
      { icon: 'trending_up', text: 'Most Popular' },
      { icon: 'subscriptions', text: 'Subscriptions' },
      { icon: 'history', text: 'History' },
      { icon: 'watch_later', text: 'Watch Later' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    tweets() {
      if (this.$store.state.infoTwits) {
        return this.$store.state.infoTwits
      }
    }
  },
  methods: {
    getData() {
      axios
      .get(`http://localhost:8000/tweets?word=${this.word}`)
      .then(response => {
        this.info = response.data
        this.$store.commit(
        'SET_INFO',
        response.data)
      })
    }
  }
}
</script>

<style scoped>
.prueba {
  width: 20px;
  height: 20px;
  background-color: red;
  cursor: pointer;
}
</style>