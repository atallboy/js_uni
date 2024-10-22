<script>
	export default {
		onLaunch: function() { 
			console.log('App Launch')
			let url = 'js.tcsjk.com'
			url = 'jsdjys.jiuzhouzhichuang.net'
			uni.setStorageSync('qqmapKey', 'GS6BZ-VQA6Q-FOY54-4PSL4-JTIQO-BCBUO');
			uni.setStorageSync('i', '1');
			uni.setStorageSync('agent_cate', 'gzh');
			// uni.setStorageSync('agent_cate', 'app');
 
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		--mainColor: #24C373;
		--tarbarHeight: 50px;
	}

	.main-color {
		color: var(--mainColor);
	}

	.main-bg-color {
		background-color: var(--mainColor);
	}

	.tarbar-height {
		height: var(--tarbarHeight);
	}

	page {
		font-size: 14px;
		background-color: #f7f7f7;
	}

	button {
		padding-left: 0;
		padding-right: 0;
		line-height: auto;
		margin: 0;
		line-height: normal;
	}

	button::after {
		border: none;
	}

	.mix-top {
		border-top: 1rpx solid #efefef;
	}

	.mix-left {
		border-left: 1rpx solid #efefef;
	}

	.mix-right {
		border-right: 1rpx solid #efefef;
	}

	.mix-bottom {
		border-bottom: 1rpx solid #efefef;
	}

	.col-menu-container {
		padding: 10px;
	}

	.col-menu-wrap {
		display: flex;
		flex-direction: column;
		background-color: #fff;
	}

	.col-menu-header {
		display: flex;
		align-items: center;
		padding: 15px;
	}

	.col-menu-header-bar {
		display: flex;
		width: 4px;
		height: 15px;
		background-color: var(--mainColor);
		margin-right: 7px;
		border-radius: 5px;
	}

	.col-menu-header-name {
		display: flex;
		flex: 1;
		font-weight: 650;
	}

	.col-menu-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 10px 10px;
	}

	.col-menu-item {
		display: flex;
		width: 25%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
	}

	.col-menu-item button {
		display: flex;
		background-color: unset;
		flex-direction: column;
		padding-left: 0;
		padding-right: 0;
		line-height: auto;
		margin: 0;
		line-height: normal;
	}

	.col-menu-item button::after {
		border: none;
	}

	.col-menu-icon {}

	.col-menu-icon image {
		width: 30px;
		height: 30px;
	}

	.col-menu-name {
		font-size: 13px;
		color: #333;
		margin-top: 5px;
	}

	.col-menu-list-five .col-menu-item {
		width: 20%;
	}

	.tab-wrap {
		display: flex;
	}

	.tab-item {
		display: flex;
		flex: 1;
		min-width: 90px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tab-txt {
		color: #666;
		font-size: 15px;
		margin-top: 8px;
	}

	.tab-bar {
		width: 12px;
		height: 4px;
		border-radius: 100px;
		margin-top: 8px;
	}

	.tab-item-active .tab-txt {
		font-weight: 700;
		color: var(--mainColor);
		font-size: 16px;
	}

	.tab-item-active .tab-bar {
		background-color: var(--mainColor);
	}
	
	
	.list-container{padding: 0 10px;}
	.list-wrap{display: flex;flex-direction: column;}
	.list-item{background-color: #fff;display: flex;padding: 10px;margin-bottom: 10px;}
	.item-pic{display: flex; width: 104px;height: 80px;border-radius: 15px;margin-right: 10px;}
	.item-pic image{width: 100%;height: 100%;}
	.item-info{display: flex;flex: 1;flex-direction: column;}
	.item-info-floor{display: flex;flex: 1;}
	.item-info-floor-b{align-items: center;}
	.item-info-floor-c{align-items: flex-end;}
	.item-name{display: flex;flex: 1;color: #333;font-size: 16px;font-weight: 600;}
	.item-desc{display: flex; font-size: 9px;color: #888;flex: 1;}
	.item-price-info{}
	.item-price-unit{color: #FF6051;font-size: 12px;}
	.item-price{color: #FF6051;font-size: 18px;font-weight: 700;margin-right: 5px;}
	.item-origin-price{font-size: 12px;color: #999;text-decoration: line-through;}
	.item-price-info image{width: 14px;height: 14px;margin: 0 5px;}
	.item-time{font-size: 12px;color: #888;}
	.item-summary{display: flex; font-size: 9px;color: #666;}
	.item-btn{}
	.item-btn button{font-size: 12px;font-weight: 600;background-color: var(--mainColor);color: #fff;width: 70px;height: 28px;line-height: 28px;}
	
	
	
	
</style>