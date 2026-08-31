# Verification: Dhaka⇄Patuakhali + Dhaka⇄Jhalakathi batch (9 launches)
Verified 2026-08-31. Verdicts: CONFIRMED (2+ independent sources), LIKELY (1), UNVERIFIED, WRONG (with correction).

## Route-level context (applies to all Patuakhali entries)
- Post-Padma-Bridge the Dhaka⇄Patuakhali service collapsed to ~2 departures/day each way, rotated among ~8 launches (The Daily Star Bangla, article 366526 "ভাড়া কমিয়েও যাত্রী সংকটে ঢাকা-পটুয়াখালী রুটের লঞ্চ"; thefreelanceit May-2025; aksgreenit Apr-2025). Some launches run only fixed weekdays (Sundarban 9: Thu+Sun 8 PM; Kajol 7: Wed+Sat 8 PM per aksgreenit/vromonprio).
- Fares were CUT after the bridge: deck 400→200, single cabin 1500→1000, double 2800→2000 (Daily Star snippets; thefreelanceit 2025 lists deck 200–300, single 900–1000, double 1600–1800, family 2500, semi-VIP 3000, VIP 5000). travelinfo.com.bd (Oct-2024) still lists rack rates: deck 500, single 1100–1300, double 2200–2400, family 3000–3500, VIP 5000–6000. Most dataset fares sit between these two regimes — flag as "rack rate vs discounted floor" ranges; deck values of 400–500 are the OLD pre-cut level.
- The 2025 route roster (thefreelanceit + aksgreenit/vromonprio, near-identical → count as ~1.5 sources; plus seatbooking.com.bd index): AR Khan 1, Kajol 7, Prince Awlad 7, Sattar Khan 1, Kuakata 1, Jamal 5, Sundarban 9, Sundarban 11 (+ Sundarban 14, Prince of Rasel 4 on seatbooking). NOT on any list: Parabat 14, Sundarban 8, Prince Awlad 10, Pubali 12.
- Dhaka⇄Jhalakathi: exists but fragile. Suspended spring 2023 for passenger shortage (dbcnews, 2023-04-05: Sundarban-12 idle 6 days, left with 45 passengers, didn't return; Farhan-7 tried to continue). 2024–2026 pages show it running again with SUNDARBAN 12 + FARHAN 7 (not Farhan 9).

Sources (route level):
- https://bangla.thedailystar.net/সংবাদ/বাংলাদেশ/ভাড়া-কমিয়েও-যাত্রী-সংকটে-ঢাকা-পটুয়াখালী-রুটের-লঞ্চ-366526 (content via search snippets; direct fetch 403)
- https://www.thefreelanceit.com/2025/05/dhaka-to-patuakhali.html (2025-05-20)
- https://www.aksgreenit.com/2025/04/dhaka-to-kuakata-lonch.html / https://vromonprio.com/dhaka-to-kuakata-lonch (copies of each other)
- https://seatbooking.com.bd/info/launch/
- https://dbcnews.tv/articles/যাত্রী-সংকটে-ঝালকাঠি-ঢাকা-রুটে-লঞ্চ-চলাচল-বন্ধ (2023-04-05)

---

## 1. MV Kuakata 1 (mv-kuakata-1) — Dhaka⇄Patuakhali
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka⇄Patuakhali | Dhaka–Boga–Patuakhali; on 2025 rosters | CONFIRMED (add Boga as intermediate) |
| Active | active | listed May-2025 + Apr-2025 rosters | CONFIRMED active (rotation, not guaranteed daily) |
| Dep Dhaka | 06:30 PM | travelinfo (Oct-2024): 07:30 PM; thefreelanceit (2025): 08:00 PM; aksgreenit: "most 7:00 PM" | WRONG/outdated → suggest "07:30 PM" (no source supports 6:30 PM) |
| Dep Patuakhali | 05:00 PM | travelinfo: 06:00 PM; thefreelanceit table: 4:00 PM (column ambiguous) | LIKELY WRONG → suggest "06:00 PM" |
| Duration 10h | arrives ~7 AM after evening dep (vromonguide) ⇒ ~10–12h | plausible; UNVERIFIED exact — "10h 0m" acceptable |
| Deck | 300–450 | travelinfo 500; vromonguide 400–500; 2025 discounted 200–400 | keep range but note {min:200,max:500} reality; dataset acceptable |
| Cabins | sNonAC 1000–1200, sAC 1300, dNonAC 1500–2000, dAC 2500, famAC 1800–3500, VIP 2500–7000 | travelinfo: single 1200, double 2200, family 2500, semi-VIP 4000, VIP 5000–8000; vromonguide: single 1300, double 2400 | broadly plausible; VIP min 2500 is really semi-VIP → suggest vipCabin {min:5000,max:8000} (LIKELY) |
| Contact | null | 01736-620580 (travelinfo AND thefreelanceit) | CONFIRMED → ADD "01736-620580" |
| Specs | floors 4, 17 kn, 2 engines | Sundarban 14 was reported as the FIRST 4-storied launch on this route (2021 news) ⇒ Kuakata 1 four floors doubtful | floors UNVERIFIED/suspect (likely 3); speed/engines UNVERIFIED |
| Operator "Kuakata Group" | no source found | UNVERIFIED |

Sources: https://travelinfo.com.bd/mv-kuakata-1-launch-dhaka-to-patuakhali-launch-schedule-and-ticket-price/ (2024-10-31); https://www.thefreelanceit.com/2025/05/dhaka-to-patuakhali.html; https://www.aksgreenit.com/2025/04/dhaka-to-kuakata-lonch.html; https://vromonguide.com/place/kuakata

## 2. MV Parabat 14 (mv-parabat-14) — Dhaka⇄Patuakhali
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Existence/route | Dhaka⇄Patuakhali, dep 7:30 PM, contact 01712495144, deck 300–350 etc. | NO trace of a "Parabat 14" anywhere: not in Bangla/English searches, no travelinfo page (fleet pages: Parabat 11, 12, 18 — all Dhaka⇄Barisal), not on any 2023–2025 Patuakhali roster, not on seatbooking index, not in 2017 Barisal table (Parabat 2/7/9/11/12) | **UNVERIFIED existence — entry likely WRONG.** Parabat Co. documented fleet: 2,7,9,10,11,12,18 on Dhaka⇄Barisal. Recommend removing or marking inactive; no field can be sourced |

Sources: https://travelinfo.com.bd/?s=পারাবত (only Parabat 11/12/18, all Barisal); https://seatbooking.com.bd/info/launch/; https://m.priyo.com/i/dhaka-barishal-launch-time-table-20170814; all Patuakhali rosters above (absent).

## 3. MV Prince Awlad 7 (mv-prince-awlad-7) — Dhaka⇄Patuakhali
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka⇄Patuakhali | Dhaka–Boga–Patuakhali; on ALL 2024–2025 rosters + seatbooking | CONFIRMED |
| Active | active | yes | CONFIRMED |
| Dep Dhaka | 07:00 PM | travelinfo: 7:00 PM ✓; thefreelanceit: 8:30 PM | LIKELY OK (sources split; keep 07:00 PM) |
| Dep Patuakhali | 05:45 PM | travelinfo: 5:45 PM ✓; thefreelanceit: 4:30 PM | LIKELY OK |
| Duration 10h | not stated anywhere | UNVERIFIED (plausible) |
| Deck 450–500 | travelinfo 500; 2025 discounted 200–300 | rack rate OK; flag as pre-cut level |
| economyChair 600 / businessClassAC 800 | NO source mentions chair/business classes on this vessel/route | UNVERIFIED — possibly invented; consider null |
| Cabins | sNonAC 1100–1300, sAC 1500, dNonAC 2200–2400, dAC 2800, famAC 3000–3500, VIP 5000–6000 | travelinfo: single 1100/1300, double 2200/2400, family 3000–3500, VIP 5000–6000 | CONFIRMED-ish (matches travelinfo; dAC 2800 & sAC 1500 slightly above) |
| Contact | 01714-906692 | 01760-998537 (thefreelanceit) / 01760998536 (travelinfo) | **WRONG → correct to "01760-998537"** (two sources on the 01760-99853x number) |
| Specs floors 4 / 17 kn | contradicted by "Sundarban 14 = first 4-storied on route" news | floors suspect (likely 3); UNVERIFIED |

Sources: https://travelinfo.com.bd/mv-prince-awlad-7-launch-dhaka-to-patuakhali-launch-schedule-and-ticket-price/; https://www.thefreelanceit.com/2025/05/dhaka-to-patuakhali.html; https://seatbooking.com.bd/info/launch/

## 4. MV Prince Awlad 10 (mv-prince-awlad-10) — Dhaka⇄Patuakhali
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka⇄Patuakhali | travelinfo (2024-10-03): **Dhaka⇄Barisal**, "ঢাকা-বরিশাল-ঢাকা"; absent from every Patuakhali roster (2023–2025) and seatbooking Patuakhali list | **WRONG → route should be Dhaka⇄Barisal** (1 detailed source + consistent absence; high confidence) |
| Dep | 06:30 PM / 05:00 PM | 9:00 PM from Dhaka, 9:00 PM from Barisal (standard Barisal-route pattern) | WRONG → "09:00 PM" both directions (LIKELY) |
| Fares | deck 450, chair 600, bus 800, s 1200/1500, d 2200/2800, fam 3500, VIP 6000 | travelinfo: deck 300, single 1000, double 2000, family 2600, deluxe 3500, semi-VIP 4000, VIP single 7000 / double 8000 / VIP-deluxe 9000 | WRONG (Patuakhali fares applied to a Barisal ship) → deck 300, sNonAC/sAC 1000, dNonAC/dAC 2000, famAC 2600, vipCabin {min:7000,max:9000} (LIKELY, 1 source) |
| Contact | 01714-906692 | 01775157411 (Dhaka), 01775151221 (Barisal) | WRONG → "01775157411, 01775151221" (LIKELY) |
| Specs | floors 4, 17 kn, 2 engines | 285 ft length, 46 ft width, 124 single + 70 double cabins, 8 VIP cabins; operator "Awlad Shipping Lines", builder Sundarban Ship Builders | floors/speed/engines UNVERIFIED; operator "Prince Awlad Group" questionable |

Source: https://travelinfo.com.bd/mv-prince-awlad-10-launch-dhaka-to-barisal-launch-schedule-and-price/ (2024-10-03)

## 5. MV Pubali 12 (mv-pubali-12) — Dhaka⇄Patuakhali
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka⇄Patuakhali | travelinfo: Dhaka–Boga–Patuakhali | LIKELY (1 dedicated source) |
| Active | active | NOT on the 2025 rosters (thefreelanceit, aksgreenit) nor seatbooking; only travelinfo Oct-2024 page | UNVERIFIED for 2025-26 — may be withdrawn/irregular; flag |
| Dep | 07:00 PM / 05:45 PM | travelinfo: 7:00 PM / 5:45 PM — exact match | LIKELY (single source) |
| Duration 10h / 9h30m | not stated | UNVERIFIED |
| Deck 400–500 | travelinfo 500 | OK (rack rate) |
| Cabins | sNonAC 1100–1300, sAC 1500, dNonAC 2200–2500, dAC 2800, famAC 3000–5000, VIP 6000–7000 | travelinfo: single 1100–1300, double 2200–2400, family 3000–3500, VIP 5000–6000 | mostly matches; famAC max 5000 and VIP 6000–7000 higher than source → tighten to famAC {3000,3500}, VIP {5000,6000} (LIKELY) |
| Contact | 01752822996 | travelinfo: 01977116926, **01752422996**, 01977115735 | one digit differs (8↔4) → likely typo; suggest "01752422996" + optionally 01977116926 (LIKELY) |
| Specs floors 4, 16 kn | none found | UNVERIFIED |
| Operator "Padma Waterways Co." | none found | UNVERIFIED — dubious |

Source: https://travelinfo.com.bd/mv-pubali-12-launch-dhaka-to-patuakhali-launch-schedule-and-ticket-price/

## 6. MV Sundarban 8 (mv-sundarban-8) — Dhaka⇄Patuakhali
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Existence/route | Dhaka⇄Patuakhali, 7:30 PM/5:30 PM, deck 300–450, contact +8801716444367 | NO trace: travelinfo Sundarban fleet pages = 9, 12, 14, 15, 16 (no 8); Patuakhali rosters carry Sundarban 9/11/14 only; 2017 Barisal table had Sundarban-7 and 12 (no 8); zero search hits for "সুন্দরবন-৮ লঞ্চ" | **UNVERIFIED existence — entry likely WRONG** (vessel appears retired or never on this route). Sundarban Navigation's Patuakhali vessels are Sundarban 9 and 14. Recommend removing or marking inactive |

Sources: https://travelinfo.com.bd/?s=সুন্দরবন; all Patuakhali rosters above (absent); https://m.priyo.com/i/dhaka-barishal-launch-time-table-20170814

## 7. MV Sundarban 14 (mv-sundarban-14) — Dhaka⇄Patuakhali
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka⇄Patuakhali | Dhaka–Boga–Patuakhali (travelinfo; 2021 launch news; seatbooking) | CONFIRMED |
| Active | active | on seatbooking index; travelinfo says "daily"; NOT in thefreelanceit/aksgreenit 8-launch 2025 lists (rotation?) | LIKELY active |
| Dep Dhaka | 07:30 PM | travelinfo: 07:00 PM | LIKELY WRONG → "07:00 PM" |
| Dep Patuakhali | 05:30 PM | travelinfo: 05:45 PM | LIKELY WRONG → "05:45 PM" |
| Duration 9h30m/9h | not stated | UNVERIFIED (plausible) |
| Deck 350 | travelinfo 500; discounted 200–300 (route-wide) | volatile → suggest {min:300,max:500} |
| Cabins | sNonAC 1100–1300, sAC 1600, dNonAC 2000–2400, dAC 2800, famAC 2500–4000, VIP 5500–7000 | travelinfo: single 1100–1300 ✓, double 2200–2400, family 3000–3500, semi-VIP 5000–6000 | broadly consistent; sAC 1600/dAC 2800 unsourced |
| **Floors** | **3** | banglanews24, TBS, jagonews24 all headline it as the **first modern luxury 4-storied (চারতলা) launch** on Dhaka-Patuakhali | **WRONG → floors = 4 (CONFIRMED, 3 news outlets)** |
| Contact | 01711358838 | travelinfo S14 page: 01711358810; thefreelanceit assigns 01711-358810→Sundarban 9 and 01711-358838→Sundarban 11 (all same Sundarban Navigation block) | UNVERIFIED — numbers muddled across sister ships; keep but flag |
| Speed 17 kn, 2 engines | none found | UNVERIFIED |

Sources: https://travelinfo.com.bd/mv-sundarban-14-launch-dhaka-to-patuakhali-launch-schedule-and-ticket-price/; https://www.banglanews24.com/share/news/bd/773052.details; https://www.tbsnews.net/bangla/বাংলাদেশ/ঢাকা-পটুয়াখালী-নৌপথে-প্রথম-আধুনিক-ও-বিলাসবহুল-৪তলা-লঞ্চ; https://www.jagonews24.com/country/news/560912 (bodies 402/403 — 4-floor claim is in all three headlines); https://seatbooking.com.bd/info/launch/

## 8. MV Farhan 9 (mv-farhan-9) — Dhaka⇄Jhalakathi
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka⇄Jhalakathi | Every 2023–2026 source names the Jhalakathi pair as **Sundarban 12 + Farhan 7** (travelinfo Farhan-7 page; aksgreenit/vromonprio 2025-26; dbcnews 2023; amaderlaunch FB). Farhan 9 itself is reported on the **Bhola corridor**: vromontrips Dhaka-Bhola page (upd. 2026-04) has Farhan 9 dep Dhaka **11:45 AM** (Ilisha direction); travelinfo's Farhan fleet index (3, 5, 6, 7, 8, 10) has no Farhan-9 page; Monpura/Hatiya roster is Farhan 3&4 + Tashrif 1&2 (wikivoyage) | **WRONG → Farhan 9 does not serve Dhaka⇄Jhalakathi (CONFIRMED wrong).** Actual: Dhaka⇄Ilisha (Bhola) daytime service, dep ~"11:45 AM" (LIKELY, 1 direct source + dataset's own description note). If the dataset wants a Jhalakathi Farhan, it is **Farhan 7**: dep Dhaka 06:00 PM / Jhalakathi 08:00 PM, deck 400, sNonAC 1000, sAC 1200, dNonAC 2000, dAC 2400, famAC {2500,3000}, VIP {5000,6000}, contact 01712713178, 01719552166 (travelinfo 2024-10-30) |
| Sched 08:00 PM / 07:00 PM (8h) | matches no source | WRONG |
| Fares (deck 350–400 … VIP 5500) | close to Farhan-7/Jhalakathi rack rates but attributed to wrong vessel | WRONG attribution |
| Contact 01760-873181, 01778-378213 | not found in any source | UNVERIFIED |
| Specs floors 3, 16 kn | none found | UNVERIFIED |

