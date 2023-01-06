const re = /\[(.+?)\]/gm;
export function processDescription(raw: string) {
	return raw.replace(re, (_, p1) => `<span class="emphasized">${p1}</span>`)
}
