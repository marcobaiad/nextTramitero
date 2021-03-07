import Container from '../components/Container';
import Navbar from '../elements/Navbar';
import Footer from '../components/Footer';
import Main from '../elements/Main';

export default function Home() {
  return (
    <>
      <Container title="HomePage | NextJS" />
      <Navbar />
      <div className="container">
        <div className="row mx-0 my-4">
          <Main>
            <h1 className="text-center my-2">Tramitero.com</h1>
            <h2 className="text-center my-2">La WEB que te ayuda a culminar tus tramites</h2>
            <strong>¿Por qué elegirnos?</strong>
            <div className="row justify-content-around mx-0">
              <div className="shadow rounded mx-2">
                <div class="">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="shadow rounded mx-2">
                <div class="cardSize">
                  <div className="row mx-0">
                    <h4 class="card-title">Card title</h4>
                  </div>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="shadow rounded mx-2">
                <div class="">
                  <h4 class="">Card title</h4>
                  <p class="">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </Main>
        </div>
      </div>
      <Footer />
    </>
  )
}
