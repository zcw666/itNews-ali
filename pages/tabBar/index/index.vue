<template>
	<view class="index-page">
		<navBar></navBar>
		<tab @choseTab="choseTab"></tab>
		<list-scroll>
			<list-card :model="'base'"></list-card>
			<list-card :model="'image'"></list-card>
			<list-card :model="'column'"></list-card>
		</list-scroll>

	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		computed: {
			...mapState(['userName']),
		},
		data() {
			return {
				title: 'Hello',
				labelData: [],
			}
		},
		
		onLoad() {

		},
		mounted() {
		},
		methods: {
			choseTab(data) {
				console.log(data)
			},
		}

	}
</script>
<style lang="scss">
	page {
		display: flex;
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	.index-page {
		flex: 1;
		// height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
