// frontend/src/components/ui/avatar.jsx
export const Avatar = ({ children, className }) => {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-gray-200 ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export const AvatarImage = ({ src, alt }) => {
    return <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" />;
  };
  
  export const AvatarFallback = ({ children }) => {
    return (
      <span className="text-white font-bold text-xl">{children}</span>
    );
  };
  