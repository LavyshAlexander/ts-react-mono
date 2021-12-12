import { hasOwn } from '@project/utils'


export function hasName(object: Readonly<Object>): boolean {
	const propName = 'name'
	const hasName = hasOwn(object, propName)

	return hasName
}