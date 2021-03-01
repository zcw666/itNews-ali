<template>
	<view>
		<!-- 基础卡牌 -->
		<view class="listcard">
			<view class="listcard-image">
				<image src="../../imooc-news/static(www.x6d.com)/follow-active.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-title">
					标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的
					<!-- // 写法二 -->
					<!-- <text>标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的</te -->xt>
				</view>
				<view class="listcard-des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">
							前端
						</view>
					</view>
					<view class="listcard-content__des-browse">120</view>
				</view>
			</view>
		</view>

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
	.listcard {
		display: flex;
		border-radius: 10rpx;
		padding: 20rpx;
		margin: 20rpx;
		box-shadow: 0 0 10rpx 2rpx rgba($color: #000000, $alpha: 0.1);

		.listcard-image {
			flex-shrink: 0;
			width: 120rpx;
			height: 120rpx;
			border-radius: 10rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.listcard-content {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding-left: 20rpx;
			width: 100%;

			.listcard-title {
				// width: 100%;
				// height: 60rpx;
				font-size: 24rpx;
				color: #333;
				font-weight: 400;
				box-sizing: border-box;

				word-break: break-all;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				// 写法二
				// text{
				// 	overflow: hidden;
				// 	text-overflow: ellipsis;
				// 	display: -webkit-box;
				// 	-webkit-line-clamp:2;
				// 	-webkit-box-orient:vertical;
				// }


			}

		}

		.listcard-des {
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;

			.listcard-content__des-label {
				display: flex;

				.listcard-content__des-label-item {
					padding: 0 10rpx;
					margin-right: 10rpx;
					border-radius: 10rpx;
					border: 1rpx solid $mk-base-color;
				}
			}

			.listcard-content__des-browse {
				color: #999;
			}
		}
	}
</style>
