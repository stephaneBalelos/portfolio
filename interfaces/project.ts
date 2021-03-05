export interface Project {
    id?: string,
    name: string,
    projectType: string,
    beginDate: Date,
    artworkUrl: string,
    screenshotsUrl: string[] 
    repoUrl?: string,
    liveViewUrl?: string
    clientName?: string
    slug?: string
    description: string
}
