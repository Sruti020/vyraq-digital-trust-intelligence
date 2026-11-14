
import { ShieldCheck } from 'lucide-react'

function Contact() {
    return (
        <>
            {/* Contact Section */}
            <section
                id="contact"
                className="bg-[#0E192B] px-6 py-24"
            >
                <div className="max-w-7xl mx-auto">

                    <p className="text-sm font-semibold tracking-widest uppercase text-sky-400 mb-5">
                        Get in Touch
                    </p>

                    <div className="max-w-2xl">

                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                            Building a More
                            <span className="block text-slate-400">
                                Trustworthy Digital World.
                            </span>
                        </h2>

                        <p className="text-slate-400 leading-8">
                            VYRAQ is being developed to make digital
                            content investigation more transparent
                            and evidence-driven. We welcome thoughtful
                            feedback, ideas, and collaboration.
                        </p>

                        <p className="text-sm text-slate-500 mt-6">
                            VYRAQ is currently under development.
                        </p>

                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0B1424] border-t border-white/10 px-6 py-8">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row
                    items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="flex items-center gap-3">

                        <ShieldCheck
                            size={30}
                            className="text-sky-400"
                            strokeWidth={2}
                        />

                        <div>
                            <h3 className="text-lg font-bold text-white">
                                VYRAQ
                            </h3>

                            <p className="text-xs text-slate-500">
                                Trust, backed by evidence.
                            </p>
                        </div>

                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-6">

                        <a href="#home" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                            Home
                        </a>

                        <a href="#capabilities" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                            Capabilities
                        </a>

                        <a href="#how-it-works" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                            How It Works
                        </a>

                        <a href="#about" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                            About
                        </a>

                        <a href="#contact" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                            Contact
                        </a>

                    </div>

                </div>

                <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10">

                    <p className="text-xs text-slate-500 text-center">
                        © {new Date().getFullYear()} VYRAQ. All rights reserved.
                    </p>

                </div>

            </footer>
        </>
    )
}

export default Contact
