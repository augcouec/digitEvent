<template>
  <div id="app">
    <div class='input__container'>
      <label for="dateSearch"> Sorry beta version you can only enter 1 date :</label>
      <input name="dateSearch" type="text" v-model="search" @change="fetchDates(search)">
      <div class="input__counter">
        <span>A MOMENT OF HISTORY</span>
        <span>You entered {{dates.length}} dates ...</span>
      </div>
    </div>
    <main :if="dates.length > 0" v-for="(date, index) in dates" v-bind:key="index">
      <card :title="date.title" :content="date.content">
      </card>
      </main>
  </div>
</template>

<script>
import api from "@/api.js"
import card from "@/components/card"
export default {
  name: 'App',
  components:{
    card
  },
   data() {
    return {
      search: '',
      dates : []
    }
  },
  methods: {
      async fetchDates(search)  {
      this.dates = [];
      const datesArray = this.formatSearch(search);
      const stringArray = await api(datesArray);

      datesArray.forEach((title, i) => {
        this.dates.push({
          title,
          content: stringArray[i]
        });
      });
    },
    formatSearch(searchString) {
      return searchString
        .replace(/\s/g, '')
        .split(',');
    }
  },
};
</script>

<style lang="css">
#app{
  width: 100%;
  min-height: 500px;
  background-color: #0D0F65;
  background: linear-gradient(190deg, #0D0F65 20%, #FB021D 20%);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input__container{
  background-color:#04BEFB;
  background: linear-gradient(170deg, #04BEFB 70%, RGB(205, 92, 92,0) 70%);
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
label{
  margin-top:10%;
}
input{
  font-size:0.8em;
  padding:10px 10px 10px 5px;
  display:block;
  border:none;
  background-color: #04BEFB;
  border-bottom:1px solid #757575;
  color: brown;
}
.input__counter{
  background-color:#151515;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
  margin: 8%;
  padding:8%;

}
main{
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top:10%;
}


</style>