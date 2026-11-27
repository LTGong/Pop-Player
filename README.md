# Pop TV

A one-screen video player for Pop. Video on the left, big channel tiles on the right.
Tapping a tile changes the channel; each channel picks up where it left off.
Videos play one after another forever. There are no YouTube menus, Shorts or
recommendations, because Pop's taps never reach YouTube itself.

What Pop can do:
- Tap a tile: change channel.
- Tap the video: pause. Tap again: keep watching.
- Tap "Next": skip to another video on this channel.

What it does by itself:
- Skips videos that are missing or that YouTube won't let us play.
- If the internet drops, shows "Waiting for the internet" and carries on when it returns.
- If a video freezes, retries it once, then moves on.
- Remembers the channel and spot after a reload.

## Files
- `index.html` — the app. You shouldn't need to touch it.
- `channels.js` — the channel list. This is the file you edit.

## Adding or removing videos
1. Find the video on YouTube. Copy the ID from its link: in
   `https://www.youtube.com/watch?v=hUhisi2FBuw` the ID is `hUhisi2FBuw`.
   (A Shorts link won't work well; pick normal videos.)
2. In `channels.js`, add a line inside that channel's `videos: [ ... ]`:
   `"hUhisi2FBuw", // a note for yourself`
3. Save. On GitHub, use the pencil icon on the file and "Commit changes".
   The tablet picks it up the next time the page reloads (about a minute after the commit).

To add a whole YouTube channel as a never-ending top-up, put its channel ID
(starts with `UC`) in `alsoFrom`. Every few hand-picked videos, Pop TV plays one of that
channel's recent full-length uploads. A channel with only `alsoFrom` (like News) just plays
that channel's newest videos in order.

To add a new channel, copy one `{ ... },` block and change the name, icon and colour.
Icons available: logs, gear, train, plane, can, inn, music, news.

## Hosting (free): GitHub Pages
YouTube won't play inside a file opened straight from the tablet, so the two files need to live on a web address.
1. Create a GitHub repository (public), e.g. `pop-tv`, and upload `index.html` and `channels.js`.
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
3. After a minute the address appears there, like `https://YOURNAME.github.io/pop-tv/`.

## Setting up the Kindle Fire
- Open the address in the Silk browser and check a video plays with sound.
- Better: install **Fully Kiosk Browser** (from fully-kiosk.com, it's a sideloaded APK on Fire tablets;
  the free version works, the paid licence removes a watermark). Set the start URL to the address,
  turn on "Autoplay videos" (so it never needs a "Tap to start") and kiosk mode, and lock the screen to landscape.
- Turn off the screen timeout or set it long, and keep the tablet plugged in.

If autoplay is blocked, Pop TV shows a big "Tap here to start". One tap fixes it.
