export const Footer = () => {
    return (
        <footer className={'footer container d-flex justify-content-between align-items-center'}>
            <h3>Let's connect!</h3>
            <div className="social">
                <a className="ml-2 mr-2" href="">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a className="ml-2 mr-2" href="">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a className="ml-2 mr-2" href="">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
            <button className="btn btn-link d-none d-sm-block">
                Back to top <i className="fas fa-arrow-up"></i>
            </button>
        </footer>
    )
}