import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import styles from "./header.module.scss";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

export function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className="container-fluid d-flex flex-row justify-content-between">
                    <section>
                        <span className="px-2">
                            <Link href="www.facebook.com">
                                <a target="_blank">
                                    <FaFacebook color="#fff"/>
                                </a>
                            </Link>
                        </span>
                        <span>
                            <Link href="www.instagram.com.br">
                                <a target="_blank">
                                    <FaInstagram color="#fff"/>
                                </a>
                            </Link>
                        </span>
                    </section>
                    <section className={styles.agendar}>
                        <Link href="https://consultoriolivre.com.br/doutor/fabio-farah">
                            <a target="_blank">
                                <span>
                                    <FaClock/>
                                </span>
                                Agendar
                            </a>
                        </Link>
                    </section>
                </div>
            </header>

            <section className={styles.menu}>
                <nav className="navbar navbar-expand-md navbar-light" aria-label="Menu-Dr.Farah">
                    <section className="container">
                        <Link href="/">
                            <a className="navbar-brand">
                                <Image src="/images/logo_site.png" height={65} width={280} alt="Logo site" />
                            </a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-nav" aria-controls="menu-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <section className="collapse navbar-collapse" id="menu-nav">
                            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className="nav-link active" aria-current="page">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="menu-drop" data-bs-toggle="dropdown" aria-expanded="false">Serviços</a>
                                    <ul className="dropdown-menu" aria-labelledby="menu-drop">
                                        <li>
                                            <Link href="/servicos/ecocardiograma"> 
                                                <a className="dropdown-item"> Ecocardiograma Fetal </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/sabe-aquela">
                                                <a className="dropdown-item"> Sabe Aquela Cirurgia? Agora e possivel </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/prenatal">
                                                <a className="dropdown-item"> Pré Natal </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/partos">
                                                <a className="dropdown-item">Partos</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link href="#contato">
                                        <a className="nav-link"> Contato </a>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                </nav>
            </section>

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    );
}