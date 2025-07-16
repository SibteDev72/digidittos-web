<template>
  <div class="w-full flex flex-col items-center gap-8">
    <div
      class="w-full h-max grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <FormInput
        variant="inputField"
        v-model="form.firstName"
        label="First Name"
        type="text"
        placeholder="Enter your first name..."
      />
      <FormInput
        variant="inputField"
        v-model="form.lastName"
        label="Last Name"
        type="text"
        placeholder="Enter your last name..."
      />
      <FormInput
        variant="inputField"
        v-model="form.email"
        label="Email"
        type="email"
        placeholder="Enter your email..."
      />
      <FormInput
        variant="inputField"
        v-model="form.phoneNumber"
        label="Phone Number"
        type="number"
        placeholder="Enter your phone number..."
      />
      <FormInput
        variant="inputField"
        v-model="form.companyName"
        label="Company Name"
        type="text"
        placeholder="Enter your company name..."
      />
      <FormInput
        variant="inputField"
        v-model="form.recognition"
        label="How did you hear about us?"
        type="text"
        placeholder="Enter your answer..."
      />
    </div>
    <FormInput
      variant="textAreaField"
      v-model="form.projectDesc"
      label="Tell us more about your project"
      type="text"
      placeholder="Enter your answer..."
    />
    <Button
      class="w-[20rem] text-xl rounded-full"
      variant="filled"
      @clicked-button="formHandler"
      name="Estimate your project"
    />
  </div>
</template>

<script setup lang="ts">
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  recognition: "",
  projectDesc: "",
});

function formHandler() {
  console.log(form.value);
}
</script>
