import Image from 'next/image';

export const Logo = () => (
  <div className="flex items-center">
    <Image
      src="/assets/images/atlas_logo.png"
      alt="Atlas logo"
      width={240}
      height={240}
      className="h-24 w-auto"
      priority
    />
  </div>
);
