import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import style from "../scss/home.module.scss";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';



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
                    size={25}
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


      <section className={style.dicasSaude}>

        <article id="mioma" className="card ">
          <div className="py-3">
            <figure className="card-img-top text-center" >
              <Image src="/images/Mioma.png" width={110} height={110} alt="Mioma e Histerectomia" />
            
            </figure>
            <figcaption className="text-center card-body" >
                <h5 className="card-title">Histerectomia e Miomas</h5>
                <p className="card-text">Nossa equipe conta com profissionais especializados para ajudar a sua vida voltar ao normal.</p>
                <p className="card-text">A histerectomia e aconselhada para mulheres acometidas por problemas graves da região pélvica como: Câncer, 
                  infecções, miomas, hemorragias, endometriose grave ou prolapso uterino.</p>
                <p className="card-text">O procedimento é realizado quando o acompanhamento clínico não obtiver sucesso. 
                  O procedimento consiste na retirada do útero e trompas na maior parte dos casos, dependendo do tipo indicada. 
                  A recuperação ocorre entre três a oito semanas dependendo da escolha do procedimento.</p>
                <p className="card-text">Nossa equipe esta preparada para lhe acompanhar nesse momento e facilitar ao maximo sua escolha e acesso ao procedimento</p>
                <p className="card-text">Agende uma avaliação.</p>
                  <section className={style.btn}>
                      <Link href="/dicas/mioma">
                          <a>
                              Ler mais...
                          </a>
                      </Link>
                </section>
            </figcaption> 
          </div>
        </article>

        <article id="exame-preventivo" className="card ">
          <div className="py-3">
          <figure className="card-img-top text-center">
            <Image src="/images/exame-preventivo.png" width={110} height={110} alt="Exame Preventivo" />
          </figure>
          <figcaption className="card-body text-center" >
              <h5 className="card-title">Exame Preventivo</h5>
              <p className="card-text">O exame preventivo, conhecido como papanicolau, é indicado para mulheres sexualmente ativas 
                com objetivo de avaliar o colo do útero, analisando sinais de infecção pelo HPV, 
                vírus responsavel pelo câncer do colo de útero e outros microrganismos. Ele também 
                faz parte da ritina pós puerpério, trata-se do período pós-parto que abange desde o 
                dia do nascimento até a volta da menstruaçao que pode levar até 45 dias, variando conforme a amamentação.</p>
              <p className="card-text">Se esse ano você ainda não colocou sua rotina ginecológica em dia, fique relaxe, 
                agende uma consulta e vamos resolver isso!</p>
                <section className={style.btn}>
                    <Link href="/dicas/rosa">
                        <a>
                            Ler mais...
                        </a>
                    </Link>
              </section>
            </figcaption>
          </div>

        </article>

        <article id="laqueadura" className="card ">
          <div className="py-3">
            <figure className="card-img-top text-center">
              <Image src="/images/Laqueadura-tubaria.png" width={110} height={110} alt="Laqueadura" />
            </figure>
            <figcaption className="card-body text-center">
              <h5 className="card-title">Laqueadura</h5>
              <p className="card-text">Esse procedimento as tubas uterinas impedindo que espermatozoides cheguem aos óvulos. È o método contraceptivo mais eficaz.</p>
              <p className="card-text">Um dos grandes benefícios é descontinuação do uso de homônios e proporcionam efeitos colatarais indesejados para sua saúde!</p>
              <p className="card-text">Agende uma avaliação e fique tranquila.</p>
              <p className="card-text"><strong>Laqueadura é um procedimento contraceptivo para mulheres com têm certeza que não desejam uma gravidez futura.</strong></p>
              <section className={style.btn}>
                    <Link href="/dicas/acido">
                        <a>
                            Ler mais...
                        </a>
                    </Link>
              </section>
            </figcaption>
          </div>

        </article>

        <article id="parto" className="card ">
          <div className="py-3">
            <figure className="card-img-top text-center">
              <Image src="/images/parto.png" width={110} height={110} alt="Parto" />
            </figure>
            <figcaption className="card-body text-center">
                <h5 className="card-title">Parto</h5>
                <p className="card-text">Venha ganhar seu bebê com uma das equipes mais experientes do Estado, vários consultórios na regia metropolitana do Rio de Janeiro. Hospital estruturado, preço justo e todas as facilidades que uma equipe focada no seu momento pode oferecer!</p>
                <p className="card-text">Oferecemos duas opções de internação: <br/>
                    Enfermaria: Com acompanhante feminino. <br/> <br/>
                    Quarto Particular: Com até dois acompanhantes de ambos os sexos.
                    </p>
                <p className="card-text">Seja qual for sua escolha, oferecemos o pacote completo com hospital, anestesia e pediatra já inclusos.</p>
                <p className="card-text">Agende uma avaliação e reserve sua vaga.</p>
                <p className="card-text"><strong>Com mais de 15mil partos na carreira, estamos a sua espera para esse momento tão especial!</strong></p>
                <section className={style.btn}>
                      <Link href="/dicas/cancer">
                          <a>
                              Ler mais...
                          </a>
                      </Link>
                </section>
            </figcaption>
          </div>

        </article>

        <article id="pre-natal" className="card ">
          <div className="py-3">
            <figure className="card-img-top text-center">
              <Image src="/images/prenatal.png" width={130} height={130} alt="Pré-natal" />
            </figure>
            <figcaption className="card-body text-center">
                <h5 className="card-title">Pré-natal</h5> 
                <p className="card-text">Oferecemos serviço completo para o seu pré-natal: ultrassonografia com laudo na hora, exames de sangue e é claro, a segurança e tranquilidade da equipe mais requisitada da região metropolitana no Rio de Janeiro.</p>
                <p className="card-text">Agende uma consulta e venha ficar tranquila.</p>
                <p className="card-text"><strong>Venha acompanhar seu pré-natal com umas das equipes mais experientes do Estado.</strong></p>
                <section className={style.btn}>
                      <Link href="/dicas/amamentacao">
                          <a>
                              Ler mais...
                          </a>
                      </Link>
                </section>
              </figcaption>
          </div>
        </article>
      </section>

    </main>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>

  )
}


