import Head from "next/head"
const Layout = ({children, title = "", description = ""}) => {
  return (
    <>  
        <Head>
            <title>{`GuitarLa - ${title}`}</title>
            <meta name="description" content={description}/>
        </Head>
        <h1>Desde layout</h1>
        {children}
    </>
  )
}

export default Layout