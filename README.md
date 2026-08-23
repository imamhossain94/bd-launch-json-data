# Bd Launch JSON Data

A structured JSON dataset of passenger launches (river ferries) operating out of Dhaka, Bangladesh — schedules, fares, amenities, descriptions, and technical specs for **93 launches** across **20 routes** and **35 operators**.

> **Fares and schedules are indicative.** Prices may not be current, and operators change departures without notice. Confirm at the ghat counter before travelling.

A companion Next.js app that renders this data as a browsable launch list lives in [`web/`](web/) and is ready to deploy on Vercel.

## Preview
<div style="gap: 8px; overflow-x: auto; width: 100%; padding: 10px 0; flex-wrap: wrap; align-content: center;">

  <!-- Left column: 2 images -->
  <div style="gap: 8px;">
    <img src="launch-image\MV Sundarban 10.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Sundarban 10" />
    <img src="launch-image\MV Parabat 9.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Parabat 9" />
    <img src="launch-image\MV Surovi 7.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Surovi 7" />
    <img src="launch-image\MV Kirtankhola 2.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Kirtankhola 2" />
  </div>

  <!-- Middle: 1 image -->
  <div style="gap: 8px;">
    <img src="launch-image\MV Zam Zam 7.jpg" width="30%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Zam Zam 7" />
    <img src="launch-image\MV Raf Raf 7.jpg" width="32.5%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Raf Raf 7" />
    <img src="launch-image\MV Mayur 10.jpg" width="30%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Mayur 10" />
  </div>

  <!-- Right column: 2 images -->
  <div style="gap: 8px;">
    <img src="launch-image\MV Adventure 1.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Adventure 1" />
    <img src="launch-image\MV Sundarban 12.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Manami" />
    <img src="launch-image\MV Tipu 7.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Tipu 7" />
    <img src="launch-image\MV Kirtankhola 10.jpg" width="23%" height="150" style="object-fit: cover; border-radius: 4px;" alt="MV Kirtankhola 10" />
  </div>

</div>



## Data file

[`ships.json`](ships.json) is a flat JSON array. Each element describes one launch.

| Route | Launches |
|---|---|
| Dhaka ⇄ Chandpur | 32 |
| Dhaka ⇄ Barishal | 29 |
| Dhaka ⇄ Patuakhali | 7 |
| Dhaka ⇄ Hularhat (Pirojpur) | 4 |
| Dhaka ⇄ Shariatpur | 4 |
| Dhaka ⇄ Barisal | 2 |
| Dhaka ⇄ Bhashanchar (Mehendiganj) | 2 |
| Dhaka ⇄ Betua (Charfasson) | 2 |
| ...and 16 more single-launch routes | 16 |

The array is sorted alphabetically by `name` (natural sort, so "MV Bagdadia 9" sorts before "MV Bagdadia 10").

## Schema

Each launch object has the following shape:

```ts
type Fare = number | { min: number; max: number } | null;

{
  id: string;               // Stable slug derived from name, e.g. "mv-sundarban-10"
  name: string;              // Launch name, e.g. "MV Sundarban 10"
  operator: string;          // Operating company
  route: {
    id: string;               // Stable slug for the route, e.g. "route_dhaka_barishal"
    label: string;            // Human-readable route, e.g. "Dhaka ⇄ Barishal"
    from: string;             // Origin, always "Dhaka"
    to: string;                // Destination(s), e.g. "Barishal"
  };
  description: string;        // Prose summary: route, timings, fares, amenities, contact
  // Keyed by direction. The outbound leg is always the `dhaka_to_*` key; the
  // suffix is derived from the route id, e.g. `route_dhaka_barishal` -> "barishal".
  schedule: {
    [direction: string]: {     // e.g. "dhaka_to_barishal", "barishal_to_dhaka"
      departure: string;       // Departure time, e.g. "08:30 PM"
      duration: string;        // Journey time for that leg, e.g. "8h 30m"
    };
  };
  fares: {
    currency: "BDT";
    // number       -> fixed price
    // {min, max}   -> operator has no fixed price; the fare is a range
    // null         -> class not offered / no figure on record
    deck: Fare;
    economyChair: Fare;
    businessClassAC: Fare;
    singleCabinNonAC: Fare;
    singleCabinAC: Fare;
    doubleCabinNonAC: Fare;
    doubleCabinAC: Fare;
    familyCabinAC: Fare;
    vipCabin: Fare;
  };
  amenities: string[];        // e.g. "AC", "Restaurant", "CCTV", "WiFi", "Prayer Room"
  specifications: {
    floors: number;
    speedKnots: string;        // e.g. "18" or "15-17"
    engines: number;
  };
  contact: string | null;     // Phone number, when available
  status: "active";
  image: string | null;       // Path relative to the repo root, e.g. "/launch-image/MV Sundarban 10.jpg"
}
```

