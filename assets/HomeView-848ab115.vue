<template>
  <header-home-cmp class="container-fluid py-5 px-5" />
  <projects-cmp
    id="section-projects"
    class="container-fluid py-3 px-5"
  />

  <section
    id="section-about-me"
    class="container-fluid bg-light py-3 px-5"
  >
    <h2>Sobre Mim</h2>
    <div
      class="d-block d-md-flex d-lg-flex d-xl-flex d-xll-flex align-items-start"
    >
      <div class="text-center pe-3">
        <img
          src="@/assets/img/avatar-bg-transparent.png"
          width="225"
        >
      </div>

      <div>
        <h4 class="h6 fw-bold">
          Desenvolvedor Full Stack
        </h4>
        <p>
          Ao longo dos últimos 3 anos de experiência atuei tanto em Back-end
          quanto Front-end, concentrando minha expertise em <b>Java</b>,
          <b>Spring Boot</b>, <b>Vue.js</b> e <b>MySQL</b>, abordando projetos
          significativamente amplos voltado para a administração abrangente de
          universidades. Meu objetivo é atuar como desenvolvedor Full-Stack,
          Front-End ou Back-End, de acordo com as necessidades e oportunidades.
        </p>

        <p>
          O que mais me motiva ao trabalho de desenvolvedor são os desafios que
          o desenvolvimento de software pode trazer. Tenho interesse em projeto,
          engenharia e qualidade de software, busco abordar problemas de forma
          adequada através desses três pilares essenciais. Estou sempre em busca
          de aprender soluções criativas e inovadoras.
        </p>

        <div class="pb-2 mb-3">
          <h6 class="fw-bold mb-1">
            Tecnologias, ferramentas e outros
          </h6>

          <div class="d-flex flex-wrap">
            <span
              v-for="(tech, i) in technologies"
              :key="i"
              class="badge bg-secondary me-2 mt-1 hover-scale-110 cursor-default"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <a
          href="https://1drv.ms/b/s!Asgy2ikIeAcnguYXH_lLniZ6es2QWg?e=tQl5Qh"
          target="_blank"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-md"
          >
            <font-awesome-icon
              class="mr-1"
              icon="fa-solid fa-download"
            />
            Baixar Curriculo
          </button>
        </a>
      </div>
    </div>

    <span class="d-flex align-items-center mt-5 mb-3">
      <icon-3-vectors class="mr-1" />
      <h3 class="m-0">Habilidades</h3>
    </span>

    <div class="row">
      <div
        v-for="({ title, description }, i) in habilidades"
        :key="i"
        class="col col-sm-12 col-md-6 col-lg-4 mt-3"
      >
        <card-skill-cmp
          :title="title"
          :description="description"
        />
      </div>
    </div>

    <span class="d-flex align-items-center mt-5 mb-3">
      <icon-3-vectors class="mr-1" />
      <h3 class="m-0">Experiência</h3>
    </span>

    <div class="row">
      <div
        v-for="(job, i) in jobExperiences"
        :key="i"
        class="col col-sm-12 col-md-6 col-lg-4 mt-3"
      >
        <card-experience-job-cmp
          :start="job.start"
          :end="job.end"
          :logo="job.logo"
          :title="job.title"
          :technologies="job.technologies"
          :paragraphs="job.paragraphs"
        />
      </div>
    </div>
  </section>

  <section
    id="section-contact"
    class="container-fluid py-3 px-5"
  >
    <div class="d-flex justify-content-center align-items-center">
      <img
        src="@/assets/img/thumb-up.png"
        width="129"
      >

      <div>
        <h4>Vamos conversar?</h4>
        <span class="text-muted text-lg">
          Entre em contato comigo para construirmos juntos uma solução <br>
          intuitiva, eficiente e adequada as necessidades de seus clientes</span>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-12 col-lg-4">
        <div class="d-grid">
          <a
            class="d-grid text-decoration-none mt-3"
            href="mailto:mts.pacheco.sts@gmail.com"
            target="_blank"
          >
            <button class="btn btn-outline-secondary btn-block">
              mts.pacheco.sts@gmail.com
              <font-awesome-icon icon="fa-solid fa-envelope ml-1" />
            </button>
          </a>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="d-grid">
          <a
            class="d-grid text-decoration-none mt-3"
            href="https://www.linkedin.com/in/matheus-dos-santos-a42845239"
            target="_blank"
          >
            <button class="btn btn-outline-secondary btn-block">
              Linkedin <font-awesome-icon icon="fa-brands fa-linkedin ml-1" />
            </button>
          </a>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="d-grid">
          <a
            class="d-grid text-decoration-none mt-3"
            href="https://api.whatsapp.com/send?phone=554191927475"
          >
            <button class="btn btn-outline-secondary btn-block">
              Whatsapp <font-awesome-icon icon="fa-brands fa-whatsapp ml-1" />
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  CardExperienceJobCmp,
  CardSkillCmp,
  Icon3Vectors,
  HeaderHomeCmp,
  ProjectsCmp,
} from '@/components';

