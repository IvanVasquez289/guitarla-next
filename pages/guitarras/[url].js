import Layout from "../../components/layout"
import styles from "../../styles/guitarras.module.css"
import Image from "next/future/image"
const Producto = (guitarra) => {
  const {nombre,descripcion,precio,url,imagen} = guitarra.guitarra
  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen guitarra ${nombre}`}/>

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{precio}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Producto

export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data} = await respuesta.json()
  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))
  
  return{
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data} = await respuesta.json()
  const guitarra = data[0].attributes
  return{
    props:{
      guitarra
    }
  }
}
// export async function getServerSideProps({query: {url}}){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const {data} = await respuesta.json()
//   const guitarra = data[0].attributes
//   return{
//     props:{
//       guitarra
//     }
//   }
// }