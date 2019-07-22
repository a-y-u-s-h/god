/*
  ======================================

     /$$$$$$$$
    |__  $$__/
       | $$ /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$
       | $$| $$  | $$ /$$__  $$ /$$__  $$ /$$_____/
       | $$| $$  | $$| $$  \ $$| $$$$$$$$|  $$$$$$
       | $$| $$  | $$| $$  | $$| $$_____/ \____  $$
       | $$|  $$$$$$$| $$$$$$$/|  $$$$$$$ /$$$$$$$/
       |__/ \____  $$| $$____/  \_______/|_______/
            /$$  | $$| $$
           |  $$$$$$/| $$
            \______/ |__/
    
    Folders in current directory are usual folder
    components. You need to add export lines for each of them
    manually for now in this file.

    Unless you're me (a-y-u-s-h) I can use my scripts, hehe.

    These names are not really important for imports, but for this
    thing to work, make sure you follow this convention: 

    export { default as _<COMPONENT_IN_CAPITAL_LETTERS> } from "./component-in-small-letters"
    (replace dashes `-` with underscores `_`, start with an underscore.)

  ======================================
*/

export { default as _DEFAULT } from "./default"