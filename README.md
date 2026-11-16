# Guatemala Trip Companion

Mobile-friendly, single-page itinerary for the November–December 2026 Guatemala trip.

## Files
- `index.html` — main itinerary, Friend Mode / Planner Mode, bookings, budget, map, packing, and local backup.
- `companion-sw.js` — basic same-origin offline HTML cache.

## Deploy with Netlify
Use this GitHub repository as the Netlify project source. Build command: **none**. Publish directory: **.** (repository root). Production branch: **main**.

The site itself does not synchronize local edits between devices. Import/Export backups are browser-based; each traveller sees the deployed site but local checkmarks and edits remain device-specific. A new commit to `main` deploys automatically only after the Netlify project is connected to this GitHub repository.

## Privacy
This repository is public. The itinerary contains travel dates and lodging details, so review the content before sharing it publicly; consider switching the repository to private if access should be limited. Netlify's published site can still be public even when its source repository is private.

## Offline limitations
Visit the deployed page while online to cache it. External maps, remote images and booking links still require connectivity.