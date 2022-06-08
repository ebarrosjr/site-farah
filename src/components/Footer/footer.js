import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.scss";
import Script from "next/script";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Footer(){
    const { register, handleSubmit, formState:{errors}, reset } = useForm();
    const [aviso, setAviso] = useState();

    async function onContactar(values) {
        let config = {
            method: 'post',
            url: '/api/contato',
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        };
        try{
            const response = await axios(config);
            if(response.status == 200) {
                reset()
                setAviso(<div className="alert alert-success"> Sua mensagem foi enviada!</div>)
            }
        } catch(err) {
            console.log(err);
            setAviso(<div className="alert alert-danger">{err}</div>)
        }
    }

    const formulario  = (
        <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit(onContactar)} name="contato" method="POST" data-netlify="true">
            <input {...register("nome", {required: true})} className="form-control mb-3" placeholder="Seu nome" />
            <input {...register("phone", {required: true})} className="form-control mb-3" placeholder="Seu telefone" />
            <textarea {...register("mensagem", {validate: (value) => value.length > 6})} className="form-control mb-3" placeholder="Sua mensagem..."></textarea>
            <button className={style.button}> Enviar </button>
        </form>
    );

    return(
        <>
            <footer className={style.footer}>
                <div className="text-white d-flex flex-row container align-items-center">
                    <section className="col-md-4">
                        <figure>
                            <Image src="/images/logo-footer.svg" alt="Logo do footer" width={230} height={56} />
                        </figure>
                    </section>
                    <section className="col-md-4"> 
                        <h2 className="text-center">Links</h2>
                        <nav className="nav d-flex flex-column">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a className="nav-link py-1">Home</a>
                                    </Link>
                                </li>
                                <li>

                                        <a className="nav-link py-1">Serviços</a>

                                        <ul>
                                            <li>
                                                <Link href="#mioma">
                                                    <a className="nav-link py-1">
                                                        Mioma e Histerectomia
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#exame-preventivo">
                                                    <a className="nav-link py-1">
                                                        Exame Preventivo
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#pre-natal">
                                                    <a className="nav-link py-1">
                                                        Pré Natal
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#parto">
                                                    <a className="nav-link py-1">
                                                        Partos
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#laqueadura">
                                                    <a className="nav-link py-1">
                                                        Laqueadura
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                </li>

                            </ul>

                        </nav>
                    </section>
                    <section id="contato" className="text-center col-md-4">
                        <h3>Fale Conosco</h3>
                        {aviso}
                        {formulario}
                    </section>
                </div>
            </footer>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        </> 
    );
}