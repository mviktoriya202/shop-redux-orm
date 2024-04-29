import React from 'react';
import './styles/App.css';
import Header from "../features/header/Header";
import AsideBanners from "../features/aside/AsideBanners";
import Footer from "../features/footer/Footer";
import routesArray from "../entities/routesArray";
import {Routes, Route} from 'react-router-dom'

function App() {
    return (
        <>
            <main className='flex  max-780:flex-col flex-row justify-between items-start px-[24px]'>
                <div className='flex flex-col items-start justify-start w-full px-[25px]'>
                    <Header/>
                    <Routes>
                        {
                            routesArray.map((route, index) => {
                                return (
                                    <Route key={route.id} path={route.path} element={<route.Component/>}/>
                                )
                            })
                        }
                    </Routes>

                </div>
                <AsideBanners/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
