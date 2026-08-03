import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <section className="relative overflow-hidden py-24">

            {/* Background Blur */}
            <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl"></div>

            <div className="container mx-auto px-4">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}
                    <div className="relative flex justify-center">

                        <div className="absolute h-[420px] w-[420px] rounded-full bg-primary/10"></div>

                        <div className="absolute h-[300px] w-[300px] rounded-full bg-primary/20"></div>

                        <Image
                            src="/not-found/broken_lamp.jpg"
                            alt="404 Illustration"
                            width={100}
                            height={100}
                            priority
                            className="relative z-10 w-full max-w-md"
                        />

                    </div>

                    {/* Right */}
                    <div>

                        <h1 className="font-anton text-[160px] text-primary leading-none text-primary xl:text-[220px]">
                            404
                        </h1>

                        <h2 className="mt-2 text-5xl font-bold text-heading">
                            Oops! Page Not Found
                        </h2>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-body">
                            The page you're looking for doesn't exist or may have
                            been moved. Explore available jobs or return to the
                            homepage.
                        </p>

                        <Link
                            href="/"
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            Back To Home
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}