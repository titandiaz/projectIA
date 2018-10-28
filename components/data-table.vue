<template>
  <v-data-table :headers="headers" :items="info" class="elevation-1" item-key="Usuario">
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded ">
        <td>{{ props.item.Usuario }}</td>
        <td class="text-xs-right">{{ props.item.user_id }}</td>
        <td class="text-xs-right">{{ props.item.text }}</td>
        <td class="text-xs-right">{{ props.item.Puntuacion_tuit }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <div class="container-card">
        <blockquote class="twitter-tweet" data-lang="es">
        <a :href="info[props.index].status_url"></a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

      </div >
    </template>
  </v-data-table>
</template>

<script>
import CardTwiiter from '@/components/card-twitter'
import axios from 'axios'
export default {
  components: {
    CardTwiiter
  },
  props: {
    
  },
  created () {
    axios
      .get('http://localhost:8000/tweets?word=Ecopetrol')
      .then(response => (this.info = response.data))
  },
  data() {
    return {
      info: {},
      indexTweet: 0,
      headers: [
        {
          text: 'Nick Usuario',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'ID', value: 'calories' },
        { text: 'tweet', value: 'protein' },
        { text: 'Puntuación', value: 'iron' }
      ],
      info: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
      ]
    }
  },
  methods:{
    getIndex(){
    
    }
  }
}
</script>

<style scoped>
.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
}
</style>
