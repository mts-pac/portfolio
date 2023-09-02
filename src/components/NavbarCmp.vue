<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a
        class="navbar-brand mr-auto"
        href="#"
      >
        <img
          src="@/assets/img/logo.png"
          alt=""
          class="d-inline-block align-text-top"
        >
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav-bar"
        aria-controls="nav-bar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div
        id="nav-bar"
        class="collapse navbar-collapse justify-content-end"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="#section-projects"
            >
              Projetos
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#section-about-me"
            >
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarCmp',
  
}
</script>

<style scoped>

</style>