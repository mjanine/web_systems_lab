import './App.css'
import backgroundImage from './bg1.jpg'
import ProjectCard from './components/projectCard'
import phytosentryImage from './Phytosentry.png'
import sambastImage from './sambast.png'
import employeeSystemImage from './Employeerecords.jpg'

const markSquares = [
	'portfolio-mark__square--top-left',
	'portfolio-mark__square--top-right',
	'portfolio-mark__square--bottom-left',
	'portfolio-mark__square--bottom-right',
]

const projects = [
	{
		image: phytosentryImage,
		year: '2026',
		title: 'PythoSentry',
		description: 'Plant Disease Detection',
	},
	{
		image: sambastImage,
		year: '2025',
		title: 'Sambast',
		description: 'Ordering System',
	},
	{
		image: employeeSystemImage,
		year: '2025',
		title: 'Employee System',
		description: 'Perpetual Employee System',
	},
]

export default function App() {
	return (
		<main
			className="portfolio-page"
			style={{
				backgroundImage: `linear-gradient(rgba(255, 241, 228, 0.52), rgba(255, 241, 228, 0.28)), url(${backgroundImage})`,
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

			<section className="project-gallery" aria-labelledby="work-in-progress-title">
				<div className="project-gallery__inner">
					<h2 id="work-in-progress-title" className="project-gallery__title">
						Work in progress
					</h2>

					<div className="project-gallery__grid">
						{projects.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
