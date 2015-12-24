#exoplanet


What events does this meetup provide? When are they held?

Who were the speakers at the last event?

HOw many speakers were at the last event?

How many talks were at the last event?

How many talks did speaker xxx give? What were they?

Show me a list of the conversations I had with xxx.

Sow me the list of people I chatted with today, yesterday, this week, last week, last month, last quarter, last year

Show me a list of activities (talks) planned for the next event

Show me a list of all future activities (talks) arranged by year, month, and event

Show me a list of all future speakers (preseneter) arranged by year, month, event, and presentation title

Who are the organizeers? How do I get in touch with them?

Show me a list of the organizers.

Show me an organizer's bio.

Show me a list of sponsors.

What does sponsor xxx provide?

SHow me a list of sponsorship opportunities.

How do I sign up for sponsorship?

Show me a list of event locations.

Give me a location's details -- name requirements, floor, security, arrival requirements (allowed early, etc.)

A talk or presentation can be proposed without attaching a speaker to it or without it being attached to an event.

A talk or presentation can later be attached to a speaker or an event.

A talk or presentation can be rescheduled to a different event.

A talk or presentation can be assigned to a different speaker.

More than one speaker may be attached to a talk or presentation.

An event may have 0 or more talks or presentations.

Any member may be a speaker.

A speaker does not have to be a member.

A member may claim to be a speaker, but this must be confirmed by an administrator.

Only organizers may be administrators.

There is the concept of talk topics.

All records persist in the database; delete flag is used to indicate a removed record.

User records are encrypted in the database.

Decryption happens on the server. (Public/Private Key??)


Roles:
------
Members: Default is they have view privileges to members and public spaces. Exception: can submit suggestions for special events and presentations. Exception: can communicate with organizers or admins through chat interface. Exception: can vote on suggestions for events or presentations.

Organizers: Same rights as Members. They have view access to Organizers spaces. Organizers can comminicate with other members through chat interface. Can create events. Cannot schedule events on Administrator owned or edited events. Can add locations, but not modify. 

Administrators: All rights of Organizers. They mave full (add, modify, delete) access to all spaces. Can schedule and re-schedule events as desired. Can add, modify, and delete locations. Can approve Sponsors. Can create sponsorship 



Data Model:
-----------
Sponsors
Speakers
Events
Location



twbs:bootstrap: The most popular front-end framework for developing responsive, mobile first projects on the web.
aldeed:autoform: Easily create forms with automatic insert and update, and automatic reactive validation.
aldeed:simple-schema: A simple schema validation object with reactivity. Used by collection2 and autoform.
aldeed:collection2: Automatic validation of insert and update operations on the client and server.
aldeed:scheduled-tasks: Run a function on a schedule
houston:admin: A zero-config Meteor Admin     
alanning:roles: Authorization package for Meteor
accounts-password: Password support for accounts
accounts-base: A user account system          
accounts-ui: Simple templates to add login widgets to an app
http: Make HTTP calls to remote servers       
aldeed:http: Improves the core HTTP package   
check: Check whether a value matches a pattern
iron:router 

Possible integrations:
hubot to automate creating and scheduling events, discovering videos, posting updates to Meetup.com, posting artifacts to Meetup.com etc. Right now, there isn't an adapter for Meetup, so this is a contribution we could make to npm and to Atmosphere








