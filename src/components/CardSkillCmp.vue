<template>
  <div class="card border-0 shadow p-3 mt-3">
    <img
      src="src/assets/img/hashtag.png"
      width="90"
      height="90"
    >

    <div class="card-body">
      <h6 class="h4">
        {{ title }}
      </h6>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSkillCmp',
  props: {
    title: {
      type: String,
      required: true,
      description: 'Título da habilidade',
    },
    description: {
      type: String,
      required: true,
      description:
        'Transformando designs em sites dinâmicos e responsivos com código e criatividade',
    },
  },
};
</script>
