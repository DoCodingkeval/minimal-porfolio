const Card = ({ className, children }) => {
  return (
    <div className={`rounded flex flex-col gap-2 px-4 py-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
