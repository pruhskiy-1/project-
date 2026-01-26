import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';


export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="collections" element={<div>Collections Page</div>} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<div>Contacts Page</div>} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;