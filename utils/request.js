const app = getApp();  
const $request = (url, data, method = 'POST', headers = "application/json;") => {
	return new Promise((resolve, reject) => {
		// uni.showLoading({
		// 	title: '数据加载中',
		// 	icon: 'loading',
		// 	mask: true
		// });
		let agent_cate = uni.getStorageSync('agent_cate')
		let di = uni.getDeviceInfo()
		// console.log('设备信息：',di)
		let domain,url2;
		if(agent_cate=='gzh'){
			url2 = window.location.href;
			domain = url2.match(/:\/\/([^/]+)/)[1];  
			// domain = 'jsdjys.jiuzhouzhichuang.net'
			// domain = 'jysm.yutaijiayue.cn'
			domain = 'cycysdj.cydj.xyz'
			// domain = 'hbdj.guangdongyizhankeji.cn'
		}
		if(agent_cate=='app'){
			// domain = 'jsdjys.jiuzhouzhichuang.net'
			// domain = 'jysm.yutaijiayue.cn'
		}	
			
		// console.log('当前域名:',domain);
				
		uni.setStorageSync('siteroot','https://'+domain)
		// console.log('------------当前客户端：',uni.getStorageSync('agent_cate'));
		uni.request({
			// url: 'https://js.tcsjk.com/api/' + url,
			//	url: 'https://af.jiuzhouzhichuang.net/api/' + url,
			url:'https://'+domain+'/api/' + url,
			method: method,
			data: data,
			header: {
				'Content-Type': headers,
				'i': 1,
				'token': uni.getStorageSync('token'),
				// 'token': 'dc39be313848b81982af956070a06716',
				// 'token':'d0560513cbf7ded4b14657766f5a9fd2',
				// 'token':'c6cdc5321bf1349f26b5ef04817747e2',
				// 'token':'bb12a8bed10043145e3858fd665427cd',
				// 'token':'6eaffead84f51e1c8891c9d9a1378909',
				// 'token':'4944d2b999a8a1349359b0aa207c0e36'
				// 'token': '86e1cb2e26ddc98fcaba3ef43b564a3d',
				// 'token': '791c7ea16c32efa54b045d7059f9c370',
				// 'token':'07f2c873baa5e9458181a38c2347925d',
				// 'token':'78b0edeb09ab3e781c3aeb7d1f38852c', //佳悦
				'token':'9458f8064ffcd52d973f373564d3ad04',//cycysdj.cydj.xyz
				// 'token':'081533031adf7b00abfc247e38262dfe',
				// 'token':'12f5a42307d0c85fd5a6e8adb24fe9f7', //惠宝
			},
			success(res) {
				if (res.data.status != 20000) {
					if(res.data.message == '登录失效，需要重新登录'){
						if(agent_cate=='gzh'){
							uni.showModal({
								title: '提示',
								content: res.data.message,
								showCancel: false,
								success(r) {
								if (r.confirm) {
									console.log('公众号登录');
									let url = uni.getStorageSync('siteroot')+'/home/index?i='+uni.getStorageSync('i')
									console.log(url)
									window.location.href = url
								} else if (r.cancel) {
									console.log('用户点击取消');
									}	
								}											
							})
						}
						if(agent_cate=='app'){
							
						}
					}
					else{
						uni.showModal({
							title: '提示',
							content: res.data.message,
							showCancel: false,
							success(r) {
							if (r.confirm) {
								
							} else if (r.cancel) {
								console.log('用户点击取消');
								}	
								uni.hideLoading(); 
							}
										
						})
					}

				} else {
					resolve(res)
				}
				// uni.hideLoading(); 
			},
			fail(error) {
				// reject(error);
				// throw new Error(error);
				uni.hideLoading(); 
			},
			complete() {
				// uni.hideLoading();
			}
		})
	})
}
//get请求
const $get = (url, data) => {
	return $request(url, data, 'GET')
}
//post请求
const $post = (url, data) => {
	return $request(url, data, 'POST')
}
//给uniapp原生的requset赋值
//记得要在mian.js中引用
uni.$request = $request
uni.$get = $get
uni.$post = $post