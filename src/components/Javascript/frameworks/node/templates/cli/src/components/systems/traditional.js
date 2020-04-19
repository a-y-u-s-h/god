import commander from "commander"

export default async settings => {
  /*
    ======================================
      This handles the route when user
      doesn't want an interactive route,
      so he passes some flags in to do
      the task.
    ======================================
  */
  const { program } = commander
  const { options, commands, data } = settings
  const { application, configuration } = data
  /*
    ======================================
      Specifying information about the
      program itself - name, version.
    ======================================
  */
  program.name(application.name).version(application.version, "-v --version")
  /*
    ======================================
      Binding global level parameters or
      command line options to the program
      from the file that inside 'settings'
      folder.
    ======================================
  */
  if (configuration.options) {
    configuration.options.forEach(option => {
      if (option.format && option.description) {
        program.option(option.format, option.description)
      }
    })
  }

  /*
    ======================================
      Binding global level commands and
      their options to the program.
    ======================================
  */
  if (configuration.commands) {
    configuration.commands.forEach(command => {
      if (command.name) {
        const options = command.options ? command.options : []
        const c = program.createCommand(command.name)
        if (command.alias) c.alias(command.alias)
        options.forEach(option => {
          if (option.format && option.description) {
            c.option(option.format, option.description)
          }
        })
        c.action(commands(command.name))
        program.addCommand(c)
      }
    })
  }
  /*
    ======================================
      Reading the argument list provided 
      to the program and providing it
      to the controller 'program' variable.
    ======================================
  */
  program.parse(process.argv)
  await options(program.opts())
}
