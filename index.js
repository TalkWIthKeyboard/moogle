const alfy = require('alfy')

const latestUri = '122.152.219.33:5000/latest'

alfy.fetch(latestUri).then(data => {
	const items = data.map(x => {
		if (x) {
			return {
				title: x.name,
				subtitle: x.introduction,
				arg: x.uri,
				icon: {
					path: ""
				}
			}
		}
	})
	alfy.output(items)
})
