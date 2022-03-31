import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import Profile from '../pages-outlet/profile';
import Products from '../pages-outlet/products'
import './styles.css'


export default function Home() {
    return (
        <div className="body-div">
            <div className="w-full h-16 bg-gradient-to-r from-red-500 to-yellow-500 to-transparent">
                <div className="w-1/6 h-16 float-left">
                    <BrowserRouter>
                        <Link to="">logo</Link>
                        <div className="flex-none">
                            {/* logo */}
                        </div>
                    </BrowserRouter>
                </div>
                <div className="w-4/6 h-16 float-left">
                    <div className="flex-none">
                        <label className="relative block mt-3">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                            </span>
                            <input className="outline-none placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                        </label>
                    </div>
                </div>
                <div className="w-64 float-right">
                    <div className="flex-none w-24 h-16 float-left pt-4">
                        <BrowserRouter>
                            <Link to="/profile">{userName}</Link>
                        </BrowserRouter>
                    </div>
                    <div className="flex-none  pt-4">
                        <button className='text-gray-50' onClick={logout} type="button">Logout</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-4/5 mt-14 bg-gradient-to-r from-red-500 to-transparent' >
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="" component={Products} />
                            <Route path="/profile" component={Profile} />
                            {/* <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} /> */}
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>

        </div>
    )
}

function logout() {
    localStorage.clear()
    document.location.reload(true);
}

var userName = localStorage.getItem("username")