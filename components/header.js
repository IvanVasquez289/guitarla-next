import Image from "next/future/image"
import Link from "next/link"
import styles from '../styles/header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <Image src='/img/logo.svg' width={200} height={10} alt="imagen logo"/>

            <nav className={styles.navegacion}>
                <Link href={'/'}>
                    Inicio
                </Link>
                <Link href={'/nosotros'}>
                    Nosotros
                </Link>
                <Link href={'/tienda'}>
                    Tienda
                </Link>
                <Link href={'/blog'}>
                    Blog
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header