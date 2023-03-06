import { useEffect, useState } from "react"

export default function Header() {

    const [menuActive, setMenuActive] = useState(false)

    function menuToggle() {
        setMenuActive(!menuActive)
    }

    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = null;
        }
    },[menuActive])

    return (
        <div className="p-4 lg:w-10/12 lg:m-auto lg:mt-14 lg:mb-2">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" />
                </div>
                <div>
                    <button onClick={menuToggle}><img className="lg:hidden" src="/icon-menu.svg" /></button>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex text-dark_grayish_blue gap-10 cursor-pointer">
                        <li className="cursor-pointer hover:text-soft_orange">Home</li>
                        <li className="cursor-pointer hover:text-soft_orange">New</li>
                        <li className="cursor-pointer hover:text-soft_orange">Popular</li>
                        <li className="cursor-pointer hover:text-soft_orange">Trending</li>
                        <li className="cursor-pointer hover:text-soft_orange">Categories</li>
                    </ul>
                </div>
            </div>
            {menuActive ?
                <div>
                    <div className="absolute inset-0 bg-black opacity-60 z-10" onClick={menuToggle}></div>
                    <div className="absolute top-0 right-0 bg-white w-[70%] min-h-screen z-20">
                        <div className="absolute top-0 right-0 p-4 z-30">
                            <img onClick={menuToggle} src="/icon-menu-close.svg" />
                        </div>
                        <div className="absolute h-1/3 flex top-1/4 z-30">
                            <ul className="ml-5 flex flex-col justify-between text-2xl font-semibold text-dark_grayish_blue">
                                <li>Home</li>
                                <li>New</li>
                                <li>Popular</li>
                                <li>Trending</li>
                                <li>Categories</li>
                            </ul>
                        </div>
                    </div>
                </div>
                : ''}
        </div>
    )
}