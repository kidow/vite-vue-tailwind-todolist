<template>
  <div class="container mx-auto">
    <div class="w-full sm:w-96 mx-auto">
      <div class="px-4 sm:px-0 mt-4 sm:mt-10">
        <div class="text-center">
          <h1
            class="
              text-6xl
              sm:text-7xl
              font-semibold
              sm:font-bold
              bg-gradient-to-r
              from-vue
              via-vite
              to-tailwind
              text-white
              animate-gradient-x
              select-none
            "
          >
            V.V.T
          </h1>
          <div class="font-semibold text-2xl bg-black text-white py-1">
            To do list
          </div>
        </div>
        <div class="my-10 border-2">
          <div class="flex">
            <div class="form-control flex-1">
              <input
                type="text"
                placeholder="Add new item"
                spellcheck="false"
                autofocus
                class="input input-ghost"
                v-model="state.text"
                @keyup.enter="addItem"
                ref="inputRef"
              />
            </div>
            <button @click="addItem" class="btn rounded-none">Add</button>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div
            v-for="(item, key) in state.list"
            :key="key"
            class="px-4 flex items-center group h-7"
          >
            <div class="flex-1">{{ item }}</div>
            <div class="hidden group-hover:block select-none">
              <button
                @click="() => removeItem(key)"
                class="btn btn-circle btn-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface State {
  text: string
  list: string[]
}

import { reactive, ref } from 'vue'

const inputRef = ref<HTMLInputElement | null>(null)
const state = reactive<State>({ text: '', list: [] })

function addItem() {
  state.list.push(state.text)
  state.text = ''
}

function removeItem(index: number) {
  state.list.splice(index, 1)
  if (inputRef.value) inputRef.value.focus()
}
</script>