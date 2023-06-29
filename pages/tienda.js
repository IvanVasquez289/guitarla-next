import Layout from "../components/layout"
import ListadoGuitarras from "../components/listado-guitarras"
const Tienda = ({guitarras}) => {
  console.log(guitarras)
  return (
    <Layout
        title={'Tienda'}
        description={'GuitarLA, tienda de guitarras, instrumentos'}
    >
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <ListadoGuitarras
            guitarras={guitarras}
          />
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