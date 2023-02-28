<template>
	<section id="plan-page">
		<h1>Species table</h1>
		<div v-if="!species">Loading...</div>
		<dynamic-table :headers="headTable" :data="this.species.results">
			<template v-slot:item-action>
				<span>Some Action</span>
			</template>
			<template v-slot:item-status="{ species }">
				<span>{{ species.count > 1 ? 'Active' : 'Inactive' }}</span>
			</template>
		</dynamic-table>
	</section>
</template>

<!-- JS  -->
<script>
import DynamicTable from '@/components/DynamicTable.vue';

const baseURL = 'https://swapi.dev/api';

export default {
	components: { DynamicTable },
	data() {
		return {
			species: [],
			headTable: {
				name: 'Name',
				classification: 'Classification',
				designation: 'Designation',
				language: 'Language',
			},
		};
	},
	methods: {
		async getAllSpecies() {
			try {
				const res = await fetch(`${baseURL}/species`);

				if (!res.ok) {
					const message = `An error has occured: ${res.status} - ${res.statusText}`;
					throw new Error(message);
				}
				const data = await res.json();
				this.species = data;
			} catch (err) {
				console.error('There was an error!', err);
			}
		},
	},
	mounted() {
		this.getAllSpecies();
	},
};
</script>

<!-- Styling  -->
<style scoped>
h1 {
	padding: 15px 25px;
}
</style>
