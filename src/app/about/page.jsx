import WhoWe from '@/components/About/WhoWe';
import AWord from '@/components/About/AWord';
import WhyChoseUs from '@/components/About/WhyChoseUs';
import WorkMethod from '@/components/About/WorkMethod';
import CLients from '@/components/About/CLients';


const page = () => {
    return (
        <div className="mx-auto max-w-[1440px]">
            <WhoWe></WhoWe>
            <AWord></AWord>
            <WhyChoseUs></WhyChoseUs>
            <WorkMethod></WorkMethod>
            <CLients></CLients>
        </div>
    );
};

export default page;