export default {
  name: 'HomeView',
  components: {
    CardExperienceJobCmp,
    CardSkillCmp,
    Icon3Vectors,
    HeaderHomeCmp,
    ProjectsCmp,
  },
  data: () => ({
    habilidades: [
      {
        title: 'Desenvolvimento Front-end',
        description:
          'Transformando designs em sites dinâmicos e responsivos com código e criatividade',
      },
      {
        title: 'Desenvolvimento Back-end',
        description:
          'Criando soluções API Rest inteligentes com padrões de software e documentação de qualidade',
      },
      {
        title: 'Desenvolvimento de Banco de Dados',
        description:
          'Modelagem, criação e manutenção de banco de dados com boas práticas e eficiência',
      },
    ],
    technologies: [
      'Vue.js',
      'Vuex',
      'Spring Boot',
      'JPA',
      'Swagger',
      'MySql',
      'Java 11+',
      'Java EE',
      'JSP',
      'Javascript',
      'Boostrap',
      'HTML5/CSS',
      'C/C++',
      'Jira',
      'GIT',
      'Postman',
      'API Rest',
      'AWS',
    ],
    jobExperiences: [
      {
        logo: 'assets/img/logo-grupo-astus.png',
        title: 'Desenvolvedor Full-Stack Spring Boot',
        technologies: [
          'Vue.js',
          'Spring Boot',
          'MySql',
          'GIT',
          'Jira',
          'Postman',
        ],
        start: '11/2021',
        end: '09/2023',
        paragraphs: [
          'No Grupo Astus eu trabalhava no projeto Astus um sistema de gerenciamento de Universidades em uma equipe de 5 pessoas utilizando a metodologia Scrum.',
          'No front-end usávamos Vue.js com as tecnologias: Vuex, Axios, Vuelidate, Boostrap.' +
            'Já no back-end utilizando Spring Boot com as tecnologias: JPA, Spring Security. E no banco de dados o MySQL.',
        ],
      },
      {
        logo: 'assets/img/logo-siga.png',
        title: 'Atendimento, Testes e Desenvolvimento',
        technologies: [
          'Java EE',
          'Java',
          'MySql',
          'JSP',
          'JavaScript',
          'Boostrap',
          'GIT',
          'Kanban',
        ],
        start: '01/2021',
        end: '12/2021',
        paragraphs: [
          'O projeto SIGA vinculado a UFPR é um sistema de gerenciamento acadêmico da' +
            'universidade, dividido entre graduação e pós-graduação. Direcionado a pós-' +
            'graduação, eu trabalha no desenvolvimento em uma arquitetura MVC usando o' +
            'JSP, Java EE, JavaScript e Bootstrap. Auxiliava também no suporte do sistema' +
            ' através de atendimentos de chamados.',
        ],
      },
      {
        logo: 'assets/img/logo-ecomp.png',
        title: 'Assessor de Qualidade',
        technologies: [
          'Laravel',
          'Vue.js',
          'GIT',
          'Gerenciamento de Qualidade',
          'UX Design'
        ],
        start: '09/2020',
        end: '07/2021',
        paragraphs: [
          'Na assessoria de qualidade, trabalhava na melhoria da infraestrutura da empresa e'
            + 'dos processos de desenvolvimento. Além de atuar na assessoria, eu também'
            + 'participava de projetos como desenvolvedor back-end Laravel',
        ],
      },
    ],
  }),
  mounted() {
    console.log(import.meta.env);
  }
};
</script>

<style scoped>
#title {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Lexend Deca', sans-serif;
}
</style>
