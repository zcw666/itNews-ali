<template>
	<view>
		<!-- 卡牌一 -->
		<view class="listcard" v-if="model === 'base'" >
			<view class="listcard-image">
				<image src="../../imooc-news/static(www.x6d.com)/follow-active.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-title">
					标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一
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
		<!-- 卡牌二 -->
		<view class="listcard" v-if="model === 'column'" >
			<view class="listcard-content">
				<view class="listcard-title">
					标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一
				</view>
				<view class="listcard-image-list">
					<image src="../../imooc-news/static(www.x6d.com)/follow-active.png" mode="aspectFill"></image>
					<image src="../../imooc-news/static(www.x6d.com)/follow-active.png" mode="aspectFill"></image>
					<image src="../../imooc-news/static(www.x6d.com)/follow-active.png" mode="aspectFill"></image>
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
		<!-- 卡牌三 -->
		<view class="listcard" v-if="model === 'image'">
			
			<view class="listcard-content">
				<view class="listcard-image-top">
					<image src="../../imooc-news/static(www.x6d.com)/follow-active.png" mode="aspectFill"></image>
				</view>
				<view class="listcard-title">
					标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一届的标题市第十一
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
		props:{
			model:{
				type:String,
				default:'base'
			}
		},
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
			.listcard-title {
				font-size: 24rpx;
				color: #333;
				font-weight: 400;
				box-sizing: border-box;
				margin-bottom: 10rpx;

				overflow: hidden;
				text-overflow: ellipsis;
				word-break: break-all;
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
		& .listcard-image-top{
			height: 100rpx;
			margin: 10rpx 0;
			image{
				width: 100%;
				height: 100%;
			}
		}

		& .listcard-image-list {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-bottom: 10rpx;
			border: 1px solid red;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 10rpx;
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
