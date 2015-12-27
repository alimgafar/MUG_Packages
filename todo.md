#exoplanet

***eXoPlanet*** is a Meteor application for Meteor-NY meetup organizers to use to plan, arrange and manage events; and communicate with sponsors, members and other organizers. Using ***eXoPlanet,*** members can find out about planned events, examine and interact with artifacts from prior events, contribute to future events, and communicate with the organizers.

##User Classes

The user classes listed below are what is currently needed at this stage. These classes will map to user roles. Some of these classes include more discrete roles, and some of these roles can cross the user class boundaries. In order to keep things simple, we'll create roles for each class that requires authentication, and separate roles for discrete workflow functions.

>*Keep in mind*

User Classes | User Roles
------------ | ----------
Who the user is | What the user can do


###General Public

This isn't that fantastic ska band from the '80s that formed after the breakup of *The English Beat.* This user class describes the unregistered and uncommitted people who find the site through searches and serendipity. There will be areas that will allow them to discover the mission of and provide limited interaction with the site.

It is possible, but unlikely that someone from the **General Public** would be a speaker or presenter. (S)he may start out that way, but in order to manage workflow, (s)he would have to register and log into the system. Speakers, tutors, and presenters have pre-event, event, and post-event responsibilities, especially for DevShop.

###Members

Nearly all of our expected **Member** users will be Meetup users, and so we will implement the *accounts-meetup* package. These are distinct from **Third-party Providers** who are typically parties that are interested in providing services to the members.

**Members** are classified as participants who have direct interest in the interactions and exchanges of the group. These are people who are curious or have information to share about MeteorJS in terms of its technical capabilities or implementation consequences. Some **Members** are product owners. They may be interested in what Meteor offers and in finding resouces who are able to use Meteor. They may have built their product or companies on Meteor but are not be technical themselves. Others still may simply be interested in showing what they've used Meteor to accomplish. **Members** may want to share what they know with the community by speaking or presenting at an event. In some cases, **Members** may offer to lead a class to teach what they know at one of the events. 

####Meetup Member

> I am not sure that this actually meets the "who" criteria. 

All **Meetup Members** are identified by login credentials. That is to say, acknowleged site members confirm their role by registering at the website. However, people who meet the **Member** definition but don't register will not access the full privileges afforded registered members. They will have access to all aspects of the site available to the **General Public.** We will have to consider their concerns and desires as we shape information available to the **General Public.**

All **Meetup Members** have the attributes found in **Members** (above).

By default, **Meetup Members** have view privileges to **Meetup Members** and **General Public** areas. Exceptions: they can submit suggestions for special events and presentations, they can communicate with **Organizers** through an internal messaging system, and they can vote on suggestions for events or presentations.


####Organizers

**Organizer** are meetup members tasked with arranging events for the benefit of the **Meetup Members** to further promote the understanding, use, and evolution of MeteorJS as a viable platform to build software applications. They have specific and ad-hoc workflow responsiblities on this application. 

All **Organizers** have the attributes found in **Meetup Members** (above).

By default, **Organizers** have the same privileges as **Meetup Members.** **Organizers** also have view privileges to **Organizer** areas. Exceptions: they can create events; approve presentations; edit event attributes (but not remove); communicate with other members and privately with other **Organizers** through an internal messaging system; suggest new sponsors, vendors and locations; and approve suggestions for events.



####Administrator

**Administrators** are a special class of **Oganizers** who are tasked with maintaining the eXoPlanet instance. They are responsible for runtime operations of the application, including monitoring the application for performance, resource usage limits, and workflow status. **Administrators** schedule eXoPlanet upgrades and rollouts and ensure the availabilty of the application for its users.

All **Administrators** have the attributes found in **Organizers** (above).

By default, **Administrators** have the same privileges as **Organizers.** **Administrators** also have view privileges to **Adminstrator** areas. Exceptions: they have full (add, modify, delete) access to all spaces; can schedule and re-schedule events as desired; can communicate with other members and privately with other **Administrators** through an internal messaging system; can create new and approve suggested sponsors, vendors and locations.


###Third-party providers

TBD

####Sponsors

TBD

####Vendors

TBD


####Employers

TBD


> Roles was a separate section before, but I think its really embedded in User Classes. In any case, Speaker, Sponsor, Vendor, etc. were not originally considered.

##Roles

Members: Default is they have view privileges to members and public spaces. Exception: can submit suggestions for special events and presentations. Exception: can communicate with organizers or admins through chat interface. Exception: can vote on suggestions for events or presentations.

Organizers: Same rights as Members. They have view access to Organizers spaces. Organizers can comminicate with other members through chat interface. Can create events. Cannot schedule events on Administrator owned or edited events. Can add locations, but not modify. 

