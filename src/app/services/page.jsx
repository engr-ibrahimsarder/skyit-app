import OurServices from '@/components/Homepage/OurServices';
import Packeges from '@/components/Services/Packeges';
import ReadySoft from '@/components/Services/ReadySoft';
import Services from '@/components/Services/Services';
import React from 'react';

const page = () => {
    return (
        <div className="mx-auto max-w-[1440px] p-4">
            <Services></Services>
            <Packeges></Packeges>
            <ReadySoft></ReadySoft>
        </div>
    );
};

export default page;