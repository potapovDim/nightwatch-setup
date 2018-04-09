<template>
  <div class="container">
    <div class="box">
      <div class="loader"></div>
      <p>loading ...</p>
    </div>
  </div>
</template>


<script>
  export default {

  }

</script>

<style lang="css">
  .container {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #092756;
    background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -moz-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -webkit-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -o-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -ms-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), linear-gradient(to bottom, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), linear-gradient(135deg, #670d10 0%, #092756 100%);
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .box {
    display: inline-block;
    height: 200px;
    width: 33.3%;
    float: left;
    position: relative;
    /*margin:0 -4px -5px -2px;*/
    transition: all .2s ease;
  }

  .box p {
    color: #777;
    font-family: Lato, "Helvetica Neue";
    font-weight: 300;
    position: absolute;
    font-size: 20px;
    width: 100%;
    height: 25px;
    text-align: center;
    bottom: 0px;
    margin: 0;
    top: 160px;
    background-color: #fff;
    opacity: 0;
    text-transform: uppercase;
    transition: all .2s ease;
  }

  .box:hover p {
    bottom: 0px;
    top: 175px;
    opacity: 1;
    transition: all .2s ease;
    z-index: 2;
  }

  @media (max-width: 700px) {
    .box {
      width: 50%;
    }
    .box:nth-child(2n-1) {
      background-color: inherit;
    }
    .box:nth-child(4n),
    .box:nth-child(4n-3) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  @media (max-width: 420px) {
    .box {
      width: 100%;
    }
    .box:nth-child(4n),
    .box:nth-child(4n-3) {
      background-color: inherit;
    }
    .box:nth-child(2n-1) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .loader {
    position: relative;
    width: 5px;
    height: 5px;
    top: 49%;
    top: -webkit-calc(50% - 43px);
    top: calc(50% - 2.5px);
    left: 49%;
    left: -webkit-calc(50% - 43px);
    left: calc(50% - 2.5px);
    background-color: #fff;
    border-radius: 50px;
  }

  .loader:before {
    content: "";
    position: absolute;
    top: -38px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    border-radius: 0 50px 0px 0;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, .1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    -webkit-animation: loader 2s linear infinite;
    animation: loader 2s linear infinite;
  }

  .loader:after {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    border-bottom: 3px solid #fff;
    border-left: 3px solid #fff;
    border-radius: 0 0px 0px 50px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, .1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    -webkit-animation: loader 2s linear infinite;
    animation: loader 2ss linear infinite;
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>