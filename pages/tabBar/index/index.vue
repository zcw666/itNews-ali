<template>
	<view class="index-page">
		<navBar></navBar>
		<u-button type="primary">主要按钮</u-button>
		<view v-for="(item,index) in 100" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
