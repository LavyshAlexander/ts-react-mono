import { expect } from 'chai'
import { hasName } from '..'


describe('hasName()', () => {

	it('should return true if object has own property "name"', () => {
		const object = { name: 'Ilya' }

		const actual = hasName(object)

		expect(actual).to.be.true
	})

	it('should return false if object does not have own property "name"', () => {
		const parentObject = { name: 'Ilya' }
		const object = Object.create(parentObject)
		object.surname = 'Ilf'

		const actual = hasName(object)

		expect(actual).to.be.false
		expect(object.name).to.equal('Ilya')
	})

})
