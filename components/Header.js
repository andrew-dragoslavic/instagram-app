import Image from "next/image"
import {MagnifyingGlassIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, Bars3Icon, PlusSmallIcon} from "@heroicons/react/24/outline";
import {HomeIcon} from "@heroicons/react/24/solid"

function Header(){
    return(
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
            { /* LEFT */}
            <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                <Image src="https://links.papareact.com/ocw"
                layout="fill"
                objectFit="contain"
                />
            </div>

            <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                <Image src="https://links.papareact.com/jjm"
                layout="fill"
                objectFit="contain"
                />
            </div>

            { /* MIDDLE */}
            <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
            </div>
            </div> 
            { /* RIGHT */}
            <div className="flex items-center justify-end space-x-4">
                <HomeIcon className="navBtn"/>
                <Bars3Icon className="h-6 md:hidden cursor-pointer"/>
                <div className="relative navBtn">
                    <PaperAirplaneIcon className="navBtn -rotate-45"/>
                    <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                </div>
                <PlusCircleIcon className="navBtn" />
                <UserGroupIcon className="navBtn" />
                <HeartIcon className="navBtn" />
                <img src="https://media.licdn.com/dms/image/C5603AQEtQDtjXFZCBA/profile-displayphoto-shrink_800_800/0/1657087278014?e=2147483647&v=beta&t=CijXVNqWKMp-HmPZ_Nj42Xh1Ji9PZpW0RTNKxkCs8sI" alt="profile pic" className="h-10 rounded-full cursor-pointer" />
            </div>
            </div>
        </div>
    )
}

export default Header