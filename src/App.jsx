import React from "react";
import { AppContextProvider } from "./context/appContext.jsx";
import Sidebar from "./components/sidebar.jsx";
import Products from "./components/products.jsx";
import "./styles/sidebar.css";

function App() {
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

export default App;
