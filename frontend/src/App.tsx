import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Collections} from "./pages/Collections.tsx";
import {CategoryPage} from "./pages/CategoryPage.tsx";
import { ProductDetail } from './pages/ProductDetail';
import {SearchResults} from "./pages/SearchResults.tsx";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="collections" element={<Collections />} />
                    <Route path="collections/:categoryId" element={<CategoryPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<div>Contacts Page</div>} />
                    <Route path="products/:id" element={<ProductDetail/>} />
                    <Route path="search" element={<SearchResults />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;