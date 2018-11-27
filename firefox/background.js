const fileMap = {
	'https://glyph.medium.com/css/e/sr/latin/e/ssr/latin/e/ssb/latin/m2.css': 'assets/css/medium.css',
	'https://s.gr-assets.com/assets/gr/fonts-e256f84093ccl3b27f5b82343398031a.css': 'assets/css/goodreads.css'
}

browser.webRequest.onBeforeRequest.addListener(function(info) {
	if (info.tabId === -1) {
		return {};
	}
	return {
		redirectUrl: browser.extension.getURL(fileMap[info.url])
	}
}, {
	urls: Object.keys(fileMap),
	types: ['stylesheet']
}, ['blocking']);
