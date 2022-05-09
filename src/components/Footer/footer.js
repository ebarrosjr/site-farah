import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
        <>
            <footer className="text-white bg-dark d-flex flex-row container-fluid align-items-center">
               
                    <section className="col-md-4">
                        <figure>
                            <Image src="/images/logo_site.png" width={230} height={56} />
                        </figure>
                    </section>
                    <section className="col-md-4"> 
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


            </footer>
        </> 
    );
}