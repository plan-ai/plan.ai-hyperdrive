import React from 'react';
import Image from '@/components/ui/image';
import AnchorLink from '@/components/ui/links/anchor-link';

import Solana from '@/assets/images/images/trusted1.png';
import SuperteamEarn from '@/assets/images/images/trusted2.png';
import Superteam from '@/assets/images/images/trusted3.png';
import DefiOS from '@/assets/images/images/logo-full.png';

interface TrustedPartnersProps {}

export const TrustedPartners: React.FC<TrustedPartnersProps> = ({}) => {
  return (
    <div className="z-[20] flex w-screen flex-col items-center justify-center bg-black">
      <div className="mt-10 text-sm uppercase text-primary xl:text-base 3xl:text-lg">
        Trusted by the best teams
      </div>
      <div className="mb-14 mt-20 flex h-7 items-center justify-center gap-10 grayscale">
        <AnchorLink
          href={'https://solana.com/'}
          className="h-full"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }} // optional
            src={Solana}
          />
        </AnchorLink>
        <AnchorLink
          href={'https://earn.superteam.fun/'}
          className="h-full"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }}
            className="h-full" // optional
            src={SuperteamEarn}
          />
        </AnchorLink>
        <AnchorLink
          href={'https://superteam.fun/'}
          className="h-full"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }}
            className="h-full" // optional
            src={Superteam}
          />
        </AnchorLink>
        <AnchorLink
          href={'https://defi-os.com/'}
          className="h-10"
          target="_blank"
        >
          <Image
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100%' }} // optional
            src={DefiOS}
          />
        </AnchorLink>
      </div>
    </div>
  );
};

export default TrustedPartners;