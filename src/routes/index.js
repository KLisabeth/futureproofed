// GeneralViews
import NotFound from '@/views/NotFound.vue';

// Admin pages
const Analysis = () =>
	import(/* webpackChunkName: "dashboard" */ '@/views/AppAnalysis.vue');
const Home = () =>
	import(/* webpackChunkName: "common" */ '@/views/AppHome.vue');
const Data = () =>
	import(/* webpackChunkName: "common" */ '@/views/AppData.vue');
const Plan = () =>
	import(/* webpackChunkName: "common" */ '@/views/AppPlan.vue');

const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
		meta: {
			icon: 'fa-home',
			title: 'Dashboard',
		},
	},
	{
		path: '/data',
		component: Data,
		name: 'data',
		meta: {
			icon: 'fa-list',
			title: 'Emission Data',
		},
	},
	{
		path: '/analysis',
		component: Analysis,
		name: 'analysis',
		meta: {
			icon: 'fa-line-chart',
			title: 'Emission Analysis',
		},
	},

	{
		path: '/plan',
		component: Plan,
		name: 'plan',
		meta: {
			icon: 'fa-map-o',
			title: 'Emission Plan',
		},
	},
	{ path: '*', component: NotFound },
];

export default routes;
