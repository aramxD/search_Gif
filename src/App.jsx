import { CardGif } from './element/CardGif'
import './App.css'
import data from './data'

console.log(data)

function App() {
  

  return (
    <div className="App">
       <h1>soy un buscador de GIF</h1>

       {data[0].data.map(dato=>(
        <>
         <p>{dato.images.preview_webp.webp}</p>
        <CardGif 
          src={dato.images.fixed_height.url}
          title={dato.title}
          width={dato.images.fixed_height.width}
          height={dato.images.fixed_height.height}/> 
        </>))
       } 
      

    </div>
  )
}

export default App
