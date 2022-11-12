import dynamic from "next/dynamic"
import React, { FunctionComponent } from "react"
const NonSSRWrapper: FunctionComponent<{ children: JSX.Element }> = (props) => (
	<React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
	ssr: false,
})
