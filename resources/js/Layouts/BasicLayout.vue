<template>
  <div>
    <!--   Navbar     -->
    <Navbar></Navbar>

    <!--  Page Content  -->
    <slot />

    <!--     Footer       -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default {
  name: "BasicLayout",
  components: {
    'Navbar': Navbar,
    'Footer': Footer
  }
}
</script>

<style scoped>

</style>