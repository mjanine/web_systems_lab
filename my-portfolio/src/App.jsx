import './App.css'
import backgroundImage from './bg1.jpg'
import instagramIcon from './instagram.png'
import messengerIcon from './messenger.png'
import slideButtonIcon from './slidebutton.png'
import pythosentryImage from './Pythosentry.png'

const markSquares = [
	'portfolio-mark__square--top-left',
	'portfolio-mark__square--top-right',
	'portfolio-mark__square--bottom-left',
	'portfolio-mark__square--bottom-right',
]

const certifications = [
	'Linux Essentials Issued by Cisco',
	'Operating Systems Basics Cisco',
	'Introduction to Cybersecurity',
	'IT Specialist - Networking',
	'Information Technology Specialist in Networking',
	'IC3 Digital Literacy Certification GS6 Level 1',
	'IC3 GS6 Level 1',
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
	return (
		<main
			className="portfolio-page"
			style={{
				backgroundImage: `linear-gradient(rgba(255, 241, 228, 0.05), rgba(255, 241, 228, 0.28)), url(${backgroundImage})`,
			}}
		>
			<section className="portfolio-hero" aria-label="Portfolio cover">
				<div className="portfolio-hero__topbar" aria-hidden="true">
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

			<section className="project-detail" aria-label="Project detail">
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
			</section>

			<section className="certifications" aria-label="Certifications">
				<div className="certifications__inner">
					<h2 className="certifications__title">CERTIFICATIONS</h2>

					<div className="certifications__grid">
						{certifications.map((certification) => (
							<div key={certification} className="certifications__pill">
								<span>{certification}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<footer className="contact-section" aria-label="About me contact details">
				<div className="contact-section__frame">
					<div className="contact-section__background">
						<div className="contact-section__icons">
							{contactLinks.map((link) => (
								<a
									key={link.label}
									className="contact-section__icon-link"
									href={link.href}
									target="_blank"
									rel="noreferrer"
									aria-label={link.label}
								>
									<img className="contact-section__icon" src={link.icon} alt="" />
								</a>
							))}

							<button
								type="button"
								className="contact-section__icon-link contact-section__icon-link--button"
								aria-label="Back to top"
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							>
								<img className="contact-section__icon" src={slideButtonIcon} alt="" />
							</button>
						</div>

						<div className="contact-section__card">
							<h2 className="contact-section__title">CONTACT DETAILS</h2>
							<div className="contact-section__links">
								<a href="https://www.linkedin.com/in/janine-sola/" target="_blank" rel="noreferrer">
									Janine Sola | Linked
								</a>
								<a href="mailto:janinemariela03@gmail.com">janinemariela03@gmail.com | Gmail</a>
								<a href="https://github.com/mjanine" target="_blank" rel="noreferrer">
									mjanine | Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</main>
	)
}
