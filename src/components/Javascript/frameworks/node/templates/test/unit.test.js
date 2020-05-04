/*
  ======================================
    Jest aliases may be different from
    webpack aliases, so make sure whenever
    you update aliases you do that in both places.
    Import the file over here.
  ======================================
*/
import placeholder from "../placeholder"

/*
  ======================================
    This array contains all tests for
    this particular suite. Every object
    here contains a message for the test
    and the function that tests corresponding
    to that message.
  ======================================
*/
const suites = [
  {
    name: "",
    tests: [
      {
        message: "",
        function: () => {}
      }
    ]
  }
]

/*
  ======================================
    We now use the array above. We iterate
    over it and then call the 'test' function
    provided by 'jest' library.
  ======================================
*/
describe("placeholder", () => {
  suites.forEach(suite => {
    describe(suite.name, () =>
      suite.tests.forEach(t => test(t.message, t.function))
    )
  })
})
