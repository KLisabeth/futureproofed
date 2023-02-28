<template>
	<div class="app">
		<navbar-menu />
		<sidebar-menu />

		<main class="main">
			<router-view />
		</main>
	</div>
</template>

<!-- JS  -->
<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import NavbarMenu from './components/NavbarMenu.vue';

export default {
	components: { SidebarMenu, NavbarMenu },
	name: 'App',
};
</script>

<!-- Styling  -->
<style scoped>
.app {
	width: 100%;
	height: 100vh;
}
.main {
	padding-left: 65px;
}
</style>
