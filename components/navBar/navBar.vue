<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 微信小程序状态栏 -->
			<view class="" :style="{height: statusBarHeight + 'rpx'}"></view>

			<view class="content" :style="{height:navBarHeight+'rpx',width:windowWidth+'rpx'}">
				<view class="navbar-search">
					<u-icon name="search"></u-icon>
					<view class="navbar-search-btn"></view>
				</view>
			</view>
		</view>

		<!-- 占位元素 -->
		<view class="nav-hold" :style="{height: navBarHeight+statusBarHeight +'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375
			};
		},
		created() {
			// #ifdef MP-ALIPAY
			// 隐藏支付宝小程序胶囊按钮
			my.hideAllAddToDesktopMenu();
			// #endif
			
			const res = uni.getSystemInfoSync();
			console.log('res',res)
			this.statusBarHeight = res.statusBarHeight

			// #ifndef  H5 || APP-PLUS || MP-ALIPAY
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			let paddingHeight = menuButtonInfo.top - res.statusBarHeight
			this.navBarHeight = menuButtonInfo.height + paddingHeight*2
			this.windowWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/css/iconfont.css';

	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;

			.content {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 0 10rpx;

				// width: 100rpx;
				.navbar-search {
					width: 100%;
					display: flex;
					align-items: center;
					height: 40rpx;
					padding: 0 10rpx;
					border-radius: 20rpx;
					background-color: #fff;
				}

				/* #ifdef MP-ALIPAY */
				.navbar-search {
					width: 70%;
				}

				/* #endif */
				.navbar-search-icon {
					width: 10rpx;
					height: 10rpx;
					background-color: $mk-base-color;
					border-radius: 20rpx;
				}
			}

		}

	}
</style>
