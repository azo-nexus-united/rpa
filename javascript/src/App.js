import React from 'react';
import './App.scss';
import { Header, Footer, Sidebar, Copyright } from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="content">
            <Sidebar />
            <div className="product-listing">
                Product<br />-<br />listing
            </div>
        </div>
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
