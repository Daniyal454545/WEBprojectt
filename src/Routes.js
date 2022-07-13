import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';
import EditPage from './pages/EditPage';
import AdminPage from './pages/AdminPage'
import MainPage from './components/Main';
import ProductTable from './components/ProductTable';
import SignInPage from './Register/SignInPage';
import SignUpPage from './Register/SignUpPage';
import HomePage from './pages/MarsPage'; 
import CollegePage from './pages/CollegePage';
// import AboutUsPage from './pages/AboutUsPage'
import CartTable from './components/CartTable';
import FormPage from './pages/FormPage';
import Table from './components/Table';
import Pagenotfaund from './components/Pagenotfaund'
import FeedBackPage from './pages/FeedBackPage'
import Store from './components/Store';



const Routes = () => {

    
    return (
        <>
         <ClientContextProvider>
        <AdminContextProvider>
        <BrowserRouter>
        <>
            <Route exact path="/mars" component={HomePage} />
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/edit/:id" component={EditPage}/>
            <Route exact path="/admin" component={AdminPage}/>
            <Route exact path ='/table' component ={ProductTable}/>
            <Route exact path='./product' component={Table} />
            {/* <Route exact path='/' component={AboutUsPage} /> */}
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
            <Route exact path='/news' component={CollegePage} />
            <Route exact path='/cart' component={CartTable} />
            <Route exact path='/form' component={FormPage} />
            <Route exact path="/store" component={Store} />
            {/* <Route exact path='/*' component={Pagenotfaund} /> */}
            {/* <Route exact path='/feedback' component={FeedBackPage} /> */}
        </>   
        </BrowserRouter>
        </AdminContextProvider>
        </ClientContextProvider>
        </>
    );
};

export default Routes;