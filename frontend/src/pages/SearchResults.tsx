import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import { ProductCard } from '../components/ProductCard';
import { Search } from 'lucide-react';
import type { IProduct } from '../types';
import './SearchResults.css';

export const SearchResults = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [inputValue, setInputValue] = useState(query);
    const [results, setResults] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const data = await api.getProducts();
                const filtered = data.filter(p =>
                    p.title.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filtered);
            } catch (error) {
                console.error("Search error:", error);
            } finally {
                setLoading(false);
            }
        };
        void fetchResults();
        setInputValue(query);
    }, [query]);
    const handlePageSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setSearchParams({ q: inputValue });
        }
    };
    return (
        <main className="search-results-page">
            <div className="search-results-container">
                <h1 className="search-results-title">Поиск товаров</h1>
                <form className="page-search-form" onSubmit={handlePageSearch}>
                    <div className="page-search-input-wrapper">
                        <label className="page-search-label">Поиск</label>
                        <input
                            type="text"
                            className="page-search-input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="page-search-submit">
                            <Search size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </form>

                {loading ? (
                    <div className="search-no-results">Searching...</div>
                ) : (
                    <>
                        {results.length > 0 ? (
                            <div className="products-grid">
                                {results.map(p => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        ) : (
                            <div className="search-no-results">
                                Не найдено результатов по запросу "{query}".
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
};
export default SearchResults;