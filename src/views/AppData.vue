<template>
	<main id="data-page">
		<section class="film">
			<h1>{{ films.director }}</h1>

			<div class="film-details">{{ films.director }}</div>
		</section>
		<section class="experiences">
			<h2>Top produsers {{ films.producer }}</h2>
			<div class="cards">
				<!-- <router-link
					v-for="vehicle in films.vehicles"
					:key="vehicle.episode_id"
					:to="{
						name: 'reporting_company',
						params: { experienceSlug: evehicle.slug },
					}"
				>
				</router-link> -->
			</div>
			<router-view />
		</section>
	</main>
</template>

<!-- JS  -->
<script>
const baseURL = 'https://swapi.dev/api';

export default {
	data() {
		return {
			films: [],
		};
	},
	methods: {
		async getAllFilms() {
			try {
				const res = await fetch(`${baseURL}/films`);

				if (!res.ok) {
					const message = `An error has occured: ${res.status} - ${res.statusText}`;
					throw new Error(message);
				}
				const data = await res.json();
				this.films = data.results;
			} catch (err) {
				console.error('There was an error!', err);
			}
		},
		episodes() {
			return this.films.find(films => films.episode_id === this.id);
		},
	},
	mounted() {
		this.getAllFilms();
		//this.episodes();
	},
};
</script>

<!-- Styling  -->
<style scoped>
.footer {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
}
</style>
