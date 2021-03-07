import axios from 'axios';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { Project } from '../../interfaces/project';
import { CustomHead, MetaConfig } from '../../layout/head/head';
import { formatApiResponse } from '../../utils/format-response';

const ProjectView = ({project}) => {
    const p: Project = JSON.parse(project)
    const metaConfig: MetaConfig = {
        title: `${p.name} | ${p.projectType} | Stephane Dondyas`,
        description: "Welcome to my portfolio ! I'm Stephane Dondyas a Fullstack developper based in Wilhelmshaven, Germany. Here I would like to introduce myself, and show you how can I help you with your next web project!",
        image: p.artworkUrl
      }
    return (
        <>
            <CustomHead metaConfig={metaConfig}></CustomHead>
            <main role="main">
            <article className="container">
                <header>
                    <h5 className="text-muted">{p.projectType}</h5>
                    <h1 className="mb-4"> {p.name} </h1>
                    <div className="d-flex">
                        <div className="d-flex flex-column mr-5">
                            <h4 className="m-0">{ new Date(p.beginDate).getFullYear() }</h4>
                            <p className="text-muted">Year</p>
                        </div>
                        {
                            p.clientName ? (
                                <div className="d-flex flex-column">
                                    <h4 className="m-0">{p.clientName}</h4>
                                    <p className="text-muted">Client</p>
                                </div>
                            ) : ''
                        }
                    </div>
                    <hr/>
                </header>
                <ReactMarkdown className="my-5">
                    {p.description}
                </ReactMarkdown>
                <div className="d-flex">
                {
                    p.repoUrl ? 
                    (
                        <div className="d-flex flex-column mr-5">
                            <a className="btn btn-link" href={p.repoUrl} target="_blank">View the code on Github</a>
                        </div>
                    ) : ''
                }
                {
                    p.repoUrl ? 
                    (
                        <div className="d-flex flex-column mr-5">
                            <a className="btn btn-link" href={p.liveViewUrl} target="_blank">View online</a>
                        </div>
                    ) : ''
                }
                </div> 
                <h2>Screeshots</h2>
                <div className="row">
                    {
                        p.screenshotsUrl.map((s, i) => (
                            <div key={i} className="col-md-4 my-3">
                                <img className="img-fluid" src={s} alt={p.name}/>
                            </div>
                        ))
                    }
                </div>
            </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.query
    const res = await axios.get(process.env.API_URL + `/projects/${id}`)
    const project = JSON.stringify(formatApiResponse(res.data))
    return {
        props: {
            project
        }
    }
}

export default ProjectView