import { Link, Outlet } from "react-router-dom"


const Layout = () => {

    const menu = [
       {
            text: "Blogs",
            path: "/"
       },
       {
            text: "Sites",
            path: "/"
       },
       {
            text: "Diary",
            path: "/"
       },
    ]


  return (
    <div>
        {/* Header */}
        <div className="border-b-2">
            <div className="container px-5 py-5 flex justify-between">
                <Link to="/">
                    <span className="font-extrabold text-3xl">SITES & BLOG</span>
                </Link>
                <div className="flex">
                    <ul className="flex">
                        {
                            menu.map((x,i) => {
                                return <li key={i}><Link className="p-2 items-center justify-center flex" to={`/?category=${x.text}`}><span>{x.text}</span></Link></li>
                            })
                        }
                    </ul>
                    <button className="bg-gray-500 text-white px-3 py-1 ml-2 rounded">
                        <Link to="/createblogsitesdiary">Buat Baru</Link>
                    </button>
                </div>
            </div>
        </div>
        {/* Body */}
        <div className="flex mx-auto px-5 md:px-20">
            <div className="mt-5 mb-5 min-h-[550px] w-full">
                <Outlet></Outlet>
            </div>
        </div>
        {/* Footer */}
        <div className="flex bg-gray-500">
            <div className="flex mx-auto px-20 py-20 items-center justify-center">
                <h3 className="text-white">SITES & BLOG</h3>
            </div>
        </div>
    </div>
  )
}

export default Layout