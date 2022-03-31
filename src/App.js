import Auth from './auth/index'
import Home from './home/index'
import './App.css'

if (!localStorage.getItem("username") && !localStorage.getItem("name")) {
  var LoggedIn = false
} else {
  LoggedIn = true
}

export default function App() {

  const show = LoggedIn ? <Home /> : <Auth />

  return (
    <div className="App">
      {show}
    </div>
  )
}
