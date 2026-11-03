export function stripEmphasis(text: string): string {
	return text.replaceAll('*', '');
}

export function parseEmphasis(text: string): { text: string; emphasis: boolean }[] {
	return text.split('*').map((part, index) => ({ text: part, emphasis: index % 2 === 1 }));
}
