import { GetServerSideProps } from 'next';
import React from 'react';
import { Card, CardPlain } from '../components/cards/cards';
import { CustomHead, MetaConfig } from '../layout/head/head';
import styles from '../styles/Home.module.scss';
import axios from 'axios';
import { formatApiResponse } from '../utils/format-response';

const Home = ({projects}) => {
  projects = JSON.parse(projects)
  const metaConfig: MetaConfig = {
    title: "Hi, I'm Stephane Dondyas, a Fullstack web developer",
    description: "Welcome to my portfolio ! I'm Stephane Dondyas a Fullstack developper based in Wilhelmshaven, Germany. Here I would like to introduce myself, and show you how can I help you with your next web project!",
    image: "/images/me-seo.jpeg"
  }
  return (
    <>
      <CustomHead metaConfig={metaConfig}></CustomHead>

      <main>
        <section className="container">
          <div className="row">
            <img className={styles.pattern} src="/images/dot-pattern.svg" height="180" width="245" alt=""/>
            <div className="col-sm-6 d-flex flex-column justify-content-center">
              <h4>Hey,</h4>
              <h1 className="mb-5">I'm <span className="text-primary">Stephane Dondyas</span> <br/> a Fullstack Javascript Dev</h1>
              <p>
                Self Taught web developper dev, based in Wilhelmshaven, Germany. <br/>
                My motto: "With code, there is always a way to reach your goal."
              </p>
              <div className="d-flex align-items-center mt-3">
                <p className="m-0">Follow me:</p>
                <a className="ml-5" href="https://github.com/stephaneBalelos" target="_blank">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a className="ml-5" href="https://www.facebook.com/profile.php?id=100007499687543" target="_blank">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
                <a className="ml-5" href="https://twitter.com/SDondyas" target="_blank">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
              <div className="mt-5">
                <button type="button" className="btn btn-lg btn-primary"><i className="far fa-envelope"></i> Mail me</button>
              </div>
            </div>
            <div className={'col-sm-6 d-none d-sm-block ' + styles.header_img}>
              <img className="img-fluid" src="/images/header-img.svg" alt=""/>
            </div>
          </div>
        </section>
        <section className="container">
          <div className={styles.card_skill}>
            <div className="row">
              <div className="col-md-5">
                <img className="img-fluid" src="/images/vertical-me.svg" alt=""/>
              </div>
              <div className="my-4 col-md-7 d-flex flex-column justify-content-center">
                <h1>What can I do for you?</h1>
                <p className="text-muted">Here are my skills</p>
                <ul className="list-unstyled">
                  <li>
                    <h4 className="m-0">I Design your website</h4>
                    <p>I can prototype and Design your Frontends using Figma</p>
                  </li>
                  <li>
                    <h4 className="m-0">I code your designs</h4>
                    <p>I can build your Frontend with NextJs, Angular 2+, or without frameworks.</p>
                  </li>
                  <li>
                    <h4 className="m-0">And Your Backend</h4>
                    <p>I can build your Backend Rest API using NodeJs.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>Recent projects</h1>
              <p>Some projects I have been working on.</p>
            </div>
            <button className="btn btn-primary d-none d-md-block">
              See more
            </button>
          </div>
          <div className="row mt-5">
            {
              projects.map((p) => (
                <div key={p.id} className="col-md-6">
                  <Card project={p}></Card>
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
                    <div className="row">
                      <div className="col-md-4">
                        <h1>Interested working with me?</h1>
                      </div>
                      <div className="col-md-8 my-auto">
                        <div className="row">
                          <div className="col-md-5 mt-3">
                          <a href="mailto:hello@stephanedondyas.dev" className="btn btn-block btn-lg btn-secondary">
                            <i className="far fa-envelope"></i> Email me
                          </a>
                          </div>
                          <div className="col-md-7 mt-3">
                          <button className="btn btn-block btn-lg btn-outline-secondary">
                            See More Projects
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </CardPlain>
            </div>
          </div>
        </section>
        {/* <section className="testimonials bg-blue">
          <h1 className="text-center">Here are some happy Clients</h1>
          <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mt-3">
              <CardPlain color="dark">
                <div className="card-body m-3">
                  <figure>
                    <blockquote className="blockquote">
                      <p>One of the best additions to our feedback loop has been the company-wide adoption of Fellow.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Boris Wilson Zue Obame <cite title="Source Title">TBG Gabon</cite>
                    </figcaption>
                  </figure>
                </div>
              </CardPlain>
            </div>
            <div className="col-md-6 mt-3">
              <CardPlain color="dark">
                <div className="card-body m-3">
                  <figure>
                    <blockquote className="blockquote">
                      <p>One of the best additions to our feedback loop has been the company-wide adoption of Fellow.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </figure>
                </div>
              </CardPlain>
            </div>
          </div>
          </div>
        </section> */}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(process.env.API_URL + '/projects?_limit=2')
  const projects = JSON.stringify(res.data.map((res) => formatApiResponse(res)))
  return {
    props: {
      projects
    }
  }
}

export default Home
