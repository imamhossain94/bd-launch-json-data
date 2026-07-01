# Bd Launch JSON Data

A structured JSON dataset of passenger launches (river ferries) operating out of Dhaka, Bangladesh — schedules, fares, amenities, and technical specs for **66 launches** across **8 routes** and **26 operators**.

## Preview
<div style="display: flex; gap: 8px; overflow-x: auto; width: 100%; padding: 10px 0;">

  <!-- Left column: 2 images -->
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <img src="launch-image\MV Sundarban 10.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Sundarban 10" />
    <img src="launch-image\MV Parabat 9.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Parabat 9" />
    <img src="launch-image\MV Surovi 7.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Surovi 7" />
    <img src="launch-image\MV Kirtankhola 2.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Kirtankhola 2" />
  </div>

  <!-- Middle: 1 image -->
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <img src="launch-image\MV Zam Zam 7.jpg" width="314" height="308" style="object-fit: cover; border-radius: 4px;" alt="MV Zam Zam 7" />
    <img src="launch-image\MV Raf Raf 7.jpg" width="314" height="308" style="object-fit: cover; border-radius: 4px;" alt="MV Raf Raf 7" />
    <img src="launch-image\MV Mayur 10.jpg" width="314" height="308" style="object-fit: cover; border-radius: 4px;" alt="MV Mayur 10" />
  </div>

  <!-- Right column: 2 images -->
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <img src="launch-image\MV Adventure 1.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Adventure 1" />
    <img src="launch-image\MV Manami.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Manami" />
    <img src="launch-image\MV Tipu 7.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Tipu 7" />
    <img src="launch-image\MV Kirtankhola 10.jpg" width="236" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Kirtankhola 10" />
  </div>

</div>



## Data file

[`ships.json`](ships.json) is a flat JSON array. Each element describes one launch.

| Route | Launches |
|---|---|
| Dhaka ⇄ Chandpur | 29 |
| Dhaka ⇄ Barishal | 18 |
| Dhaka ⇄ Hularhat (Pirojpur) | 7 |
| Dhaka ⇄ Shariatpur | 5 |
| Dhaka ⇄ Patuakhali | 3 |
| Dhaka ⇄ Barguna | 2 |
| Dhaka ⇄ Jhalokathi | 1 |
| Dhaka ⇄ Bhola | 1 |

## Schema

Each launch object has the following shape:

```ts
{
  name: string;            // Launch name, e.g. "MV Sundarban 10"
  operator: string;        // Operating company
  route: string;           // Human-readable route, e.g. "Dhaka ⇄ Barishal"
  routeId: string;         // Stable slug for the route, e.g. "route_barishal"
  schedule: {
    departFromDhaka: string;          // Departure time from Dhaka
    departFromDestination: string;    // Departure time from destination
    journeyTimeDhakaToDest: string;   // Duration, Dhaka -> destination
    journeyTimeDestToDhaka: string;   // Duration, destination -> Dhaka
  };
  fares: {
    deck: number | null;
    economyChair: number | null;
    businessClassAC: number | null;
    singleCabinNonAC: number | null;
    singleCabinAC: number | null;
    doubleCabinNonAC: number | null;
    doubleCabinAC: number | null;
    familyCabinAC: number | null;
    vipCabin: number | null;          // All fares in BDT; null = not offered
  };
  amenities: string[];      // e.g. "AC", "Restaurant", "CCTV", "WiFi", "Prayer Room"
  technicalInfo: {
    floors: number;
    speed: string;          // e.g. "18 nautical miles"
    numberOfEngines: number;
  };
  contact: string | null;   // Phone number, when available
  status: "active";
  image: string | null;     // Filename relative to launch-image/
}
```

### Example entry

```json
{
  "name": "MV Sundarban 10",
  "operator": "Sundarban Navigation",
  "route": "Dhaka ⇄ Barishal",
  "routeId": "route_barishal",
  "schedule": {
    "departFromDhaka": "08:30 PM",
    "departFromDestination": "08:30 PM",
    "journeyTimeDhakaToDest": "8 hours 30 mins",
    "journeyTimeDestToDhaka": "7 hours 30 mins"
  },
  "fares": {
    "deck": 400,
    "economyChair": null,
    "businessClassAC": null,
    "singleCabinNonAC": 1200,
    "singleCabinAC": 1500,
    "doubleCabinNonAC": 2200,
    "doubleCabinAC": 2600,
    "familyCabinAC": 3500,
    "vipCabin": 6000
  },
  "amenities": ["AC", "Restaurant", "Prayer Room", "CCTV", "VIP Suite", "Generator"],
  "technicalInfo": {
    "floors": 4,
    "speed": "18 nautical miles",
    "numberOfEngines": 2
  },
  "contact": "01711-358838",
  "status": "active",
  "image": "MV Sundarban 10.jpg"
}
```

## Images

Launch photos live in [`launch-image/`](launch-image/), named to match each entry's `image` field. Not every launch has a photo — check for a non-null `image` before rendering.

## Usage

### Node.js

```js
const ships = require('./ships.json');

// All launches on the Barishal route, sorted by earliest departure from Dhaka
const barishal = ships.filter(s => s.routeId === 'route_barishal');

// Cheapest deck fare available
const cheapestDeck = ships
  .filter(s => s.fares.deck != null)
  .sort((a, b) => a.fares.deck - b.fares.deck)[0];

// Launches with AC and WiFi
const acWifi = ships.filter(s => s.amenities.includes('AC') && s.amenities.includes('WiFi'));
```

### Browser (fetch)

```js
const ships = await fetch('./ships.json').then(r => r.json());
const withImages = ships.filter(s => s.image);
withImages.forEach(s => {
  const img = document.createElement('img');
  img.src = `launch-image/${s.image}`;
  img.alt = s.name;
  document.body.appendChild(img);
});
```

### Python

```python
import json

with open("ships.json", encoding="utf-8") as f:
    ships = json.load(f)

chandpur_ships = [s for s in ships if s["routeId"] == "route_chandpur"]
avg_deck_fare = sum(
    s["fares"]["deck"] for s in ships if s["fares"]["deck"] is not None
) / sum(1 for s in ships if s["fares"]["deck"] is not None)
```

## Contributing

This dataset is community-maintained and far from complete — contributions are welcome:

- **Add a new launch**: append an entry to [`ships.json`](ships.json) following the [schema](#schema) above, and drop a matching photo into [`launch-image/`](launch-image/) if you have one.
- **Fix wrong data**: schedules, fares, and contact numbers change often — if you spot something inaccurate or outdated, please correct it.

To contribute, fork the repo, make your changes, and open a pull request. For a new launch, include the source of your information (operator website, ticket counter, personal trip, etc.) in the PR description so it can be verified.
