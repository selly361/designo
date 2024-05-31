'use client'

import React, { Fragment } from 'react'

interface Props {
	params: { category: string }
}


function DesignCategoryPage({ params }: Props) {

	return (
		<Fragment>
			<h1>{params.category}</h1>
		</Fragment>
	)
}

export default DesignCategoryPage
