
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchResults from './components/SearchResults'
import LeKey from './LeKey' 
import axios from 'axios'

function App() {
  const [searchData, setSearchData]= useState('init')

  const URL_TREND = `https://api.giphy.com/v1/gifs/trending?api_key=QTkEsYrb67W1wOhb5ImFwa285OnLIPa6&limit=25&rating=r`
  const URL_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=QTkEsYrb67W1wOhb5ImFwa285OnLIPa6&q=${searchData}&limit=25&offset=0&rating=r&lang=en`
   
  

  const [data, setData] = useState([])
  const [fetchURL, setFetchURL] = useState(URL_TREND)
  const [leSearch, setLeSearch] = useState(false)
  const [resultTitle, setTitle] = useState('Trending Gifs ..!')

  //console.log(URL_SEARCH)

  
  useEffect(()=>{
    if(leSearch){
      setFetchURL(URL_SEARCH)
      setTitle('Le Search Results')
      
    }else{
      null
    }

  axios.get(fetchURL).then((response)=>{
    setData(response.data.data)
    //console.log(response.data.data)
  })
  setSearchData('')

}, [searchData])





  return (
    <div className="App">
       
    <Header searchData={searchData} setSearchData={setSearchData} setLeSearch={setLeSearch}/>
    <SearchResults data={data} title={resultTitle}/>       
    <Footer/>

    </div>
  )
}

export default App
