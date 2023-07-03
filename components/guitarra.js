import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css"
const Guitarra = ({guitarra}) => {
  const {imagen,nombre,precio, descripcion, url} = guitarra;
  // console.log(imagen.data.attributes.formats.medium)
  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen guitarra ${nombre}`}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver producto
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra