<template>
  <div class="w-full flex flex-col items-center gap-8">
    <Snackbar
      v-if="showSnackbar"
      :message="snackbarMessage"
      :valid="snackbarValidity"
      @close="showSnackbar = false"
    />
    <div
      class="w-full h-max grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <FormInput
        variant="inputField"
        v-model="form.firstName"
        label="First Name"
        type="text"
        placeholder="Enter your first name..."
        required
        @validation="(isValid) => (fieldValidate.firstName = isValid)"
      />
      <FormInput
        variant="inputField"
        v-model="form.lastName"
        label="Last Name"
        type="text"
        placeholder="Enter your last name..."
        required
        @validation="(isValid) => (fieldValidate.lastName = isValid)"
      />
      <FormInput
        variant="inputField"
        v-model="form.email"
        label="Email"
        type="email"
        placeholder="Enter your email..."
        required
        @validation="(isValid) => (fieldValidate.email = isValid)"
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
      required
      @validation="(isValid) => (fieldValidate.projectDesc = isValid)"
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
import { Snackbar } from "#components";

const showSnackbar = ref(false);
const snackbarMessage = ref("");
const snackbarValidity = ref(false);
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  recognition: "",
  projectDesc: "",
});

const fieldValidate = ref({
  firstName: true,
  lastName: true,
  email: true,
  projectDesc: true,
});

function formHandler() {
  const requiredFields = ["firstName", "lastName", "email", "projectDesc"];
  const allFilled = requiredFields.every(
    (key) => form.value[key as keyof typeof form.value]?.trim() !== ""
  );
  const allValid = Object.values(fieldValidate.value).every(Boolean);

  if (allFilled && allValid) {
    console.log(form.value);
    snackbarMessage.value = "Form submitted successfully!";
    snackbarValidity.value = true;
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      recognition: "",
      projectDesc: "",
    };
  } else {
    snackbarMessage.value = "Please fill in all required fields.";
    snackbarValidity.value = false;
  }
  showSnackbar.value = true;
}
</script>
