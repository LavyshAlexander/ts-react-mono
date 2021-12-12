import { hasOwn } from '..'
import { expect } from 'chai'


describe('hasOwn()', () => {

	it('should return true if object has own property', () => {
		const object = { prop: 2 }
		const searchPropName = 'prop'

		const actual = hasOwn(object, searchPropName)

		expect(actual).to.be.true
	})

	it('should return false if object does not have searched property', () => {
		const object = { prop: 2 }
		const searchPropName = 'nonExistingProp'

		const actual = hasOwn(object, searchPropName)

		expect(actual).to.be.false
	})


	it('should return false if property set in upper level of prorotype chain', () => {
		const parentObject = { prop: 2 }
		const object = Object.create(parentObject)
		const searchPropName = 'prop'

		const actual = hasOwn(object, searchPropName)

		expect(actual).to.be.false
		expect(object.prop).to.be.equal(2)
	})
})
