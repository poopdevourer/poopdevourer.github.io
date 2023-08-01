const container = document.getElementById('container')

async function fetchImages (amount) {
  let response = await fetch(`https://yyyyyyy.link/loadimage/${amount}`)
  if (response.status == 200) {
    return response.json()
  } else {
    throw new HttpError(response)
  }
}

function createImage(id, data) {
	let newImg = document.createElement('img')
	newImg.setAttribute('src', "https://files.yyyyyyy.info/images/${data.file}")
	container.appendChild(newImg)
	
	return newImg
}

async function cycleImages () {
	const images = await fetchImages(1024);
	images.forEach((image, index) => {
		createImage(index, image)
	})
}

cycleImages()