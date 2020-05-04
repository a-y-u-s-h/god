/*
  ======================================
    it’s a good idea to mock the gatsby
    module itself. This may not be needed
    at first, but will make things a lot
    easier if you want to test components
    that use Link or GraphQL.

    This mocks the graphql() function,
    Link component, and StaticQuery component.
    For more information read here:

    https://www.gatsbyjs.org/docs/unit-testing/
  ======================================
*/

const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }) =>
    React.createElement("a", {
      ...rest,
      href: to
    })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
}
