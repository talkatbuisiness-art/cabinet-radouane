import { useState, useEffect, useRef } from 'react'
import { Scale, Phone, Menu, ArrowRight } from 'lucide-react'

// Hook pour les animations au scroll
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

// Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#expertises', label: 'Expertises' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '#localisation', label: 'Localisation' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">Cabinet Radouane</a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta">Consultation</a>
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-ornament"></div>
        <a href="#contact" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>
          Prendre Rendez-vous
        </a>
      </div>
    </>
  )
}

// Hero
function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-ornament"></div>
      <div className="hero-content">
        <p className="hero-pretitle">Cabinet d'Avocats — Paris</p>
        <h1 className="hero-title">
          L'Excellence <em>Juridique</em> <br />
          Depuis 1892
        </h1>
        <p className="hero-subtitle">
          Un héritage de rigueur et de prestige au service de vos intérêts.
          Notre cabinet incarne l'art français de la défense juridique.
        </p>
        <div className="hero-cta-group">
          <a href="#contact" className="btn-primary">Consultation Privée</a>
          <a href="#expertises" className="btn-secondary">Nos Expertises</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Découvrir</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  )
}

// Stats
function Stats() {
  const stats = [
    { number: '130+', label: "Années d'Excellence" },
    { number: '5000+', label: 'Dossiers Traités' },
    { number: '98%', label: 'Taux de Réussite' },
    { number: '12', label: 'Avocats Associés' }
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item reveal">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Expertises
function Expertises() {
  const expertises = [
    {
      icon: '⚖️',
      title: 'Droit des Affaires',
      description: 'Conseil stratégique et contentieux pour entreprises, fusions-acquisitions, et gouvernance corporate.',
      link: 'En savoir plus'
    },
    {
      icon: '🏛️',
      title: 'Droit Immobilier',
      description: 'Transactions complexes, baux commerciaux, copropriétés et litiges fonciers de prestige.',
      link: 'En savoir plus'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Droit de la Famille',
      description: 'Successions, donations, contrats de mariage et protection patrimoniale internationale.',
      link: 'En savoir plus'
    }
  ]

  return (
    <section className="expertises section-padding" id="expertises">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-pretitle">Nos Domaines d'Intervention</p>
          <h2 className="section-title">Une Expertise Multiséculaire</h2>
          <div className="section-divider"></div>
        </div>
        <div className="expertises-grid">
          {expertises.map((expertise, index) => (
            <div key={index} className="expertise-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="expertise-icon">{expertise.icon}</div>
              <h3 className="expertise-title">{expertise.title}</h3>
              <p className="expertise-description">{expertise.description}</p>
              <a href="#" className="expertise-link">{expertise.link} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Témoignages
function Temoignages() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const temoignages = [
    {
      quote: "Une maîtrise exceptionnelle des dossiers les plus complexes. Le Cabinet Radouane a su défendre nos intérêts avec une rigueur et une élégance rares.",
      author: "Henri de Montalembert",
      role: "Président, Groupe Montalembert"
    },
    {
      quote: "L'excellence juridique alliée à une compréhension fine des enjeux business. Un partenaire de confiance pour nos opérations internationales.",
      author: "Isabelle Marchand",
      role: "Directrice Générale, LMH Holdings"
    },
    {
      quote: "Une équipe d'une grande classe, capable de naviguer avec aisance entre tradition juridique et modernité des pratiques.",
      author: "Comte Alexandre de Talleyrand",
      role: "Famille de Talleyrand"
    }
  ]

  return (
    <section className="temoignages section-padding" id="temoignages">
      <div className="container">
        <div className="temoignages-container">
          <div className="temoignages-quote reveal">
            {temoignages[currentSlide].quote}
          </div>
          <div className="temoignages-author reveal">
            <span className="temoignages-name">{temoignages[currentSlide].author}</span>
            <span className="temoignages-role">{temoignages[currentSlide].role}</span>
          </div>
          <div className="temoignages-nav">
            {temoignages.map((_, index) => (
              <button
                key={index}
                className={`temoignages-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Localisation
function Localisation() {
  return (
    <section className="localisation" id="localisation">
      <div className="localisation-grid">
        <div className="localisation-content">
          <h2 className="localisation-title">Notre Cabinet</h2>
          <div className="localisation-info">
            <div className="localisation-item">
              <span className="localisation-icon">📍</span>
              <span>12 Place Vendôme, 75001 Paris<br />France</span>
            </div>
            <div className="localisation-item">
              <span className="localisation-icon">📞</span>
              <span>+33 (0)1 42 68 57 43</span>
            </div>
            <div className="localisation-item">
              <span className="localisation-icon">✉️</span>
              <span>contact@cabinet-radouane.fr</span>
            </div>
            <div className="localisation-item">
              <span className="localisation-icon">🕐</span>
              <span>Lundi — Vendredi: 9h00 — 19h00</span>
            </div>
          </div>
        </div>
        <div className="localisation-map"></div>
      </div>
    </section>
  )
}

// Contact
function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent'>('idle')
  const { ref, isInView } = useInView()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormStatus('sent')
    setTimeout(() => setFormStatus('idle'), 4000)
  }

  return (
    <section className="contact section-padding" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className={`contact-info reveal ${isInView ? 'active' : ''}`}>
            <h3>Prendre Rendez-vous</h3>
            <p className="contact-text">
              Notre cabinet vous accueille pour une consultation privée dans nos bureaux
              historiques de la Place Vendôme. Chaque demande est traitée avec la plus
              stricte confidentialité.
            </p>
            <div className="localisation-item">
              <span className="localisation-icon">📞</span>
              <span>+33 (0)1 42 68 57 43</span>
            </div>
            <div className="localisation-item">
              <span className="localisation-icon">✉️</span>
              <span>contact@cabinet-radouane.fr</span>
            </div>
          </div>
          <form className={`contact-form reveal reveal-delay-1 ${isInView ? 'active' : ''}`} onSubmit={handleSubmit}>
            {formStatus === 'sent' ? (
              <div className="form-success">
                <h4>Message envoyé !</h4>
                <p>Nous vous recontacterons dans les plus brefs délais.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input type="text" className="form-input" placeholder="Votre nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input type="text" className="form-input" placeholder="Votre prénom" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="votre@email.fr" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input type="tel" className="form-input" placeholder="+33 6 00 00 00 00" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Décrivez brièvement votre demande..." required></textarea>
                </div>
                <button type="submit" className="form-submit" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer la Demande'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">Cabinet Radouane</span>
            <p>
              Depuis 1892, notre cabinet incarne l'excellence du barreau de Paris.
              Un héritage de rigueur, de prestige et de dévouement à la défense de vos intérêts.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#expertises">Expertises</a></li>
              <li><a href="#temoignages">Témoignages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Expertises</h4>
            <ul className="footer-links">
              <li><a href="#">Droit des Affaires</a></li>
              <li><a href="#">Droit Immobilier</a></li>
              <li><a href="#">Droit de la Famille</a></li>
              <li><a href="#">Arbitrage International</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Mentions</h4>
            <ul className="footer-links">
              <li><a href="#">Mentions Légales</a></li>
              <li><a href="#">Politique de Confidentialité</a></li>
              <li><a href="#">CGU</a></li>
              <li><a href="#">Plan du Site</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Cabinet Radouane — Tous droits réservés</p>
          <ul className="footer-legal">
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Mentions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

// App principale
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Expertises />
      <Temoignages />
      <Localisation />
      <Contact />
      <Footer />
    </>
  )
}
