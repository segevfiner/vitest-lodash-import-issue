<script setup lang="ts">
import { foo } from "foo";
</script>

<template>
  <main>
    <p>{{ foo([123], 123) }}</p>
  </main>
</template>
