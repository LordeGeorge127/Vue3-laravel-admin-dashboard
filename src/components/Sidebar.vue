<script setup>
import {HomeIcon, UsersIcon, ChartBarIcon, ViewListIcon} from "@heroicons/vue/outline";
</script>

<template>
    <div class="w-[250px] transition-all bg-indigo-700 rounded-l-xl text-gray-300 py-4 px-2">
        <router-link
            class="flex items-center py-2 px-4 rounded hover:bg-black/30 transition-colors  mb-3"
            :to="{name: 'app.dashboard'}"
        >
            <span class="mr-2">
                <HomeIcon class="w-5"/>
            </span>
            <span class="text-sm">Dashboard</span>
        </router-link>

        <router-link
            class="flex items-center py-2 px-4 rounded hover:bg-black/30 transition-colors  mb-3"
            :to="{name: 'app.products'}"
        >
            <span class="mr-2">
                <ViewListIcon class="w-5"/>
            </span>
            <span class="text-sm">Products</span>
        </router-link>

        <router-link
            class="flex items-center py-2 px-4 rounded hover:bg-black/30 transition-colors  mb-3"
            :to="{name: 'app.dashboard'}"
        >
            <span class="mr-2">
                <UsersIcon class="w-5"/>
            </span>
            <span class="text-sm">Users</span>
        </router-link>

        <router-link
            class="flex items-center py-2 px-4 rounded hover:bg-black/30 transition-colors  mb-3"
            :to="{name: 'app.dashboard'}"
        >
            <span class="mr-2">
                <ChartBarIcon class="w-5"/>
            </span>
            <span class="text-sm">Reports</span>
        </router-link>
    </div>
</template>

<style scoped>

</style>