### Example entry

```json
{
  "id": "mv-sundarban-10",
  "name": "MV Sundarban 10",
  "operator": "Sundarban Navigation",
  "route": {
    "id": "route_dhaka_barishal",
    "label": "Dhaka ⇄ Barishal",
    "from": "Dhaka",
    "to": "Barishal"
  },
  "description": "MV Sundarban 10 runs the main Dhaka ⇄ Barishal night route for Sundarban Navigation, leaving Sadarghat at 09:00 PM — departures are also quoted from about 08:00 PM — and Barishal at the same hour, arriving early the next morning after about 5 hours 30 minutes. Deck has no fixed price and goes for roughly ৳250–350, with a sofa seat sold at about ৳600; a non-AC single cabin runs ৳1,000–1,400 and the AC single ৳1,500, the non-AC double ৳1,800–2,400 and the AC double ৳2,500, the AC family or semi-VIP cabin ৳3,500 and the VIP duplex ৳5,000–7,000. The three-floor, twin-engine launch cruises at about 18 knots and carries AC, a restaurant, a prayer room, CCTV, a VIP suite and a generator. For bookings, call the Barishal counter on 01711358838, the Dhaka counter on 01716-444367 or the hotline on 01758-113011.",
  "schedule": {
    "dhaka_to_barishal": {
      "departure": "09:00 PM",
      "duration": "5h 30m"
    },
    "barishal_to_dhaka": {
      "departure": "09:00 PM",
      "duration": "5h 30m"
    }
  },
  "fares": {
    "currency": "BDT",
    "deck": {
      "min": 250,
      "max": 350
    },
    "economyChair": null,
    "businessClassAC": null,
    "singleCabinNonAC": {
      "min": 1000,
      "max": 1400
    },
    "singleCabinAC": 1500,
    "doubleCabinNonAC": {
      "min": 1800,
      "max": 2400
    },
    "doubleCabinAC": 2500,
    "familyCabinAC": 3500,
    "vipCabin": {
      "min": 5000,
      "max": 7000
    }
  },
  "amenities": [
    "AC",
    "Restaurant",
    "Prayer Room",
    "CCTV",
    "VIP Suite",
    "Generator"
  ],
  "specifications": {
    "floors": 3,
    "speedKnots": "18",
    "engines": 2
  },
  "contact": "01711358838",
  "status": "active",
  "image": "/launch-image/MV Sundarban 10.jpg"
}
```

## Images

Launch photos live in [`launch-image/`](launch-image/). Each entry's `image` field already contains the path relative to the repo root (e.g. `/launch-image/MV Sundarban 10.jpg`) — not every launch has a photo yet, so check for a non-null `image` before rendering.

## Usage

### Node.js

```js
const ships = require('./ships.json');

// All launches on the Barishal route
const barishal = ships.filter(s => s.route.id === 'route_dhaka_barishal');

// Cheapest deck fare available — deck may be a number, a {min, max} range, or null
const deckFloor = f => (f == null ? null : typeof f === 'object' ? f.min : f);
const cheapestDeck = ships
  .filter(s => deckFloor(s.fares.deck) != null)
  .sort((a, b) => deckFloor(a.fares.deck) - deckFloor(b.fares.deck))[0];

// Launches with AC and WiFi
const acWifi = ships.filter(s => s.amenities.includes('AC') && s.amenities.includes('WiFi'));
```

### Browser (fetch)

```js
const ships = await fetch('./ships.json').then(r => r.json());
const withImages = ships.filter(s => s.image);
withImages.forEach(s => {
  const img = document.createElement('img');
  img.src = s.image; // e.g. "/launch-image/MV Sundarban 10.jpg"
  img.alt = s.name;
  document.body.appendChild(img);
});
```

### Python

```python
import json

with open("ships.json", encoding="utf-8") as f:
    ships = json.load(f)

chandpur_ships = [s for s in ships if s["route"]["id"] == "route_dhaka_chandpur"]
avg_deck_fare = sum(
    s["fares"]["deck"] for s in ships if s["fares"]["deck"] is not None
) / sum(1 for s in ships if s["fares"]["deck"] is not None)
```

## Contributing

This dataset is community-maintained and far from complete — contributions are welcome:

- **Add a new launch**: append an entry to [`ships.json`](ships.json) following the [schema](#schema) above, and drop a matching photo into [`launch-image/`](launch-image/) if you have one.
- **Fix wrong data**: schedules, fares, and contact numbers change often — if you spot something inaccurate or outdated, please correct it.

To contribute, fork the repo, make your changes, and open a pull request. For a new launch, include the source of your information (operator website, ticket counter, personal trip, etc.) in the PR description so it can be verified.
