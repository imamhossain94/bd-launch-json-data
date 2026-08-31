# Dataset verification — 31 Aug 2026

Every launch in `ships.json` was cross-checked against 5–10 independent public
sources (English + Bangla): ghat timetables, district-government launch lists,
operator sites/Facebook pages, per-vessel booking pages, and news archives.
smartroutebd.com was excluded (it mirrors this dataset), and blogs that copy
each other verbatim were counted as a single source. Per-launch evidence with
source URLs is in the `verify_*.md` files in this folder.

## Headline result

93 entries in → **88 entries out** (5 deleted), **87 corrected**, 1 unchanged.

## Entries deleted (duplicates / never existed)

| Entry | Reason |
|---|---|
| MV Suravi 7 / 8 / 9 | Duplicates of MV Surovi 7/8/9 — the operator (Surovi Shipping Lines) spells it "Surovi"; two of the three photos were byte-identical to the Surovi ones |
| MV Surovi 10 | Never operated: the rebuilt Surovi 7 was announced as "Surovi 10" in 2021 but re-entered service as Surovi 7 |
| MV Kalam Khan 7 | Same physical vessel as MV M Khan 7 (এম খান-৭); merged into that entry |

## Entries moved to their real route

| Entry | Was | Actually |
|---|---|---|
| MV Farhan 8 | Dhaka ⇄ Barishal | Dhaka ⇄ Monpura ⇄ Hatiya |
| MV Farhan 10 | Dhaka ⇄ Betua | Dhaka ⇄ Monpura ⇄ Hatiya |
| MV Farhan 9 | Dhaka ⇄ Jhalakathi | Dhaka ⇄ Ilisha (Bhola) — the Jhalakathi pair is Sundarban 12 + Farhan 7 |
| MV Sonar Tari 1–4 | Dhaka ⇄ Shariatpur | Dhaka ⇄ Chandpur (Shariatpur's own directory has no Sonar Tari) |
| MV Eagle 4 / 5 | Dhaka ⇄ Chandpur | Dhaka ⇄ Kalaiya (via Chandpur) |
| MV Prince Awlad 10 | Dhaka ⇄ Patuakhali | Dhaka ⇄ Barishal |
| MV Green Line 2 | Dhaka ⇄ Barishal | Dhaka ⇄ Ilisha (Bhola) day run — Barishal service closed Jul 2022 |
| MV Dipraj | Dhaka ⇄ Barishal | Dhaka ⇄ Madaripur (historical; unverified today) |
| MV Manik 5 | Dhaka ⇄ Patarhat | Dhaka ⇄ Muladi (via Shoula) per its only current profile |

## Status changes (new status vocabulary)

- **suspended** — MV Adventure 9 (route permit cancelled 26 Dec 2025 after a
  fatal Meghna collision); MV Rajdut 7, MV Tipu, MV Tipu 6, MV Tipu 12 (the
  Hularhat/Bhandaria corridor collapsed post-Padma-Bridge; last launches
  stopped Nov 2024).
- **discontinued** — MV Green Line 3 (Barishal catamaran service ended 26 Jul 2022).
- **unverified** (no independent source confirms the vessel/route) —
  Adventure 11, Bagdadia 5, Bagdadia 12, Mayur 1, Parabat 8, Parabat 14,
  Parabat 15 (route), Sundarban 8, Sonar Tari 3, Dipraj, Jhanda 2 (place
  "Mridharhat" is not locatable either), Manik 9 (assignment), Pubali 6,
  Samrat 2, Samrat 7, Zam Zam 7 (hull number — corridor vessel is Jom Jom 3).

## Systematic corrections

- **Durations**: Dhaka⇄Barishal night runs were listed at 5h30m; every current
  source says 7–9 h → standardized to 8h 30m (Parabat/Sundarban hulls 9h,
  per published arrival times). Hatiya runs 11h 30m, Kalaiya ~10h.
- **Fares**: many entries carried pre-Aug-2022 fares (e.g. Chandpur deck 100 →
  200 since the 30% hike; Barishal deck floors raised to ৳300–400; M Khan 7
  moved to its gazetted tariff single ৳1,616 / double ৳3,232; Manami's cabin
  prices were overstated by ~৳300–500 per class and its VIP tops at ৳10,000).
- **Departure times**: 20+ wrong departures fixed against the live ghat
  timetables (e.g. New Al-Borak returns 06:00 AM not 10:30 AM; Zam Zam 1
  returns 11:20 PM not 06:00 AM; Imam Hasan 1/5 return 07:00 PM; Meghna Rani
  02:00 PM; Bagdadia 8/9 share the 10:40 AM slot; Mitali 7 09:40 AM/09:50 PM;
  Farhan 3 returns 12:30 PM; Farhan 6 leaves 08:30 PM).
- **Contacts**: ~20 numbers replaced or nulled. Two fleet-wide dataset numbers
  (01711132644 on all Bagdadia, 01711311449 on all Eagle) exist in no source;
  01711008777 is a booking-agency/MV Tutul number wrongly attached to several
  launches. Confirmed office numbers substituted where two sources agree
  (e.g. Eagle office 01792089345; Mayur 7 01759944144; Manik 1 01728412200).
- **Specs**: Sundarban 10, Sundarban 14 and Mayur 10 are four-deck vessels
  (news-confirmed), not three. Most other floors/speed/engine values have no
  public source and are marked accordingly in the reports.
- **Amenities**: vocabulary normalized (CC Camera→CCTV, Free WiFi→WiFi);
  news-confirmed features added (Sundarban 10/16: lift, WiFi, food court,
  medical bay; Manami: ATM, coffee shop, medical service; Mayur 10:
  radar/GPS/echo sounder).
- **Naming**: "Elisha" and "Ilisha" were the same ghat (ইলিশা, Bhola Sadar) —
  unified as **Ilisha**; route `to` spellings normalized (Barisal→Barishal,
  Jhalokathi→Jhalakathi, one form for Char Fasson (Betua)).
- **Descriptions**: regenerated from the corrected structured fields plus
  per-launch notes (incidents, rotations, caveats) so prose can no longer
  contradict the data.

## Known gaps (not added, for future contributions)

- MV Imam Hasan 7 (new Chandpur launch, C→D 6:00 PM, ph 01799494296)
- MV Farhan 7 (the actual Dhaka ⇄ Jhalakathi Farhan, 6:00 PM / 8:00 PM)
- Kalam Khan 1 (active Barishal launch, ~8:45 PM)
