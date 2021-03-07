import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from "framer-motion"

const variants = {
  open: { 
    opacity: 1,
    height: 'auto',
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1
    }
 },
  close: { opacity: 0, height: '0', },
}

const linkVariants = {
  close: {
    y: -50,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1
  }
}

const navbarVariants = {
  leave: {
    opacity: 0,
    y: -100
  },
  enter: {
    opacity: 1,
    y: 0
  }
}

const Navbar = () => {
  const [navOpen, setNavstate] = useState(false)
  const [navTransition, setNavTransitionState] = useState('enter')
  let isMobile = true
  const router = useRouter()
  useEffect(() => {
    const vw = window.innerWidth
    if (vw > 768) {
      setNavstate(true)
      isMobile = false
    }

    router.events.on('routeChangeStart', () => {
      setNavTransitionState('leave')
    })
    router.events.on('routeChangeComplete', () => {
      setNavTransitionState('enter')
    })

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', () => {})
      router.events.off('routeChangeComplete', () => {})
    }
  }, [isMobile, navOpen])

  return (
    <>
      <motion.nav animate={navTransition} variants={navbarVariants} className="navigation-bar">
        <div className="container">
          <div className="navigation-content">
            <Link href="/">
              <a className="navbar-brand" href="">Stephane Dondyas</a>
            </Link>
            <button type="button" className="btn btn-outline-primary btn-menu" onClick={() => setNavstate(!navOpen)}>Menu</button>
          </div>
          <motion.ul
            className="navigation-menu"
            initial={isMobile ? 'close' : 'open'}
            animate={isMobile ? (navOpen ? 'open' : 'close') : ''}
            variants={variants}
          >
            <motion.li variants={linkVariants}>
              <Link href="/">
                <a onClick={(e) => {
                  setNavstate(false)
                }} className={ (router.pathname === '/' ? 'text-primary' : '') + ' btn btn-link' }>Home</a>
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link href="/about">
                <a onClick={(e) => {
                  setNavstate(false)
                }} className={ (router.pathname === '/about' ? 'text-primary' : '') + ' btn btn-link' }>About me</a>
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link href="/projects">
                <a onClick={(e) => {
                  setNavstate(false)
                }} className={ (router.pathname === '/projects' ? 'text-primary' : '') + ' btn btn-link' }>Projects</a>
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>
    </>
  )
}


export default Navbar

function userRouter() {
  throw new Error('Function not implemented.');
}
