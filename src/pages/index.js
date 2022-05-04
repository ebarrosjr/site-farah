import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import style from "../scss/styles.module.scss";

export default function Home() {
  return (
    <>
    <Head>
      <title>Centro Medico Dr. Fabio Farah</title>
    </Head>
    <main className="d-flex flex-column">
      <section className="d-flex flex-row justify-content-center align-items-center container">
        <figure>
          <Image src="/images/farah.jpg" height={300} width={300}/>
        </figure>
        <article>
          <h3>ginecologista</h3>
          <h1>Fabio Farah</h1>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
          <span>
            Consultório Centro I <br/>
            (21) 3858-0582
          </span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            <span>
              Dúvidas e Agendamentos <br/>
              (21) 99919-5552
            </span>
          </div>
        </article>
      </section>

      <section id="carouselExampleInterval" className="carousel slide container-fluid" data-bs-ride="carousel">
        <article className="carousel-inner">
          <figure className="carousel-item active" data-bs-interval="10000">
            <Image src="/images/banner-agentamento.jpg" width={1920} height={750} className="d-block w-100" alt="Banner agendamento carrossel-1"/>
          </figure>
          <figure className="carousel-item" data-bs-interval="2000">
            <Image src="/images/banner-carrosel-doutor.jpg" width={1920} height={750} className="d-block w-100" alt="Banner doutor carrossel-2"/>
          </figure>
          <figure className="carousel-item">
            <Image src="/images/banner-carrosel-rosa.jpg" width={1920} height={750} className="d-block w-100" alt="Banner rosa carrossel-3"/>
          </figure>
        </article>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>

      <section className="container d-flex flex-row align-items-center justify-content-center">
        <figure className="col-md-6">
          <Image src="/images/foto-mae-bebe-content.jpg" height={700} width={700}/>
        </figure>
        <article className="col-md-6">
          <h3>Bem vindo ao nosso site</h3>
          <p>
          Em 1972 meu pai fundou maternidade São Silvestre. Frequentando lá desde os meus 14 anos, aprendi a amar e respeitar a medicina.
          </p>

          <p>
          Então, bem vinda ao site do Dr. Fabio Farah, que não é apenas o meu site, é o nosso espaço, o local onde você encontrará explicações sobre o que fazemos e criarmos um elo de afeto, que irá se fortalecendo desde seu primeiro exame até o dia que for mãe, colocando mais uma gota de esperança no mundo.
          </p>

          <p>
          Hoje, profissionalmente realizado e estabilizado, o prazer de ter em minhas mãos a chegada de uma nova vida, ainda me emociona da mesma forma de quando ainda aprendia com meu pai.
          </p>
          
          <p>
          Agora, quando visito o leito de minhas pacientes, consigo ver estampado o carinho e a gratidão. Assim , todos os dias ao voltar ao meu lar, tenho a certeza do dever cumprido e que fiz mais uma família de amigos.
          </p>
        </article>
      </section>

      <section className="container d-flex flex-row">
        <div>

        </div>
      </section>
    </main>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>

  )
}
