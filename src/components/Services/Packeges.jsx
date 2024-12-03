

const Packeges = () => {
    return (
        <div className="max-w-[1440px] mx-auto  ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2
            sm:grid-cols-1 mt-4 gap-4">

                <div className="lg:max-md-full mx-auto max-w-sm overflow-hidden rounded border transform transition duration-300 hover:scale-105">
                    <div className="flex flex-col">
                        <header className="flex flex-col gap-6 p-6">
                            <h3 className="text-xl font-bold text-center">
                                Basic Package
                                {/* <span className="block text-sm font-normal text-slate-400">
                                    Ideal for individual developers.
                                </span> */}
                            </h3>
                            <h4 className="text-center">
                                <span className="text-2xl text-slate-300 ">$</span>
                                <span className="text-2xl font-bold tracking-tighter text-slate-200 transition-all duration-300 lg:text-4xl">
                                    1,000 - $3,000
                                </span>
                                {/* <span className="text-sm">/month</span> */}
                            </h4>
                            {/* <button className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-emerald-100 transition duration-300 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none">
                                <span>Try for free</span>
                            </button> */}

                        </header>
                        <div className="p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Website design and development
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Basic SEO optimization
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Social media integration
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Content management system (CMS) setup (e.g., WordPress)
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Standard support and maintenance (e.g., 2 months)
                                </li>
                            </ul>
                        </div>
                        {/* <footer className="border-t border-slate-200 bg-slate-100 p-6 text-center text-sm">
                            <a
                                className="text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700"
                                href="#"
                            >
                                See all features
                            </a>
                        </footer> */}
                    </div>
                </div>

                <div className="lg:max-md-full mx-auto max-w-sm overflow-hidden rounded border transform transition duration-300 hover:scale-105">
                    <div className="flex flex-col">
                        <header className="flex flex-col gap-6 p-6">
                            <h3 className="text-xl font-bold text-center">
                                Standard Package
                                {/* <span className="block text-sm font-normal text-slate-400">
                                    Ideal for individual developers.
                                </span> */}
                            </h3>
                            <h4 className="text-center">
                                <span className="text-2xl text-slate-300 ">$</span>
                                <span className="text-2xl font-bold tracking-tighter text-slate-200 transition-all duration-300 lg:text-4xl">
                                    5,000 - $10,000
                                </span>
                                {/* <span className="text-sm">/month</span> */}
                            </h4>
                            {/* <button className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-emerald-100 transition duration-300 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none">
                                <span>Try for free</span>
                            </button> */}

                        </header>
                        <div className="p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Website design and development
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Advanced SEO optimization
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    E-commerce functionality (e.g., product pages, shopping cart)
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    CMS setup and training
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Mobile responsiveness and performance optimization
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    6 months of support and maintenance
                                </li>
                            </ul>
                        </div>
                        {/* <footer className="border-t border-slate-200 bg-slate-100 p-6 text-center text-sm">
                            <a
                                className="text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700"
                                href="#"
                            >
                                See all features
                            </a>
                        </footer> */}
                    </div>
                </div>

                <div className="lg:max-md-full mx-auto max-w-sm overflow-hidden rounded border transform transition duration-300 hover:scale-105">
                    <div className="flex flex-col">
                        <header className="flex flex-col gap-6 p-6">
                            <h3 className="text-xl font-bold text-center">
                                Premium Package
                                {/* <span className="block text-sm font-normal text-slate-400">
                                    Ideal for individual developers.
                                </span> */}
                            </h3>
                            <h4 className="text-center">
                                <span className="text-2xl text-slate-300 ">$</span>
                                <span className="text-2xl font-bold tracking-tighter text-slate-200 transition-all duration-300 lg:text-4xl">
                                    $20,000+
                                </span>
                                {/* <span className="text-sm">/month</span> */}
                            </h4>
                            {/* <button className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-emerald-100 transition duration-300 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none">
                                <span>Try for free</span>
                            </button> */}

                        </header>
                        <div className="p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Custom web application development (React, Node.js, etc.)
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Full-stack development (frontend + backend integration)
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Advanced e-commerce features (e.g., payment gateway, analytics)
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Mobile app development (iOS/Android)
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Ongoing support and dedicated team for 1 year
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Advanced security features and performance tuning
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6 shrink-0 p-1 text-emerald-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    6 months of support and maintenance
                                </li>
                            </ul>
                        </div>
                        {/* <footer className="border-t border-slate-200 bg-slate-100 p-6 text-center text-sm">
                            <a
                                className="text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700"
                                href="#"
                            >
                                See all features
                            </a>
                        </footer> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packeges;