import dados from "../../data/servicos.json";
import styles from '../../scss/servicos.module.scss';
import Head from "next/head";

export const getStaticPaths = async () => {      
    const paths = dados.pages.map(page => {
        const slug = page.slug;
        return {params: { slug }}
    });
    return { paths: paths, fallback: false }
}

export async function getStaticProps({params}) {
    const servico = dados.pages.find(page => page.slug === params.slug) || {notfound: true};
    return {props:{servico}}
}

const Servico = ({servico}) => {
    return (
        <>
        <Head>
            <title>Nossos serviços</title>
        </Head>

        <section className={styles.servico}>
            <article className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 abt_section">
                        <div className="abt_txt abt_txt_resp">
                            <h2>{servico.title}</h2>
                            <div dangerouslySetInnerHTML={{__html:servico.content}} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
        </>

    )
}

export default Servico