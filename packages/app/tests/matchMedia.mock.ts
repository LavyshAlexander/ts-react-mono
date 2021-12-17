const fn = () => () => {}

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	// value: jest.fn().mockImplementation((query) => ({
	value: (query: any) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: fn(), // Deprecated
		removeListener: fn(), // Deprecated
		addEventListener: fn(),
		removeEventListener: fn(),
		dispatchEvent: fn(),
	})
})
