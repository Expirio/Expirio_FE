import Vue from 'vue';
import Vuetify from 'vuetify/es5/components/Vuetify';
import theme from './theme';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import i18n from './i18n';
// import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.filter('capitalize', value => {
  if (!value) return '';
  const v = value.toString();
  return v.charAt(0).toUpperCase() + v.slice(1);
});

Vue.use(Vuetify, {
  theme,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
