<template>
	<header>
		<nav class="navbar">
			<div class="active">
				<router-link to="/" aria-label="logo" class="logo">
					<img src="../assets/logo.png" alt="Logo" />
				</router-link>
				<i :class="'fa ' + this.$route.meta.icon"></i>
				<span class="data">{{ this.$route.meta.title }}</span>
			</div>
			<div>
				<form class="search-wrap" action="">
					<input type="text" placeholder="" name="search" />
					<button type="submit"><i class="fa fa-search"></i></button>
				</form>
			</div>
			<div class="navbar-right">
				<router-link to="/">
					<i class="fa fa-bell-o"></i>
				</router-link>

				<router-link to="/">
					<i class="fa fa-user-circle-o"></i>
				</router-link>
			</div>
		</nav>
	</header>
</template>

<!-- JS  -->
<script lang="ts">
export default {
	props: {},
};
</script>

<!-- Styling  -->
<style>
.navbar {
	width: 100vw;
	height: 60px;
	display: flex;
	align-items: center;
}

.navbar div {
	float: left;
	color: #aeaaaa;
	text-decoration: none;
	font-size: 20px;
}

.navbar div:hover {
	background-color: #ddd;
	color: black;
}

.navbar-right {
	float: right;
}
.active .logo {
	padding: 10px;
	margin-right: 1rem;
	border-right: 1px solid #e2e2e263;
}
.active .logo > img {
	width: 40px;
	height: 40px;
}
.search-wrap {
	display: inline-block;
	position: relative;
}

button,
input[type='text'] {
	border: none;
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;
}

input[type='text']:focus:hover {
	border-bottom: 1px solid #bbb;
}

input[type='text']:focus {
	z-index: 1;
	border-bottom: 1px solid #bbb;
	cursor: text;
}
</style>
