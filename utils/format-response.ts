import { Project } from "../interfaces/project"

export const formatApiResponse = (res) => {
    const project: Project = {
        id: res.id,
        name: res.name,
        description: res.description,
        beginDate: res.begin_date,
        projectType: formatProjectType(res.project_type),
        repoUrl: res.repo_url,
        artworkUrl: process.env.API_URL + res.artwork.url,
        clientName: res.client_name,
        screenshotsUrl: res.screenshots.map((s) => process.env.API_URL + s.url),
        liveViewUrl: res.live_view_url
    }

    return project
}

const formatProjectType = (type: string): string => {
    let t: string
    switch (type) {
        case 'ecommerce':
            t = 'E-Commerce'
            break;
        case 'portfolio':
            t = 'Portfolio'
            break;
        case 'design':
            t = 'Design'
            break;
        case 'integration':
            t= 'Integration'
            break;
    
        default:
            t = 'Project'
            break;
    }

    return t
}