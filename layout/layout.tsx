import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Footer } from './footer/footer'
import Navbar from './navbar/navbar'


const Layout = ({ children, router }) => {
    return (
      <>
        <Navbar />
          <AnimatePresence>
            <motion.div exit={{opacity: 0, y: 10}} key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                  pageInitial: {
                    opacity: 0,
                    y: 10,
                    transition: {
                      duration: 0.5
                    }
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5
                    }
                  },
                }}>
                {children}
              </motion.div>
          </AnimatePresence>
        <Footer></Footer>
      </>
    )
  }

export default Layout