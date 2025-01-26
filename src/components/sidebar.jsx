import  { useState } from "react";

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`sidebar ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="logo">🚀</div>

            <ul className="menu">
                <li className="menu-item">
                    <span className="icon"><i className="fa-solid fa-house"></i></span>
                    {isHovered && <span className="label">Home</span>}
                </li>
                <li className="menu-item">
                    <span className="icon"><i className="fa-solid fa-dollar-sign"></i></span>
                    {isHovered && <span className="label">Products</span>}
                </li>
                <li className="menu-item">
                    <span className="icon"><i className="fa-solid fa-cart-shopping"></i></span>
                    {isHovered && <span className="label">Shopping Cart</span>}
                </li>
                <li className="menu-item">
                    <span className="icon"><i className="fa-solid fa-house"></i></span>
                    {isHovered && <span className="label">Home</span>}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
