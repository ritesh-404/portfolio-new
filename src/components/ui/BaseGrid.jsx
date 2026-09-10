export default function BaseGrid({ className = "", children }) {
  return (
    <div className={`${className} grid grid-cols-4 lg:grid-cols-12 gap-x-6 w-full`}>
      {children}
    </div>
  );
}