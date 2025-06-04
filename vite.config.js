// // // import { defineConfig } from 'vite'
// // // import react from '@vitejs/plugin-react'

// // // // https://vite.dev/config/
// // // export default defineConfig({
// // //   plugins: [react()],
// // // })
// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';
// // import path from 'path';

// // export default defineConfig({
// //   plugins: [react()],
// //   resolve: {
// //     alias: {
// //       '@': path.resolve(__dirname, 'src'),
// //     },
// //   },
// // });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
//   server: {
//     proxy: {
//       '/api': 'http://localhost:5000',
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
