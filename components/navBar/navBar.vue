<template>
	<view class="com-navbar">
		<view class="navbar-fixed">
			<view class="" :style="{height: statusBarHeight + 'px'}">
				
			</view>
			<view class="content" :style="{height:paddingHeight*2+navBarHeight+'px',width:windowWidth+'px'}" >
				<view class="navbar-search">
					<view class="iconfont icon-search">
						
					</view>
					<view class="navbar-search-btn"></view>
				</view>
			</view>
			
		</view>
		
		<view class="nav-hold" :style="{height: paddingHeight*2+navBarHeight+statusBarHeight +'px;'}">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				paddingHeight:4,
				windowWidth:375
			};
		},
		created() {
			const res = uni.getSystemInfoSync();
			this.statusBarHeight = res.statusBarHeight
			console.log(res)
			 // #ifndef  H5 || APP-PLUS || MP-ALIPAY
			 
			
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			this.paddingHeight = menuButtonInfo.top-res.statusBarHeight
			this.navBarHeight = menuButtonInfo.height
			this.windowWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/iconfont.css';
	.com-navbar{
		.navbar-fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;
			.content{
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				padding: 0 10px;
				// width: 100px;
				.navbar-search{
					width: 100%;
					display: flex;
					align-items: center;
					height: 40px;
					padding: 0 10px;
					border-radius: 20px;
					background-color: #fff;
				}
				.navbar-search-icon{
					width: 10px;
					height: 10px;
					background-color: $mk-base-color;
					border-radius: 20px;
				}
			}
			
		}
		
	}

</style>
