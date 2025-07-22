import "./CoreConcept.css";

export default function CoreConcept({ concept }) {
	const { title, description, image } = concept;
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
