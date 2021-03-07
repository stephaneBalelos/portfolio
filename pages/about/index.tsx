import { CardUser } from '../../components/cards/cards';
import { CustomHead, MetaConfig } from '../../layout/head/head'

const About = () => {
    const metaConfig: MetaConfig = {
        title: "About me | Stephane Dondyas",
        description: "I'm a Self taught Fullstack Javascript developper based in Wilhelmshaven, Germany. I can help you with your web project, from first design to production deployment",
        image: "/images/me-seo.jpeg"
    }
    return (
        <>
        <CustomHead metaConfig={metaConfig}></CustomHead>
        <main role="main">
            <section className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <img className="img-fluid" src="/images/vertical-me.svg" alt="Stephane Dondyas"/>
                    </div>
                    <div className="col-md-7 my-auto">
                        <h1>Stephane Dondyas</h1>
                        <p>Frontend Developper</p>

                        <p>
                            Frontend developper based in Wilhelmshaven, Germany. <br/> I'm a little pointy about code quality, and always put scalability at first place in my projects,
                            because stonger is the base, bigger are growth chances.
                        </p>

                        <p>
                            Email me: <br/>
                            <a className="btn btn-link" href="mailto:hello@stephanedondyas.dev">
                                hello@stephanedondyas.dev
                            </a>
                        </p>

                        <div>
                            <h5>Key Skills</h5>
                            <div>
                                <img className="mr-5" height="60px" src="/logos/nodejs.svg" alt="NodeJS"/>
                                <img className="mr-5" height="60px" src="/logos/next-js.svg" alt="NextJS"/>
                                <img className="mr-5" height="60px" src="/logos/angular.svg" alt="Angular 2+"/>
                                <img className="mr-5" height="60px" src="/logos/sass.svg" alt="Saas"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <article className="container">
                <hr/>
                <header>
                    <h1>My journey in Web developpment</h1>
                    <p className="text-muted">Biomedical engineering Student the day, Web developper at night.</p>
                </header>
                <p className="mt-4">
                My most recent work stint was with Sprinklr where I designed for some of its core offerings like Social Media Engagement, Social Advertising, Care support and Analytics for big brands with a global reach that helped integrate all their social marketing needs under one roof. Having led the design team for four years in this young, rapidly growing enterprise startup environment - taught me how to balance business goals and engineering constraints as I unrelentingly advocated for the user.
                </p>
                <img src="/images/image-about.jpg" className="img-fluid rounded" alt="..."></img>
                <p className="mt-4">
                My most recent work stint was with Sprinklr where I designed for some of its core offerings like Social Media Engagement, Social Advertising, Care support and Analytics for big brands with a global reach that helped integrate all their social marketing needs under one roof. Having led the design team for four years in this young, rapidly growing enterprise startup environment - taught me how to balance business goals and engineering constraints as I unrelentingly advocated for the user.
                </p>
                <hr/>
            </article>
            {/* <section className="container pt-2">
                <h1 className="text-center">My colabs</h1>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <CardUser></CardUser>
                    </div>
                    <div className="col-md-4">
                        <CardUser></CardUser>
                    </div>
                    <div className="col-md-4">
                        <CardUser></CardUser>
                    </div>
                </div>
            </section> */}
            <section className="bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Thanks for contacting me!</h1>
                            <p>You can fill the form or <a className="btn btn-link" href="mailto:hello@stephanedondyas.dev"> send me a mail </a></p>
                            <ul className="list-unstyled mt-auto">
                                <li>
                                    <p><i className="fas fa-mobile"></i> +491789121487</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope"></i> hello@stephanedondyas.dev</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-map-marker"></i> Weserstraße 108, 26382 Wilhelmshaven</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="fullname">Name</label>
                                    <input type="text" className="form-control" id="fullname" placeholder="Your full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea className="form-control" defaultValue="Your message" id="message" rows={3}></textarea>
                                </div>

                                <button className="btn btn-primary btn-lg float-right">
                                    Email me
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default About