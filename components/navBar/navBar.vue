<template>
	<view class="com-navbar">
		<view class="navbar-fixed">
			<view class="navbar-search">
				<view class="iconfont icon-search">
					
				</view>
				<view class="navbar-search-btn"></view>
			</view>
		</view>
		
		<view class="nav-hold" style="height: 45px;">
			
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

<style lang="scss">
	@import '../../common/css/iconfont.css';
	.com-navbar{
		.navbar-fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 45px;
			background-color: $mk-base-color;
			.navbar-search{
				box-sizing: border-box;
				width: 80%;
				display: flex;
				align-items: center;
				height: 40px;
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

</style>