Administrators: All rights of Organizers. They mave full (add, modify, delete) access to all spaces. Can schedule and re-schedule events as desired. Can add, modify, and delete locations. Can approve Sponsors. Can create sponsorship 

##Business rules

* All records persist in the database; delete flag is used to indicate a removed record.
* User records are encrypted in the database.
* Decryption happens on the server. (Public/Private Key??)
* An event may have 0 or more talks or presentations.
* A talk or presentation can be proposed without attaching a speaker to it or without it being attached to an event.
* A talk or presentation can later be attached to a speaker or an event.
* A talk or presentation can be rescheduled to a different event.
* A talk or presentation can be assigned to a different speaker.
* More than one speaker may be attached to a talk or presentation.
* There is the concept of talk topics.
* Only organizers may be administrators.
* Any member may be a speaker.
* A speaker does not have to be a member.
* A member may claim to be a speaker, but this must be confirmed by an administrator.

##Queries to Consider

###General

MeteorJS uses MongoDB natively as its data store. MongoDB recoomnends structuring documents (i.e. your records) in each collection based on expected access patterns. That's something of a tall order when an application is evolving and you're not sure how it will be used. 

###Events
* What events does this meetup provide? When are they held?
* Who were the speakers at the last event?
* How many speakers were at the last event?
* How many talks were at the last event?
* Give me a location's details -- name requirements, floor, security, arrival requirements (allowed early, etc.)


###Administrative
* *TBD*

###Operational
* Show me a list of the conversations I had with *xxx.*
* Show me the list of people I chatted with today, yesterday, this week, last week, last month, last quarter, last year
* Show me a list of activities (talks) planned for the next event
* Show me a list of all future activities (talks) arranged by year, month, and event
* Show me a list of all future speakers (preseneter) arranged by year, month, event, and presentation title
* Who are the organizers? How do I get in touch with them?
* Show me a list of the organizers.
* Show me an organizer's bio.
* Show me a list of event locations.


###User (Meetup Member)
* *TBD*

###Presenter
* How many talks did speaker xxx give? What were they?


###Vendor
* *TBD*

###Sponsor
* Show me a list of sponsors.
* What does sponsor *xxx* provide?
* Show me a list of sponsorship opportunities.
* How do I sign up for sponsorship?



##Data Model

At a very high level, we'll group our main entities into MongoDB collections. 

* Sponsors
* Speakers
* Events
* Location
* Vendors
* Employers
* Presentation


##Packages Considered and Installed

Package Name | Description | Used How/Where
------------ | ----------- | --------------
accounts-base | A user account system. | *TBD*          
accounts-meetup | Login service for Meetup accounts | *TBD* 
accounts-password | Password support for accounts. | *TBD* 
accounts-ui | Simple templates to add login widgets to an app | *TBD*  
check | Check whether a value matches a pattern | *TBD* 
http | Make HTTP calls to remote servers | *TBD*       
iron:router | Routing specifically designed for Meteor | *TBD* 
alanning:roles | Authorization package for Meteor. | *TBD* 
aldeed:autoform | Easily create forms with automatic insert and update, and automatic reactive validation. | *TBD* 
aldeed:collection2 | Automatic validation of insert and update operations on the client and server. | *TBD* 
aldeed:http | Improves the core HTTP package | *TBD* 
aldeed:scheduled-tasks | Run a function on a schedule. | *TBD* 
aldeed:simple-schema | A simple schema validation object with reactivity. Used by collection2 and autoform. | *TBD* 
houston:admin | A zero-config Meteor Admin. | *TBD*      
mrt:flash-messages | A package to display flash messages to the user | *TBD* 
twbs:bootstrap | The most popular front-end framework for developing responsive, mobile first projects on the web. | *TBD* 

##Possible Integrations

***hubot*** to automate creating and scheduling events, discovering videos, posting updates to Meetup.com, posting artifacts to Meetup.com etc. Right now, there isn't an adapter for Meetup, so this is a contribution we could make to npm and to Atmosphere


##Hopes & Dreams

###Iron Router and Flow Router
I'm writing this application in Iron Router. However, I'd like to see this application written for both Iron Router and Flow Router. In the same application. One app, but two different ways to experience it. Perhaps this is something that can be dicussed and figured out. Perhaps not. However, since eXoPlanet is intended to be something that showcases Meteor and is written in Meteor, it would be pretty cool to do this. >I think alanning has written small apps that utilize both routers in a single application. But I could be wrong; it's worth following up and checking out his code.


###React Native

Likewise, I'd like to take the first pass of this application and build it to use React Native too. Again, can we get away with having two different front ends? One in Blaze (the way I'm building it now) and one in React Native? Folks, I'll need answers and a clear discussion on the whys and wherefores.







