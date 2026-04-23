import { useState, useEffect } from 'react'
import {
  Scale,
  Heart,
  Home,
  Shield,
  Phone,
  MapPin,
  Mail,
  Star,
  Menu,
  X,
  MessageCircle,
  Clock,
  Award,
  ChevronRight,
  Send,
  CheckCircle2,
  User,
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle')

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sent')
    setTimeout(() => setFormStatus('idle'), 4000)
  }

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Expertises', href: '#expertises' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Localisation', href: '#localisation' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-cream font-body overflow-x-hidden">
      {/* ---------- Navbar ---------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#accueil" className="flex items-center gap-2 group">
              <Scale className="w-7 h-7 text-ochre transition-transform group-hover:rotate-12" />
              <span className="font-heading text-xl md:text-2xl font-semibold text-cream tracking-wide">
                Maître R. Radouane
              </span>
            </a>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/90 hover:text-ochre text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0522472342"
                className="inline-flex items-center gap-2 bg-ochre hover:bg-ochre-light text-forest px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                  <Phone className="w-4 h-4" />
                  05 22 47 23 42
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-cream p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-forest border-t border-forest-light">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-cream/90 hover:text-ochre py-2 text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0522472342"
                className="inline-flex items-center gap-2 bg-ochre text-forest px-4 py-2 rounded-full text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                05 22 47 23 42
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ---------- Hero ---------- */}
      <header
        id="accueil"
        className="relative pt-28 pb-20 md:pt-40 md:pb-32 text-cream overflow-hidden hero-warm"
      >

        {/* Subtle arabesque overlay */}
        <div className="absolute inset-0 arabesque-bg opacity-30 pointer-events-none" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-ochre/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-cream/5 blur-2xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-cream/10 border border-cream/20 rounded-full px-4 py-1.5 mb-6">
                <Star className="w-4 h-4 text-ochre fill-ochre" />
                <span className="text-sm font-medium text-cream/90">Note : 4.9/5 — Cabinet de confiance</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Maître <span className="text-ochre">Rami Radouane</span>
              </h1>
              <p className="text-lg md:text-xl text-cream/80 font-light leading-relaxed mb-6 max-w-xl">
                Avocat au Barreau de Casablanca, Membre de l’Union Internationale des Avocats (UIA).
                Votre défense avec rigueur, éthique et engagement.
              </p>

              <blockquote className="border-l-4 border-ochre pl-5 italic text-cream/70 text-base md:text-lg mb-8 max-w-lg">
                « La justice n’est pas seulement une vertu, c’est un devoir que l’on doit à chaque homme. »
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-ochre hover:bg-ochre-light text-forest px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Prendre rendez-vous
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:0522472342"
                  className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream/60 text-cream px-8 py-3.5 rounded-full font-medium text-base transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  05 22 47 23 42
                </a>
              </div>
            </div>

            {/* Stylized scales of justice illustration */}
            <div className="flex-shrink-0 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <linearGradient id="gradPillar" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C9933E" />
                      <stop offset="50%" stopColor="#DDB16A" />
                      <stop offset="100%" stopColor="#C9933E" />
                    </linearGradient>
                    <linearGradient id="gradPan" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C9933E" />
                      <stop offset="100%" stopColor="#8B6B2F" />
                    </linearGradient>
                  </defs>
                  {/* Base */}
                  <rect x="60" y="175" width="80" height="10" rx="3" fill="url(#gradPillar)" />
                  <rect x="85" y="120" width="30" height="60" rx="4" fill="url(#gradPillar)" />
                  {/* Crossbeam */}
                  <rect x="20" y="115" width="160" height="8" rx="4" fill="url(#gradPillar)" />
                  {/* Center ornament */}
                  <circle cx="100" cy="119" r="10" fill="#C9933E" />
                  <circle cx="100" cy="119" r="5" fill="#FFF8E7" />
                  {/* Left chain */}
                  <line x1="40" y1="123" x2="40" y2="155" stroke="#DDB16A" strokeWidth="2" />
                  <circle cx="40" cy="145" r="2" fill="#DDB16A" />
                  <circle cx="40" cy="155" r="2" fill="#DDB16A" />
                  {/* Right chain */}
                  <line x1="160" y1="123" x2="160" y2="155" stroke="#DDB16A" strokeWidth="2" />
                  <circle cx="160" cy="145" r="2" fill="#DDB16A" />
                  <circle cx="160" cy="155" r="2" fill="#DDB16A" />
                  {/* Left pan */}
                  <path d="M 15 160 Q 40 185 65 160 Z" fill="url(#gradPan)" />
                  {/* Right pan */}
                  <path d="M 135 160 Q 160 185 185 160 Z" fill="url(#gradPan)" />
                  {/* Decorative rays */}
                  <g opacity="0.4">
                    <line x1="100" y1="80" x2="100" y2="50" stroke="#DDB16A" strokeWidth="2" strokeLinecap="round" />
                    <line x1="100" y1="80" x2="70" y2="65" stroke="#DDB16A" strokeWidth="2" strokeLinecap="round" />
                    <line x1="100" y1="80" x2="130" y2="65" stroke="#DDB16A" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <circle cx="100" cy="80" r="18" fill="#C9933E" opacity="0.15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Expertises ---------- */}
      <section id="expertises" className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-ochre font-semibold text-sm tracking-widest uppercase">Domaines de compétence</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mt-3">
              Nos Expertises
            </h2>
            <div className="w-16 h-1 bg-ochre mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-cream-warm hover:bg-cream-dark rounded-2xl border border-ochre/10 hover:border-ochre/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/images/home.jpg"
                  alt="Droit de la famille"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-forest/90 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-cream" />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-heading text-xl font-semibold text-forest mb-3">Droit de la famille</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Divorce, garde d’enfants, pension alimentaire, successions et régimes matrimoniaux.
                  Une approche humaine et attentive pour préserver vos intérêts et ceux de vos proches.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-cream-warm hover:bg-cream-dark rounded-2xl border border-ochre/10 hover:border-ochre/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/images/keys.jpg"
                  alt="Droit immobilier"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-forest/90 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-cream" />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-heading text-xl font-semibold text-forest mb-3">Droit immobilier</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Transactions immobilières, baux commerciaux, litiges de copropriété, construction et urbanisme.
                  Sécurisez vos investissements patrimoniaux avec un conseil de qualité.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-cream-warm hover:bg-cream-dark rounded-2xl p-8 border border-ochre/10 hover:border-ochre/30 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest/20 transition-colors">
                <Shield className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-forest mb-3">Droit pénal</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Défense pénale, assistance en garde à vue, procédures devant les tribunaux de première instance et la Cour d’appel.
                Une défense déterminée et stratégique à chaque étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Témoignages ---------- */}
      <section id="temoignages" className="py-20 md:py-28 bg-cream-warm arabesque-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-ochre font-semibold text-sm tracking-widest uppercase">Avis clients</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mt-3">
              Témoignages
            </h2>
            <div className="w-16 h-1 bg-ochre mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-ochre/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i === 4 ? 'text-ochre/60 fill-ochre/60' : 'text-ochre fill-ochre'}`} />
                ))}
                <span className="ml-2 text-sm font-semibold text-forest">4.9/5</span>
              </div>
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                « Maître Radouane a su gérer mon dossier de divorce avec une grande humanité et professionnalisme. Ses conseils étaient clairs et il a toujours été disponible pour répondre à mes questions. »
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center font-heading font-semibold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-forest text-sm">Sofia B.</p>
                  <p className="text-xs text-gray-500">Casablanca — Droit de la famille</p>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-ochre/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i === 4 ? 'text-ochre/60 fill-ochre/60' : 'text-ochre fill-ochre'}`} />
                ))}
                <span className="ml-2 text-sm font-semibold text-forest">4.9/5</span>
              </div>
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                « Excellent accompagnement dans un litige immobilier complexe. Maître Radouane maîtrise parfaitement son sujet et sait défendre les intérêts de ses clients avec fermeté et respect. »
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center font-heading font-semibold">
                  Y
                </div>
                <div>
                  <p className="font-semibold text-forest text-sm">Youssef A.</p>
                  <p className="text-xs text-gray-500">Casablanca — Droit immobilier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Localisation ---------- */}
      <section id="localisation" className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-ochre font-semibold text-sm tracking-widest uppercase">Retrouvez-nous</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mt-3">
              Localisation
            </h2>
            <div className="w-16 h-1 bg-ochre mx-auto mt-4 rounded-full" />
          </div>

          <div className="bg-cream-warm rounded-2xl overflow-hidden shadow-md border border-ochre/10">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-2">
                <iframe
                  title="Localisation du cabinet"
                  src="https://www.google.com/maps?q=88+rue+Habacha,+Casablanca,+Maroc&hl=fr&z=16&ie=UTF8&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '360px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-cream-warm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Adresse</p>
                    <p className="text-gray-600 text-sm mt-1">
                      88, rue Habacha (ex Briey)<br />
                      1er étage, Casablanca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Horaires</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Lun — Ven : 09h00 à 17h00<br />
                      Sur rendez-vous le samedi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Téléphone</p>
                    <p className="text-gray-600 text-sm mt-1">05 22 47 23 42</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="py-20 md:py-28 bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-ochre font-semibold text-sm tracking-widest uppercase">Discutons de votre dossier</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mt-3">
              Contactez-nous
            </h2>
            <div className="w-16 h-1 bg-ochre mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-ochre" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-1">Maître Rami Radouane</h3>
                  <p className="text-cream/70 text-sm">Avocat au Barreau de Casablanca<br />Membre de l’Union Internationale des Avocats (UIA)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-ochre" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Adresse du cabinet</h3>
                  <p className="text-cream/70 text-sm">88, rue Habacha (ex Briey)<br />1er étage, Casablanca</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-ochre" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Téléphone</h3>
                  <p className="text-cream/70 text-sm">05 22 47 23 42</p>
                </div>
              </div>

              <a
                href="https://wa.me/212522472342"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white px-6 py-3.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>
            </div>

            {/* Contact form */}
            <div className="bg-cream/10 backdrop-blur-sm border border-cream/10 rounded-2xl p-8">
              {formStatus === 'sent' ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-ochre mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-cream mb-2">Message envoyé !</h3>
                  <p className="text-cream/70">Nous vous recontacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-cream/80 mb-1.5">Nom complet</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest" />
                        <input
                          id="nom"
                          type="text"
                          required
                          placeholder="Votre nom"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream text-forest placeholder:text-forest/40 border-0 focus:ring-2 focus:ring-ochre outline-none text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-1.5">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest" />
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="votre@email.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream text-forest placeholder:text-forest/40 border-0 focus:ring-2 focus:ring-ochre outline-none text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-cream/80 mb-1.5">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest" />
                      <input
                        id="telephone"
                        type="tel"
                        placeholder="06 XX XX XX XX"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream text-forest placeholder:text-forest/40 border-0 focus:ring-2 focus:ring-ochre outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-cream/80 mb-1.5">Sujet</label>
                    <select
                      id="sujet"
                      className="w-full px-4 py-3 rounded-xl bg-cream text-forest border-0 focus:ring-2 focus:ring-ochre outline-none text-sm appearance-none"
                    >
                      <option>Droit de la famille</option>
                      <option>Droit immobilier</option>
                      <option>Droit pénal</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Décrivez brièvement votre situation..."
                      className="w-full px-4 py-3 rounded-xl bg-cream text-forest placeholder:text-forest/40 border-0 focus:ring-2 focus:ring-ochre outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full bg-ochre hover:bg-ochre-light text-forest font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </button>

                  <p className="text-xs text-cream/50 text-center">
                    Les données transmises sont confidentielles et traitées dans le strict respect du secret professionnel.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-forest-dark text-cream-warm py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-ochre" />
              <span className="font-heading text-lg font-semibold">Maître Rami Radouane</span>
            </div>
            <p className="text-sm text-cream-warm/60 text-center">
              © {new Date().getFullYear()} Cabinet Rami Radouane. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#accueil" className="hover:text-ochre transition-colors">Accueil</a>
              <a href="#expertises" className="hover:text-ochre transition-colors">Expertises</a>
              <a href="#contact" className="hover:text-ochre transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ---------- WhatsApp Floating Button ---------- */}
      <a
        href="https://wa.me/212522472342"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}

export default App
