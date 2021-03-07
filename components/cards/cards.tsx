import LINK from 'next/link';
import { Project } from '../../interfaces/project';

export const Card = ({project}) => {
    const p: Project = project
    return (
        <div className="card">
            <LINK href={`/projects/${p.slug}`}>
                <img className="card-img-top" src={`${p.artworkUrl}`} alt="Card image cap" />
            </LINK>
            <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="text-muted">{p.projectType}</p>
                {
                    p.repoUrl ? 
                    (<a href={p.repoUrl} className="btn btn-link"><i className="far fa-eye"></i> View the code on Github</a>) : ''
                }
                {
                    p.liveViewUrl ? 
                    (<a href={p.liveViewUrl} className="btn btn-link"><i className="far fa-eye"></i> View online</a>) : ''
                }
            </div>
        </div>
    )
}


export const CardPlain = ({color, children}) => {
    return (
        <div className={'card card-plain ' + color}>
            {children}
        </div>
    )
}

export const CardUser = ({}) => {
    return (
        <div className="card">
            <img className="card-img-top rounded" src="/images/avatar.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Editor</h5>
                <p className="text-muted">UI/UX Designer</p>
            </div>
        </div>
    )
}