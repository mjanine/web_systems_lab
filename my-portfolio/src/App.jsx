import { useRef, useState } from 'react'
import './App.css'
import backgroundVideo from './assets/bg.mp4'
import instagramIcon from './assets/instagram.png'
import messengerIcon from './assets/messenger.png'
import profileImage from './assets/me.png'
import pythosentryImage from './assets/Pythosentry.png'
import moreButton from './assets/morebutton.png'
import sambastImage from './assets/sambast.png'
import ersImage from './assets/ers.png'
import pythoImage from './assets/pytho.png'
import CornerWheel from './components/cornerwheel'
import ProjectCard from './components/projectcard'

const markSquares = [
    'portfolio-mark__square--top-left',
    'portfolio-mark__square--top-right',
    'portfolio-mark__square--bottom-left',
    'portfolio-mark__square--bottom-right',
]

const contactLinks = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/yela.sl/',
        icon: instagramIcon,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/yella011/',
        icon: messengerIcon,
    },
]

export default function App() {
    	const projectRef = useRef(null)
	const certificationRef = useRef(null)
	const aboutRef = useRef(null)

	const [showProjects, setShowProjects] = useState(false)

	const scrollToSection = (ref) => {
		ref.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
    return (
        <main className="portfolio-page">
            <video className="portfolio-page__background-video" autoPlay muted loop playsInline aria-hidden="true">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="portfolio-page__background-overlay" aria-hidden="true" />

            <section className="portfolio-hero" aria-label="Portfolio cover">

	<nav className="portfolio-nav" aria-label="Main navigation">
		<button type="button" onClick={() => scrollToSection(projectRef)}>
			PROJECTS
		</button>

		<button type="button" onClick={() => scrollToSection(certificationRef)}>
			CERTIFICATION AND LANGUAGES
		</button>

		<button type="button" onClick={() => scrollToSection(aboutRef)}>
			ABOUT ME
		</button>
	</nav>

	<div className="portfolio-hero__topbar">
                    <span className="portfolio-hero__line" />
                    <span className="portfolio-hero__label"></span>
                </div>

                <div className="portfolio-mark" aria-hidden="true">
                    {markSquares.map((className) => (
                        <span key={className} className={className} />
                    ))}
                </div>

                <div className="portfolio-title-wrap">
                    <h1 className="portfolio-title">PORTFOLIO</h1>
                    <div className="portfolio-rule" />
                </div>
            </section>

            <section
	ref={projectRef}
	className="project-detail"
	aria-label="Project detail"
>
	<div className="project-detail__content">
		<div className="project-detail__text">
			<h2 className="project-detail__title">PYTHOSENTRY</h2>

			<p className="project-detail__description">
				PhytoSentry is a mobile application designed for farmers and agricultural workers
				to instantly diagnose plant diseases, especially coffee leaf conditions, using
				computer vision and TensorFlow Lite machine learning models. It provides real-time
				camera analysis, a disease catalog, and a scan history tracker to help monitor crop
				health and improve yields.
			</p>

			<button
				type="button"
				className="project-detail__more-button"
				onClick={() => setShowProjects((current) => !current)}
				aria-expanded={showProjects}
			>
				<img
					src={moreButton}
					alt={showProjects ? 'Hide projects' : 'Show more projects'}
				/>
			</button>
		</div>

		<div className="project-detail__mockup">
			<div className="project-detail__mockup-frame">
				<img
					className="project-detail__mockup-image"
					src={pythosentryImage}
					alt="PythoSentry mobile app preview"
				/>
			</div>
		</div>
	</div>
                    {showProjects && (
    <div className="project-detail__projects">
        <ProjectCard
            image={pythoImage}
            year="2025"
            title="PYTHOSENTRY"
            languages={[
                { name: "TypeScript", percent: "92.9%" },
                { name: "Kotlin", percent: "2.3%" },
                { name: "Ruby", percent: "2%" },
                { name: "Swift", percent: "1.7%" },
                { name: "JavaScript", percent: "1.1%" },
            ]}
        />

        <ProjectCard
            image={ersImage}
            year="2025"
            title="EMPLOYEE SYSTEM"
            languages={[
                { name: "CSS", percent: "33.9%" },
                { name: "HTML", percent: "31.8%" },
                { name: "JavaScript", percent: "18.9%" },
                { name: "Python", percent: "15.4%" },
            ]}
        />

        <ProjectCard
            image={sambastImage}
            year="2025"
            title="SAMBAST"
            languages={[
                { name: "Python", percent: "35.2%" },
                { name: "JavaScript", percent: "29.4%" },
                { name: "CSS", percent: "19.3%" },
                { name: "HTML", percent: "16.1%" },
            ]}
        />
    </div>
)}
	
</section>
            <div ref={certificationRef}>
	        <CornerWheel />
           </div>

            {/* Profile Bio & Contact Section */}
            <footer
            ref={aboutRef}
            className="contact-section"
            aria-label="About me contact details"
        >
                <div className="accent-line" />
                
                <div className="contact-section__container">
                    
                    {/* Upper Profile / Bio Header */}
                    <div className="profile-hero">
                        <div className="profile-hero__image-wrap">
                            <img src={profileImage} alt="Mariella Janine A. Sola" className="profile-hero__image" />
                        </div>
                        <div className="profile-hero__text">
                            <div className="profile-hero__meta">
                                <span>MARIELLA JANINE A. SOLA</span>
                                <span>COMPUTER SCIENCE STUDENT</span>
                            </div>
                            <h2 className="profile-hero__title">ASPIRING DATA ANALYST</h2>
                            <p className="profile-hero__bio">
                                turning raw data into meaningful insights and build data-driven tools that guide smarter decision-making. 
                                Currently growing in Data Analytics, Visualization, and with hands-on experience across multiple analytics platforms.
                            </p>
                        </div>
                    </div>

                    {/* Lower Contact Details Card */}
                    <div className="contact-card">
                        <div className="contact-card__header">
                            <h2 className="contact-card__title">CONTACT DETAILS</h2>
                            
                            <div className="contact-card__socials">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.label}
                                        className="contact-card__social-link"
                                    >
                                        <img src={link.icon} alt={link.label} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="contact-card__grid">
                            <a href="https://www.linkedin.com/in/janine-sola/" target="_blank" rel="noreferrer" className="contact-item">
                                <svg className="contact-item__icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                                <span>Janine Sola | LinkedIn</span>
                            </a>

                            <a href="mailto:janinemariela03@gmail.com" className="contact-item">
                                <svg className="contact-item__icon" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                <span>janinemariela03@gmail.com | Gmail</span>
                            </a>

                            <a href="tel:09934621876" className="contact-item">
                                <svg className="contact-item__icon" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                                <span>0993 462 1876</span>
                            </a>

                            <a href="https://github.com/mjanine" target="_blank" rel="noreferrer" className="contact-item">
                                <svg className="contact-item__icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                                <span>mjanine | GitHub</span>
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </main>
    )
}