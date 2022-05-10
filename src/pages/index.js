import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import style from "../scss/home.module.scss";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';


export default function Home() {
  return (
    <>
    <Head>
      <title>Centro Medico Dr. Fabio Farah</title>
    </Head>

    <main>

      <section className={style.descricao}>
        <div className="d-flex flex-row container text-center justify-content-center align-items-center">
          <figure className={style.image}>
            <Image src="/images/farah.jpg" className="img-thumbnail rounded-circle" alt="Dr. Fabio Farah" height={350} width={350}/>
          </figure>
          
          <div className=" d-flex justify-content-center">
            <article className={style.text}>
              <h3>ginecologista</h3>
              <h1>Fabio Farah</h1>

              <section className="d-flex flex-row align-items-center">
                <span className={style.icones}>
                  <FaPhoneAlt
                    color="white"
                    size={25}
                  />
                </span>
                
                <p className="d-flex flex-column">
                  Consultório Centro I 
                  <span className={style.numero}>
                  (21) 3858-0582
                  </span>
                </p>
              </section>

              <section className="d-flex flex-row align-items-center">
                <span className={style.icones}> 
                  <FaWhatsapp
                    color="white"
                    size={30}
                  />
                </span>
                
                <p className="d-flex flex-column">
                  Dúvidas e Agendamentos 
                  <span className={style.numero}>
                    (21) 99919-5552
                  </span>
                </p>
              </section>
            </article>
          </div>

        </div>
      </section>

      <hr/>

      <section id="carrosel" className="carousel slide container-fluid" data-bs-ride="carousel">
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

          <button className="carousel-control-prev" type="button" data-bs-target="#carrosel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carrosel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </section>


      <section className={style.bemVindo}>
          <div className="container d-flex flex-row align-items-center justify-content-center">
            <figure className="col-md-6">
              <Image src="/images/foto-mae-bebe-content.jpg" height={550} width={550}/>
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
         
          </div>

      </section>

      <section className={style.empresa}>

        <div className="d-flex flex-row container-fluid">

          <section className="col-md-3 d-flex flex-column text-center text-white">  
            <span>
              <FaBook
              color="white"
              size={40}
              />
            </span>

            <article>
              <h5>Fácil agendamento</h5>
              <p>
              Depois de cadastrado, realize seu pré-agendamento em 3 cliques! Depois ligaremos para confirmar o horário mais prático para você!
              </p>
            </article>
          </section>

          <section className="col-md-3 d-flex flex-column text-center text-white">  
            <span>
              <FaUsers
                color="white"
                size={40}
              />
            </span>

            <article>
              <h5>Equipe experiente</h5>
              <p>
              Atuando em conjunto, nossa equipe tem mais de 100 anos de experiência. Todos sempre prontos para garantir o melhor!
              </p>
            </article>
          </section>

          <section className="col-md-3 d-flex flex-column text-center text-white">  
            <span>
              <FaThumbsUp
                color="white"
                size={40}
              />
            </span>

            <article>
              <h5>Horários flexíveis</h5>
              <p>
              Todos os dias da semana em consultórios espalhados estratégicamente, assim tentamos ficar sempre alertas e perto de você!
              </p>
            </article>
          </section>

          <section className="col-md-3 d-flex flex-column text-center text-white">  
            <span>
              <FaDollarSign
                color="white"
                size={40}
              />
            </span>

            <article>
              <h5>Menor preço</h5>
              <p>
              Nosso foco é cuidar da sua saúde e trazer seu bebê saudável ao mundo, com isso nossos preços e facilidades estão ao alcance de todos!
              </p>
            </article>
          </section>
          </div>

      </section>

      <section className={style.nossoServico}>
        <div className="d-flex flex-column align-items-center justify-content-center text-center container-fluid">
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
              <Image src="/images/cirurgia-nosso-servico.png" width={300} height={300} />
              <figcaption>
                <Link href="/">
                  <a>Sabe aquela cirurgia? Agora é possível!</a>
                </Link>
              </figcaption>
            </figure>

            <figure className="col-md-3">
              <Image src="/images/prenatal-nossos-servicos.jpg" width={300} height={300} />
              <figcaption>
                <Link href="/">
                  <a>Pré Natal</a>
                </Link>
              </figcaption>
            </figure>

            <figure className="col-md-3">
              <Image src="/images/consulta-nossos-servicos.jpg" width={300} height={300} />
              <figcaption>
                <Link href="/">
                  <a>Partos</a>
                </Link>
              </figcaption>
            </figure>
          </article>

          <section className={style.btn}>
                        <Link href="https://consultoriolivre.com.br/doutor/fabio-farah">
                            <a target="_blank">
                              Conheça todos 
                            </a>
                        </Link>
            </section>
        </div>

      </section>



      <section className={style.ajuda}>
        <div  className="container-fluid d-flex flex-row text-white">
            <article className="container d-flex flex-column col-md-9">
              <h2>Como podemos ajudar...</h2>
              <p>Oferecemos uma variedade de produtos para te auxiliar durante todo o processo de gravidez.</p>
            </article>
            <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Agende uma consulta
                      </a>
                  </Link>
            </section>
        </div>
      </section>


      <section className={style.dicasSaude}>
        <h1>Dicas de saúde</h1>
        <article className="container d-flex flex-row align-items-center">
          <figure className="col-md-1" >
            <Image src="/images/mioma-ff-dicas.jpg" width={160} height={84} alt="Dicas mioma" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>O Mioma</h5>
              <p>O Mioma Miomas ou fibromas são tumores benignos do útero, consistindo em um distúrbio hormonal que causa um enovelamento das fibras musculares e assim, forma nódulos nesse órgão. Possuem uma coloração esbranquiçada e sua consistência é firme. Em sua maioria, os miomas são múltiplos. Fibroma é uma doença que afeta cerca de 49% das mulheres, […]</p>
              <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Ler mais...
                      </a>
                  </Link>
            </section>
          </figcaption>
        </article>

        <article className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/rosa-dicas.jpg" width={70} height={70} alt="2019 rosa" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>2019 Rosa</h5>
              <p>A #2019Rosa é uma campanha de conscientização, que tem como objetivo principal, reforçar o alerta as mulheres e a sociedade sobre a importância da prevenção e do diagnóstico precoce do câncer, e não somente do câncer de mama, mas também do câncer de colo de útero. No Brasil, as campanhas de conscientização sobre o câncer […]</p>
                            <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Ler mais...
                      </a>
                  </Link>
            </section>
            </figcaption>
        </article>

        <article className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/mielomeningococe-dicas.png" width={70} height={70} alt="Importancia do acido folico" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>Importância do Acido Fólico</h5>
              <p>Uma das recomendações dos ginecologistas para as mulheres que pretendem engravidar é que elas tomem ácido fólico pelo menos três meses antes de engravidar – e continuem com o suplemento durante o primeiro trimestre da gravidez. O folato (ácido fólico), uma vitamina do complexo B, é fundamental para que a coluna doBebê se desenvolva corretamente, […]</p>
                            <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Ler mais...
                      </a>
                  </Link>
            </section>
            </figcaption>
        </article>

        <article className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/preparo-amamentacao-gravidez-dicas.jpg" width={70} height={70} alt="prevencao cancer de mama" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>Prevenção do Câncer de Mama</h5>
              <p>O câncer de mama na verdade ainda não pode ser prevenido, mas sim diagnosticado o mais cedo possível. Para isto recomenda-se que as mulheres conheçam seu corpo desde que apresentem o crescimento das mamas na adolescência. O auto-exame das mamas, hoje em dia, deve ser chamado de auto-cuidado, e pode ser feito pelo menos uma […]</p>
                            <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Ler mais...
                      </a>
                  </Link>
            </section>
            </figcaption>
        </article>

        <article className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/amamentacao-dicas.jpg" width={70} height={70} alt="amamentacao" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>Entendendo a Amamentação</h5>
              <p>Quando o bebê chega ao mundo é um momento especial Tudo é novo, emocionante e cheio de admiração. Também há muito em que se pensar. Como será o meu bebê ? Será sadio ? Serei capaz de enfrentar essa responsabilidade ? Além disso, é um bom momento para pensar na amamentação e em como ela […]</p>
                            <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Ler mais...
                      </a>
                  </Link>
            </section>
            </figcaption>
        </article>

        <article className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/gravida_cozinha-dicas.jpg" width={70} height={70} alt="alimentacao gestante" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>A alimentação para as gestantes</h5>
              <p>O corpo da mulher passa por muitas mudanças durante a gestação e por isso a necessidade de vitaminas do complexo B, ácido fólico, ferro, zinco, iodo, selênio, vitamina A e vitamina C aumentam neste período, então pensando nisso aqui vão umas dicas para que a futura mamãe possa se manter saudável junto com o seu […]</p>
                            <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Ler mais...
                      </a>
                  </Link>
            </section>
            </figcaption>
        </article>

        <article className="container d-flex flex-row">
          <figure className="col-md-1" >
            <Image src="/images/cancer-dicas.jpg" width={70} height={70} alt="Prevencao cancer do ultero" />
          </figure>
          <figcaption className="col-md-11 d-flex flex-column">
              <h5>Como se Prevenir do Câncer de Colo do Útero</h5>
              <p>Olá, como nosso primeiro assunto, vamos tratar do câncer do colo do útero, uma doença que é essencialmente feminina. O mais comum modo de desenvolvimento de um câncer do colo de útero é a partir de alterações pré-cancerosas. E ele pode ser impedido de duas maneiras: a primeira é detectar e tratar as lesões pré-cancerosas […]</p>
                            <section className={style.btn}>
                  <Link href="/">
                      <a target="_blank">
                          Ler mais...
                      </a>
                  </Link>
            </section>
            </figcaption>
        </article>
      </section>

    </main>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>

  )
}
