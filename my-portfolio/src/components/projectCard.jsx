import './projectCard.css'

export default function ProjectCard({ image, year, title, description }) {
	return (
		<article className="project-card">
			<div className="project-card__image-wrap">
				<img className="project-card__image" src={image} alt={title} />
			</div>

			<div className="project-card__body">
				<p className="project-card__year">{year}</p>
				<h3 className="project-card__title">{title}</h3>
				<p className="project-card__description">{description}</p>
			</div>
		</article>
	)
}
