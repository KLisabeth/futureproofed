<!-- using bootsrtab items for some display -->
<template>
	<section id="home-page">
		<h1>Dashboard</h1>
		<b-container class="mt-4">
			<b-row>
				<b-col>
					<b-form-input v-model="text" ref="get_id" placeholder="Planet Id" />
				</b-col>
				<b-col>
					<b-button variant="outline-primary" @click="getDataById">
						Get planet Id
					</b-button>
				</b-col>
				<b-col>
					<b-button variant="outline-warning" @click="clearOutput"
						>Clear
					</b-button>
				</b-col>
			</b-row>
			<div v-if="getResult" class="alert alert-secondary mt-2" role="alert">
				<pre>{{ getResult }}</pre>
			</div>
		</b-container>
		<b-container class="bv-example-row" mt="2" p="2">
			<b-row class="mt-4"> </b-row>
			<b-row>
				<b-col v-for="(planet, index) in planets" :key="index">
					<b-card text-variant="white" class="text-center">
						<b-card-text
							v-for="(films, rindex) in planet.films"
							:key="films + rindex"
						>
							<a v-bind:href="films" text-variant="white">{{ films }}</a>
						</b-card-text>
					</b-card>
				</b-col>
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
			getResult: null,
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
					const result = {
						data: data,
						status: res.status,
						statusText: res.statusText,
						headers: {
							'Content-Type': res.headers.get('Content-Type'),
							'Content-Length': res.headers.get('Content-Length'),
						},
					};

					this.getResult = this.fortmatResponse(result);
				} catch (err) {
					this.getResult = err.message;
				}
			}
		},
		fortmatResponse(res) {
			return JSON.stringify(res, null, 2);
		},

		clearOutput() {
			this.getResult = null;
		},
	},
	mounted() {
		this.getAllPlanets();
		this.getDataById();
	},
};
</script>

<!-- Styling  -->
<style scoped>
h1 {
	padding: 15px 25px;
}
</style>
