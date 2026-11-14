
import {
    FileSearch,
    Image,
    Fingerprint,
    ClipboardCheck
} from 'lucide-react'

const capabilities = [
    {
        number: '01',
        icon: FileSearch,
        title: 'Text & Claim Verification',
        description:
            'Analyze claims, identify potentially misleading statements, and compare them with supporting or contradicting evidence.'
    },
    {
        number: '02',
        icon: Image,
        title: 'Image Authenticity Analysis',
        description:
            'Inspect images for signs of manipulation and potential AI generation using computer vision techniques.'
    },
    {
        number: '03',
        icon: Fingerprint,
        title: 'Metadata & Provenance',
        description:
            'Examine file metadata, cryptographic hashes, and available content credentials to understand media history.'
    },
    {
        number: '04',
        icon: ClipboardCheck,
        title: 'Evidence & Verification Reports',
        description:
            'Combine analysis findings and evidence into transparent reports with explanations and confidence indicators.'
    }
]

function Capabilities() {
    return (
        <section
            id="capabilities"
            className="bg-[#0B1424] px-6 py-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-2xl mb-14">

                    <p className="text-sm font-semibold tracking-widest uppercase text-sky-400 mb-4">
                        Platform Capabilities
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                        Investigate Content.
                        <span className="block text-slate-400">
                            Verify With Evidence.
                        </span>
                    </h2>

                    <p className="text-slate-400 leading-7">
                        A structured approach to examining digital content,
                        identifying potential manipulation, and understanding
                        the evidence behind information.
                    </p>

                </div>

                {/* Capability Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {capabilities.map((item) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={item.number}
                                className="group rounded-xl border border-white/10
                                bg-[#101E32] p-7
                                transition-colors duration-300
                                hover:border-sky-400/40"
                            >

                                <div className="flex items-center justify-between mb-8">

                                    <div className="flex items-center justify-center
                                        w-12 h-12 rounded-lg
                                        border border-sky-400/20
                                        bg-sky-400/10">
                                        <Icon
                                            size={23}
                                            className="text-sky-400"
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    <span className="text-sm font-mono text-slate-500">
                                        {item.number}
                                    </span>

                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 leading-7 text-sm">
                                    {item.description}
                                </p>

                            </div>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default Capabilities;
