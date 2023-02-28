<template>
	<table>
		<thead>
			<tr>
				<th v-for="(header, index) in headers" :key="index">
					{{ header }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, i) of data" :key="i">
				<td v-for="(td, j) of slotsProceced" :key="i + '-' + j">
					<slot v-if="td.hasSlot" :name="td.slotName" :item="item"></slot>
					<span v-else>{{ item[td.key] }}</span>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<!-- JS  -->
<script lang="ts">
//ts checks for errors
export default {
	props: ['headers', 'data'],

	setup(props, { slots }) {
		const slotsProceced = [];
		for (const key in props.headers) {
			if (Object.prototype.hasOwnProperty.call(props.headers, key)) {
				const slotName = 'item-' + key;
				slotsProceced.push({
					key: key,
					hasSlot: !!slots[slotName],
					slotName: slotName,
				});
			}
		}

		return { slotsProceced };
	},
};
</script>

<!-- Styling  -->
<style scoped>
table,
thead,
tbody,
tr,
td,
th {
	margin: auto;
	padding: 0.7rem;
}
table {
	background: #fff;
	margin: auto;
	width: 97%;
}

th {
	color: #6c6c6c;
	font-weight: 700;
	border: 1px solid #c6c6c6;
}
td {
	font-weight: 300;
	border: 1px solid #c6c6c6;
	border-top: none;
}

tr:nth-child(odd) td {
	background: #e5e5e5;
}

tr:last-of-type td {
	box-shadow: inset 0 -1px 0 #b7b7b7;
}

tbody:hover td {
	color: transparent;
	text-shadow: 0 0 3px #aaa;
}

tbody:hover tr:hover td {
	color: #444;
	text-shadow: 0 1px 0 #fff;
}
</style>
