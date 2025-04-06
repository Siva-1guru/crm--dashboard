// frontend/src/components/ui/input.jsx
export const Input = ({ className, ...props }) => {
    return (
      <input
        className={`border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  };
  