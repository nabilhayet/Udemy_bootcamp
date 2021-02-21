const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchedValue = form.elements.query.value;
    const config = { params: { q: searchedValue } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    createImages(res.data)
    form.elements.query.value = ''
})

const createImages = (images) => {
    for (let result of images) {
        if (result.show.image) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            document.body.append(img)
        }

    }
}