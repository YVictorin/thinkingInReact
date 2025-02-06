import './global.css'
import data from './data/product.json'
import FiterableProductTable from './components/FilterableProductTable'

function App() {

  return (
    <FiterableProductTable products={data}/>
  )
}

export default App
