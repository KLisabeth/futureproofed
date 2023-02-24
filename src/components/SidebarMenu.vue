<template>
	<nav class="sidebar">
		<ul>
			<li>
				<router-link to="/">
					<i class="fa fa-home fa-2x"></i>
					<span class="text">Home</span>
				</router-link>
			</li>
			<li>
				<router-link to="data">
					<i class="fa fa-list fa-2x"></i>
					<span class="text">Data</span>
				</router-link>
			</li>
			<li>
				<router-link to="analysis">
					<i class="fa fa-line-chart fa-2x"></i>
					<span class="text">Analysis</span>
				</router-link>
			</li>
			<li>
				<router-link to="plan">
					<i class="fa fa-map-o fa-2x"></i>
					<span class="text">Plan</span>
				</router-link>
			</li>
		</ul>

		<ul class="company">
			<li>
				<router-link to="company">
					<img src="@/assets/coffeebell.png" alt="coffeebell icon" />
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<!-- JS  -->
<script lang="ts">
export default {
	props: {},
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
