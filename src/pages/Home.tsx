import React from 'react';
import styled from 'styled-components';
import { useProducts } from '../hooks/useProducts';
import { Card, Button } from '../components/UI';

const Grid = styled.div`
  display: grid; gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const Home: React.FC = () => {
  const { data, loading, error } = useProducts();

  return (
    <div>
      <h1>Welcome</h1>
      <p>
        This sample demonstrates <strong>three very different themes</strong>, responsive layouts, and
        API-driven content from Fake Store.
      </p>
      <Button onClick={() => alert('Button clicked!')}>Try Button</Button>

      <h2 style={{ marginTop: 24 }}>Products</h2>
      {loading && <p>Loading…</p>}
      {error && <p role="alert">Error: {error}</p>}
      {data && (
        <Grid>
          {data.map(p => (
            <Card key={p.id}>
              <img src={p.image} alt={p.title} loading="lazy" style={{ height: 150, objectFit: 'contain' }} />
              <strong>{p.title}</strong>
              <span>${p.price.toFixed(2)}</span>
              <Button as="a" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                View
              </Button>
            </Card>
          ))}
        </Grid>
      )}
    </div>
  );
};
