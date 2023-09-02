<template>
  <header-home-cmp class="container-fluid py-10 px-10" />
  <projects-cmp id="section-projects" />

  <section
    id="section-about-me"
    class="container-fluid bg-light py-3 px-10"
  >
    <h2>Sobre Mim</h2>
    <div class="d-flex align-items-center">
      <div>
        <img
          src="@/assets/img/avatar.png"
          width="250"
        >
      </div>
    
      <div>
        <h4 class="h6 font-weight-bold">
          Desenvolvedor Full Stack
        </h4>
        <p>
          Ao longo dos últimos 3 anos de experiência atuei tanto em Back-end quanto Front-end,
          concentrando minha expertise em <b>Java</b>, <b>Spring Boot</b>, <b>Vue.js</b> e <b>MySQL</b>, abordando
          projetos significativamente amplos voltado para a administração abrangente de
          universidades. Meu objetivo é atuar como desenvolvedor Full-Stack, Front-End ou Back-End, de acordo com as necessidades e oportunidades.
        </p>
    
        <p>
          O que mais me motiva ao trabalho de desenvolvedor são os desafios que o
          desenvolvimento de software pode trazer. Tenho interesse em projeto, engenharia e
          qualidade de software, busco abordar problemas de forma adequada através desses três
          pilares essenciais. Estou sempre em busca de aprender soluções criativas e inovadoras.
        </p>


        <button
          type="button"
          class="btn btn-secondary btn-md"
          @click="onClick"
        >
          <font-awesome-icon
            class="mr-1"
            icon="fa-solid fa-download"
          /> 
          Baixar Curriculo
        </button>
      </div>
    </div>

    <span
      class="d-flex align-items-center mt-5 mb-3"
    >
      <icon-3-vectors class="mr-1" />
      <h3 class="m-0">Habilidades</h3>
    </span>


    <div class="row">
      <div
        v-for="({ title, description }, i) in habilidades"
        :key="i"
        class="col col-sm-12 col-md-6 col-lg-4"
      >
        <card-skill-cmp
          :title="title"
          :description="description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { CardSkillCmp, Icon3Vectors, HeaderHomeCmp, ProjectsCmp } from '@/components';

export default {
  name: 'HomeView',
  components: { CardSkillCmp, Icon3Vectors, HeaderHomeCmp, ProjectsCmp },
  data: () => ({
    habilidades: [
      {
        title: 'Desenvolvimento Front-end',
        description: 'Transformando designs em sites dinâmicos e responsivos com código e criatividade',
      },
      {
        title: 'Desenvolvimento Back-end',
        description: 'Criando soluções API Rest inteligentes com padrões de software e documentação de qualidade',
      },
      {
        title: 'Desenvolvimento de Banco de Dados',
        description: 'Modelagem, criação e manutenção de banco de dados com boas práticas e eficiência',
      }
    ]
  }),
  methods: {
    onClick() {
      window.open('/src/assets/files/curriculum.pdf', '_blank');
    }
  },
}
</script>

<style scoped>
#title {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Lexend Deca', sans-serif;
}
</style>