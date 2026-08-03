import { useState } from 'react'
import slideButtonIcon from '../assets/slidebutton2.png'
import certificate01 from '../assets/01.png'
import certificate02 from '../assets/02.png'
import certificate03 from '../assets/03.png'
import certificate04 from '../assets/04.png'
import certificate05 from '../assets/05.png'
import certificate06 from '../assets/06.png'
import certificate07 from '../assets/07.png'

const certifications = [
	{
		number: '01',
		title: 'Linux Essentials',
		issuer: 'ISSUED BY CISCO',
		image: certificate01,
		imagePosition: 'center left',
	},
	{
		number: '02',
		title: 'Operating Systems Basics',
		issuer: 'ISSUED BY CISCO',
		image: certificate02,
		imagePosition: 'center top',
	},
	{
		number: '03',
		title: 'Introduction to Cybersecurity',
		issuer: '',
		image: certificate03,
		imagePosition: 'center right',
	},
	{
		number: '04',
		title: 'IC3 GS6 Level 1',
		issuer: '',
		image: certificate05,
		imagePosition: 'center bottom',
	},
	{
		number: '05',
		title: 'IT Specialist - Networking',
		issuer: '',
		image: certificate06,
		imagePosition: 'left center',
	},
]

const languageTiles = [
	'HTML',
	'JAVA',
	'SQL',
	'RUBY',
	'PYTHON',
	'CSS',
	'SWIFT',
	'KOTLIN',
]

const analyticsTiles = [
	'POWER BI',
	'RAPIDMINER',
	'EXCEL',
	'JUPYTER NOTEBOOK',
]

export default function CornerWheel() {
	const [activePage, setActivePage] = useState(0)

	const handleSlide = () => {
		setActivePage((currentPage) => (currentPage === 0 ? 1 : 0))
	}

	return (
		<section className="cornerwheel-slider" aria-label="Certifications and languages slider">
			<div className="cornerwheel-slider__viewport">
				<div
					className="cornerwheel-slider__track"
					style={{ transform: `translateX(${activePage === 0 ? '0%' : '-50%'})` }}
				>
					<div className="cornerwheel-slider__page cornerwheel-slider__page--certifications">
						<div className="cornerwheel-slider__header">
							<h2 className="cornerwheel-slider__title">CERTIFICATIONS</h2>
							<button
								type="button"
								className="cornerwheel-slider__nav"
								onClick={handleSlide}
								aria-label="Go to languages and tools view"
							>
								<img
									className={`cornerwheel-slider__nav-icon ${activePage === 0 ? 'cornerwheel-slider__nav-icon--left' : 'cornerwheel-slider__nav-icon--right'}`}
									src={slideButtonIcon}
									alt=""
								/>
							</button>
						</div>

						<div className="cornerwheel-slider__cert-grid">
							{certifications.map((item, index) => (
								<article
									key={item.number}
									className={`cornerwheel-slider__cert-card cornerwheel-slider__cert-card--${index + 1}`}
								>
									<span className="cornerwheel-slider__cert-number">{item.number}</span>
									<div className="cornerwheel-slider__cert-image-wrap">
										<img
											className="cornerwheel-slider__cert-image"
											src={item.image}
											alt={`${item.title} preview`}
											style={{ objectPosition: item.imagePosition }}
										/>
									</div>
									<h3 className="cornerwheel-slider__cert-title">{item.title}</h3>
									{item.issuer ? <p className="cornerwheel-slider__cert-issuer">{item.issuer}</p> : null}
								</article>
							))}
						</div>
					</div>

					<div className="cornerwheel-slider__page cornerwheel-slider__page--tools">
						<div className="cornerwheel-slider__header">
							<h2 className="cornerwheel-slider__title">language</h2>
							<button
								type="button"
								className="cornerwheel-slider__nav"
								onClick={handleSlide}
								aria-label="Go to certifications view"
							>
								<img
									className={`cornerwheel-slider__nav-icon ${activePage === 0 ? 'cornerwheel-slider__nav-icon--left' : 'cornerwheel-slider__nav-icon--right'}`}
									src={slideButtonIcon}
									alt=""
								/>
							</button>
						</div>

						<div className="cornerwheel-slider__tools-group">
	<h3 className="cornerwheel-slider__section-label">language</h3>

	<div className="cornerwheel-slider__tiles cornerwheel-slider__tiles--language">
		{languageTiles.map((tile) => (
			<div
				key={tile}
				className="cornerwheel-slider__tile cornerwheel-slider__tile--language"
			>
				{tile}
			</div>
		))}
	</div>
</div>

<div className="cornerwheel-slider__tools-group">
	<h3 className="cornerwheel-slider__section-label">
		data &amp; analytics<br />
		tools
	</h3>

	<div className="cornerwheel-slider__tiles cornerwheel-slider__tiles--tools">
		{analyticsTiles.map((tile) => (
			<div
				key={tile}
				className="cornerwheel-slider__tile cornerwheel-slider__tile--tools"
			>
				{tile}
			</div>
		))}
	</div>
</div>
					</div>
				</div>
			</div>
		</section>
	)
}
