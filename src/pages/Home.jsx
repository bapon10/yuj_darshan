import Navbar from "../components/Navbar/Navbar";
import VideoHero from "../components/VideoHero/VideoHero";
import Section from "../components/Section/Section";

import yogaImage from "../assets/images/about/yoga.jpg";

function Home() {
    return (
        <>
            <Navbar />

            <VideoHero />

            <Section
                id="about"
                title="What is Yoga?"
                subtitle="where ancient wisdom transform lives
                The art of being the witness"
            >
                <img
                    src={yogaImage}
                    alt="Meditation"
                    className="rounded-3xl mt-16 w-full shadow-xl"
                />
            </Section>

            <Section
                background="bg-[#EEE7DA]"
                title="Our Philosophy"
                subtitle="At Yuj Darshan,bla bla bli"
            />

            <Section
                title="Courses"
                subtitle="Whether you are beginning your journey or deepening years of practice, our courses are designed to meet you where you are."
            />

            <Section
                background="bg-[#EEE7DA]"
                title="Teachers"
                subtitle="Learn from experienced practitioners dedicated to sharing Yoga with humility, patience, and authenticity."
            />

            <Section
                title="Visit Us"
                subtitle="Located in the spiritual heart of Rishikesh......"
            />
        </>
    );
}

export default Home;