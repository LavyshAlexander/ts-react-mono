import { FC } from 'react'

interface IHeader {
	title: string
}

export const Header: FC<IHeader> = ({ title }) => {
	return (
		<h1>{title}</h1>
	)
}