import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
	const [selectedTopic, setSelectedTopic] = useState("");

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	}

	let tabContent = <p>Please select a topic.</p>;

	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((coreConcept, index) => (
							<CoreConcept key={index} concept={coreConcept} />
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{Object.values(EXAMPLES).map((example) => (
							<TabButton isSelected={selectedTopic === example.title.toLowerCase()} onSelect={() => handleSelect(example.title.toLowerCase())}>
								{example.title}
							</TabButton>
						))}
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
