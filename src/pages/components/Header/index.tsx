import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const Header: React.FC = () => {
  const router = useRouter();

  const goToHome = useCallback(() => {
    if (router.asPath === '/') {
      router.reload();
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <header className="w-full bg-indigo-900 h-16 flex items-center justify-center shadow-xl">
      <button type="button" onClick={goToHome}>
        <Image
          src="/logo.png"
          alt="Pokédex"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-14"
        />
      </button>
    </header>
  );
};

export default Header;
