// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

// const QuotesList = () => {
//   const [quotes, setQuotes] = useState([]);

//   const fetchQuotes = async () => {
//     const res = await axios.get('http://localhost:5000/api/quotes');
//     setQuotes(res.data);
//   };

//   useEffect(() => {
//     fetchQuotes();
//   }, []);

//   return (
//     <Paper sx={{ mt: 2 }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Quote #</TableCell>
//             <TableCell>Customer</TableCell>
//             <TableCell>Total</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Valid Until</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {quotes.map(quote => (
//             <TableRow key={quote._id}>
//               <TableCell>{quote.quoteNumber}</TableCell>
//               <TableCell>{quote.customerName}</TableCell>
//               <TableCell>${quote.totalAmount}</TableCell>
//               <TableCell>{quote.status}</TableCell>
//               <TableCell>{new Date(quote.validUntil).toLocaleDateString()}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };

// export default QuotesList;
import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const QuoteTable = ({ quotes, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes.map((quote) => (
            <TableRow key={quote._id}>
              <TableCell>{quote.clientName}</TableCell>
              <TableCell>{quote.description}</TableCell>
              <TableCell>${quote.total}</TableCell>
              <TableCell>{quote.date}</TableCell>
              <TableCell>
                <IconButton onClick={() => onDelete(quote._id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuoteTable;
