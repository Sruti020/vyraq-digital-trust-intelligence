
import {
    Search,
    Fingerprint,
    Scale
} from 'lucide-react'

const principles = [
    {
        number: '01',
        icon: Search,
        title: 'Investigate the Context',
        description:
            'A piece of content should not be judged in isolation. We examine claims and the context in which information is presented.'
    },
    {
        number: '02',
        icon: Fingerprint,
        title: 'Examine the Evidence',
        description:
            'We look at available metadata, media characteristics, provenance information, and relevant supporting sources.'
    },
    {
        number: '03',
        icon: Scale,
        title: 'Communicate Uncertainty',
        description:
            'Findings should include their supporting evidence and limitations. An inconclusive result is better than an unsupported claim.'
    }
]

function About() {
    return (
        <section
            id="about"
            className="bg-[#0B1424] px-6 py-24"
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: About VYRAQ */}
                    <div>

                        <p className="text-sm font-semibold tracking-widest uppercase text-sky-400 mb-5">
                            About VYRAQ
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-7">
                            Digital Trust
                            <span className="block text-slate-400">
                                Starts With Evidence.
                            </span>
                        </h2>

                        <p className="text-slate-400 leading-8 mb-5">
                            Digital information is easier than ever to
                            create, edit, and distribute. Images can be
                            manipulated, videos can be altered, and
                            claims can spread without reliable context.
                        </p>

                        <p className="text-slate-400 leading-8">
                            VYRAQ is being developed as a digital trust
                            intelligence platform that brings together
                            content analysis, provenance examination,
                            and evidence-based claim verification.
                        </p>

                    </div>

                    {/* Right: Core Principles */}
                    <div className="space-y-8">

                        {principles.map((item) => {
                            const Icon = item.icon

                            return (
                                <div
                                    key={item.number}
                                    className="flex gap-5 border-b border-white/10 pb-7"
                                >

                                    <div className="shrink-0">

                                        <div className="w-12 h-12 flex items-center justify-center
                                            rounded-lg border border-sky-400/20
                                            bg-[#142C4D]">
                                            <Icon
                                                size={21}
                                                className="text-sky-400"
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                    </div>

                                    <div>

                                        <div className="text-xs font-mono text-sky-400 mb-2">
                                            {item.number}
                                        </div>

                                        <h3 className="text-lg font-semibold text-white mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-slate-400 leading-7">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

                {/* Vision */}
                <div className="mt-20 pt-8 border-t border-white/10">

                    <p className="text-sm text-sky-400 font-semibold tracking-widest uppercase mb-4">
                        Our Vision
                    </p>

                    <h3 className="text-2xl md:text-3xl text-white font-semibold leading-relaxed max-w-4xl">
                        A digital world where information can be
                        examined, its origins understood, and
                        decisions guided by evidence.
                    </h3>

                    <p className="text-slate-500 text-sm mt-5">
                        VYRAQ — Trust, backed by evidence.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default About;