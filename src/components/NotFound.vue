<script setup>

</script>

<template>
<div class="flex justify-center items-center w-full min-h-full min-w-full">
 <div class="flex">
     <div class="text-indigo-600 self-start text-7xl font-bold border-r pb-8  px-8" >404</div>
     <div class="px-8">
         <h1 class="text-5xl font-bold mb-2">Page Not Found</h1>
         <p class="text-gray-500 text-1.5xl mb-4">Please check your URL in the address bar and try Again</p>
         <router-link :to="{name:'app.dashboard'}" class=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >Go back home
         </router-link>
     </div>
 </div>
</div>
</template>

<style scoped>

</style>
