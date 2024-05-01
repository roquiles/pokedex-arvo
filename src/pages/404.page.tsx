import Link from 'next/link';

const Custom404: React.FC = () => (
  <div className="h-full flex flex-col justify-center items-center">
    <h1 className="text-xl mb-4">404 - Page Not Found</h1>
    <Link
      href="/"
      className="font-bold text-indigo-500 hover:underline decoration-indigo-500"
    >
      Go back to Home
    </Link>
  </div>
);

export default Custom404;
