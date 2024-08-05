import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ page }) => (
  <div>
    <Link to="/">{'<'} Back</Link>
    <br />
    <h3>{page.title}</h3>
    <p>{page.content}</p>
  </div>
))
