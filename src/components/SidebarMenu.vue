<template>
	<nav class="sidebar">
		<ul>
			<li v-for="route in routes" :key="route.path">
				<router-link :to="route.path">
					<i :class="'fa ' + route.icon + ' fa-2x'"></i>
					<span class="text">{{ route.name }}</span>
				</router-link>
			</li>
		</ul>

		<ul class="company">
			<li>
				<router-link to="/company">
					<img src="@/assets/coffeebell.png" alt="coffeebell icon" />
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<!-- JS  -->
<script lang="ts">
export default {
	data() {
		return {
			routes: [
				{ name: 'Home', icon: 'fa-home', path: '/' },
				{ name: 'Data', icon: 'fa-list', path: '/data' },
				{ name: 'Analysis', icon: 'fa-line-chart', path: '/analysis' },
				{ name: 'Plan', icon: 'fa-map-o', path: '/plan' },
			],
		};
	},
};
</script>

<!-- Styling  -->
<style>
.sidebar {
	border-top: 1px solid #e5e5e5;
	position: absolute;
	top: 60px;
	bottom: 0;
	height: auto;
	left: 0;
	width: 60px;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.sidebar > ul {
	margin: 20px 0;
}

ul {
	float: left;
	display: block;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	list-style-type: none;
}
.sidebar li > a {
	position: relative;
	display: table;
	color: #999;
	font-family: arial;
	font-size: 14px;
	text-decoration: none;
}

.text {
	font-size: 10px;
}

.sidebar > ul.company {
	position: absolute;
	left: 0;
	bottom: 0;
	left: 0;
	padding: 10px;
}
</style>
