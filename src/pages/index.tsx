import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";
import Newsletter from "../components/Newsletter";
import ServicesComponent from "../components/ServicesComponent";
import Head from "next/head";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Graziela Matana | Advocacia Contratual</title>
        <meta name="description" content="Unindo contratos e design para uma advocacia objetiva e eficiente." />
        <meta name="og:locale" property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Graziela Matana | Advocacia Contratual" />
        <meta name="og:url" property="og:url" content="https://grazielamatanaadvocacia.com.br/" />
        <meta name="og:site_name" property="og:site_name" content="Graziela Matana Advocacia" />
        <meta name="og:image" property="og:image" content="./favicon.png" />
        <link rel="shortcut icon" href="./favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.scroll}>
        <section id="home" className={styles.home}>
          <HomeComponent />
        </section>
        <section id="sobre-mim" className={styles.about}>
          <AboutComponent />
        </section>
        <section id="servicos" className={styles.services}>
          <ServicesComponent />
        </section>
        <section id="contato" className={styles.contact}>
          <ContactComponent />
        </section>
        {/* o site não terá mais newsletter, no futuro vai ser um "baixe o ebook" num formato parecido
        <section id="newsletter" className={styles.newsletter}>
          <Newsletter />
        </section> */}
        <Footer />
      </div>
    </>
  )
}
