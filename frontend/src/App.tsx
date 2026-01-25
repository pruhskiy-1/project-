
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'; // Импортируем Layout
import { Home } from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />

                    <Route path="collections" element={<div>Collections Page</div>} />
                    <Route path="about" element={<div>About Page</div>} />
                    <Route path="contacts" element={<div>Contacts Page</div>} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


export interface IProduct {
    id: number;
    title: string;
    price: number;       // API присылает цену, оставляем в типах, но не рендерим
    description: string;
    category: string;
    image: string;       // У fakestoreapi поле называется 'image'
    rating?: {
        rate: number;
        count: number;
    };
}