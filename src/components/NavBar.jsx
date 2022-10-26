import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar bg-dark" style={{"--bs-bg-opacity": '.9'}}>
                <div className="container-fluid">
                    <div>
                        <button type="button" className="btn btn-primary btn-md">Registrati</button>
                        <button type="button" className="btn btn-secondary btn-sm mx-2">Accedi</button>
                    </div>
                    <form role='search' className='w-50'>
                        <div className="input-group">
                            <button className="btn btn-light p-1" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-search p-1" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                            <input type="search" className="form-control w-50" aria-label="Search" placeholder='Cerca un prodotto'/>
                            <select className="form-select bg-secondary text-white pr-1" id="floatingSelect" aria-label="Floating label select example">
                                <option value="all">Tutte le categorie</option>
                                <option value="smartphone">Smartphones</option>
                                <option value="laptop">Laptop</option>
                                <option value="pc">PC</option>
                                <option value="audio">Audio</option>
                                <option value="tv">TV</option>
                                <option value="photography">Fotografia</option>
                                <option value="console">Console</option>
                                <option value="smartwatch">Smartwatch</option>
                                <option value="accessories">Accessori</option>
                            </select>
                        </div>
                    </form>
                    <a className="mx-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-house bg-light rounded p-1" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                    </a>
                </div>
                <div className="container-fluid mt-1">
                    <div className="row">
                        <a className='col text-white text-decoration-none' href='#' data-value="smartphone">Smartphones</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="laptop">Laptop</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="pc">PC</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="audio">Audio</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="tv">TV</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="photography">Fotografia</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="console">Console</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="smartwatch">Smartwatch</a>
                        <a className='col text-white text-decoration-none' href='#' data-value="accessories">Accessori</a>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;