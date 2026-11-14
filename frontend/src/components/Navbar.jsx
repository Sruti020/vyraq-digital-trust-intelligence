
import { useState } from 'react'
import { ShieldCheck, Menu, X, ArrowRight } from 'lucide-react'

function Navbar({ onGetStarted }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Capabilities', href: '#capabilities' },,
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1424]/95 backdrop-blur-lg">

            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex items-center justify-between">

                    {/* VYRAQ Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <ShieldCheck
                            size={38}
                            className="text-sky-400"
                            strokeWidth={2}
                        />

                        <span className="text-2xl font-bold tracking-wider text-white">
                            VYRAQ
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-slate-300 hover:text-sky-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-5">
                        <button className="text-slate-300 hover:text-white transition-colors">
                            Login
                        </button>

                        <button onClick={onGetStarted}
                            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-500 transition-colors"
                        >
                            Get Started
                            <ArrowRight size={17} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={27} /> : <Menu size={27} />}
                    </button>

                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="lg:hidden mt-5 border-t border-white/10 pt-4 pb-2">
                        <div className="flex flex-col gap-5">

                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-slate-300 hover:text-sky-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="flex items-center gap-5 border-t border-white/10 pt-4">
                                <button className="text-slate-300">
                                    Login
                                </button>

                                <button
                                    onClick={() => {
                                        setMenuOpen(false);
                                        onGetStarted();
                                    }}
                                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
                                >
                                    Get Started
                                    <ArrowRight size={16} />
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar;
