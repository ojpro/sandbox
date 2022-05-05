<template>
  <basic-layout>
    <!-- Project carousel -->
    <!--  TODO: not working exactly  -->
    <div class="w-full bg-gray-400 text-center">

      <div id="default-carousel" class="relative" data-carousel="static">

        <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

          <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
               data-carousel-item="">
                        <span
                            class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img alt="..."
                 class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                 src="/docs/images/carousel/carousel-1.svg">
          </div>

          <div
              class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
              data-carousel-item="">
            <img alt="..."
                 class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                 src="/docs/images/carousel/carousel-2.svg">
          </div>

          <div
              class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
              data-carousel-item="">
            <img alt="..."
                 class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                 src="/docs/images/carousel/carousel-3.svg">
          </div>
        </div>

        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button aria-current="true" aria-label="Slide 1" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
                  data-carousel-slide-to="0" type="button"></button>
          <button aria-current="false"
                  aria-label="Slide 2"
                  class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                  data-carousel-slide-to="1" type="button"></button>
          <button aria-current="false"
                  aria-label="Slide 3"
                  class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                  data-carousel-slide-to="2" type="button"></button>
        </div>

        <button
            class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev=""
            type="button">
        <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"><path d="M15 19l-7-7 7-7" stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"></path></svg>
        <span class="hidden">Previous</span>
        </span>
        </button>
        <button
            class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next=""
            type="button">
         <span
             class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"></path></svg>
            <span class="hidden">Next</span>
         </span>
        </button>
      </div>

    </div>

    <!-- The real challenge start form here -->
    <div class="px-2">
      <!-- Project Info -->
      <section class="my-2 flex items-center justify-between">
        <h1 class="text-lg font-medium">This is the Project title & what if a goes out of expectations then what
                                        will happen</h1>
        <div class="min-w-fit rounded-sm px-2">
          <span class="text-lg font-medium text-red-600">&hearts;</span> 173
          <span class="text-lg font-medium"> . </span>
          <span class="text-yellow-500">&starf;</span> 57
        </div>
      </section>
      <!-- Techs -->
      <section class="my-4">
        <h3 class="my-1.5">Used Technologies</h3>
        <div class="flex flex-wrap items-start justify-start gap-1">
                    <span
                        class="px-1.5 py-0.5 bg-red-500 hover:bg-gray-300 rounded text-sm font-medium text-white">
                    Laravel
                 </span>
          <span
              class="px-1.5 py-0.5 bg-green-500 hover:bg-gray-300 rounded text-sm font-medium text-white">
                    Vuejs
                 </span>
          <span
              class="px-1.5 py-0.5 bg-blue-500 hover:bg-gray-300 rounded text-sm font-medium text-white">
                    TailwindCSS
                 </span>
        </div>
      </section>
      <!-- Description -->
      <section>
        <h3 class="my-1.5">Description</h3>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi aperiam distinctio
             recusandae quas ab nisi vel perspiciatis unde alias molestiae maiores repellendus accusamus
             cupiditate ipsam impedit, adipisci nemo exercitationem minima sint animi hic. Voluptate, beatae
             dicta commodi, dolorum libero quisquam error ad nobis ipsam itaque animi sapiente voluptas!
             Et.</p>
        </div>
      </section>
      <!--     Project Creator       -->
      <section>
        <div
            class="flex items-center relative p-4 w-fit bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
          <div class="w-12 h-12 rounded-full bg-gray-100"></div>
          <div class="ml-3">
            <p class="font-medium text-gray-800">John doe</p>
            <p class="text-sm text-gray-600">Last online 4 hours ago</p>
          </div>
        </div>
      </section>
      <!-- Reviews -->
      <!--     TODO: add rating statistics       -->
      <div class="my-2 mx-1 flex gap-3 rounded-md bg-white p-2 text-black shadow">
        <!-- Photo -->
        <div class="mt-2">
          <img class="w-56 rounded-full shadow"
               src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""
               srcset="" />
        </div>
        <!-- Content -->
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between py-1 pr-2">
            <!-- Author -->
            <div>
              <a href="#" class="text-blue-400 hover:underline">Alex Friedner</a>
              <span class="text-sm font-thin text-gray-500"> 3 days</span>
            </div>
            <!-- Rate -->
            <div>
              <div class="flex items-center gap-1">
                <svg class="inline-block h-5 w-5 text-yellow-400" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                4.5
              </div>
            </div>
          </div>
          <!-- Context -->
          <div class="p-1">
            <p class="text-gray-900 border-l-2 px-1 border-blue-500 bg-gray-50/60 rounded-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quo,
              luptas illo nisi sit non! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Minus qui at eum praesentium quod perspiciatis vitae nihil
              velit quaerat repellendus?</p>
          </div>
        </div>
      </div>
    </div>

  </basic-layout>
</template>

<script>
import BasicLayout from "../Layouts/BasicLayout";

export default {
  name: "SingleProject",
  components: {
    'basic-layout': BasicLayout
  }

}
</script>

<style scoped>

</style>