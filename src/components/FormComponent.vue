<template>
	<form>
		<div class="field">
			<label class="label"> Type</label>
			<div class="control">
				<div class="select">
					<select v-model="form.energy_type">
						<option disabled value=""></option>
						<option
							v-for="(option, index) in options.energy"
							:value="option.value"
							:key="index"
						>
							{{ option.text }}
						</option>
					</select>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Value</label>
			<div class="control">
				<input
					name="energy_value"
					v-model="form.energy_value"
					v-validate="'required|min:3'"
					class="input"
					type="text"
				/>
			</div>
		</div>

		<div class="field">
			<label class="label"> Unit</label>
			<div class="control">
				<div class="select">
					<select v-model="form.unit">
						<option disabled value=""></option>
						<option
							v-for="(option, index) in options.unit"
							:value="option.value"
							:key="index"
						>
							{{ option.text }}
						</option>
					</select>
				</div>
			</div>
		</div>
	</form>
</template>

<script lang="ts">
export default {
	data() {
		return {
			emission: 0,
			CO2_e: 0.18316,
			form: {
				energy_type: '',
				energy_value: 0,
				unit: 0,
			},
			options: {
				energy: [
					{ value: 'natural_gas', text: 'Natural gas' },
					{ value: 'gas_oil', text: 'Gas oil' },
					{ value: 'propane', text: 'Propane' },
					{ value: 'mazout', text: 'Mazoutt' },
					{ value: 'electricity', text: 'Electricity' },
				],
				unit: [
					{ value: 'kg', text: 'kg' },
					{ value: 'kwh', text: 'kWh' },
					{ value: 'm3', text: 'M3' },
					{ value: 't', text: 'tonnes' },
				],
			},
		};
	},
	methods: {
		emissionData(CO2_e) {
			if (this.energy_type === 'natural_gas' || this.unit === 'kwh') {
				const value = (this.emission = (this.energy_value * CO2_e) / 1000);
				return value;
			}
		},
	},
};
</script>

<style scoped>
form {
	margin: auto;
	box-sizing: border-box;
	padding: 2rem;
}
input,
select {
	width: 200px;
	height: 30px;
	margin: 2px;
	color: #bec0c1;
	border-color: #bcbcbd;
	border-radius: 5px;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
label {
	font-size: 15px;
	font-family: 'arial';
	display: inline;
	color: #737375;
}

select {
	display: inline;
	padding: 5px 10px;
}
input {
	border: none;
	border: 1px solid #bcbcbd;
}
option {
	padding: 10px;
}
</style>
