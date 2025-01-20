import logo from './logo.svg'
import './App.css'
import { useWindowScroll } from './useWindowScroll'

function App() {
  const [scroll, scrollTo] = useWindowScroll()
  console.log(scroll)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <p>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </p>
        <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      </div>
    </div>
  )
}

export default App
