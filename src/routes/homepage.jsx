import Sidebar from "../components/sidebar.jsx";
import Products from "../components/products.jsx";
import React from "react";

export default function HomePage() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div className="sidebar-placeholder"></div>
            <main>
                HomePage
            </main>
        </div>
    );
}

