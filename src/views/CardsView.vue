<template>


  <table class="w-50 table table-bordered">
    <thead>
    <tr>
      <th>Tytuł</th>
      <th>Pojęcie</th>
      <th>Przykład pojęcia</th>
      <th>Definicja</th>
      <th>Przykład definicji</th>
    </tr>
    </thead>
    <tbody>

    <tr  v-for="card in cards" :key="card.id">
      <td>{{ card.title}}</td>
      <td>{{ card.content}}</td>
      <td>{{ card.content_example }}</td>
      <td>{{ card.definition }}</td>
      <td>{{ card.definition_example }}</td>
    </tr>

    </tbody>
  </table>

</template>

<script>


import {ref} from "vue";

export default {
  name: "CardsView.vue",



   setup() {

    let cards = ref(null)

    const getCards = async () => {

        const response = await fetch('http://localhost:8000/api/cards', {
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        })

        cards.value = await response.json();

    };

    getCards()


    return {

      cards,



    }
  }
}
</script>

<style scoped>

</style>
