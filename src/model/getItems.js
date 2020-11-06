import axios from 'axios'


//retrieves items from ebay under the category Women's Clothing
const getItems = (setItems, category) => {

    var url = 'http://localhost:3001/api/shop' 
    console.log(category)

    //I wrote this filter to get rid of items that had blank thumbnails for their picture, didn't look very good
    const BlankThumbs = (items) => {
        return items.galleryURL[0] !== 'https://thumbs1.ebaystatic.com/pict/04040_0.jpg'
    }

    //note to self, send category to API to get item types 
    axios.post(url, category)
    .then(response => {
        console.log('this is the response to getting the items', response.data)
        var items = response.data.findItemsByCategoryResponse[0].searchResult[0].item
        items = items.filter(BlankThumbs)
        setItems(items)
    })
}

export default getItems
