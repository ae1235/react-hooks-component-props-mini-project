import Article from "./Article";

function ArticleList({ posts }) {
    const ArticleItem = posts.map((post) => {
        return ( 
            <Article key = {post.id} title = {post.title} date = {post.date} preview ={post.preview} />
            )
        })}