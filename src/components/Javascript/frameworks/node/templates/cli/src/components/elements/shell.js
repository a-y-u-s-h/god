/*
  ======================================

               /$$                 /$$ /$$
              | $$                | $$| $$
      /$$$$$$$| $$$$$$$   /$$$$$$ | $$| $$
     /$$_____/| $$__  $$ /$$__  $$| $$| $$
    |  $$$$$$ | $$  \ $$| $$$$$$$$| $$| $$
     \____  $$| $$  | $$| $$_____/| $$| $$
     /$$$$$$$/| $$  | $$|  $$$$$$$| $$| $$
    |_______/ |__/  |__/ \_______/|__/|__/

    This component *almost* resembles a shell.
    First argument is name of the command,
    second is an array of options following it.
    And it's always synchronous so you don't
    have to worry a lot about dealing with 
    other stuff. 

  ======================================
*/

import execa from "execa"
export default execa.sync