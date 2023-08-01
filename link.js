const container = document.getElementById('container')

async function fetchImages() {
	let response = await fetch("https://yyyyyyy.link/loadimage/1024", {
		mode: 'no-cors',
	})
	if (response.status == 200) {
		return response.json()
	} else {
		console.log(response)
	}
}

function createImage(id, data) {
	let newImg = document.createElement('img')
	newImg.setAttribute('src', "https://files.yyyyyyy.info/images/${data.file}")
	container.appendChild(newImg)
	
	return newImg
}

async function cycleImages () {
	const images = await fetchImages();
	images.forEach((image, index) => {
		createImage(index, image)
	})
}

cycleImages()