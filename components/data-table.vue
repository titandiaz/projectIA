<template>
  <v-data-table :headers="headers" :items="info" class="elevation-1" item-key="Usuario">
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded ">
        <td>{{ props.item.Usuario }}</td>
        <td class="text-xs-right">{{ props.item.user_id }}</td>
        <td class="text-xs-right">{{ props.item.text }}</td>
        <td class="text-xs-right" >{{ props.item.Puntuacion_tuit }}</td>
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
export default {
  components: {
    CardTwiiter
  },
  props: {
    
  },
  Created() {
    setTimeout( this.scoreTweets, 3000);
  },
  data() {
    return {
      indexTweet: 0,
      scoreMeaning: '',
      value: 0,
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
    }
  },
  computed: {
    info() {
      if (this.$store.state.infoTwits) {
        return this.$store.state.infoTwits
      }
      return 'why?'
    }
  },
  methods:{
    scoreTweets(){
      switch (this.value) {
        case this.value > 0:
          this.scoreMeaning = 'Positivo'
          break;
        case this.value < 0:
          this.scoreMeaning = 'Negativo'
          break;
        case this.value == 0:
          this.scoreMeaning = 'Neutro'        
        default:
          
          break;

      }
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
