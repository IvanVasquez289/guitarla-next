import Layout from "../components/layout"
import Link from "next/link"
const Pagina404 = () => {
  return (
    <Layout
        title="Pagina no encontrada"
    >
        <div className="errores">
            <p className="error">Pagina No Encontrada</p>
            <Link href={"/"}>
                <a className="error-enlace">Ir a inicio</a>
            </Link>
        </div>
    </Layout>
  )
}

export default Pagina404