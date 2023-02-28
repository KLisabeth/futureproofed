<template>
	<div id="accordion" class="accordion-container">
		<div
			v-for="(item, index) in items"
			:key="index + items"
			:class="['accordion', { 'is-open': isOpen.includes(index) }]"
		>
			<div class="accordion-header" v-on:click="toggleAccordion(index)">
				<i v-if="!isOpen.includes(index)" class="fa fa-plus"></i>
				<i v-else class="fa fa-minus"></i>
				{{ item?.title }}
			</div>
			<div class="accordion-body">
				<AccordionItem v-if="item.subitem" v-bind:subitems="item.subitem" />
			</div>
		</div>
	</div>
</template>

<script>
import AccordionItem from './AccordionItem.vue';
export default {
	components: { AccordionItem },
	data() {
		return {
			items: [
				{
					title: 'Company facilities',
					subitem: [
						{
							title: 'Fossil fuels',
							subitem: [
								{ title: 'Headquaters', text: 'Heatingmain building' },
								{
									title: 'Office 1',
									text: 'Heatingmain building',
									subitem: [
										{ title: 'Office 2', text: 'Heatingmain building' },
										{ title: 'Office 3', text: 'Heatingmain building' },
										{ title: 'Office 4' },
										{ title: 'Factory 1' },
										{ title: 'Processes' },
										{ title: 'Cooling' },
									],
								},
							],
						},
					],
				},
				{
					title: 'Company vehicles',
					subitem: [{ title: 'hey sub ', subitem: [{ title: 'hey sub sub' }] }],
				},
			],
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

<style scoped>
.accordion:not(.is-open) .accordion-body {
	display: none;
}
.accordion {
	display: flexbox;
}
.accordion-body {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	background-color: aquamarine;
}
.accordion-content {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	background-color: aquamarine;
}
.accordion-header {
	color: blue;
}
</style>
