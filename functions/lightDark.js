export function isLight() {
	return window.matchMedia('(prefers-color-scheme: light)').matches;
}

export function isDark() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function isLightDarkSupported() {
	return !!window.matchMedia;
}
