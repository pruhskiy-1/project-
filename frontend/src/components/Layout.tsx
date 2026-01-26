// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
        </div>
    );
};