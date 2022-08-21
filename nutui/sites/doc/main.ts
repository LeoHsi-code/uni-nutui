import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/nutui/sites/assets/styles/reset.scss';
import '@/nutui/sites/assets/styles/md-style.scss';
import DemoBlock from './components/demo-block';
import { Hover } from './directive/hover/hover';
import NutUI from '@/packages/nutui.vue';

import { isMobile } from '@/nutui/sites/assets/util';

if (isMobile) {
  location.replace('demo.html' + location.hash);
}

createApp(App).directive('hover', Hover).component('demo-block', DemoBlock).use(router).use(NutUI).mount('#doc');