Sources: https://travelinfo.com.bd/mv-farhan-7-launch-dhaka-to-jhalokati-launch-schedule-and-ticket-price/; https://travelinfo.com.bd/?s=ফারহান; https://vromontrips.com/dhaka-to-bhola-launch-schedule/; https://www.aksgreenit.com/2025/04/dhaka-to-jhalokathi.html; https://dbcnews.tv/articles/যাত্রী-সংকটে-ঝালকাঠি-ঢাকা-রুটে-লঞ্চ-চলাচল-বন্ধ; https://bn.wikivoyage.org/wiki/নিঝুম_দ্বীপ

## 9. MV Sundarban 12 (mv-sundarban-12) — Dhaka⇄Jhalakathi
| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka⇄Jhalakathi | Dhaka–Barisal–Jhalakathi (travelinfo; aks/vromonprio; dbcnews) — add Barisal as key intermediate. (Dataset description's "via Chandpur and Charfashion" is WRONG — Charfashion is a different corridor) | CONFIRMED (route label OK) |
| Active | active | suspended Mar-2023 (passenger shortage, dbcnews); running again per Oct-2024 travelinfo and 2025/26 aks/vromonprio pages; fragile/irregular | LIKELY active — add note about 2023 suspension & fragility |
| Dep Dhaka | 06:00 PM | travelinfo: 6:00 PM ✓; vromonprio/aks: 7:30 PM | CONFIRMED-ish (sources split; 06:00 PM defensible) |
| Dep Jhalakathi | 06:00 PM | travelinfo: **08:00 PM** (রাত ৮টা) | **WRONG → "08:00 PM"** (LIKELY) |
| Duration 8h30m | aks/vromonprio: 7–8h | slightly high → suggest "7h 30m"–"8h 0m" (LIKELY) |
| Deck 400 | travelinfo 400 ✓; vromonprio 350–400 | CONFIRMED |
| Single | sNonAC 1200–1600, sAC 1500 | travelinfo: 1000 (non-AC)/1200 (AC); vromonprio: single AC 1300–1500 | dataset high → suggest sNonAC {1000,1200}, sAC {1200,1500} |
| Double | dNonAC 2400–3350, dAC 2500 | travelinfo: 2000/2400; vromonprio: double AC 2300–2500 | dNonAC max 3350 unsupported → suggest dNonAC {2000,2400}, dAC {2400,2500} |
| Family AC | 2700–3500 | travelinfo 2500–3000; vromonprio 2500–2700 | high → suggest {2500,3000} |
| VIP | 5000–9000 | travelinfo 5000–6000; vromonprio 6000–7000 | max 9000 unsupported → suggest {5000,7000} |
| Contact | 01724955600 | travelinfo 01724955600 ✓; vromonprio 01724-955600 ✓ | CONFIRMED |
| Specs floors 3, 17 kn | none found | UNVERIFIED |

Sources: https://travelinfo.com.bd/mv-sundarban-12-launch-dhaka-to-jhalokati-launch-schedule-and-ticket-price/ (2024-10-30); https://vromonprio.com/dhaka-to-jhalokathi-launch-fare-and-schedule; https://www.aksgreenit.com/2025/04/dhaka-to-jhalokathi.html; https://dbcnews.tv/articles/যাত্রী-সংকটে-ঝালকাঠি-ঢাকা-রুটে-লঞ্চ-চলাচল-বন্ধ

---

## Cross-cutting flags
1. Amenities lists (AC/TV/Generator/CCTV/Prayer Room/Restaurant) — no independent source verified any amenity set: ALL UNVERIFIED.
2. floors/speedKnots/engines — unverified everywhere except Sundarban 14 (floors 4, CONFIRMED — dataset's 3 is wrong) and Prince Awlad 10 (285 ft, cabin counts). "17 knots" repeated across entries looks templated.
3. Two entries appear to be phantom vessels for these routes: **Parabat 14** and **Sundarban 8** (no trace in any roster, fleet index, news, or booking site, Bangla or English).
4. Two entries are on the wrong route: **Prince Awlad 10** (actually Dhaka⇄Barisal) and **Farhan 9** (actually Bhola corridor; Jhalakathi's Farhan is Farhan 7).
5. Dataset deck fares of 400–500 on Patuakhali reflect pre-Padma-Bridge rack rates; 2023–2025 street prices are 200–300 (Daily Star, thefreelanceit).
6. NEVER-used source note: smartroutebd.com excluded per instructions; aksgreenit/vromonprio and their clones counted as single sources where wording matched.
