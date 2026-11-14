
import {
    Upload,
    ScanSearch,
    Database,
    FileCheck
} from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: Upload,
        title: 'Submit Content',
        description:
            'Provide a text claim, image, or supported content URL for investigation.'
    },
    {
        number: '02',
        icon: ScanSearch,
        title: 'Analyze Content',
        description:
            'Relevant analysis modules examine the content for potential manipulation and inconsistencies.'
    },
    {
        number: '03',
        icon: Database,
        title: 'Gather Evidence',
        description:
            'Collect relevant sources, inspect available metadata, and examine provenance information.'
    },
    {
        number: '04',
        icon: FileCheck,
        title: 'Review Findings',
        description:
            'Receive an explainable report containing findings, supporting evidence, limitations, and confidence indicators.'
    }
]

function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="bg-[#0E192B] px-6 py-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-2xl mb-16">

                    <p className="text-sm font-semibold tracking-widest uppercase text-sky-400 mb-4">
                        Investigation Process
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                        From Content to
                        <span className="block text-slate-400">
                            Evidence-Based Findings.
                        </span>
                    </h2>

                    <p className="text-slate-400 leading-7">
                        VYRAQ follows a structured investigation process
                        to examine digital content and present findings
                        with supporting evidence.
                    </p>

                </div>

                {/* Workflow Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {steps.map((step) => {
                        const Icon = step.icon

                        return (
                            
                                <div
                                    key={step.number}
                                    className={`relative border-t border-sky-400/30 pt-6 ${
                                        step.number !== '04'
                                            ? "lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:-right-8 lg:after:w-8 lg:after:border-t lg:after:border-sky-400/50"
                                            : ''
                                    }`}
                                >


                                {/* Step Number */}
                                <div className="flex items-center justify-between mb-8">

                                    <span className="text-sm font-mono text-sky-400">
                                        STEP {step.number}
                                    </span>

                                    <div className="w-11 h-11 flex items-center justify-center
                                        rounded-lg border border-white/10
                                        bg-[#142C4D]">
                                        <Icon
                                            size={21}
                                            className="text-sky-400"
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                </div>

                                {/* Step Details */}
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-slate-400 leading-7">
                                    {step.description}
                                </p>

                            </div>
                        )
                    })}

                </div>

                {/* Transparency Note */}
                <div className="mt-16 border border-white/10 rounded-lg
                    bg-[#101E32] px-6 py-5">

                    <p className="text-sm text-slate-400 leading-7">
                        <span className="text-sky-400 font-semibold">
                            Transparency matters.
                        </span>
                        {' '}An analysis result is not an absolute guarantee
                        of authenticity. VYRAQ aims to present available
                        evidence, explain its findings, and communicate
                        uncertainty clearly.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default HowItWorks
