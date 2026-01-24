// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};