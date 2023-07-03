import Layout from "../components/layout"
import Post from "../components/post"
const Blog = ({posts}) => {
  console.log(posts)
  return (
    <Layout
        title={'Blog'}
        description={'Blog de musica, venta de guitarras, consejos'}
    >
        <main className="contenedor">
          <h2 className="heading">Posts</h2>

          <div>
            {posts.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

export default Blog

export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json()
  console.log(posts)
  return{
    props:{
      posts
    }
  }
}