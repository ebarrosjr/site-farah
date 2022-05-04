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

      <section className="d-flex flex-row bg-dark container-fluid">

        <div className="container col-md-3 d-flex flex-column text-center text-white">  
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
          </div>
          <article>
            <h5>facil agendamento</h5>
            <p>
            Depois de cadastrado, realize seu pré-agendamento em 3 cliques! Depois ligaremos para confirmar o horário mais prático para você!
            </p>
          </article>
        </div>

        <div className="col-md-3 d-flex flex-column text-center text-white">  
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          </div>
          <article>
            <h5>Equipe experiente</h5>
            <p>
            Atuando em conjunto, nossa equipe tem mais de 100 anos de experiência. Todos sempre prontos para garantir o melhor!
            </p>
          </article>
        </div>

        <div className="col-md-3 d-flex flex-column text-center text-white">  
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
          </svg>
          </div>
          <article>
            <h5>Horários flexíveis</h5>
            <p>
            Todos os dias da semana em consultórios espalhados estratégicamente, assim tentamos ficar sempre alertas e perto de você!
            </p>
          </article>
        </div>

        <div className="col-md-3 d-flex flex-column text-center text-white">  
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
          </svg>
          </div>
          <article>
            <h5>Menor preço</h5>
            <p>
            Nosso foco é cuidar da sua saúde e trazer seu bebê saudável ao mundo, com isso nossos preços e facilidades estão ao alcance de todos!
            </p>
          </article>
        </div>
      </section>

      <section className="d-flex flex-column text-center container-fluid">
        <h1>Nossos serviços</h1>
        <article className="d-flex flex-row container">
          <figure className="col-md-3">
            <Image src="/images/ecocardiograma-nossos-servicos.jpg" width={300} height={300} />
            <figcaption>
              <Link href="/">
                <a>Ecocardiograma Fetal</a>
              </Link>
            </figcaption>
          </figure>

          <figure className="col-md-3">
            <Image src="/images/cirurgias-possivel-nossos-servicos.jpg" width={300} height={300} />
            <figcaption>
              <Link href="/">
                <a>Ecocardiograma Fetal</a>
              </Link>
            </figcaption>
          </figure>

          <figure className="col-md-3">
            <Image src="/images/prenatal-nossos-servicos.jpg" width={300} height={300} />
            <figcaption>
              <Link href="/">
                <a>Ecocardiograma Fetal</a>
              </Link>
            </figcaption>
          </figure>

          <figure className="col-md-3">
            <Image src="/images/consulta-nossos-servicos.jpg" width={300} height={300} />
            <figcaption>
              <Link href="/">
                <a>Ecocardiograma Fetal</a>
              </Link>
            </figcaption>
          </figure>
        </article>

           <button>
            <Link href="/">
              <a className="btn btn-primary">Conheca todos</a>
            </Link>
          </button>
      </section>



      <section className="container-fluid bg-dark d-flex flex-row text-white">
          <article className="container d-flex flex-column col-md-9">
            <h2>Como podemos ajudar...</h2>
            <p>Oferecemos uma variedade de produtos para te auxiliar durante todo o processo de gravidez.</p>
          </article>
          <button className="bg-dark col-md-3">
            <Link href="/">
              <a className="btn btn-primary">Agende uma consulta</a>
            </Link>
          </button>
      </section>
      <section>
        <div className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/mioma-ff-dicas.jpg" width={70} height={70} alt="Dicas mioma" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>O Mioma</h5>
              <p>O Mioma Miomas ou fibromas são tumores benignos do útero, consistindo em um distúrbio hormonal que causa um enovelamento das fibras musculares e assim, forma nódulos nesse órgão. Possuem uma coloração esbranquiçada e sua consistência é firme. Em sua maioria, os miomas são múltiplos. Fibroma é uma doença que afeta cerca de 49% das mulheres, […]</p>
              <button className="btn btn-primary"> Ler main...</button>
            </figcaption>
        </div>
        <div className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/mioma-ff-dicas.jpg" width={70} height={70} alt="Dicas mioma" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>O Mioma</h5>
              <p>O Mioma Miomas ou fibromas são tumores benignos do útero, consistindo em um distúrbio hormonal que causa um enovelamento das fibras musculares e assim, forma nódulos nesse órgão. Possuem uma coloração esbranquiçada e sua consistência é firme. Em sua maioria, os miomas são múltiplos. Fibroma é uma doença que afeta cerca de 49% das mulheres, […]</p>
              <button className="btn btn-primary"> Ler main...</button>
            </figcaption>
        </div>
        <div className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/mioma-ff-dicas.jpg" width={70} height={70} alt="Dicas mioma" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>O Mioma</h5>
              <p>O Mioma Miomas ou fibromas são tumores benignos do útero, consistindo em um distúrbio hormonal que causa um enovelamento das fibras musculares e assim, forma nódulos nesse órgão. Possuem uma coloração esbranquiçada e sua consistência é firme. Em sua maioria, os miomas são múltiplos. Fibroma é uma doença que afeta cerca de 49% das mulheres, […]</p>
              <button className="btn btn-primary"> Ler main...</button>
            </figcaption>
        </div>
        <div className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/mioma-ff-dicas.jpg" width={70} height={70} alt="Dicas mioma" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>O Mioma</h5>
              <p>O Mioma Miomas ou fibromas são tumores benignos do útero, consistindo em um distúrbio hormonal que causa um enovelamento das fibras musculares e assim, forma nódulos nesse órgão. Possuem uma coloração esbranquiçada e sua consistência é firme. Em sua maioria, os miomas são múltiplos. Fibroma é uma doença que afeta cerca de 49% das mulheres, […]</p>
              <button className="btn btn-primary"> Ler main...</button>
            </figcaption>
        </div>
      </section>

    </main>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>

  )
}
