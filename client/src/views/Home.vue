<template>
	<div>
		<navigation></navigation>

		<div class="page-container">
			<router-view></router-view>
		</div>

		<footer-template></footer-template>
	</div>
</template>

<script>
import FooterTemplate from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'

export default {
	components: {
		Navigation,
		FooterTemplate
	},
	data() {
		return {

		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	h1 {
		text-align: center;
	}
	p {
		text-align: center;
	}
</style>
