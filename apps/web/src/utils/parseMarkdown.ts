import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({ html: true, linkify: true });

type MarkdownInput = string | Record<string, unknown> | null | undefined;

export default function parseMarkdown(rawMarkdown: MarkdownInput): string {
	let markdownText = '';

	if (typeof rawMarkdown === 'string') {
		markdownText = rawMarkdown;
	} else if (rawMarkdown && typeof rawMarkdown === 'object') {
		const knownFields = ['default', 'html', 'content', 'raw', 'text'];
		let foundKnownField = false;

		for (const key of knownFields) {
			const value = rawMarkdown[key];
			if (typeof value === 'string') {
				markdownText = value;
				foundKnownField = true;
				break;
			}
		}

		if (!foundKnownField) {
			markdownText =
				Object.values(rawMarkdown).find(
					(value): value is string => typeof value === 'string' && value.length > 0
				) ?? '';
		}
	}

	return markdown.render(markdownText);
}
