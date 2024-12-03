import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import image_1 from '../../../public/images/img-1.jpg'

const WhoWe = () => {
    return (
        <div>
            <SectionTitle heading="WHO WE ARE"></SectionTitle>
            <div className="grid lg:grid-cols-2 items-center p-4 ">
                <div>
                    <Image
                        className="border"
                        alt=""
                        src={image_1}
                        width={500}
                        height={300}
                    />
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, deleniti placeat impedit voluptas a at dolores necessitatibus! Neque explicabo rem iusto laudantium. A blanditiis doloremque molestiae, dicta reprehenderit possimus cupiditate obcaecati corporis modi nihil ex dolores neque recusandae voluptates dolorem. Molestias a mollitia, expedita aspernatur labore ab! Dignissimos molestiae quas, eaque numquam, dolor voluptates pariatur minima quae quidem fugit quos explicabo quod delectus. Eum unde sit blanditiis eius aut cupiditate placeat aspernatur fuga id amet? Minima, minus. Excepturi, harum, sed doloribus, nesciunt nulla ex hic dignissimos quas aut doloremque corporis tenetur nam modi voluptatem! Labore accusamus temporibus consequuntur quibusdam odio facere sequi minima reprehenderit, error velit fuga voluptates aut ea ut dolor possimus expedita exercitationem sunt nihil, omnis quod earum. Neque nostrum a beatae rerum id iste ratione molestias itaque doloribus, eligendi quisquam placeat! Sed consequatur sint eligendi dolore molestias nulla ut eos nesciunt doloremque pariatur laudantium facere, ipsam maxime provident fuga iste unde nam adipisci soluta velit rerum quia atque. Dignissimos repudiandae ratione quas modi officia? Ipsum quis, maxime possimus voluptate qui nobis quasi omnis earum aperiam amet magni, molestias voluptatem consequatur iure nihil tenetur optio similique? Voluptas, hic dolor aut repellendus laboriosam rerum accusantium? Veritatis odit maiores quas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoWe;