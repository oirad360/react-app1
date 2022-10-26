import React, { Component } from 'react';
class Footer extends Component {
    render() { 
        return (
            <footer className="text-center text-white bg-primary">
                <div className="container p-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <a href='https://www.unict.it'>
                                <img src="assets/logoUNICT.jpg" className="rounded w-50"/>
                            </a>
                        </div>
                        <div className="col-md-6 mt-2">
                            <h6 className="text-uppercase fw-bold mb-4">Contatti</h6>
                            <p>darioanzalone21@gmail.com</p>
                            <a href="https://www.github.com/oirad360" className="text-decoration-none text-white">github.com/oirad360</a>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>
        );
    }
}
 
export default Footer;