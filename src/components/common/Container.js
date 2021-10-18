export default function Container({ children, className }) {
  return (
    <div
      className={`flex-1 max-w-3xl mx-auto items-center px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16 ${className}`}>
      {children}
    </div>
  );
}
