function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="w-16 h-16 rounded-full border p-[2px]" src="https://media.licdn.com/dms/image/C5603AQEtQDtjXFZCBA/profile-displayphoto-shrink_800_800/0/1657087278014?e=2147483647&v=beta&t=CijXVNqWKMp-HmPZ_Nj42Xh1Ji9PZpW0RTNKxkCs8sI" alt="" />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">andrew.drago</h2>
                <h3 className=" text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile