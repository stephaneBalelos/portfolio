import axios from 'axios';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { CustomHead, MetaConfig } from '../../layout/head/head'
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type ContactForm = {
    full_name: string
    contact_mail: string
    message: string
}

const About = ({about}) => {
    const pageData = JSON.parse(about)
    const {article, description, seo_img } = pageData
    const metaConfig: MetaConfig = {
        title: "About me | Stephane Dondyas",
        description: description,
        image: seo_img
    }

    const [postState, setPostState] = useState(null)

    const { register, handleSubmit, reset, watch, errors } = useForm<ContactForm>({mode: 'onChange'});


    const handleFormSubmit = async (data) => {
        reset({...data})
        const res = await axios.post('https://api.stephanedondyas.dev/contacts', data)
        if (res.status === 200) {
            setPostState('success')
        } else {
            setPostState('error')
        }
        console.log(res)
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
                            {description}
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
                <div className="article-content">
                    <ReactMarkdown>
                        {article}
                    </ReactMarkdown>
                </div>
                <hr/>
            </article>

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
                            <AnimatePresence>
                                {postState === 'success' && (
                                    <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} className="alert alert-success" role="alert">
                                        Thanks for your message! I'll get in touch with you very soon !
                                    </motion.div>
                                )}
                                {postState === 'error' && (
                                    <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} className="alert alert-error" role="alert">
                                        An error occured while submiting the form. Please try again.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <form onSubmit={handleSubmit(handleFormSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="fullname">Name</label>
                                    <input ref={register({required: true})} name="full_name" aria-describedby="nameHelp" type="text" className="form-control" id="fullname" placeholder="Your full name" />
                                    {errors.full_name && 
                                    (<small id="nameHelp" className="form-text text-danger">
                                        What is your name?
                                    </small>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input ref={register({required: true})} name="contact_mail" type="email" className="form-control" id="email" placeholder="name@example.com" />
                                    {errors.contact_mail && 
                                    (<small id="nameHelp" className="form-text text-danger">
                                        How can I contact you?
                                    </small>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea ref={register({required: true})} placeholder="Your message" name="message" className="form-control" id="message" rows={3} />
                                    {errors.message && (<small id="nameHelp" className="form-text text-danger">Tell me how can I help you !</small>)}
                                </div>

                                <input type="submit" value="Email me" className="btn btn-primary btn-lg float-right" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const content = await axios.get(`${process.env.API_URL}/about-me`)
    return {
        props: {
            about: JSON.stringify(content.data)
        }
    }
}

export default About