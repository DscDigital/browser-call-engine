# Browser Call Engine User Journey

## Overview
This document captures the telecaller journey for the MVP from login to call history. It defines the core workflow and the experience expected for each stage.

## User Journey Steps

1. **Authentication**
   - Telecaller opens `/login`
   - Enters credentials and taps `Login`
   - Backend validates and returns profile + SIP credentials
   - Frontend navigates to `/dashboard`

2. **Agent Ready State**
   - Agent sees presence controls and current status
   - Agent selects `Available`
   - Frontend registers SIP session and displays registration state

3. **Outbound Call Flow**
   - Agent opens `/dialpad` or uses quick dial from dashboard
   - Enters a number or selects a recent contact
   - Taps `Call`
   - SIP INVITE is sent, UI shows dialing/ringing state
   - On connect, UI transitions to `/call`
   - Agent uses `Mute`, `Hold`, or `Hang Up`
   - When call ends, UI transitions to `/wrap`
   - Agent enters disposition and notes, then saves

4. **Inbound Call Flow**
   - A call arrives while agent is available
   - `IncomingCallModal` appears on top of current page
   - Agent taps `Answer` or `Reject`
   - On answer, UI transitions to `/call`
   - After hangup, agent completes post-call wrap-up

5. **Post-Call Wrap-up**
   - UI displays call summary and end state
   - Agent selects disposition and writes notes
   - Save returns agent to `/dashboard` or `/history`

6. **Call History**
   - Agent opens `/history`
   - Views list of completed calls
   - Filters or searches past activity
   - Opens detail view for context and call metadata

## Key Experience Goals
- Minimal friction to start a call
- Clear telephony state visibility
- Persistent active call controls while navigating
- Simple wrap-up flow after each call
- Quickly find recent calls and call details
