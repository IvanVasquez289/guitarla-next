import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
const Tienda = ({guitarras}) => {
  console.log(guitarras)
  return (
    <Layout
        title={'Tienda'}
        description={'GuitarLA, tienda de guitarras, instrumentos'}
    >
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </main>
    </Layout>
  )
}

export default Tienda

// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}api/guitarras?populate=imagen`)
//   const {data: guitarras} = await respuesta.json()
//   console.log(guitarras)
//   return{
//     props:{
//       guitarras
//     }
//   }
// }

export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}api/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  console.log(guitarras)
  return{
    props:{
      guitarras
    }
  }
}