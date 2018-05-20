const alfy = require('alfy')
const urlencode = require('urlencode')

let name = alfy.input
const latestUri = '122.152.219.33:5000/search?name=' + urlencode(name)

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
