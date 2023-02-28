<!-- using bootsrtab items for some display -->
<template>
	<section id="home-page">
		<h1>Dashboard</h1>
		<b-container class="bv-example-row" mt="2" p="2">
			<b-row>
				<b-col v-for="(planet, index) in planets" :key="index">
					<b-card text-variant="white" class="text-center">
						<b-card-text
							v-for="(films, rindex) in planet.films"
							:key="films + rindex"
						>
							<a href="" text-variant="white">{{ films }}</a>
						</b-card-text>
					</b-card>
				</b-col>
			</b-row>

			<b-row class="mt-4">
				<b-col cols="8"
					><b-card class="p-3">
						<b-card-text>
							Some quick example text to build on the <em>card title</em> and
							make up the bulk of the card's content.
						</b-card-text>
					</b-card></b-col
				>
				<b-col cols="4"
					><b-card class="p-3">
						<b-card-text>
							Some quick example text to build on the <em>card title</em> and
							make up the bulk of the card's content.
						</b-card-text>
					</b-card></b-col
				>
			</b-row>
		</b-container>
	</section>
</template>

<!-- JS  -->
<script>
const baseURL = 'https://swapi.dev/api';

export default {
	data() {
		return {
			planets: [],
		};
	},
	methods: {
		async getAllPlanets() {
			try {
				const res = await fetch(`${baseURL}/planets`);

				if (!res.ok) {
					const message = `An error has occured: ${res.status} - ${res.statusText}`;
					throw new Error(message);
				}
				const data = await res.json();
				this.planets = data.results;
			} catch (err) {
				console.error('There was an error!', err);
			}
		},
		async getDataById() {
			const id = this.$refs.get_id.value;

			if (id) {
				try {
					const res = await fetch(`${baseURL}/planets/${id}`);

					if (!res.ok) {
						const message = `An error has occured: ${res.status} - ${res.statusText}`;
						throw new Error(message);
					}
					const data = await res.json();
					this.planets = data;
				} catch (err) {
					console.error('There was an error!', err);
				}
			}
		},

		clearGetOutput() {
			this.planets = null;
		},
	},
	mounted() {
		this.getAllPlanets();
	},
};
</script>

<!-- Styling  -->
<style scoped>
h1 {
	padding: 15px 25px;
}
</style>
