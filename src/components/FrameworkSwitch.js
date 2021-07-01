import Link from 'next/link';
import { useRouter } from 'next/router';

export const FrameworkSwitch = ({ inline }) => {
  const router = useRouter();
  const links = [
    { href: '/docs', icon: '/images/logos/js.svg', title: 'JavaScript' },
    { href: '/docs/react', icon: '/images/logos/react.svg', title: 'React' },
    { href: '/docs/vue', icon: '/images/logos/vue.svg', title: 'Vue' },
  ];
  const isActive = (link) => link.href === router.asPath;
  return (
    <div
      className={`flex mb-4 border border-primary-dark border-opacity-20 rounded overflow-hidden ${
        inline ? 'mb-8 lg:hidden w-[210px]' : ''
      }`}
    >
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          <a
            className={`p-2 w-full flex justify-center items-center duration-100 ${
              isActive(link)
                ? 'bg-primary'
                : 'hover:bg-primary hover:bg-opacity-10'
            }`}
            title={link.title}
          >
            <img className="w-6 h-6 !m-0" src={link.icon} alt={link.title} />
          </a>
        </Link>
      ))}
    </div>
  );
};
