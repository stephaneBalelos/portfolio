import { GetServerSideProps } from 'next';
import React from 'react';
import { Card, CardPlain } from '../components/cards/cards';
import { CustomHead } from '../layout/head/head';
import styles from '../styles/Home.module.scss';
import axios from 'axios';
import { formatApiResponse } from '../utils/format-response';

const Home = ({projects}) => {
  projects = JSON.parse(projects)
  return (
    <>
      <CustomHead title="Hi, I'm Stephane Dondyas, a Frontend Developper"></CustomHead>

      <main>
        <section className="container">
          <div className="row">
            <img className={styles.pattern} src="/images/dot-pattern.svg" height="180" width="245" alt=""/>
            <div className="col-sm-6 d-flex flex-column justify-content-center">
              <h4>Hey,</h4>
              <h1 className="mb-5">I'm <span className="text-primary">Stephane Dondyas</span> <br/> a Fullstack Javascript Dev</h1>
              <p>
                Self Taught web developper dev, based in Wilhelmshaven, Germany <br/>
                My motto: "With code, there is always a way to reach your goal."
              </p>
              <div className="d-flex align-items-center mt-3">
                <p className="m-0">Follow me:</p>
                <a className="ml-5" href="">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a className="ml-5" href="">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a className="ml-5" href="">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
              <div className="mt-5">
                <button type="button" className="btn btn-lg btn-primary"><i className="far fa-envelope"></i> Mail me</button>
              </div>
            </div>
            <div className={'col-sm-6 d-none d-sm-block ' + styles.header_img}>
              <img className="img-fluid" src="/images/main.svg" alt=""/>
            </div>
          </div>
        </section>
        <section className="container">
          <div className={styles.card_skill}>
            <div className="row">
              <div className="col-md-5">
                <img className="img-fluid" src="/images/exemple-photo-1.svg" alt=""/>
              </div>
              <div className="my-4 col-md-7 d-flex flex-column justify-content-center">
                <h1>What can I do for you?</h1>
                <p className="text-muted">Here are my skills</p>
                <ul className="list-unstyled">
                  <li>
                    <h4 className="m-0">I Design your website</h4>
                    <p>I can prototype and Design your Frontends</p>
                  </li>
                  <li>
                    <h4 className="m-0">I code your designs</h4>
                    <p>I can build your Frontend with NextJs, Angular 2+, or without framworks.</p>
                  </li>
                  <li>
                    <h4 className="m-0">And Your Backend</h4>
                    <p>I can build your Backend Rest API using NodeJs</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>I don't have a CV</h1>
              <p>As I said above, I'm a self taught Developper. So there are some project to prove my Skills.</p>
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
          <h1 className="text-center">Why Hire Me ?</h1>
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
                          <button className="btn btn-block btn-lg btn-secondary">
                            <i className="far fa-envelope"></i> Email me
                          </button>
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
        <section className="testimonials bg-blue">
          <h1 className="text-center">Here are my happy Clients</h1>
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
                      Someone famous in <cite title="Source Title">Source Title</cite>
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
        </section>
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