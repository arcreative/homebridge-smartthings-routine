# homebridge-smartthings-routine

A little plugin to enable SmartThings routines from homebridge.

## Installation

1. `npm install -g arcreative/homebridge-smartthings-routine`
2. Install the SmartApp in https://graph.api.smartthings.com/
3. Enable OAuth in the SmartApp
4. Grab the accessories configuration from the SmartApp, and add to Homebridge's
`config.json` file
5. Restart `homebridge`

## Usage

Just say "Turn <on/off> <routine name>" to activate the routine.  There is
obviously no "off" state to a routine, but sometimes it's a little more natural
to say "off" instead of "on"!
