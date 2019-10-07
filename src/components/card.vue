<template>
    <div class="card">
        <h3>{{title}}</h3>
        <p>{{content}}</p>
    </div>

</template>
<script>
export default {
  name: 'card',
  props:{
        title:"",
        content:""
  }
};
</script>
<style lang="css">
    .card{
        background-color:#FFF;
        border-radius: 10px;
        width:300px;
        padding:2%;
        align-self: center;
    }
</style>