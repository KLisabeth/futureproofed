<template>
	<div class="error-page">
		<div class="row">
			<div class="col">
				<h1 class="text-ginormous">Oops!</h1>
				<h2>"You don't have permission to go to this page"</h2>
				<ul>
					<li>'Or you can go':</li>
					<li class="link-type">
						<router-link to="/">Home</router-link>
					</li>
				</ul>
			</div>
			<div class="col">OOPS</div>
		</div>
	</div>
</template>

<!-- JS  -->
<script>
export default {};
</script>

<!-- Styling  -->
<style scoped>
.error-page {
	width: 800px;
	margin: 100px auto;
}
</style>
