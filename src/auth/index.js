import './styles.css'

export default function Auth() {
    return (
        <div className='body'>
            <div className="flex p-10 items-center h-full">
                <div className="flex-1 rounded-md h-14 bg-gradient-to-r from-blue-500 to-transparent h-4/5 items-center">
                    <div className='flex-1 items-center h-1/5 p-10'>
                        <h1 className='font-bold text-3xl text-gray-50'>Wellcome to E-commerce-G</h1>
                    </div>
                    <div className='bg-slate-900 flex-1 items-center h-3/4 ml-40 mr-40 rounded-md pt-4'>
                        <div className='p-5'>
                            <h1 className='font-semibold text-lg text-slate-500'>Input a username and your full name and start to using E-commerce-G!</h1>
                        </div>
                        <div className='w-full h-1/5 pl-20 pr-20 mt-3'>
                            <input className='outline-none w-full h-3/6 bg-slate-900 text-gray-50 border-b' type="text" placeholder='Username' id='user' />
                        </div>

                        <div className='w-full h-1/5 pl-20 pr-20'>
                            <input className='outline-none w-full h-3/6 bg-slate-900 text-gray-50 border-b' type="text" placeholder='Fullname' id='fullname' />
                        </div>

                        <button onClick={setLogin} className='text-gray-50 font-bold outline-none rounded-lg w-96 h-14 bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-yellow-500'>
                            START TO BUY!
                        </button>
                    </div>
                </div>
                <div className="img rounded-md flex-1 w-100 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-4/5 bg-cover bg-center to-transparent">
                </div>
            </div>
        </div>
    )
}


function setLogin() {
    var user = document.getElementById("user").value
    var fullname = document.getElementById("fullname").value

    localStorage.setItem("username", user)
    localStorage.setItem("name", fullname)
    document.location.reload(true);
}

// function getLogin() {
//     localStorage.getItem("username");
// }