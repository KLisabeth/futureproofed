<template>
	<section id="analysis-page">
		<h1>Data</h1>
		<accordion-menu />
	</section>
</template>

<!-- JS  -->
<script lang="ts">
import AccordionMenu from '@/components/AccordionMenu.vue';

export default {
	components: { AccordionMenu },
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		toggleOpen: function (index) {
			this.navigation = this.navigation.map((nav, i) => {
				if (index === i) {
					nav.open = !nav.open;
				} else {
					nav.open = false;
				}
				return nav;
			});
		},
	},
};
</script>

<!-- Styling  -->
<style scoped></style>
