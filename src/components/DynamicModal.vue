<template>
	<transition name="modal">
		<div class="modal-container">
			<button class="modal-close-button" @click="$emit('close')">
				<i class="fa fa-close"></i>
			</button>
			<div class="modal">
				<div class="modal-header">
					<slot name="header"> default header </slot>
				</div>

				<div class="modal-body">
					<slot name="body">
						<form-component />
					</slot>
				</div>

				<div class="modal-footer">
					<slot name="footer">
						default footer
						<button class="modal-default-button" @click="$emit('close')">
							OK
						</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import FormComponent from './FormComponent.vue';
export default {
	props: ['show'],
	methods: {
		close: function () {
			this.$emit('close');
		},
	},
	components: {
		FormComponent,
	},
};
</script>
<style>
.modal-container {
	position: absolute;
	width: 500px;
	height: auto;
	top: 0;
	bottom: 0;
	right: 0;
	padding: 20px 35px;
	background-color: #fcfcfc;
	transition: all 0.2s ease;
}
.modal {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.modal-default-button {
	float: right;
}
.modal-close-button {
	margin-right: 5px;
	float: right;
}
.modal-container .modal-footer {
	display: inline;
	margin-bottom: 50px;
	height: 50px;
}
</style>
