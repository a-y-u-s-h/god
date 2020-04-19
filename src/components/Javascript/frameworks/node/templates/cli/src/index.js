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

    This file is the entry point of this CLI tool. 
    There are basically two ways to pass in information
    to the script - 

    1) Command Flags
    
    The 'commands' function takes care of parsing the
    argument list and then passing the information to the
    main processor (which lies inside `scripts`)
    
    2) Interactive CLI.
    
    The 'interactive' function below calls an interactive CLI - 
    it first creates a banner from application name, then does 
    what needs to be done and then prints out an exit message
    once everything's done.  

  ======================================
*/

import options from "scripts/options"
import commands from "scripts/commands"
import application from "settings/application.yaml"
import configuration from "settings/configuration.yaml"
import traditional from "components/systems/traditional"
import interactive from "components/systems/interactive"

/*
  ======================================
    If any arguments are present, use
    the traditional CLI, otherwise use
    the interactive CLI with relevant data.
  ======================================
*/
const settings = { options, commands, data: { application, configuration } }
process.argv.length > 2 ? traditional(settings) : interactive(settings)
