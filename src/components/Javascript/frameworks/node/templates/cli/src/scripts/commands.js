/*
  ======================================
                                                                             /$$
                                                                            | $$
    /$$$$$$$  /$$$$$$  /$$$$$$/$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$   /$$$$$$$  /$$$$$$$
   /$$_____/ /$$__  $$| $$_  $$_  $$| $$_  $$_  $$ |____  $$| $$__  $$ /$$__  $$ /$$_____/
  | $$      | $$  \ $$| $$ \ $$ \ $$| $$ \ $$ \ $$  /$$$$$$$| $$  \ $$| $$  | $$|  $$$$$$
  | $$      | $$  | $$| $$ | $$ | $$| $$ | $$ | $$ /$$__  $$| $$  | $$| $$  | $$ \____  $$
  |  $$$$$$$|  $$$$$$/| $$ | $$ | $$| $$ | $$ | $$|  $$$$$$$| $$  | $$|  $$$$$$$ /$$$$$$$/
   \_______/ \______/ |__/ |__/ |__/|__/ |__/ |__/ \_______/|__/  |__/ \_______/|_______/
  
  This file handles all sub-commands of this program.
  You specify the command handler in the 'commands'
  object below. 'key' in the command variable
  must match with `command.name` specified in some
  file in settings.

  ======================================
*/

const commands = {}
export default command =>
  commands.hasOwnProperty(command) ? commands[command] : console.log
