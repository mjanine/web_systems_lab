import './App.css'
import backgroundImage from './bg1.jpg'
import pythosentryImage from './Pythosentry.png'

const markSquares = [
	'portfolio-mark__square--top-left',
	'portfolio-mark__square--top-right',
	'portfolio-mark__square--bottom-left',
	'portfolio-mark__square--bottom-right',
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
					<span className="portfolio-hero__label">ABOUT ME</span>
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
		</main>
	)
}
