import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import DefaultFooter from './components/DefaultFooter'
import { getRandomText } from './utils/randomText'

function App() {
  const text = getRandomText();
  console.log(text);

  return (
    <div className='max-w-screen-2xl mx-auto md:px-40'>
      <Header/>
      <div className='min-h-[calc(100vh -80px)]'>
        <Outlet/>
      </div>
      <DefaultFooter/>
    </div>
  )
}

export default App
