<template>
	<div>
		<div
			class="sub-accordion-header"
			v-for="(sub, index) in subitems"
			:key="index"
			:class="['sub-accordion', { 'is-open': isOpen.includes(index) }]"
		>
			<div
				class="sub-accordion-header"
				v-on:click="this.toggleAccordion(index)"
			>
				<i v-if="!isOpen.includes(index)" class="fa fa-plus"></i>
				<i v-else class="fa fa-minus"></i>
				{{ sub.title }}
			</div>
			<div class="sub-accordion-body">
				<div class="accordion-content">
					<!-- Renders the accordion-item component again if the current item has sub elements  -->
					<accordion-item v-if="sub" :subitems="sub"></accordion-item>
				</div>
			</div>
		</div>
	</div>
</template>

<!-- JS  -->
<script>
export default {
	props: ['subitems'],
	data() {
		return {
			isOpen: [],
		};
	},

	methods: {
		toggleAccordion(index) {
			if (this.isOpen.includes(index)) {
				this.isOpen = this.isOpen.filter(i => i !== index);
				return;
			}

			this.isOpen.push(index);
		},
	},
};
</script>
<!-- Styling  -->
<style scoped>
.sub-accordion:not(.is-open) .sub-accordion-body {
	display: none;
}
.sub-accordion-header {
	color: rgb(255, 0, 179);
}
</style>
