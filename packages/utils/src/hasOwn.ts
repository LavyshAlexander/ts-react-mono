export function hasOwn(object: Readonly<Object>, propName: string): boolean {
	return Object.prototype.hasOwnProperty.call(object, propName)
}
