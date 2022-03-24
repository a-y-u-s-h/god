/*
  ======================================
     /$$                 /$$
    |__/                | $$
     /$$ /$$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$
    | $$| $$__  $$ /$$__  $$ /$$__  $$|  $$ /$$/
    | $$| $$  \ $$| $$  | $$| $$$$$$$$ \  $$$$/
    | $$| $$  | $$| $$  | $$| $$_____/  >$$  $$
    | $$| $$  | $$|  $$$$$$$|  $$$$$$$ /$$/\  $$
    |__/|__/  |__/ \_______/ \_______/|__/  \__/

    This file is the entry point of the application.
    It simply runs the 'program' which is an Xstate
    statechart. Having a statechart will allow us to
    program this application in whatever way we want.
    This is where you can probably send events to your
    program. But in most applications (scripts or servers)
    it won't be necessary. Your statechart can send events
    to itself if required.
  ======================================
*/
import program from "@/program"
import settings from "@/settings"
import indicators from "@/components/elements/indicators"
import typography from "@/components/elements/typography"

const application = (service, terminator) => {
  /*
    ======================================
      When the application starts, we want
      to print an introductory banner using
      the message that's inside the settings
      of the application.
    ======================================
  */
  const intro = settings?.application?.messages?.intro
  intro ? indicators.print(typography.poster(intro)) : null
  service.start()

  process.on("exit", terminator)
  process.on("SIGINT", terminator)
  process.on("SIGUSR1", terminator)
  process.on("SIGUSR2", terminator)
  process.on("uncaughtException", terminator)
}

const terminate = service => () => {
  /*
    ======================================
      This function will terminate the service
      which will be started by the 'application'
      function. It'll also print out a message
    ======================================
  */
  const outro = settings?.application?.messages?.outro
  outro ? indicators.print(typography.basic(outro)) : null
  service.stop()
}

application(program.service, terminate(program.service))
