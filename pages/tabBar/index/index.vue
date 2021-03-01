<template>
	<view class="index-page">
		<navBar></navBar>
		<tab @choseTab="choseTab"></tab>
		<list-scroll>
			<list-card v-for="(item,index) in 5" :key="index"></list-card>
			<!-- <view v-for="(item,index) in 100" :key="index">
					{{item}}
				</view> -->
		</list-scroll>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				labelData: []
			}
		},
		onLoad() {

		},
		methods: {
			choseTab(data) {
				console.log(data)
			}
		}

	}
</script>
<style lang="scss">
	page{
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
