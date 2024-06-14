import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {

  return (
    <div className='App'>
      <div className="headerComponent"><Header /></div>
      <div className="mainComponent"><Main /></div>
      <div className="footerComponent"><Footer /></div>
    </div>
  )
}

export default App
