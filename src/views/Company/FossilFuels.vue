<template>
	<section>
		<!-- Modal -->
		<button id="show-modal" v-on:click="showModal = true">Show Modal</button>

		<dynamic-modal v-if="showModal" v-on:close="showModal = false">
			<span slot="header">
				<h2>Heating main building</h2>
				<div>
					<b-nav small>
						<b-nav-item active>Data</b-nav-item>
						<b-nav-item>History</b-nav-item>
						<b-nav-item>Details</b-nav-item>
						<b-nav-item>Activity</b-nav-item>
						<b-nav-item>Notes</b-nav-item>
					</b-nav>
				</div>
			</span>
			<span slot="footer">
				<b-avatar></b-avatar>
				<span class="mr-auto">J. Circlehead</span>
				<span class="mr-auto">just now</span>
			</span>
		</dynamic-modal>
	</section>
</template>

<script>
import DynamicModal from '@/components/DynamicModal.vue';
export default {
	components: { DynamicModal },
	data() {
		return {
			showModal: false,
		};
	},
};
</script>

<style></style>
