// =====================================================================
//  POP TV — CHANNEL LIST
//  This is the only file you need to edit to change what Pop watches.
//
//  Each channel has:
//    name    — the big bold label on the tile (keep it short)
//    icon    — one of: logs, gear, train, plane, can, inn, music, news
//    color   — tile colour (any CSS colour)
//    videos  — YouTube video IDs. The ID is the part after "v=" in a
//              link like https://www.youtube.com/watch?v=hUhisi2FBuw
//              Write each one in quotes, followed by a comma.
//              Anything after // on a line is a note for you; Pop never sees it.
//    alsoFrom (optional) — YouTube channel IDs (start with "UC").
//              After every few hand-picked videos, Pop TV plays a recent
//              full-length upload from one of these channels (never Shorts).
//              A channel with no videos at all plays only from alsoFrom.
//    topupEvery (optional) — how many hand-picked videos between those
//              (defaults to POP_TOPUP_EVERY at the bottom of this file).
//
//  Videos that YouTube won't let us embed, or that have been taken down,
//  are skipped automatically, so a bad ID is harmless.
// =====================================================================

window.POP_CHANNELS = [
  {
    name: "Log splitters",
    icon: "logs",
    color: "#b5562a",
    videos: [
      "z7kms5tRIAI", // Homemade firewood machines compilation
      "oIokBKCuUIY", // Logs to firewood in minutes (Eastonmade)
      "fUfCclx0KM8", // Splitting logs with a firewood processor
      "xDkXr-HhgIM", // Homemade firewood processor
      "ef9iIA0ZVeg", // Kinetic log splitter, steady splitting
      "cOUvHVr9Yvw", // All-wood log splitter and table
      "XFtqn0JaqWg", // Ultimate firewood combo with conveyor
      "YDHji7SgcfM", // 4-way split electric splitter
      "tP2APPPDtjc", // Processors, splitters, saws and tractors
      "nVOnuqsIQYk", // This log splitter pays for itself
      "YBncu56U6hI", // Testing 4 different splitters
      "J8V5gP7BRe0", // Making a hydraulic log splitter
      "l3ZZjhsM8g0", // DIY splitter from scrap metal
      "DOzNrAq6jY0", // Screw log splitter build
    ],
  },
  {
    name: "Old machines",
    icon: "gear",
    color: "#4f6b3a",
    videos: [
      "Qgn4auYAWO0", // Hit and miss engine heaven
      "WAEd7QDCHNk", // Fuller & Johnson engine at a grist mill
      "4eFom2L5CEo", // Kerosene hit & miss engines
      "Zd6NaBiIfgM", // Getting a 99 year old engine running
      "CrzhGY91lVI", // Engine-powered sock making machine
      "Ta86OocLyIM", // Looks and sounds of hit & miss engines
      "KO5PB8p5jfk", // Antique power threshing bee
      "RcMRyTdsfPc", // Machines that built America's farms
      "kmruk_4HlYw", // Hit and miss engine generator set
    ],
  },
  {
    name: "Steam engines",
    icon: "train",
    color: "#3d4f6e",
    videos: [
      "Imw8L5p7mOk", // How a steam engine works (animated)
      "kif0okz-EHM", // The invention that sparked the Industrial Revolution
      "U8E5LqpcrDg", // How piston steam engines work
      "IP1YxYKCt0U", // How a steam engine works, classic machinery
      "MxOrJOE9ZbY", // Industrial Revolution: James Watt
      "xnClSss50pI", // How do steam engines work?
      "_Lw4kCURo9Y", // Will this 100 year old locomotive run?
      "nMHKvVypfYM", // Restoring a steam locomotive
      "CuAdoKlJ3sI", // The invention of the steam engine
      "FNaIwws0DM8", // Steam engine explained simply
      "ulGUXsrdQ2Q", // Historic steam train back on track
      "6A6iS-PhDiU", // 1776: James Watt and the steam engine
    ],
  },
  {
    name: "World War II",
    icon: "plane",
    color: "#6b5a3a",
    videos: [
      "VBkRLcvUsio", // D-Day explained hour by hour
      "U6CUhAjpfcw", // Island hopping strategy
      "4PIsYuQB5rI", // War tactics that reshaped WWII
      "VuFDCPhptu4", // Operation Overlord animated overview
      "d9vuxteqAis", // Operation Barbarossa
      "oEahEUqz5fw", // 1944 drive into Europe animated map
      "3sVoT_MI3aQ", // Island hopping in 6 minutes
      "KZMZQRhK1FM", // 81 days from D-Day to Paris
      "f9axIBKuC0k", // D-Day, all 5 beaches in 24 hours
      "2kJJC2LSpsM", // Timelapse of the Normandy invasion
      "UVi8cmnmiws", // WWII: the global conflict
    ],
  },
  {
    name: "How it works",
    icon: "can",
    color: "#2f6f73",
    videos: [
      "hUhisi2FBuw", // The ingenious design of the aluminum can
      "AX9x_c4Wm64", // Engineering behind the beverage can
      "Ew4GQGJ1cDY", // How a car engine works, animated cutaway
      "3MUL65-vZHY", // How a mechanical watch works
      "SQC8yvMVsvc", // Why soda cans are shaped that way
      "XCUkg0ut61I", // How a car engine works (3D)
      "bXdZCGpXd34", // How a car engine works
    ],
  },
  {
    name: "Inn stories",
    icon: "inn",
    color: "#7a3b3b",
    // Pop watches this genre rather than one channel. Add stories you spot him
    // enjoying here; Boots & Roses fills in every other video.
    videos: [
      "HXuu8a9JwPI", // An old man walked in. They laughed.
      "bi3PGRcJeHI", // They laughed when he walked into the saloon alone
      "P1ZBWG47zbA", // A stranger bought every man a drink
      "xwdzuQ4sswc", // The hidden life of a medieval inn
      "A5Rzr4EaKKs", // The Tavern Knight (audiobook)
    ],
    alsoFrom: [
      "UCnkylnG5o91q0BTcmc9MW0A", // Boots & Roses (western audiobooks)
    ],
    topupEvery: 1, // alternate: one hand-picked, one from alsoFrom
  },
  {
    name: "Old music",
    icon: "music",
    color: "#5b4a7a",
    videos: [
      "ALU66mO-39o", // 1 hour of Glenn Miller
      "aME0qvhZ37o", // In the Mood
      "4rMja1JBIVc", // Chattanooga Choo Choo, 1941
      "7ulNsLvKJ4o", // Pennsylvania 6-5000
    ],
  },
  {
    name: "News",
    icon: "news",
    color: "#3a3f47",
    videos: [],
    alsoFrom: [
      "UCXIJgqnII2ZOINSWNOGFThA", // Fox News
    ],
  },
];

// How many hand-picked videos to play before slipping in one from "alsoFrom".
window.POP_TOPUP_EVERY = 3;
