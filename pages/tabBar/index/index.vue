<template>
	<view class="index-page">
		<navBar></navBar>
		<tab></tab>
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
				title: 'Hello',
				labelData: []
			}
		},
		onLoad() {

		}

	}
</script>

<style lang="scss" scoped>

</style>
