import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";
import "../styles/homepage.css";

export default function HomePage() {
    return (
        <div className="homepage-container">
            <Sidebar />
            <div className="sidebar-placeholder"></div>
            <main className="main-content">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Welcome to Our Modern E-Commerce</h1>
                        <p className="hero-subtitle">
                            Built with Platzi Fake API | Explore the Future of Shopping
                        </p>
                        <Link to="/products" className="hero-button">
                            Get Started
                        </Link>
                    </div>
                    <div className="hero-shapes">
                        <div className="shape-circle"></div>
                        <div className="shape-triangle"></div>
                        <div className="shape-square"></div>
                    </div>
                </div>
                <div className="info-section">
                    <div className="info-card">
                        <h2>Why Choose Us?</h2>
                        <p>
                            We offer a seamless shopping experience with the latest
                            technology and a wide range of products.
                        </p>
                        <div className="info-shapes">
                            <div className="shape-wave"></div>
                            <div className="shape-dots"></div>
                        </div>
                    </div>
                    <div className="info-card">
                        <h2>Fast Delivery</h2>
                        <p>
                            Get your products delivered to your doorstep in record time.
                        </p>
                        <div className="info-shapes">
                            <div className="shape-wave"></div>
                            <div className="shape-dots"></div>
                        </div>
                    </div>
                    <div className="info-card">
                        <h2>Secure Payments</h2>
                        <p>
                            Enjoy safe and secure transactions with our trusted payment
                            gateways.
                        </p>
                        <div className="info-shapes">
                            <div className="shape-wave"></div>
                            <div className="shape-dots"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}