# HVAC Tool & Parts Checklist

## Live Demo
[View my project here](PASTE-YOUR-GITHUB-PAGES-LINK-HERE)

*(Update this link once the project is deployed via GitHub Pages — Settings → Pages → Source: main branch → /root.)*

## Problem
When I worked HVAC install and refrigeration for Pappas Restaurants, the work order didn't always match what was actually at the job site. One specific example: I was sent out for a Tabit monitor-arm install, but the arm listed on the work order didn't match the actual kitchen monitor setup on-site — which meant a wasted return trip back to the warehouse to get the right part. Tools and parts were also unevenly distributed among techs, so it wasn't always obvious what I already had versus what I needed to grab before heading out.

## Value
A quick, on-the-spot checklist means fewer wasted trips back to the shop, faster job completion, and more confidence that I have what I need before I ever leave for the site — instead of finding out I'm missing something once I'm already there.

## Project Plan
I started by identifying the problem and value above before writing any code. From there I defined the smallest possible version of the idea that would actually prove it works — the ability to add an item to a list and check it off — and scoped the required features around that. The project is intentionally built per-job (a new checklist for a specific work order) rather than as one giant master tool catalog, since a giant list defeats the purpose of a fast, at-a-glance check before leaving.

## Features
**Complete:**
- Add a tool/part item to the checklist — a tech types a tool or part name and adds it to a running list before heading to a job site.
- Check off an item once it's confirmed packed — clicking an item strikes it through, so a tech can see at a glance what's still missing before leaving.
- View the current checklist — a live status line shows total items, how many are packed, and how many remain (or an empty-state message when the list is empty), so a tech can see progress at a glance before leaving.

**Planned:**
- Save and reuse checklist templates by job type (e.g. "Tabit install," "RTU service call")
- Flag an item that doesn't match what the work order specifies
- Clear the list to start a new job

## Technologies Used
HTML, CSS, JavaScript

## AI Tools Used
Claude, for planning the project (problem/value framing, architecture, and file structure) and for pair-programming and debugging during the build in Cursor.

## Running the Project
Visit the live demo link above, or clone this repository and open `index.html` in any browser.
