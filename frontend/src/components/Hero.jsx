
import { ArrowRight, ShieldCheck } from 'lucide-react'
import HeroVisual from './HeroVisual'

function Hero({ onStartVerification }) {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#0B1424] px-6 py-24"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side - Hero Content */}
                <div className="space-y-7">

                    {/* Platform Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2">
                        <ShieldCheck size={17} className="text-sky-400" />

                        <span className="text-sm font-medium text-sky-300">
                            DIGITAL CONTENT VERIFICATION
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                        Trust What You
                        <span className="block text-sky-400">
                            See Online.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl text-lg leading-8 text-slate-400">
                        Investigate suspicious digital content, identify
                        potential manipulation, and verify claims with
                        evidence-backed AI intelligence.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4">

                        <button
                            onClick={onStartVerification}
                            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-500 transition-colors"
                        >
                            Start Verification
                            <ArrowRight size={19} />
                        </button>

                        <a
                            href="#how-it-works"
                            className="rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-slate-200 hover:bg-white/5 transition-colors"
                        >
                            Explore Platform
                        </a>

                    </div>

                    {/* Trust Message */}
                    <p className="text-sm text-slate-500">
                        Evidence-based analysis. Transparent results. Informed decisions.
                    </p>

                </div>
                {/* Right Side - Hero Visual */}
                <HeroVisual />

            </div>
        </section>
    )
}

export default Hero;
