
export const apiTest = (data) => {
	return uni.$get('apitest', data)
}

export const settingInfo = (data) => {
	return uni.$get('settingInfo', data)
}
export const login = (data) => {
	return uni.$post('login', data)
}
export const getUserInfo = (data) => {
	return uni.$get('getUserInfo', data)
}

export const createOrder = (data) => {
	return uni.$post('createOrder', data)
}
export const orderDetail = (data) => {
	return uni.$get('order/detail', data)
}
export const orderList = (data) => {
	return uni.$get('order/list', data)
}
export const orderDo = (data) => {
	return uni.$get('order/orderDo', data)
}
export const orderJiazhong = (data) => {
	return uni.$get('order/jiazhong', data)
}
export const updateOrder = (data) => {
	return uni.$post('updateOrder', data)
}

export const masterEdit = (data) => {
	return uni.$post('master/edit', data)
}
export const masterDetail = (data) => {
	return uni.$get('master/detail', data)
}
export const masterList = (data) => {
	return uni.$get('master/list', data)
}
export const masterCollect = (data) => {
	return uni.$post('master/collect', data)
}
export const changeMasterOpenStatus = (data) => {
	return uni.$post('master/changeOpenStatus', data)
}

// 我添加的技师位置定位

export const jishiaddress = (data) => {
	return uni.$post('master/jishiaddress', data)
}

export const mchDetail = (data) => {
	return uni.$get('mch/detail', data)
}
export const mchList = (data) => {
	return uni.$get('mch/list', data)
}

export const evaList = (data) => {
	return uni.$get('eva/list', data)
}
export const evaSubmit = (data) => {
	return uni.$post('eva/submit', data)
}


export const itemDetail = (data) => {
	return uni.$get('item/detail', data)
}
export const itemList = (data) => {
	return uni.$get('item/list', data)
}
export const itemCollect = (data) => {
	return uni.$get('item/collect', data)
}
export const addressEdit = (data) => {
	return uni.$post('address/edit', data)
}
export const addressDel = (data) => {
	return uni.$post('address/del', data)
}
export const addressDetail = (data) => {
	return uni.$get('address/detail', data)
}
export const addressList = (data) => {
	return uni.$get('address/list', data)
}
export const createRechargeOrder = (data) => {
	return uni.$post('createRechargeOrder', data)
}
export const rechargeOrderRecord = (data) => {
	return uni.$get('rechargeOrderRecord', data)
}
export const createSuggest = (data) => {
	return uni.$post('suggest/submit', data)
}
export const suggestList = (data) => {
	return uni.$get('suggest/list', data)
}
export const bannerList = (data) => {
	return uni.$get('bannerList', data)
}

export const couponList = (data) => {
	return uni.$get('coupon/list', data)
}
export const couponDetail = (data) => {
	return uni.$get('coupon/detail', data)
}
export const couponRecord = (data) => {
	return uni.$get('coupon/record', data)
}
export const couponExchange = (data) => {
	return uni.$post('coupon/exchange', data)
}

export const agentRegister = (data) => {
	return uni.$post('agent/register', data)
}
export const agentInfo = (data) => {
	return uni.$post('agent/info', data)
}

export const balanceRecord = (data) => {
	return uni.$get('balance/record', data)
}
export const withdrawal = (data) => {
	return uni.$post('balance/withdrawal', data)
}
export const withdrawalRecord = (data) => {
	return uni.$get('balance/withdrawalRecord', data)
}
// 获取结算订单
export const settleRecord = (data) => {
	return uni.$get('settle/list', data)
}
export const settle = (data) => {
	return uni.$post('settle/settle', data)
}

export const getInviteQrcode = (data) => {
	return uni.$get('distribute/getInviteQrcode', data)
}
export const getInviteData = (data) => {
	return uni.$get('distribute/getInviteData', data)
}
export const editDistributeMch = (data) => {
	return uni.$get('distribute/editDistributeMch', data)
}
export const distributeMchInfo = (data) => {return uni.$get('distribute/distributeMchInfo', data)}
export const distributeOrder = (data) => {return uni.$get('distribute/order', data)}
export const bindQrcode = (data) => {return uni.$get('distribute/qrcodeBind', data)}

export const getPrivacyAxb = (data) => {return uni.$get('privacy/Axb', data)}
export const sendSms = (data) => {return uni.$get('sms/send', data)}
export const verifySms = (data) => {return uni.$get('sms/verify', data)}

export const getCityList = (data) => {return uni.$get('city/list', data)}


export const appWechatLogin = (data) => {return uni.$get('user/appWechatLogin', data)}