<template>

  <div class="w-50">

    <form @submit.prevent="addGroup" class="w-50 m-5">
      <div class="form-outline mb-4">
        <input v-model="data.title" type="text" id="form6Example3" class="form-control">
        <label class="form-label" for="form6Example3" style="margin-left: 0px;">Nazwa grupy</label>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 97.6px;"></div><div class="form-notch-trailing"></div></div></div>

      <button type="submit" class="btn btn-primary btn-block mb-4">Dodaj grupe</button>
    </form>

    <div class="groups" v-for="group in groups" :key="group.id">
        <h3>{{ group.title }}</h3>


      <form class="w-50 m-5">
        <div class="form-outline mb-4">
          <input v-model="data.title" type="text" id="form6Example3" class="form-control">
          <label class="form-label" for="form6Example3" style="margin-left: 0px;">Nazwa fiszki</label>
          <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 97.6px;"></div><div class="form-notch-trailing"></div></div></div>

        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input v-model="data.content" type="text" id="form6Example1" class="form-control">
              <label class="form-label" for="form6Example1" style="margin-left: 0px;">Pojęcie</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input v-model="data.content_example" type="text" id="form6Example2" class="form-control">
              <label class="form-label" for="form6Example2" style="margin-left: 0px;">Definicja</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input v-model="data.definition" type="text" id="form6Example1" class="form-control">
              <label class="form-label" for="form6Example1" style="margin-left: 0px;">Pojęcie przykład</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input v-model="data.definition_example" type="text" id="form6Example2" class="form-control">
              <label class="form-label" for="form6Example2" style="margin-left: 0px;">Pojęcie definicja</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input v-model="data.group_id" type="text" id="form6Example1" class="form-control">
              <label class="form-label" for="form6Example1" style="margin-left: 0px;">Id groupy</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block mb-4">Dodaj fiszkę</button>
      </form>

      <button  @click.prevent="showCard(group.id)">Pokaż fiszki</button>

        <div class="cards" v-for="card in group.cards" :key="card['id']" v-show="card['show']">
          <div>

            <div class="edit-card d-flex flex-wrap w-100"  v-if="editedCardId === card.id">


              <input name="content" v-model="card.content" />
              <input v-model="card.content_example" />
              <textarea v-model="card.definition" />
              <textarea v-model="card.definition_example" />
              <button class="btn btn-danger" @click.prevent="toggleEdit">Odrzuć</button>
              <button type="submit" class="btn btn-success"  @click.prevent="editCard(card)" >Zapisz</button>
            </div>

            <div class="normal-card d-flex flex-wrap w-100" v-else>
              <span class="card-content" @click="clickEdit(card.id)">{{  card.content }}</span>
              <span @click="clickEdit(card.id)">{{  card.content_example }}</span>
              <span @click="clickEdit(card.id)">{{  card.definition }}</span>
              <span @click="clickEdit(card.id)">{{  card.definition_example }}</span>
              <button class="btn btn-info text-white" @click.prevent="toggleEdit(card.id)">Edytuj</button>
              <button class="btn btn-danger" @click.prevent="deleteCard(card.id)">Usuń</button>
            </div>


          </div>





<!--        <div class="edit-card d-flex flex-wrap w-100"  v-if="editedCardId === card.id">-->


<!--          <input name="content" v-model="card.content" />-->
<!--          <input v-model="card.content_example" />-->
<!--          <textarea v-model="card.definition" />-->
<!--          <textarea v-model="card.definition_example" />-->
<!--          <button class="btn btn-danger" @click.prevent="toggleEdit">Odrzuć</button>-->
<!--          <button type="submit" class="btn btn-success"  @click.prevent="editCard(card)" >Zapisz</button>-->
<!--        </div>-->

<!--        <div class="normal-card d-flex flex-wrap w-100" v-else>-->
<!--          <span class="card-content" @click="clickEdit(card.id)">{{  card.content }}</span>-->
<!--          <span @click="clickEdit(card.id)">{{  card.content_example }}</span>-->
<!--          <span @click="clickEdit(card.id)">{{  card.definition }}</span>-->
<!--          <span @click="clickEdit(card.id)">{{  card.definition_example }}</span>-->
<!--          <button class="btn btn-info text-white" @click.prevent="toggleEdit(card.id)">Edytuj</button>-->
<!--          <button class="btn btn-danger" @click.prevent="deleteCard(card.id)">Usuń</button>-->
<!--        </div>-->

      </div>



    </div>



  </div>



</template>

<script>


import {reactive, ref} from "vue";

export default {
  name: "CardsView.vue",



   setup() {

    let data = reactive({

      title: '',
      content: '',
      group_id: '',
      content_example: '',
      definition: '',
      definition_example: '',

    })
    let cards = ref(null)
    let groups = ref(null)
    let editedCardId = ref(null)




     const getCards = async (id) => {

       const response = await fetch('http://localhost:8000/api/cards/' + id, {
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',
       })

       return await response.json();

     };
     const getGroups = async () => {

       const response = await fetch('http://localhost:8000/api/groups', {
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',
       })

       groups.value = await response.json();

       groups.value.forEach(async function(group){
         group.cards = await getCards(group.id);
         group.cards['show'] = false;
       })



     };


     getGroups()



    const showCard = function(WW){
      const AA = WW
        // console.log(groups)


      groups.value.forEach(async function(group, AA ){
        console.log(AA)
        console.log(group.cards)
        // if(groups.cards !== undefined){
        //   if(groups.cards['show'] == AA){
        //     alert('tak')
        //   }
        // }


        // console.log( group.cards)
      })

    }

     const addCard = async () => {

       await fetch('http://localhost:8000/api/cards/store', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',
         body: JSON.stringify(data)
       })

       getCards();

     };

     const editCard = async (card) => {
       const cartId = card.id;
       await fetch('http://localhost:8000/api/cards/update/' + cartId, {
         method: 'PATCH',
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',
         body: JSON.stringify(card)
       })

       editedCardId.value = null;

       getCards();
     };

     const deleteCard = async (id) => {

       await fetch('http://localhost:8000/api/cards/destroy/' + id, {
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',

       })

       getCards();
     };




    const toggleEdit =  (id) => {
       if(id){
         editedCardId.value = id;
       } else {
         editedCardId.value = null
         getCards();
       }

    };

    const clickEdit = (id) => {
      return
     };







    return {
      deleteCard,
      clickEdit,
      editCard,
      toggleEdit,
      editedCardId,
      addCard,
      data,
      groups,
      cards,
      showCard,



    }
  }
}
</script>

<style scoped>

</style>
