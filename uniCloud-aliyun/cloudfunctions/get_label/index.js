'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let label = await db.collection('label').get()
	return {
		code:200,
		data:label.data,
		msg:'请求成功！'
	}
};
