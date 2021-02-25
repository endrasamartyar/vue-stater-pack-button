<template>
  <button type="button" class="btn">
    This Is Button
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style>
  .btn {
    width : 200px;
    height : 50px;
    background : white;
    color : black;
    font-Size : 20px;
    border-radius : 10px;
    border-color : #191970;
    transition-duration: 0.4s;
  }

  .btn:hover {
    background-color: #191970;
    color: white;
  }

</style>

//  width: "200px";
//         height: "50px";
//         fontSize: "19px";
//         textAlign: "center";
//         background: "tomato";
//         color: "#ffffff";
//         borderRadius: "5px";
//         borderColor: "black";