import{_ as p,o as t,c as n,a as e,t as f,b as s,d as x,r as d,e as r,F as A,f as B,p as S,g as k}from"./index-d815e147.js";const I="/portfolio/assets/hashtag-d06f2e8c.png",y={name:"CardSkillCmp",props:{title:{type:String,required:!0,description:"Título da habilidade"},description:{type:String,required:!0,description:"Transformando designs em sites dinâmicos e responsivos com código e criatividade"}}},M={class:"card border-0 shadow p-3 mt-3"},V=e("img",{src:I,width:"90",height:"90"},null,-1),F={class:"card-body"},q={class:"h4"};function D(o,a,i,m,_,c){return t(),n("div",M,[V,e("div",F,[e("h6",q,f(i.title),1),s(" "+f(i.description),1)])])}const j=p(y,[["render",D]]),N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA5CAYAAABXoymnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7VntbcIwED2qDsAGdTdIN2gngA2ACZpOQDZoNqCdoDBBOwJMgDdoNmjflYuwUBrb5wj44Sc9bOL7eEls6eyMKAJjAM0UnIAFaGRoC1pw3TTNO0VgFGqI3Jx4xV2PqQWrUCE3IUZIXqP5kORfYAkaJBkx0X8AF5LcgG/wqWgIcCDwB/wGnwPsS7Fln1dKAQLMneRFhF/hiJiSFnDeSxDvnXf4lo5437zpDNDe/Z76BfaNf0qM2X82fZNwIm3VY2PouBS7sJZ2qhFgpN2RHhtpC42APycssy0pAV8rXUMKAWfBLaXBUiKSBOAR31MiLv4KsoAsIAvIAq5agOUfFBN3pIRTxm01AlonfU13rAMsKQRsBhCwlHZNsRgf0Fa2ZaS7W5TuSQsuqQcoy2eUAt5cOCK8T+JkY7L02QftDSVQJX+t9HdtvYhxQ4cqmufLo9jVGH/xxY7ZnM7pMKmMx7QBF0geNPGCBZwImYgQd5nx0+CkGyRvKCPjHODlGbLW+5DrgSwgC8gCsoAsIAu4uAAVnL2CyxUpEF0ViwA+/+ctV/sdwIJPztlwMFSvQMru2rlUa5Inw/fBIgSph9X8pUx9gMH4BYNykKyaIyBcAAAAAElFTkSuQmCC",Q="/portfolio/assets/banner-home-f6ddd862.png",U={name:"HeaderHomeCmp"},H=x('<div class="d-flex align-items-center justify-content-between"><div><h5 class="mt-2 mb-0"> Olá, eu sou o Matheus Pacheco </h5><h1 id="title" class="m-0"> Programando soluções eficientes! </h1><span class="text-muted">Desenvolvedor Full-Stack Spring Boot e Vue.js</span></div><div class="align-self-end"><img src="'+N+'" width="30"></div><div><img src="'+Q+'"></div></div>',1),P=[H];function R(o,a,i,m,_,c){return t(),n("header",null,P)}const E=p(U,[["render",R]]),T={name:"ProjectsCmp"},Z={class:"container-fluid py-3 pb-3 px-10"},L=e("h2",null,"Projetos",-1),O={class:"alert alert-secondary",role:"alert"};function X(o,a,i,m,_,c){const u=d("font-awesome-icon");return t(),n("section",Z,[L,e("div",O,[r(u,{class:"mr-1 text-dark",size:"lg",icon:"fa-solid fa-circle-info"}),s(" Em breve novos projetos por aqui ")])])}const J=p(T,[["render",X]]),K={name:"Icon3Vectors"},Y={width:"14",height:"24",viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=e("path",{d:"M0.505406 18.8106C0.177327 19.2437 1.19253 19.9691 4.82187 21.9154C8.66504 23.9732 9.5877 24.2873 9.78054 23.6645C10.0352 22.8049 1.05402 18.1237 0.505406 18.8106Z",fill:"#171717"},null,-1),W=e("path",{d:"M8.19432 1.16303C6.83159 0.276124 6.50432 0.395689 3.66835 2.80864C0.736575 5.2978 0.289638 5.85685 0.710609 6.4449C1.47828 7.50803 2.46592 7.0977 6.24574 4.1997C9.03319 2.06003 9.20015 1.81765 8.19432 1.16303Z",fill:"#171717"},null,-1),z=e("path",{d:"M12.6787 10.7515C11.7073 10.1008 11.2237 10.0632 9.31262 10.4731C3.64826 11.7103 -0.495975 12.1448 1.4203 13.3735C2.19901 13.8803 3.27576 13.7589 9.94956 12.5319C13.6356 11.8362 13.9727 11.6306 12.6787 10.7515Z",fill:"#171717"},null,-1),ee=[G,W,z];function oe(o,a,i,m,_,c){return t(),n("svg",Y,ee)}const se=p(K,[["render",oe]]),te="/portfolio/assets/avatar-0a103cb2.png";const ne={name:"HomeView",components:{CardSkillCmp:j,Icon3Vectors:se,HeaderHomeCmp:E,ProjectsCmp:J},data:()=>({habilidades:[{title:"Desenvolvimento Front-end",description:"Transformando designs em sites dinâmicos e responsivos com código e criatividade"},{title:"Desenvolvimento Back-end",description:"Criando soluções API Rest inteligentes com padrões de software e documentação de qualidade"},{title:"Desenvolvimento de Banco de Dados",description:"Modelagem, criação e manutenção de banco de dados com boas práticas e eficiência"}]}),methods:{onClick(){window.open("/src/assets/files/curriculum.pdf","_blank")}}},l=o=>(S("data-v-fff5608d"),o=o(),k(),o),ae={id:"section-about-me",class:"container-fluid bg-light py-3 px-10"},ie=l(()=>e("h2",null,"Sobre Mim",-1)),ce={class:"d-flex align-items-center"},de=l(()=>e("div",null,[e("img",{src:te,width:"250"})],-1)),re=l(()=>e("h4",{class:"h6 font-weight-bold"}," Desenvolvedor Full Stack ",-1)),le=l(()=>e("p",null,[s(" Ao longo dos últimos 3 anos de experiência atuei tanto em Back-end quanto Front-end, concentrando minha expertise em "),e("b",null,"Java"),s(", "),e("b",null,"Spring Boot"),s(", "),e("b",null,"Vue.js"),s(" e "),e("b",null,"MySQL"),s(", abordando projetos significativamente amplos voltado para a administração abrangente de universidades. Meu objetivo é atuar como desenvolvedor Full-Stack, Front-End ou Back-End, de acordo com as necessidades e oportunidades. ")],-1)),pe=l(()=>e("p",null," O que mais me motiva ao trabalho de desenvolvedor são os desafios que o desenvolvimento de software pode trazer. Tenho interesse em projeto, engenharia e qualidade de software, busco abordar problemas de forma adequada através desses três pilares essenciais. Estou sempre em busca de aprender soluções criativas e inovadoras. ",-1)),me={class:"d-flex align-items-center mt-5 mb-3"},_e=l(()=>e("h3",{class:"m-0"},"Habilidades",-1)),ue={class:"row"};function he(o,a,i,m,_,c){const u=d("header-home-cmp"),v=d("projects-cmp"),g=d("font-awesome-icon"),w=d("icon-3-vectors"),C=d("card-skill-cmp");return t(),n(A,null,[r(u,{class:"container-fluid py-10 px-10"}),r(v,{id:"section-projects"}),e("section",ae,[ie,e("div",ce,[de,e("div",null,[re,le,pe,e("button",{type:"button",class:"btn btn-secondary btn-md",onClick:a[0]||(a[0]=(...h)=>c.onClick&&c.onClick(...h))},[r(g,{class:"mr-1",icon:"fa-solid fa-download"}),s(" Baixar Curriculo ")])])]),e("span",me,[r(w,{class:"mr-1"}),_e]),e("div",ue,[(t(!0),n(A,null,B(o.habilidades,({title:h,description:b},$)=>(t(),n("div",{key:$,class:"col col-sm-12 col-md-6 col-lg-4"},[r(C,{title:h,description:b},null,8,["title","description"])]))),128))])])],64)}const Ae=p(ne,[["render",he],["__scopeId","data-v-fff5608d"]]);export{Ae as default};