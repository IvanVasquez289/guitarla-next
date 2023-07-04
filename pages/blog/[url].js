import Layout from "../../components/layout"
import Image from "next/future/image"
import styles from "../../styles/blog.module.css"
import formatearFecha from "../../utils/helpers"
const Post = ({post}) => {
  const {imagen,contenido,titulo,publishedAt} = post[0].attributes;
  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image src={imagen.data.attributes.url} width={1000} height={400} alt={`imagen ${titulo}`}/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
        </div>
        </article>
    </Layout>
  )
}

export default Post

export async function getServerSideProps({query: {url}}){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data: post} = await respuesta.json()
    return{
        props:{
            post
        }
    }
}