import axios from 'axios'


//retrieves items from ebay under the category Women's Clothing
const getGeneralItems = (setItems) => {
    const url = 'http://localhost:3001/api/shop'

    //I wrote this filter to get rid of items that had blank thumbnails for their picture, didn't look very good
    const BlankThumbs = (items) => {
        console.log('filtering', items.galleryURL[0])
        return items.galleryURL[0] !== 'https://thumbs1.ebaystatic.com/pict/04040_0.jpg'
    }

    axios.get(url)
    .then(response => {
        var items = response.data.findItemsByCategoryResponse[0].searchResult[0].item
        items = items.filter(BlankThumbs)
        setItems(items)
    })
}

export default getGeneralItems
