import { useEffect, useState } from 'react';
import type { Product } from '../types';

export function useProducts() {
  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();

    async function run() {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products', {
          signal: ctrl.signal,
          headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json() as Product[];
        setData(json.slice(0, 12));
      } catch (e: any) {
        if (e.name !== 'AbortError') {
          setError(e.message ?? 'Failed to load');
        }
      } finally {
        setLoading(false);
      }
    }

    run();
    return () => ctrl.abort();
  }, []);

  return { data, error, loading };
}
