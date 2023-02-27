import { BootstrapVue } from 'bootstrap-vue';
import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import routes from './routes';
import './styles.css';

Vue.config.productionTip = false;

// Import BootstrapVue JS and CSS
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes,
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
