<template>
  <v-app id="inspire">

    <v-navigation-drawer
      class="content-top"
      v-model="drawer"
      fixed
      app
      clipped
    >
      <v-list dense>
        <!-- <v-list-tile
          v-for="item in items"
          :key="item.text"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
        <v-subheader class="mt-3 grey--text text--darken-1">USUARIOS</v-subheader>
        <v-list>
          <v-list-tile
            v-for="item in tweets"
            :key="item.status_id"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img
                :src="item.profile_image_url"
                alt=""
              >
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile
          class="mt-3"
          @click=""
        >
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
    <div class="nav">
      <h2 class="title-head ">Analisis de sentimientos</h2>
      <v-text-field
        style="margin-bottom: -30px"
        outline
        label="Escriba aquí la palabra clave"
        prepend-inner-icon="search"
        v-model="word"
        @keyup.enter="getData"
        color="#9aacb5"
      ></v-text-field>
    </div>

    <!-- <v-toolbar
      color="white"
      app
      fixed
    >
      <v-toolbar-title
        style="width: 400px"
        class="ml-0 pl-3"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Analisis de sentimientos</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Palabra clave.."
        class="hidden-sm-and-down"
        v-model="word"
        @keyup.enter="getData"
      ></v-text-field>
    </v-toolbar> -->

    <v-content style="margin-top: 100px;">
      <v-container fill-height>
        <v-layout
          justify-center
          align-center
        >
          <list-twits />
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
// import tableInfo from '@/components/data-table'
import listTwits from '@/components/ListTwits'
import axios from 'axios'
export default {
  components: {
    // tableInfo,
    listTwits
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
        .get(`https://e58cec56.ngrok.io/tweets?word=${this.word}`)
        .then(response => {
          this.info = response.data
          this.$store.commit('SET_INFO', response.data)
        })
    }
  }
}
</script>

<style scoped>
.prueba {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.nav {
  width: 100%;
  height: 100px;
  background-color: #fff;
  transition: all ease 0.3s;
  z-index: 9;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  border-bottom: 2px solid #f4f8f9;
  position: fixed !important;
}
.left-pading {
  padding-left: 100px;
}
.title-head {
  text-align: center;
  width: 100%;
  display: inline-block;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  padding-left: 30px;
  color: #021f2e;
  font-weight: 400;
}
aside::-webkit-scrollbar {
  width: 8px; /* Tamaño del scroll en vertical */
  height: 8px; /* Tamaño del scroll en horizontal */
  /* display: none; */
}
aside::-webkit-scrollbar-thumb {
  background: rgba(2, 31, 46, 0.404);
  border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
aside::-webkit-scrollbar-thumb:hover {
  background: rgba(2, 31, 46, 0.604);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
aside::-webkit-scrollbar-thumb:active {
  background-color: rgba(2, 31, 46, 0.604);
}
aside::-webkit-scrollbar-track:hover,
aside::-webkit-scrollbar-track:active {
  background: #fff;
}
.content-top {
  margin-top: 100px !important;
}
</style>
