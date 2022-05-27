/*
  ======================================
    This is where you insert information
    about contracts. Only contract name
    is important here. The script doesn't
    care about the file path - only the
    `contract` names.
  ======================================
*/
const contracts = [
  {
    name: "",
    file: ""
  }
]

const main = async () => {
  /*
  ======================================
    For every contract, we will compile
    it and generate the necessary files
    in the artifacts directory. Then for
    every contract hardhat will create
    a local ethereum network for us, but
    just for that contract so that it's easy
    to debug. Hardhat also creates fake miners
    on the machine to try its best to imitate the
    actual blockchain.
  ======================================
*/
  for (let contract of contracts) {
    const factory = await hre.ethers.getContractFactory(contract.name)
    const instance = await factory.deploy()
    await instance.deployed()
    const message = `Contract "${contract.name}" deployed to: ${instance.address}`
    console.log(message)
  }
}

/*
  ======================================
    Asynchronous functions can run like
    so in a Node environment. This is where
    we execute the main function and exit properly,
    while console logging errors, if any.
  ======================================
*/
main()
  .then(() => process.exit(0))
  .catch(e => console.log(e) && process.exit(1))
