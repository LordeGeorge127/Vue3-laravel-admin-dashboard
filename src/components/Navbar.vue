<script setup>
import {MenuIcon, UsersIcon, ChevronDownIcon, ChevronDoubleLeftIcon} from "@heroicons/vue/outline";
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
    <header class="h-16 p-3 shadow bg-white flex justify-between items-center">
        <button
            @click="emit('toggle-sidebar')"
            class="flex items-center justify-center rounded hover:transition-colors ml-3 text-gray-700 hover:bg-black/10 w-8 h-8" >
            <MenuIcon class="w-6 "/>
        </button>

        <Menu as="div" class="relative inline-block text-left">
            <MenuButton class="flex items-center mr-4">

                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="" class="rounded-full w-10 mr-4">
                <small class="p-2">John smith</small>
                <ChevronDownIcon
                    class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                />
            </MenuButton>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                            >
                                <UsersIcon
                                    :active="active"
                                    class="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                                Profile
                            </button>
                        </MenuItem>
                    </div>


                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                            >
                                <ChevronDoubleLeftIcon
                                    :active="active"
                                    class="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                                Logout
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>

    </header>
</template>

<style scoped>

</style>
