require("@nomiclabs/hardhat-waffle")

/*
  ======================================
    Here's an example Hardhat task.
    To learn how to create your own
    Hardhat tasks, refer this link:
    https://hardhat.org/guides/create-task.html
  ======================================
*/
const tasks = [
  {
    name: "accounts",
    description: "Prints the list of accounts",
    function: async (args, hre) => {
      const accounts = await hre.ethers.getSigners()
      for (const account of accounts) {
        console.log(account.address)
      }
    }
  }
]

/*
  ======================================
    Here we just go over some Hardhat
    tasks in the above array and execute
    them.
  ======================================
*/
tasks.forEach(t => task(t.name, t.description).setAction(t.function))

module.exports = {
  solidity: "0.8.4"
}
