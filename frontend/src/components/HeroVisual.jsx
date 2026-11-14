
import {
    ShieldCheck,
    FileText,
    Image as ImageIcon,
    Video,
    ScanSearch
} from 'lucide-react'

function HeroVisual() {
    return (
        <div className="relative flex items-center justify-center min-h-[480px]">

            {/* Background glow */}
            <div className="absolute w-80 h-80 rounded-full bg-blue-600/20 blur-[100px]"></div>

            {/* Circular background */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-sky-400/10"></div>
            <div className="absolute w-[260px] h-[260px] rounded-full border border-sky-400/15"></div>

            {/* Central shield */}
            <div className="relative z-10 flex items-center justify-center
                w-48 h-56 rounded-[45%] border border-sky-400/40
                bg-gradient-to-b from-blue-500/20 to-cyan-400/5
                shadow-[0_0_70px_rgba(56,189,248,0.2)]">

                <div className="absolute inset-3 rounded-[45%] border border-sky-400/20"></div>

                <ShieldCheck
                    size={105}
                    strokeWidth={1.3}
                    className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.8)]"
                />
            </div>

            {/* Text analysis card */}
            <div className="absolute top-10 left-0 z-20 flex items-center gap-3
                rounded-xl border border-white/10 bg-[#142C4D]/90
                p-3 shadow-xl backdrop-blur-md animate-vyraq-float">

                <FileText className="text-sky-400" size={24} />

                <div>
                    <p className="text-sm font-semibold text-white">Text Analysis</p>
                    <p className="text-xs text-slate-400">Claim verification</p>
                </div>
            </div>

            {/* Image analysis card */}
            <div className="absolute top-32 right-0 z-20 flex items-center gap-3
                rounded-xl border border-white/10 bg-[#142C4D]/90
                p-3 shadow-xl backdrop-blur-md animate-vyraq-float float-delay-1">

                <ImageIcon className="text-cyan-400" size={24} />

                <div>
                    <p className="text-sm font-semibold text-white">Image Analysis</p>
                    <p className="text-xs text-slate-400">Media inspection</p>
                </div>
            </div>

            {/* Video analysis card */}
            <div className="absolute bottom-12 left-8 z-20 flex items-center gap-3
                rounded-xl border border-white/10 bg-[#142C4D]/90
                p-3 shadow-xl backdrop-blur-md animate-vyraq-float float-delay-2">

                <Video className="text-blue-400" size={24} />

                <div>
                    <p className="text-sm font-semibold text-white">Video Analysis</p>
                    <p className="text-xs text-slate-400">Deepfake detection</p>
                </div>
            </div>

            {/* Scan indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2
                rounded-full border border-sky-400/20 bg-sky-400/10
                px-3 py-2">

                <ScanSearch size={16} className="text-sky-400" />
                <span className="text-xs text-sky-300">AI Investigation</span>
            </div>

        </div>
    )
}

export default HeroVisual;
