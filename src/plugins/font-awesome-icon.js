import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCode, faDownload, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faDownload);
library.add(faCode);
library.add(faLinkedin);
library.add(faCircleInfo);

export default {
  install(Vue) {
    Vue.component('FontAwesomeIcon', FontAwesomeIcon);
  },
};
