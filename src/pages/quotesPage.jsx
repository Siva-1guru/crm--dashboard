// import React, { useState } from 'react';
// import QuotesForm from './quotrsForm';
// import QuotesList from './quotesList';
// import { Typography } from '@mui/material';

// const QuotesPage = () => {
//   const [refresh, setRefresh] = useState(false);

//   return (
//     <div style={{ padding: 20 }}>
//       <Typography variant="h4" gutterBottom>Quotes</Typography>
//       <QuotesForm onQuoteCreated={() => setRefresh(!refresh)} />
//       <QuotesList key={refresh} />
//     </div>
//   );
// };

// export default QuotesPage;
import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import QuoteForm from './quotesForm';
import QuoteTable from './quotesTable';
import axios from 'axios';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const fetchQuotes = async () => {
    const res = await axios.get('/api/quotes');
    setQuotes(res.data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleAddQuote = async (newQuote) => {
    await axios.post('/api/quotes', newQuote);
    fetchQuotes();
    setOpenForm(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/quotes/${id}`);
    fetchQuotes();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Quotes</Typography>
      <Button variant="contained" onClick={() => setOpenForm(true)}>Add Quote</Button>
      <QuoteTable quotes={quotes} onDelete={handleDelete} />
      <QuoteForm open={openForm} onClose={() => setOpenForm(false)} onSubmit={handleAddQuote} />
    </Container>
  );
};

export default QuotesPage;
