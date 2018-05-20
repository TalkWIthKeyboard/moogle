const alfy = require('alfy')

const latestUri = '122.152.219.33:5000/latest'

alfy.fetch(latestUri).then(data => {
	const items = []
	for (let index = 0; index < data.length; index += 1) {
		if (data[index]) {
			items.push({
				title: data[index].name,
				subtitle: data[index].introduction,
				arg: data[index].uri,
				icon: {
					path: ""
				}
			})
		}
	}
	alfy.output(items)
})
