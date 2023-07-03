import Link from "next/link";
import Image from "next/future/image";
const Post = ({post}) => {
  const {titulo, contenido, publishedAt, imagen, url} = post;
//   console.log(imagen.data.attributes.formats.medium.url)
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen ${titulo}`}/>
        <div>
            <h3>{titulo}</h3>
            <p>{publishedAt}</p>
            <p>{contenido}</p>
            <Link href={`/blog/${url}`}>
                <a>
                    Leer post
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Post