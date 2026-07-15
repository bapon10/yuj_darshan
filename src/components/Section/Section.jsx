import Reveal from "../Reveal/Reveal";

function Section({
    id,
    title,
    subtitle,
    children,
    background = "bg-[#F8F4ED]",
}) {
    return (
        <section
            id={id}
            className={`${background} min-h-screen flex items-center`}
        >
            <div className="container mx-auto px-8">

                <Reveal>

                    <h2 className="font-serif text-6xl lg:text-8xl mb-8">
                        {title}
                    </h2>

                    <p className="text-xl leading-9 max-w-3xl text-neutral-700">
                        {subtitle}
                    </p>

                </Reveal>

                <div className="mt-20">
                    {children}
                </div>

            </div>
        </section>
    );
}

export default Section;