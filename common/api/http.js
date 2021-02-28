export default function $http({
	url,
	data
}) {
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data: data
		}).then(res => {
			const result = res.result
			if (result.code === 200) {
				reslove(result)
			} else {
				reject(result)
			}
		}).catch(err => {
			reject(err)
		})
	})
}
