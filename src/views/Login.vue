
<template>
  <GuestLayout title="Sign in to your account">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input type="checkbox" name="remember-me" id="remember-me" class="h-4 w-4 text-indigo-600 rounded-md"
                              >
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>                    <div class="text-sm">
                        <RouterLink :to="{name: 'requestPassword'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</RouterLink>
                    </div>
                </div>

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5
                     text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>

<!--                <div>-->
<!--                    <button type="submit"-->
<!--                            :disabled=""-->
<!--                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
<!--                            :class="{'cursor-not-allowed': loading,-->
<!--                        'hover:bg-indigo-200':loading-->
<!--                        }"-->
<!--                    >-->
<!--                        <svg class="animate-spin ml-1 mr-3 h-5 w-5 text-white" fill="none"></svg>-->
<!--                        Sign in-->
<!--                    </button>-->
<!--                </div>-->

            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</a>
            </p>

  </GuestLayout>
</template>

<script setup>

import GuestLayout from "../components/GuestLayout.vue";

</script>



<style scoped>

</style>
