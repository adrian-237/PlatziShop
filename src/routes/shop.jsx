import React from 'react';
import Sidebar from "../components/sidebar.jsx";
import {AppContextProvider} from "../context/appContext.jsx";
import Products from "../components/products.jsx";

export default function Shop() {
    return (
        <AppContextProvider>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div className="sidebar-placeholder"></div>
                <main>
                    <Products />
                </main>
            </div>
        </AppContextProvider>
    );
}