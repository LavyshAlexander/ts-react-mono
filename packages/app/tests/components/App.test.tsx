import { mount } from 'enzyme'
import { expect } from 'chai'
import { App } from '../../src/components/App'


describe('<App />', () => {
	it('should have h1 element with correct inner text', () => {
		const component = mount(<App />)

		const actual = component.find('h1').text()
		const expected = 'Here goes the sun.'

		expect(actual).to.be.equal(expected)
	})
})
