import Link from "next/link";
import Image from "next/future/image";
import styles from "../styles/blog.module.css"
import formatearFecha from "../utils/helpers";
const Post = ({post}) => {
  const {titulo, contenido, publishedAt, imagen, url} = post;
//   console.log(imagen.data.attributes.formats.medium.url)
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen ${titulo}`}/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer post
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Post