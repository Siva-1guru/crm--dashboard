// src/components/ui/Card.jsx
// export function Card({ children }) {
//     return <div className="p-4 shadow-lg rounded-lg bg-white">{children}</div>;
//   }

// export const Card = () => { /* Card component code */ };
// export const CardContent = () => { /* CardContent component code */ };
// In frontend/src/components/ui/card.jsx
// export const Card = ({ className, children }) => {
//   return <div className={`card ${className}`}>{children}</div>;
// };

// export const CardContent = ({ children }) => {
//   return <div className="card-content">{children}</div>;
// };
// frontend/src/components/ui/card.jsx
export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

