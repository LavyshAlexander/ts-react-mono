import { render, screen } from '@testing-library/react'
import { Home } from '../../src/pages'


describe('<Home />', () => {
	it('should have h1 element with correct inner text', () => {
		render(<Home />)

		const actual = screen.getByText('Here goes the sun.').tagName
		const expected = 'H1'

		expect(actual).toEqual(expected)
	})
})
