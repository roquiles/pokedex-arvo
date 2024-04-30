import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="w-full flex justify-center items-center min-h-24 text-gray-700 bottom-0 inset-x-0">
    {new Date().getFullYear()} - Created by
    <Link
      href="https://github.com/roquiles"
      target="_blank"
      className="text-violet-800 hover:text-violet-500 "
    >
      &nbsp;roquiles
    </Link>
  </footer>
);

export default Footer;
