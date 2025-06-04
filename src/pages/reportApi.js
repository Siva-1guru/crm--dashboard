// import axios from 'axios';

// export const fetchReportData = async () => {
//   try {
//     const res = await axios.get('/api/report');
//     return res.data;
//   } catch (err) {
//     console.error("Failed to fetch report data", err);
//     throw err;
//   }
// };
import axios from 'axios';

export const fetchReportData = async () => {
  const response = await axios.get('/api/reports'); // ✅ Don't use full URL if proxy is set
  return response.data;
};
