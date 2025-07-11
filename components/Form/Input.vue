<template>
  <div class="w-full flex flex-col gap-3">
    <label class="text-white font-bold px-4 text-lg capitalize">{{
      label
    }}</label>
    <input
      v-if="variant === 'inputField'"
      class="outline-none bg-secondary w-full text-white p-4"
      v-model="input"
      :type="type"
      :placeholder="placeholder"
    />
    <textarea
      v-if="variant === 'textAreaField'"
      class="outline-none bg-secondary w-full h-[15rem] text-white p-4"
      v-model="input"
      :type="type"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: string;
  modelValue: string;
  label: string;
  type: string;
  placeholder: string;
}>();

const emits = defineEmits(["update:modelValue"]);
const input = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>
