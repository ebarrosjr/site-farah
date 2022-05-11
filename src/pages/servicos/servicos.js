import styles from '../../scss/servicos.module.scss';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const Servicos = () =>{
    return(
        <>
            <Head>
                <title>Nossos serviços</title>
            </Head>
            <section className={styles.paginaServico}>
                <div className="d-flex flex-column align-items-center justify-content-center text-center container-fluid">
                <h1>Nossos serviços</h1>
                <article className="d-flex flex-column container">
                    <figure>
                    <Image src="/images/ecocardiograma-nossos-servicos.jpg" width={300} height={300} alt="Nossos servicos - ecocardiograma" />
                    <figcaption>
                        <Link href="/servicos/ecocardiograma">
                        <a>Ecocardiograma Fetal</a>
                        </Link>
                    </figcaption>
                    </figure>

                    <figure>
                    <Image src="/images/cirurgia-nosso-servico.png" width={300} height={300} alt="Nossos servicos - cirurgia" />
                    <figcaption>
                        <Link href="/servicos/sabe-aquela">
                        <a>Sabe aquela cirurgia? Agora é possível!</a>
                        </Link>
                    </figcaption>
                    </figure>

                    <figure>
                    <Image src="/images/prenatal-nossos-servicos.jpg" width={300} height={300} alt="Nossos servicos - prenatal" />
                    <figcaption>
                        <Link href="/servicos/prenatal">
                        <a>Pré Natal</a>
                        </Link>
                    </figcaption>
                    </figure>

                    <figure>
                    <Image src="/images/consulta-nossos-servicos.jpg" width={300} height={300} alt="Nossos servicos - partos" />
                    <figcaption>
                        <Link href="/servicos/partos">
                        <a>Partos</a>
                        </Link>
                    </figcaption>
                    </figure>

                    <figure>
                    <Image src="/images/ultrassom.jpg" width={300} height={300} alt="Nossos servicos - ultrassonografia" />
                    <figcaption>
                        <Link href="/servicos/ultrassom">
                        <a>Ultrassonografias</a>
                        </Link>
                    </figcaption>
                    </figure>

                    <figure>
                    <Image src="/images/consulta-nossos-servicos.jpg" width={300} height={300} alt="Nossos servicos - consulta" />
                    <figcaption>
                        <Link href="/servicos/consultas">
                        <a>Consultas</a>
                        </Link>
                    </figcaption>
                    </figure>
                </article>
                </div>
            </section>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    );
}

export default Servicos;