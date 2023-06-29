import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'
const Nosotros = () => {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros'}
    >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi delectus fugit molestiae ipsum pariatur officia, sint dolorem velit officiis animi eum. Fugit, quis. Reprehenderit, id! Exercitationem magni assumenda minus!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi delectus fugit molestiae ipsum pariatur officia, sint dolorem velit officiis animi eum. Fugit, quis. 
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi delectus fugit molestiae ipsum pariatur officia, sint dolorem velit officiis animi eum. Fugit, quis. Reprehenderit, id! Exercitationem magni assumenda minus!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi delectus fugit molestiae ipsum pariatur officia, sint dolorem velit officiis animi eum. Fugit, quis. Reprehenderit, id! 
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros