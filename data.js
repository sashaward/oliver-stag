// Shared content for every direction. Edit the weekend here once.
window.WEEKEND = {
  title: "The Stag",
  groom: "Oliver Walker",
  groomFirst: "Oliver",
  tagline: "A weekend of vines, sea air & good company",
  dates: "Friday 16 – Sunday 18 October",
  place: "Kent",
  start: "2026-10-16T10:15:00+01:00",
  days: [
    {
      key: "fri", iso: "2026-10-16", name: "Friday", short: "Fri", date: "16 October", numeral: "I", french: "Vendredi",
      theme: "The Arrival",
      line: "From sweat to spritz.",
      sommelier: "Opens loudly, settles beautifully. Do not decant the groom.",
      profile: [["Body", "Full", 0.9], ["Tannin", "Rowdy", 0.8], ["Finish", "Late", 0.95]],
      events: [
        { time: "10:15", hour: 10.25, loc: "london", icon: "reformer", title: "Reformer at 1Rebel",
          note: "We start virtuous. It won't last.", pair: "Electrolytes, and a tight pair of leggings" },
        { time: "Then", hour: 11.25, loc: "london", icon: "pastry", title: "Greggs Breakfast",
          note: "Britain's finest pastry house. Steak bake, obviously.", pair: "A flat white of modest provenance" },
        { time: "Midday", hour: 13, loc: "road", icon: "car", title: "Drive to the Kent coast",
          note: "Windows down. The aux cord has been negotiated in advance.", pair: "Service-station Percy Pigs" },
        { time: "18:00", hour: 18, loc: "coast", icon: "glass", title: "Gentleman's Groom Club", sub: "Welcome drinks",
          note: "Ties optional, charm mandatory.", pair: "Something zesty, to begin" },
        { time: "19:00", hour: 19, loc: "coast", icon: "dinner", title: "Dinner",
          note: "The first proper feast of the weekend.", pair: "A generous lager" },
        { time: "20:00", hour: 20, loc: "coast", icon: "brush", title: "Life Drawing", sub: "& a Surprise", surprise: true,
          note: "Bring a steady hand. Say nothing to the groom.", pair: "Classified" },
        { time: "21:00", hour: 21, loc: "coast", icon: "dice", title: "Games Night", sub: "Hosted by Prince",
          note: "House rules apply. Prince's rules apply more.", pair: "The dealer's choice" }
      ]
    },
    {
      key: "sat", iso: "2026-10-17", name: "Saturday", short: "Sat", date: "17 October", numeral: "II", french: "Samedi",
      theme: "Among the Vines",
      line: "A long, golden day in wine country.",
      sommelier: "Structured and generous, with notes of oak, sea salt and terrible dancing.",
      profile: [["Body", "Elegant", 0.7], ["Acidity", "Bright", 0.75], ["Finish", "Very long", 1]],
      events: [
        { time: "Morning", hour: 9, loc: "coast", icon: "coffee", title: "Coffee at Leo’s",
          note: "A slow start. Strong coffee. Gentle voices, please.", pair: "A double espresso, no questions" },
        { time: "10:00", hour: 10, loc: "coast", icon: "sun", title: "Yoga on the beach",
          note: "Salute the sun, the sea, and whatever happened last night.", pair: "Sea air, deeply inhaled" },
        { time: "12:00", hour: 12, loc: "oxney", icon: "leaf", title: "Oxney Organic Estate", sub: "Lunch",
          note: "Organic vines, picnic vibes, absolutely no rush.", pair: "Oxney Classic, naturally" },
        { time: "12:45", hour: 12.75, loc: "oxney", icon: "glass", title: "Tour & Tasting at Oxney",
          note: "Swirl, sniff, sip, and pretend to know what 'flinty' means.", pair: "A spittoon, ignored" },
        { time: "17:00", hour: 17, loc: "chapel", icon: "bottle", title: "Chapel Down", sub: "Tour & tasting", bubbles: true,
          note: "One of England's great sparkling houses.", pair: "Bubbles. Lots of them." },
        { time: "19:00", hour: 19, loc: "chapel", icon: "dinner", title: "Dinner at Chapel Down",
          note: "Supper among the vines as the sun goes down.", pair: "The grapey stuff" },
        { time: "22:00 – late", hour: 22, loc: "coast", icon: "house", title: "Drinks at The Dunes",
          note: "Nightcaps, nonsense, and a game or two.", pair: "Questionable decisions" }
      ]
    },
    {
      key: "sun", iso: "2026-10-18", name: "Sunday", short: "Sun", date: "18 October", numeral: "III", french: "Dimanche",
      theme: "The Sea",
      line: "Salt water cures everything.",
      sommelier: "A soft, saline finish. Best enjoyed slowly, with a roast.",
      profile: [["Body", "Light", 0.3], ["Salinity", "High", 0.85], ["Finish", "Gentle", 0.55]],
      events: [
        { time: "10:00", hour: 10, loc: "coast", icon: "wave", title: "Swim or walk on the beach",
          note: "Cold water, warm hearts. Choose your own adventure.", pair: "A towel and a hot bevvy" },
        { time: "13:00", hour: 13, loc: "plough", icon: "pint", title: "Pub lunch at The Plough", sub: "Rye's best Sunday spit roast",
          note: "A roast, a pint, and a fond farewell.", pair: "A pint of the local" }
      ]
    }
  ]
};

