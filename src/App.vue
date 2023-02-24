<script lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue';
import NavbarMenu from './components/NavbarMenu.vue';

export default {
	components: { SidebarMenu, NavbarMenu },
	name: 'App',
};
</script>

<template>
	<div class="app">
		<navbar-menu />
		<sidebar-menu />

		<main class="main">
			<router-view />
		</main>
	</div>
</template>

<style>
.main {
	margin-left: 90px;
	margin-top: 10px;
}
</style>
