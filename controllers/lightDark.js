export default class lightDark {
	constructor(host) {
		(this.host = host).addController(this);
	}

	get isSupported() {
		return !!window.matchMedia;
	}

	hostConnected() {
		if (this.isSupported) window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleChange);
	}

	hostDisconnected() {
		if (this.isSupported) window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.handleChange);
	}

	handleChange({ matches }) {
		this.isDark = matches;
		this.isLight = !matches;
		this.host.requestUpdate();
	}
}
