<template>
  <div>
    <!--  Header Section  -->
    <header>
      <!--    Navbar    -->
      <Navbar></Navbar>
      <section class="min-w-full min-h-fit bg-orange-500/80 p-28 text-center">
        <h1 class="font-semibold text-5xl text-white">We Take Care of You & Your Projects</h1>
      </section>
    </header>
    <!--  About Section  -->
    <section class="w-11/12 md:w-3/5 p-8 mx-auto">
      <div class="flex flex-col md:flex-row gap-8 my-6">
        <div class="md:w-1/3 h-64 rounded shadow-sm bg-gray-100">
        </div>
        <div class="md:w-2/3">
          <h2 class="text-2xl font-semibold my-2">Why Us?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa eum inventore labore maiores quae
             quaerat vel voluptate. Blanditiis dolorem error ex fuga, id inventore ipsum laborum quasi recusandae
             repellendus!</p>
        </div>
      </div>
    </section>
    <!--  Services Section  -->
    <section class="w-10/12 mx-auto">
      <!-- TODO: create component for heading   -->
      <h1 class="text-center text-lg font-semibold">Services</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full bg-white p-4">
        <div v-for="service in services" :key="service">
          <!--    Service Card      -->
          <div class="p-6 md:p-10 rounded-xl bg-blue-50">
            <div class="inline-flex rounded-full bg-white p-4">
              <svg class="w-8 h-8 text-primary fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 576 512">
                <!--      TODO: verify if i can remove it          -->

                <!--                <defs> -->
                <!--                    <style>.fa-secondary {-->
                <!--                        opacity: .4-->
                <!--                    }</style>-->
                <!--                </defs>-->
                <path
                    d="M560 224h-29.51a159.88 159.88 0 0 0-37.38-52.46L512 96h-32c-29.4 0-55.39 13.5-73 34.32-7.57-1.1-15.12-2.32-23-2.32H256c-94.82 0-160 78.88-160 160a159.75 159.75 0 0 0 64 128v80a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-48h128v48a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-80.72A160.37 160.37 0 0 0 511.28 384H560a16 16 0 0 0 16-16V240a16 16 0 0 0-16-16zm-128 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"
                    class="fa-secondary"></path>
                <path
                    d="M51.26 255.52a24 24 0 0 1-18.74-28.3C34.74 215.82 45.4 208 57 208h1a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6C29.5 176 4.1 196.4.47 224.62a54.64 54.64 0 0 0-.47 7.23A56.08 56.08 0 0 0 56 288h40a155.05 155.05 0 0 1 3.37-32H56a23.63 23.63 0 0 1-4.74-.48zM432 256a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM306.5 0a96 96 0 0 0-88.81 132.51A162.64 162.64 0 0 1 256 128h128a104.31 104.31 0 0 1 12.71.88A96.06 96.06 0 0 0 306.5 0z"></path>
              </svg>
            </div>

            <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
            </h3>
            <p class="mt-4 text-base md:text-lg text-gray-600">
              Your feature description summary here.
            </p>
          </div>

        </div>
      </div>

    </section>

    <!--  Call To Action  -->
    <section class="my-4 mx-auto w-3/4">
      <div
          class="w-2/3 mx-auto p-2 flex justify-between items-center border-1 border-gray-100 shadow bg-gray-200 rounded">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, tempora?</p>
        <button class="bg-blue-400 py-2 px-3 min-w-max">Contact Us</button>
      </div>
    </section>

    <!--  Footer Section  -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default {
  name: "Home",
  components: {
    'Navbar': Navbar,
    'Footer': Footer
  },
  data() {
    return {
      services: ['Hosting', 'Track', 'Community']
    };
  }
}
</script>

<style scoped>

</style>