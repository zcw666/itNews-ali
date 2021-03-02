<template>
	<view class="scroll-box">
		<scroll-view class="list-scroll" scroll-y>
			<view class="">
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-box {
		width: 100%;
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;

		.list-scroll {
			height: 100%;
		}
		
	}
</style>
