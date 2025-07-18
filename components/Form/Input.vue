<template>
  <div class="w-full flex flex-col gap-1">
    <label class="text-white font-bold px-4 text-lg capitalize"
      >{{ label }} <span v-if="required">*</span></label
    >
    <input
      v-if="variant === 'inputField'"
      class="outline-none bg-secondary w-full text-white p-4"
      v-model="input"
      :type="type"
      :placeholder="placeholder"
      @blur="validate"
    />
    <textarea
      v-if="variant === 'textAreaField'"
      class="outline-none bg-secondary w-full h-[15rem] text-white p-4"
      v-model="input"
      :type="type"
      :placeholder="placeholder"
      @blur="validate"
    />
    <p v-if="showError" class="px-4 text-sm text-red">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: string;
  modelValue: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}>();
const showError = ref();
const errorMessage = ref("");

const emits = defineEmits(["update:modelValue", "validation"]);
const input = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

function validate() {
  if (props.required && !input.value.trim()) {
    errorMessage.value = `${props.label} is required`;
    showError.value = true;
    emits("validation", false);
  } else {
    errorMessage.value = "";
    showError.value = false;
    emits("validation", true);
  }
}
</script>
