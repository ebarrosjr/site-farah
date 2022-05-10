import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.scss";

export default function Footer(){
    return(
        <>
            <footer className={style.footer}>
                <div className="text-white d-flex flex-row container align-items-center">
                    <section className="col-md-4">
                        <figure>
                            <Image src="/images/logo_site.png" alt="Logo do footer" width={230} height={56} />
                        </figure>
                    </section>
                    <section className="mx-5 col-md-4"> 
                        <h2>Links</h2>
                        <nav className="nav d-flex flex-column">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                            <Link href="/">
                                <a className="nav-link">Servicos</a>
                            </Link>
                        </nav>

                    </section>
                </div>

            </footer>
        </> 
    );
}