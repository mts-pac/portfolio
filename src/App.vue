<template>
  <navbar-cmp />
  <router-view />
  <footer
    class="d-flex p-3 justify-content-center"
  >
    <div>
      &copy; 2023 - Matheus Pacheco
    </div>
  </footer>
</template>

<script>
import { NavbarCmp } from '@/components';

export default {
  name: 'App',
  components: { NavbarCmp },
}

</script>

<style scoped>

</style>
