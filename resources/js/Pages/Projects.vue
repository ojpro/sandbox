<template>
  <basic-layout>
    <!--    Search Form    -->
    <div class="p-4 max-w-2xl mx-auto">
      <form>
        <div class="flex">
          <label for="search-dropdown"
                 class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
          <button id="dropdown-button" data-dropdown-toggle="dropdown"
                  class="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  type="button">
            All categories
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
          <!--    Use tailwind instead of inline css      -->
          <div id="dropdown"
               class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
               data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
               style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(338px, 688px);">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              <li>
                <button type="button"
                        class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Mockups
                </button>
              </li>
              <li>
                <button type="button"
                        class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Templates
                </button>
              </li>
              <li>
                <button type="button"
                        class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Design
                </button>
              </li>
              <li>
                <button type="button"
                        class="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Logos
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input type="search" id="search-dropdown"
                   class="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                   placeholder="Search Mockups, Logos, Design Templates..." required="" />
            <button type="submit"
                    class="absolute top-0 right-0 rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
    <!--    Projects List    -->
    <div
        class="mt-4 grid w-full grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <!--     Project Box       -->
      <div v-for="index in 10" :key="index">
        <div
            class="relative w-full transform overflow-hidden rounded-lg bg-white p-0 shadow transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
            style="min-height: 160px">
          <div>
            <div class="relative block h-full">
              <div class="h-44 bg-gray-100"></div>
            </div>
          </div>
          <div class="p-2">
            <router-link to="/project">
              <h2 class="line-clamp-1 mt-2 text-sm font-semibold text-gray-800">The project title</h2>
            </router-link>


            <div class="flex flex-wrap gap-1 my-2">
                <span
                    class="px-1.5 py-0.5 bg-blue-500 hover:bg-gray-300 rounded-full text-sm font-medium text-white">
                    Photoshop
                 </span>

              <span
                  class="px-1.5 py-0.5 bg-pink-500 hover:bg-gray-300 rounded-full text-sm font-medium text-white">
                    inDesign
                 </span>

              <span
                  class="px-1.5 py-0.5 bg-purple-500 hover:bg-gray-300 rounded-full text-sm font-medium text-white">
                    Figma
                 </span>
            </div>

            <div class="mt-3 flex items-center justify-between p-2">
              <div class="flex items-center justify-center">
                <div class="relative">
                  <div class="h-12 w-12 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                  <span
                      class="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                </div>

                <p class="line-clamp-1 ml-2 text-gray-800">John Doe</p>
              </div>

              <div class="flex justify-end"><span class="text-yellow-400">&starf;</span>&nbsp; 4.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </basic-layout>
</template>

<script>
import BasicLayout from "../Layouts/BasicLayout";

export default {
  name: "Projects",
  components: {
    'basic-layout': BasicLayout
  }
}
</script>

<style scoped>

</style>