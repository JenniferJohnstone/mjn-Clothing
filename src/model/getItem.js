import axios from 'axios'


//retrieves items from ebay under the category Women's Clothing
const getItem = (setItem, category, id) => {

    var url = '/api/shop' 
    console.log('here is', setItem, category, id)

    //I wrote this filter to get rid of items that had blank thumbnails for their picture, didn't look very good
    const BlankThumbs = (items) => {
        return items.galleryURL[0] !== 'https://thumbs1.ebaystatic.com/pict/04040_0.jpg'
    }

    const matchingID = (items) => {
        return items.itemId[0] == id
    }

    //note to self, send category to API to get item types 
    axios.post(url, category)
    .then(response => {
        var items = response.data.findItemsByCategoryResponse[0].searchResult[0].item
        items = items.filter(BlankThumbs)
        items = items.filter(matchingID)
        setItem(items)
    })
}

export default getItem
