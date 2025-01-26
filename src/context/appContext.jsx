import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export function AppContextProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <AppContext.Provider value={{ isModalOpen, selectedProduct, openModal, closeModal }}>
            {children}
        </AppContext.Provider>
    );
}
