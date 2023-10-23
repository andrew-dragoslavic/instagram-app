import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'andrew.drago',
        userImage: 'https://media.licdn.com/dms/image/C5603AQEtQDtjXFZCBA/profile-displayphoto-shrink_800_800/0/1657087278014?e=2147483647&v=beta&t=CijXVNqWKMp-HmPZ_Nj42Xh1Ji9PZpW0RTNKxkCs8sI',
        img: 'https://media.licdn.com/dms/image/C5603AQEtQDtjXFZCBA/profile-displayphoto-shrink_800_800/0/1657087278014?e=2147483647&v=beta&t=CijXVNqWKMp-HmPZ_Nj42Xh1Ji9PZpW0RTNKxkCs8sI',
        caption: 'Welcome to my account',
    },
    {
        id: '123',
        username: 'andrew.drago',
        userImage: 'https://media.licdn.com/dms/image/C5603AQEtQDtjXFZCBA/profile-displayphoto-shrink_800_800/0/1657087278014?e=2147483647&v=beta&t=CijXVNqWKMp-HmPZ_Nj42Xh1Ji9PZpW0RTNKxkCs8sI',
        img: 'https://media.licdn.com/dms/image/C5603AQEtQDtjXFZCBA/profile-displayphoto-shrink_800_800/0/1657087278014?e=2147483647&v=beta&t=CijXVNqWKMp-HmPZ_Nj42Xh1Ji9PZpW0RTNKxkCs8sI',
        caption: 'Welcome to my account',
    },
];

function Posts() {
    return (
        <div>
            {posts.map((post) => (<Post key={post.id}
                id={post.id}
                username={post.username}
                userImage={post.userImage}
                img={post.img}
                caption = {post.caption}
            />))}
        </div>
    )
}

export default Posts