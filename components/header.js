import Image from "next/future/image"
import logo from '../public/img/logo.svg'
const Header = () => {
  return (
    <header>
        <div className="contenedor">
            <Image src={logo.src} width={200} height={10} alt="imagen logo"/>
        </div>
    </header>
  )
}

export default Header