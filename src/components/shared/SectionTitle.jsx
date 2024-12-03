const SectionTitle = ({ heading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl uppercase">{heading}</h3>
            <div className="divider bg-white w-8 h-1 mx-auto"></div>
        </div>
    );
};

export default SectionTitle;