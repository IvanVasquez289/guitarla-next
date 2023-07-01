import Image from "next/future/image";
import Link from "next/link";
const Guitarra = ({guitarra}) => {
  const {imagen,nombre,precio, descripcion, url} = guitarra;
  // console.log(imagen.data.attributes.formats.medium)
  return (
    <div>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen guitarra ${nombre}`}/>

      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a>
            Ver producto
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra