import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import Section from "../Section/Section";

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState("");

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
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
		<Section title="Examples" id="examples">
			<menu>
				{Object.values(EXAMPLES).map((example) => (
					<TabButton isSelected={selectedTopic === example.title.toLowerCase()} onClick={() => handleSelect(example.title.toLowerCase())}>
						{example.title}
					</TabButton>
				))}
			</menu>
			{tabContent}
		</Section>
	);
}
