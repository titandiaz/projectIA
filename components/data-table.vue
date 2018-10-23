<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1" item-key="name">
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <div class="container-card">
        <blockquote class="twitter-tweet" data-lang="es">
          <p lang="en" dir="ltr">Working an application in Vue.js with TDD — An extensive guide for people who have time — part 2 <a href="https://t.co/LblVO1wKcg">https://t.co/LblVO1wKcg</a> <a href="https://twitter.com/hashtag/VueJS?src=hash&amp;ref_src=twsrc%5Etfw">#VueJS</a> <a href="https://twitter.com/hashtag/tdd?src=hash&amp;ref_src=twsrc%5Etfw">#tdd</a> <a href="https://twitter.com/hashtag/testing?src=hash&amp;ref_src=twsrc%5Etfw">#testing</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a></p>&mdash; Vue.js News (@VueJsNews) <a href="https://twitter.com/VueJsNews/status/1053875276487245824?ref_src=twsrc%5Etfw">21 de octubre de 2018</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

      </div class="container-card">
    </template>
  </v-data-table>
</template>

<script>
import CardTwiiter from '@/components/card-twitter'
export default {
  components: {
    CardTwiiter
  },
  data() {
    return {
      headers: [
        {
          text: 'Nick Usuario',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'ID', value: 'calories' },
        { text: 'Nombre', value: 'fat' },
        { text: 'Palabras', value: 'carbs' },
        { text: 'tweet', value: 'protein' },
        { text: 'Puntuación', value: 'iron' }
      ],
      desserts: [
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
