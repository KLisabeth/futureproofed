// GeneralViews
import NotFound from '@/views/NotFound.vue';

// Admin pages
const Analysis = () => import('@/views/AppAnalysis.vue');
const Home = () => import('@/views/AppHome.vue');
const Data = () => import('@/views/AppData.vue');
const Plan = () => import('@/views/AppPlan.vue');
const ReportingCompany = () => import('@/views/Company/ReportingCompany.vue');
const CompanyFacilities = () => import('@/views/Company/CompanyFacilities.vue');
const FossilFuels = () => import('@/views/Company/FossilFuels.vue');
//Dummy data
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
		path: '/reporting_company/:id/:slug',
		name: 'reporting company',
		component: ReportingCompany,
		props: route => ({ ...route.params, id: parseInt(route.params.id) }),
		children: [
			{
				path: ':company_facilities',
				name: 'company facilities',
				component: CompanyFacilities,
				props: route => ({ ...route.params, id: parseInt(route.params.id) }),
			},
			{
				path: ':fossil_fuelss',
				name: 'fossil fuels',
				component: FossilFuels,
				props: route => ({ ...route.params, id: parseInt(route.params.id) }),
			},
		],
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
