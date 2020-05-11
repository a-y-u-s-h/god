/*
  ======================================

       /$$     /$$
      | $$    | $$
     /$$$$$$  | $$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$
    |_  $$_/  | $$__  $$ /$$__  $$| $$_  $$_  $$ /$$__  $$
      | $$    | $$  \ $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$
      | $$ /$$| $$  | $$| $$_____/| $$ | $$ | $$| $$_____/
      |  $$$$/| $$  | $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$
       \___/  |__/  |__/ \_______/|__/ |__/ |__/ \_______/

    This file modifies UI Kitten's theme. To generate a
    new theme later some day, go to this site and export
    as UI Kitten theme: https://colors.eva.design/

  ======================================
*/
import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

export const theme = {
	...eva,
	/*
    ======================================
      Element States
    ======================================
  */
	'color-primary-focus': '$color-primary-700',
	'color-primary-hover': '$color-primary-400',
	'color-primary-default': '$color-primary-500',
	'color-primary-active': '$color-primary-600',
	'color-primary-disabled': '$color-primary-300',

	/*
    ======================================
      Backgrounds and Borders
    ======================================
  */
	'background-basic-color-1': '$color-basic-100',
	'background-basic-color-2': '$color-basic-200',
	'background-basic-color-3': '$color-basic-300',
	'background-basic-color-4': '$color-basic-400',

	'border-basic-color-1': '$color-basic-100',
	'border-basic-color-2': '$color-basic-200',
	'border-basic-color-3': '$color-basic-300',
	'border-basic-color-4': '$color-basic-400',
	'border-basic-color-5': '$color-basic-500',

	/*
    ======================================
      Text
    ======================================
  */
	'text-basic-color': '$color-basic-1000',
	'text-alternate-color': '$color-basic-100',
	'text-control-color': '$color-basic-100',
	'text-disabled-color': '$color-basic-500',
	'text-hint-color': '$color-basic-700'
}

/*
  ======================================
    You can import theme provider and
    it'll apply the theme to children
    components:

    import Theme from "<path>/theme"
  ======================================
*/
export default ({ children }) => (
	<React.Fragment>
		<ApplicationProvider {...eva} theme={{ ...eva.dark }}>
			<IconRegistry icons={EvaIconsPack} />
			{children}
		</ApplicationProvider>
	</React.Fragment>
)
