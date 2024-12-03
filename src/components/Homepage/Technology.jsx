import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const Technology = () => {
    return (
        <div>
            <SectionTitle heading="Best Technologies We Use"></SectionTitle>
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-4 gap-8 text-center">
                <div>
                    <div className="border">
                        <h2>Logo</h2>
                        <h1>.Net Core</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laboriosam fugiat iste laudantium, molestias earum cupiditate maiores labore neque facilis corporis optio animi accusantium id provident iusto! Quibusdam sint enim eius nobis qui odit libero tempora aspernatur laboriosam vel sed, deserunt esse aliquam pariatur commodi temporibus rerum quam et aperiam?
                    </p>
                </div>
                <div>
                    <div className="border">
                        <h2>Logo</h2>
                        <h1>C Sharp</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laboriosam fugiat iste laudantium, molestias earum cupiditate maiores labore neque facilis corporis optio animi accusantium id provident iusto! Quibusdam sint enim eius nobis qui odit libero tempora aspernatur laboriosam vel sed, deserunt esse aliquam pariatur commodi temporibus rerum quam et aperiam?
                    </p>
                </div>
                <div>
                    <div className="border">
                        <h2>Logo</h2>
                        <h1>My SQL</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laboriosam fugiat iste laudantium, molestias earum cupiditate maiores labore neque facilis corporis optio animi accusantium id provident iusto! Quibusdam sint enim eius nobis qui odit libero tempora aspernatur laboriosam vel sed, deserunt esse aliquam pariatur commodi temporibus rerum quam et aperiam?
                    </p>
                </div>
                <div>
                    <div className="border">
                        <h2>Logo</h2>
                        <h1>React and Next</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laboriosam fugiat iste laudantium, molestias earum cupiditate maiores labore neque facilis corporis optio animi accusantium id provident iusto! Quibusdam sint enim eius nobis qui odit libero tempora aspernatur laboriosam vel sed, deserunt esse aliquam pariatur commodi temporibus rerum quam et aperiam?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Technology;