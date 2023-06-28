import { Module } from "@agility/nextjs"

export const DefaultComponent:Module<any>  = ({ isDevelopmentMode, isPreview }) => {

	if (isDevelopmentMode || isPreview) {
		return (
			<div>This module has not been built.</div>
		)
	}

	throw new Error("This module has not been built.")

}
