import { useState } from "react";
import heroVideo from "../../assets/videos/hero.mp4";

function VideoHero() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <section className="relative h-screen overflow-hidden bg-[#F8F4ED]">

            {/* Background Video */}
            <video
                autoPlay
                muted
                playsInline
                onEnded={() => setVideoEnded(true)}
                className={`
                    hero-video
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-opacity
                    duration-[2000ms]
                    ease-in-out
                    ${videoEnded ? "opacity-0" : "opacity-100"}
                `}
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Animated Dark Overlay */}
            <div
                className={`
                    absolute
                    inset-0
                    bg-black/30
                    transition-opacity
                    duration-[2000ms]
                    ease-in-out
                    ${videoEnded ? "opacity-0" : "opacity-100"}
                `}
            />

            {/* Hero Content */}
            <div
                className={`
                    relative
                    z-20
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    text-center
                    px-6
                    transition-colors
                    duration-[2000ms]
                    ease-in-out
                    ${videoEnded ? "text-[#2B2B2B]" : "text-white"}
                `}
            >
                <h1 className="text-6xl md:text-8xl font-light tracking-wide">
                    Yuj Darshan
                </h1>

                <p className="mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed font-light">
                    Where Ancient Wisdom
                    <br />
                    Transforms Lives
                </p>

                <p className="mt-4 text-lg italic opacity-90">
                    The Art of Being the Witness
                </p>

                <div className="mt-24 animate-bounce text-3xl">
                    ↓
                </div>
            </div>

        </section>
    );
}

export default VideoHero;