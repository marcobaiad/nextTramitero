import Container from '../components/Container';
import Navbar from '../elements/Navbar';
import Footer from '../components/Footer';
import Main from '../elements/Main';
import styles from '../styles/home.module.css';
import Image from 'next/image';

export default function Home() {

  const Cards = ({ title, text }) => {
    return (
      <div className={styles.cardSize + " shadow rounded mx-2 p-4"}>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {text}
        </p>
      </div>
    )
  }

  return (
    <>
      <Container title="HomePage | NextJS" />
      <Navbar />
      <div className="container">
        <div className="row mx-0 mb-4">
          <Main>
            <div>
              <Image
                src="/5283.jpg"
                height={500}
                width={window.screen.width}
                alt="Queremos que no pierdas tiempo con tus tramites"
              />
              <div className={styles.absoluteTitle}>
                <h1 className="text-center fixed-top pt-5">Tramitero.com</h1>
                <h2 className="text-center fixed-top pt-1">La web que te ayuda a realizar tus tramites</h2>
              </div>
            </div>
            <div className="row justify-content-around mx-0">
              <Cards title="Somos Expertos" text="Somos un grupo de expertos unidos, con el objetivo de ayudar a las personas con los tramites de Argentina. AFIP, ANSES, DNRPA, RENAPER, etc." />
              <Cards title="Comunidad Unida" text="Porque queremos ayudar, creamos una comunidad donde todos nos ayudamos a resolver nuestras consultas." />
              <Cards title="Guías super Sencillas" text="Nuestras guías están orientadas a ser los más simples y sencillas posible, para que no te surjan dudas y puedas terminar tu tramite." />
            </div>
          </Main>
        </div>
      </div>
      <Footer />
    </>
  )
}