window.countdownParts = function () {
  const ms = new Date(WEEKEND.start) - new Date();
  if (ms <= 0) return null;
  return {
    d: Math.floor(ms / 864e5),
    h: Math.floor(ms / 36e5) % 24,
    m: Math.floor(ms / 6e4) % 60,
    s: Math.floor(ms / 1e3) % 60
  };
};

// Hand-drawn style line icons (24×24, stroked with currentColor)
window.ICONS = {
  reformer: '<path d="M3 15h18M5 15v4M19 15v4M7 15l3-6h5"/><circle cx="16.5" cy="6.5" r="1.8"/>',
  pastry: '<path d="M3.5 14c2.5-6 14.5-6 17 0-3.5 3-13.5 3-17 0z"/><path d="M9 9.8l1.2 5.4M15 9.8l-1.2 5.4M12 9.2v6.2"/>',
  car: '<path d="M3 16v-3l2.2-5h13.6L21 13v3z"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="16.5" cy="16.5" r="1.8"/><path d="M6 12h12"/>',
  glass: '<path d="M7 3h10l-.6 5.5a4.4 4.4 0 0 1-8.8 0z"/><path d="M12 13v7M8.5 21h7M7.5 7h9"/>',
  dinner: '<path d="M6 3v6a2 2 0 0 0 4 0V3M8 9v12"/><path d="M17 3c-2.2 2-2.2 8 0 9.5V21"/>',
  brush: '<path d="M4 20c1.5 0 3-.5 3.5-2s-1-3 .5-4.5L17 4.5a1.8 1.8 0 0 1 2.5 2.5L10.5 16c-1.5 1.5-3 0-4.5.5S4 18.5 4 20z"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r=".6"/><circle cx="15" cy="15" r=".6"/><circle cx="15" cy="9" r=".6"/><circle cx="9" cy="15" r=".6"/><circle cx="12" cy="12" r=".6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
  grapes: '<path d="M12 3v3M12 5c2-2 5-2 6 0-2 1.5-4 1.5-6 0"/><circle cx="9" cy="9" r="2"/><circle cx="13" cy="9" r="2"/><circle cx="11" cy="12.5" r="2"/><circle cx="15" cy="12.5" r="2"/><circle cx="7" cy="12.5" r="2"/><circle cx="9" cy="16" r="2"/><circle cx="13" cy="16" r="2"/><circle cx="11" cy="19.5" r="2"/>',
  leaf: '<path d="M5 19C5 11 11 5 20 5c0 9-6 14-15 14z"/><path d="M5 19l8-8"/>',
  bottle: '<path d="M10 2h4v4l1.2 3V21a1 1 0 0 1-1 1h-4.4a1 1 0 0 1-1-1V9L10 6z"/><path d="M8.8 13h6.4M10 4h4"/>',
  house: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
  wave: '<path d="M2 10c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 3.5-1.5 5-1M2 15c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 3.5-1.5 5-1"/>',
  coffee: '<path d="M4 9h12v4.5A5.5 5.5 0 0 1 10.5 19h-1A5.5 5.5 0 0 1 4 13.5z"/><path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H15.5M3 21.5h15M8 3c-1 1.4 1 2.4 0 4M12 3c-1 1.4 1 2.4 0 4"/>',
  pint: '<path d="M6 4h10l-1 16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/><path d="M6.3 8h9.4M16 9h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2.4"/>'
};
window.icon = function (name, cls) {
  return '<svg class="' + (cls || "ico") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
};
window.REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
