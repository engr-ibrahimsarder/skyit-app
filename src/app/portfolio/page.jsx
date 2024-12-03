import Image from 'next/image';
import React from 'react';
import pre from '../../../public/images/portfolios/pre.png'
import Link from 'next/link';

const page = () => {
    return (

        <div className="max-w-[1440px] mx-auto">
            <Link href='https://my-bike-edf11.web.app'>
                <div className='grid grid-cols-2 items-center p-4 border-2 rounded'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Premium Rush</h1>
                    </div>
                    <div className='mx-auto'>
                        <Image
                            className="border mx-auto"
                            alt=""
                            src={pre}
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default page;