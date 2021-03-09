import { CustomHead, MetaConfig } from "../../layout/head/head"
import { Card, CardPlain } from "../../components/cards/cards";
import { GetServerSideProps } from "next";
import axios from "axios";
import { formatApiResponse } from "../../utils/format-response";

const Projects = ({projects}) => {
    projects = JSON.parse(projects)
    const metaConfig: MetaConfig = {
        title: "A few projects I have been working on.",
        description: "Here are some projects I have been working on, some of my personnals projects.",
        image: "https://stephanedondyas.dev/images/me-seo.jpeg"
    }
    return (
        <>
            <CustomHead metaConfig={metaConfig}></CustomHead>
            <main role="main">
                <section className="container">
                    <h1>Some projects I have been working on.</h1>
                    <p>And what I do on my free time :)</p>
                    <div className="row mt-5">
                        {
                            projects.map((p) => (
                                <div key={p.id} className="col-md-6">
                                    <Card key={p._id} project={p}></Card>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className="container">
                    <div className="row mt-3">
                        <div className="col-12">
                        <CardPlain color="gold">
                            <div className="card-body mx-2 my-2 mx-md-5 mx-md-5">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h1>Interested working with me?</h1>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="mailto:hello@stephanedondyas.dev" className="btn btn-lg btn-secondary">
                                            <i className="far fa-envelope"></i> Email me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardPlain>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await axios.get(process.env.API_URL + '/projects?_sort=begin_date:DESC')
    const projects = JSON.stringify(res.data.map((res) => formatApiResponse(res)))

    return {
        props: {
            projects
        }
    }
}

export default Projects