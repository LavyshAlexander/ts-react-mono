import { render, screen } from '@testing-library/react'
import { App } from '../../src/components/App'


describe('<App />', () => {
	it('should have h1 element with correct inner text', () => {
		render(<App />)

		const actual = screen.getByText('Here goes the sun.').tagName
		const expected = 'h1'.toUpperCase()

		expect(actual).toEqual(expected)
	})
})
