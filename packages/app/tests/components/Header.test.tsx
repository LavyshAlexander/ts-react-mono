import { render, screen } from '@testing-library/react'
import { Header } from '../../src/components'


describe('<Header />', () => {

	it('should render title', () => {
		const title = 'Test title'
		render(<Header title={title} />)

		const actual = screen.getByText(title).tagName
		const expected = 'H1'

		expect(actual).toEqual(expected)
	})

})