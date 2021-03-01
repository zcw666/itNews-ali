<template>
	<view class="tab">
		<scroll-view scroll-x>
			<view class="tab-scroll">
				<view :class="[{active:activeItem === index},'tab-item']"  v-for="(item,index) in tabArr" @click="clickTab(index,item)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<u-icon name="setting" class="setting-icon" size="52"></u-icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabArr: [],
				activeItem:0
			};
		},
		mounted() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				this.$api.get_label().then(res => {
					if (res.code === 200) {
						this.tabArr = res.data
					}
				})
			},
			clickTab(num,data){
				this.activeItem = num
				this.$emit('choseTab',data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab {
		display: flex;
		align-items: center;
		width: 100%;
		background-color: #fff;
		border-bottom: 1rpx solid #f5f5f5;

		.tab-scroll {
			flex: 1;
			height: 90rpx;
			display: flex;
			align-items: center;
			overflow-x: scroll;
		}

		.tab-item {
			padding: 0 20rpx;
			flex-shrink: 0;
			font-size: 28rpx;
			color: #333;
			font-weight: 500;
		}
		.active{
			color: $mk-base-color;
		}

		.setting-icon {
			padding: 0 10rpx;
			border-left: 2rpx solid #dbdbdb;
		}
	}
</style>
