import Link from "next/link"
import Layout from "../components/layout"
const Nosotros = () => {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros'}
    >
        <Link href="/">Ir a inicio</Link>
    </Layout>
  )
}

export default Nosotros