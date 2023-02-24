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
		name: 'Emission',
		icon: 'fa fa-home fa-2x',
		props: true,
	},
	{
		path: '/data',
		component: Data,
		name: 'Emission Data',
		icon: 'fa fa-list fa-2x',
		props: true,
	},
	{
		path: '/analysis',
		component: Analysis,
		name: 'Emission Analysis',
		icon: 'fa fa-line-chart fa-2x',
		props: true,
	},

	{
		path: '/plan',
		component: Plan,
		name: 'Emission Plan',
		icon: 'fa fa-map-o fa-2x',
		props: true,
	},
	{ path: '*', component: NotFound },
];

export default routes;
