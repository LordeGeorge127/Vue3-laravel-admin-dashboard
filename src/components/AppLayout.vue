<script setup>

import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import {onMounted, onUnmounted, ref} from "vue";

const sidebarOpen = ref(true);
function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;

}
onMounted(()=>{
handleSidebarOpened();
window.addEventListener('resize',handleSidebarOpened);
});

onUnmounted(()=>{
handleSidebarOpened();
window.removeEventListener('resize',handleSidebarOpened);
});

function handleSidebarOpened() {
    sidebarOpen.value = window.outerWidth > 768;
}

</script>

<template>
    <div class="flex min-h-full bg-gray-200 ">
        <!--        sidebar-->
      <Sidebar :class="{'-ml-[250px]' : !sidebarOpen }"/>

        <!--      End of  sidebar-->

        <div class="flex-1">
           <Navbar @toggle-sidebar="toggleSidebar"/>
            <main class="p-6">
                <router-view></router-view>

            </main>
        </div>

    </div>
</template>

<style scoped>

</style>
