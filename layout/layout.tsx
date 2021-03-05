import { motion } from 'framer-motion'
import React from 'react'
import { Footer } from './footer/footer'
import Navbar from './navbar/navbar'


const Layout = ({ children, router }) => {
    return (
      <>
        <Navbar />
          <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
              pageInitial: {
                opacity: 0,
                transition: {
                  duration: 0.5
                }
              },
              pageAnimate: {
                opacity: 1,
                transition: {
                  duration: 0.5
                }
              },
            }}>
            {children}
          </motion.div>
        <Footer></Footer>
      </>
    )
  }

export default Layout