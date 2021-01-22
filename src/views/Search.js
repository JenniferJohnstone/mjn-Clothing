import React, {useState} from "react";
import getItems from "../model/getItems";
import {Link} from 'react-router-dom'

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
      console.log('filter',array)
      console.log('searching for',term, array.title.toUpperCase().includes(term))
      return array.title.toUpperCase().includes(term) 
    }
    //this is a function that reduces each item in the items array to it's title and then removes duplicate titles
    //I included this function because the searches were returning items that were different but had the same title 
    const titlesOnly = (array) => {
      var titles = []
      array.forEach((item) => {
        if(!titles.includes(item.title[0])) {
          titles.push({title: item.title[0], id: item.itemId[0]})
        }
      })
      titles = titles.slice(0, 7)
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
              // <li>{result}</li>
              <li><Link to ={`/store/${document.getElementById("category").value}/${result.id}`} >{result.title}</Link></li>
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
        <button type="submit" onClick={() => {}}><i className="fa fa-search"></i></button>
        <SearchButton />
        </div>
    </div>
  );
}

export default Search