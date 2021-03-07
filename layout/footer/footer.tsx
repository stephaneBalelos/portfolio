export const Footer = () => {
    return (
        <footer className={'footer container d-flex justify-content-between align-items-center'}>
            <h3>Let's connect!</h3>
            <div className="social">
                <a className="mx-4" href="https://github.com/stephaneBalelos" target="_blank">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a className="mx-4" href="https://www.facebook.com/profile.php?id=100007499687543" target="_blank">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
                <a className="mx-4" href="https://twitter.com/SDondyas" target="_blank">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
            </div>
        </footer>
    )
}