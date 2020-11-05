import React, {useState} from "react";
import getItems from "../model/getItems";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [items, setItems] = useState(null)

    const onSearch = (event) => {
      setSearchTerm(event.target.value)
    }
    //this will retrieve the items based on the category
    const onCategoryChange = (event) => {
      const category = {category: event.target.value}
      console.log(category)
      getItems(setItems, category)
    }
    //this is our search function, returns true or false depending on if the title of the item contains search term
    const filter = (array) => {
      const term = searchTerm.toUpperCase()
      console.log('searching for',term, array.toUpperCase().includes(term))
      return array.toUpperCase().includes(term) 
    }
    //this is a function that reduces each item in the items array to it's title and then removes duplicate titles
    //I did this function because the searches were returning items that were different but had the same title 
    const titlesOnly = (array) => {
      var titles = []
      array.forEach((item) => {
        if(!titles.includes(item.title[0])) {
          titles.push(item.title[0])
        }
      })
      titles = titles.slice(0, 5)
      console.log('heres the results',titles)
      return titles
    }



    const SearchButton = () => {
      if(items !== null && searchTerm) {
        const searchResults =  titlesOnly(items)
        return(<>
          <ul>

          {searchResults.filter(filter).map(result => {
            return(
              <li>{result}</li>
            )
          })}
          </ul>
    
          </>)
      } else {
        return(
          <> </>)
      }
    }


  return (
    <div className="App">
      <div className="search">
      <input type="text" placeholder="Search" value={searchTerm}
        onChange={(event) => onSearch(event)}
      />
      <label for ="category"> </label>
        <select name = "category" id = "category" onChange={(event) => {
            onCategoryChange(event)
        }}>
            <option value = " ">Select a category</option>
            <option value ="general">General</option> 
            <option value ="shoes">Shoes</option>
            <option value ="dresses">Dresses</option>
            <option value ="skirts">Skirts</option>
            <option value ="pants">Pants</option>
        </select>
        <button type="submit" onClick={() => {}}><i class="fa fa-search"></i></button>
        <SearchButton />
        </div>
    </div>
  );
}

export default Search