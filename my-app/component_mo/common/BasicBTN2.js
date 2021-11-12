const BasicBTN2 = ({ children }) => {
  return (
    <div className="fixed bottom-4 left-0 w-full px-4">
      <button className="keycolor w-full text-white py-4 rounded-2xl font-bold">
        {children}
      </button>
    </div>
  );
};

export default BasicBTN2;
