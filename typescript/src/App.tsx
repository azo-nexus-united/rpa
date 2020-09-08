import React from 'react';
import { Header, Sidebar, Footer, Copyright } from './components';
import './App.scss';

const App: React.FunctionComponent = (): React.ReactElement => {
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
