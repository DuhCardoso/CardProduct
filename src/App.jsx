
import ProductImg from './components/ProductImg'
import ProductInfo from './components/ProductIndo'

import './styles/App.css'

export default function App() {
  return (
    <div className='flex gap-3 py-[182px]'>
      <ProductImg />
      <ProductInfo />
    </div>
  )
}