# Verification report — Dhaka ⇄ Barishal batch 1 (10 launches)

Verified 2026-08-31. Dataset: e:\home\bd-launch-json-data\ships.json
Confidence levels: CONFIRMED (2+ independent sources) / LIKELY (1 decent source) / UNVERIFIED / WRONG (sources contradict dataset).

## Route-wide facts that affect several entries

- Night launches leave both Sadarghat and Barishal between 8:15 PM and 9:15 PM and arrive around 4:00–5:00 AM. vromonprio (2026) states the run takes **"প্রায় ৭ থেকে ৮ ঘন্টা" (about 7–8 hours)**; several other lists say "reach by 4 AM". The dataset's blanket "5h 30m" for every night launch is **too short — realistic value ≈ "7h" (dep 9:00 PM, arr ~4:00 AM)**. Sources: https://vromonprio.com/dhaka-to-barisal-launch-fare-and-schedule , https://bd-info.com/dhaka-to-barishal-launch-ticket-price/ , https://bdticketinfo.com/dhaka-to-barisal-launch-ticket-price/
- Deck fare: on 2022-08-17 owners jointly set deck at **৳400** (govt-approved ceiling ৳457; a couple of launches charged ৳300) — dbcnews.tv. 2025–26 lists give deck **৳300–400** (goofly24, banglakathan, vromontrips). Dataset entries with deck starting at ৳100–250 are outdated on the low end.
  Sources: https://dbcnews.tv/articles/বরিশাল-ঢাকা-নৌ-রুটে-নতুন-ভাড়া-কার্যকর , https://blog.goofly24.com/ঢাকা-বরিশাল-লঞ্চ/ , https://banglakathan.com/ঢাকা-টু-বরিশাল-লঞ্চ-ভাড়া/
- Typical current cabin ranges across sources: single ৳1,000–1,600; double ৳2,000–2,800; family ৳2,500–4,000; semi-VIP ৳3,000–4,500; VIP ৳5,000–9,000 (dhakamail via search, banglakathan, vromontrips, goofly24). Government (BIWTA-style) rate card seen on M Khan-7 poster: deck 404, sofa 800, single 1,616, double 3,232.

---

## 1. MV Adventure 1 (mv-adventure-1)

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka ⇄ Barishal | Same, nightly | CONFIRMED |
| Status | active | Active (listed in 2024–2026 route lists) | CONFIRMED |
| Departure | 09:00 PM both ways | 9:00 PM both ends (one 2026 list says "Adventure & Kirtankhola 9:15 PM") | CONFIRMED (~9:00 PM) |
| Duration | 5h 30m | ~7h (arr ~4 AM) | WRONG → "7h" |
| Deck | 100–350 | route deck now 300–400 | WRONG low end → {min:300, max:400} |
| Cabins | single 1400/1500, double 2400/2500, family 2000–3500, VIP 7000 | within current route ranges (single 1000–1500, double 2000–2600, VIP 6000–8000 for Adventure-1 per one 2026 source) | LIKELY OK; VIP possibly {6000–8000} |
| Contact | 01711320330 | 01747-696963 (vromontrips booking list); 01324-444755 / 01324-444758 (2026 banglakathan-sourced summary). Dataset number appears in no source | LIKELY WRONG → 01747-696963 (or 01324-444755) |
| Amenities/specs | AC, TV, Generator, Life Jackets; 3 floors, 19 kn, 2 engines | not independently verifiable | UNVERIFIED |

Sources: https://vromontrips.com/dhaka-to-barisal-launch-cabin-booking-number/ , https://bd-info.com/dhaka-to-barishal-launch-ticket-price/ , https://blog.goofly24.com/ঢাকা-বরিশাল-লঞ্চ/ , https://banglakathan.com/ঢাকা-টু-বরিশাল-লঞ্চ-ভাড়া/ , https://bdticketinfo.com/dhaka-to-barisal-launch-ticket-price/

## 2. MV Adventure 9 (mv-adventure-9)

**STATUS WRONG — route permit cancelled after fatal accident.**
- 2025-12-25 ~1–2 AM: in dense fog on the Meghna (Harina area, Chandpur), Adventure-9 (Dhaka→Barishal) collided with MV Zakir Samrat-3; **4–5 killed, ~15–30 injured**; Zakir Samrat-3 badly damaged.
- 2025-12-26: river police seized Adventure-9 at Jhalokati launch terminal, arrested 4 cabin boys (master/helmsman fled); **BIWTA Barishal cancelled the launch's route permit** (AD Md. Solaiman). CONFIRMED by multiple independent outlets.
- No evidence found of the permit being restored as of the sources reviewed; treat as **suspended/not operating (as of early 2026)** — at minimum change status from "active" and re-check.

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka ⇄ Barishal | Same (until Dec 2025) | CONFIRMED historical |
| Status | active | Permit cancelled 2025-12-26, vessel seized | WRONG → suspended (verify before re-listing) |
| Departure | 09:00 PM both | was 8:45–9:00 PM nightly | CONFIRMED historical |
| Duration | 5h 30m | ~7h | WRONG → "7h" |
| Fares | deck 250–350, single 1000–1400/1500, double 1800–2400/2500, family 3500–4000, VIP 8000 | plausible vs. route ranges; no per-class source | UNVERIFIED |
| Contact | 01720853366 | seatbooking.com.bd: 01746174594, 01783613947, +8801783613948; worldinfo57: 01746-174594, 01783-613948 (two sources agree) | LIKELY WRONG → 01746-174594 / 01783-613948 |

Sources: https://rtvonline.com/country/361874 , https://www.prothomalo.com/bangladesh/district/4os993bgpz , https://bangla.thedailystar.net/news/bangladesh/accident-fire/news-726326 , https://www.ittefaq.com.bd/767638/ , https://www.kalbela.com/country-news/252470 , https://www.bssnews.net/bangla/national/267119 , https://seatbooking.com.bd/info/launch/m-v-adventure-9/ , https://worldinfo57.com/ঢাকা-থেকে-বরিশাল-লঞ্চ-টিক/

## 3. MV Adventure 11 (mv-adventure-11)

**UNVERIFIED — vessel effectively untraceable.** Checked ~8 aggregate lists (bd-info 2026, bdticketinfo 2024, vromontrips booking list, vromonprio 2026, banglakathan 2026, worldinfo57, probashirdiganta, aksgreenit 2025) plus targeted Bangla/English searches and seatbooking.com.bd (its /m-v-adventure-11/ page = 404). Only a single 2025 listicle phrase "অ্যাডভেঞ্চার ৯/১১ … রাত ৮:৪৫" mentions an "11" at all; no Facebook page, news item, YouTube review, or booking listing found.
- Verdict: **existence/operation on Dhaka⇄Barishal unverified — recommend flagging the entry (possible phantom/duplicate of Adventure-9 or a vessel that never entered this route)**. All schedule/fare/spec/contact (01730018585) values: UNVERIFIED.
Sources (absence): https://bd-info.com/dhaka-to-barishal-launch-ticket-price/ , https://bdticketinfo.com/dhaka-to-barisal-launch-ticket-price/ , https://vromontrips.com/dhaka-to-barisal-launch-cabin-booking-number/ , https://vromonprio.com/dhaka-to-barisal-launch-fare-and-schedule , https://www.aksgreenit.com/2025/04/dhaka%20.html

## 4. MV Dipraj (mv-dipraj)

**ROUTE WRONG / operation UNVERIFIED.** No source lists any Dipraj vessel on Dhaka⇄Barishal. The Dipraj fleet runs **Dhaka ⇄ Madaripur** (and Muladi for Dipraj-4 in some listings):
- Old data (contactnumberhub snippet): "MV Dipraj starts 7:45 PM from Sadarghat, arrives **Madaripur** 4:00 AM"; built 2001 under M/S Begum Transport; 32 cabins; old fares single ৳500, double ৳800, 3rd class ৳160.
- worldinfo57 (2023/2026 page): Dhaka–Madaripur is served by **MV Trika-2 and MV Dipraj-4**, dep Sadarghat 7:45 PM / Madaripur 2:00 PM, **every four days** (rotation, daily only at Eid), deck ৳200, single ৳600, double ৳1,000; Dipraj-4 contact 01716217276.
- Search summaries: "এম ভি দীপরাজ ৪ নিয়মিত ঢাকা-মাদারীপুরের রুটে চলাচল করে". Post-Padma-Bridge, Madaripur-region launch services are heavily reduced.

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka ⇄ Barishal | Dhaka ⇄ Madaripur (family route); plain "MV Dipraj" absent from all current lists | WRONG route; vessel possibly retired |
| Status | active | not found in any 2024–2026 listing | UNVERIFIED → flag |
| Departure 08:30 PM/6h30m; fares; specs | — | no support; Madaripur run was 7:45 PM | UNVERIFIED/WRONG |
| Contact | null | (Dipraj-4: 01716217276 — different vessel) | n/a |

Sources: https://worldinfo57.com/ঢাকা-টু-মাদারীপুর-লঞ্চ/ , https://contactnumberhub.com/mv-dipraj-launch/ (search snippet; site now unreachable) , https://infovandar.com/ঢাকা-টু-মাদারীপুর-লঞ্চ/ (title/search snippet)

## 5. MV Farhan 8 (mv-farhan-8)

**ROUTE WRONG — CONFIRMED on Dhaka ⇄ Monpura–Hatiya, not Dhaka ⇄ Barishal.**
- travelinfo.com.bd dedicated page: route "ঢাকা-মনপুরা-হাতিয়া" via Kaliganj, Ilisha, Daulatkhan, Hakimuddin, Tajumuddin, Monpura. **Dhaka dep 6:00 PM; return (from Monpura/Hatiya side) 1:00 PM.** Fares: deck ৳550; single cabin (AC/non-AC) ৳1,200; double ৳2,200; family ৳3,000–3,500; VIP ৳5,000–6,000. Phone 01799864222 — **matches dataset contact**.
- hatiyarkotha.com daily schedule (2026-03-17): **Farhan-8 departs Hatiya 1:30 PM for Dhaka** — second, independent confirmation the vessel is active on the Hatiya rotation in 2026.
- pbinf's Dhaka–Hatiya page lists Farhan-3/4 and Tasrif-4 as the regulars (Farhan-8 appears in the day-by-day rotation), dep Dhaka 5:30–6:00 PM.

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka ⇄ Barishal | Dhaka ⇄ Monpura–Hatiya | WRONG |
| Status | active | active on Hatiya route (Mar 2026 schedule) | CONFIRMED active, wrong route |
| Departure | Dhaka 08:30 PM / Barishal 07:30 PM | Dhaka "06:00 PM"; Hatiya side ~"01:30 PM" | WRONG |
| Duration | 7h | long coastal overnight run (arrives next morning; ≈14–16h) — exact figure not sourced | WRONG; use approx or null |
| Fares | deck 350, eco chair 500, business 700, single 1000/1200, double 2000/2400, family 3500, VIP 5500 | deck 550; single 1200; double 2200; family {3000–3500}; VIP {5000–6000}; no chair classes listed | WRONG → use travelinfo values; chair fares UNVERIFIED |
| Contact | 01799-864222, 01742-713737 | 01799864222 confirmed; second number unverified | CONFIRMED (first) |

Sources: https://travelinfo.com.bd/mv-farhan-8-launch-dhaka-to-monpura-hatia-launch-schedule-and-ticket-price/ , https://hatiyarkotha.com/774/আজকের-লঞ্চ-শিডিউল , https://pbinf.com/ঢাকা-টু-হাতিয়া-লঞ্চ-সময়/

## 6. MV Green Line 2 (mv-green-line-2)

**Dhaka⇄Barishal day service DISCONTINUED (CONFIRMED); vessel shifted to Dhaka⇄Ilisha (Bhola).**
- Green Line halted its Dhaka–Barishal waterway service in July 2022 (Dhaka Tribune, TBS, Bangla Tribune): losses of ~Tk 2–2.5 lakh per round trip after the Padma Bridge opened; GL-3 suspended from 2022-07-26 "until further notice". No resumption found for 2023–2026.
- Green Line-2 history/current: began Dhaka–Bhola (Ilisha) day route (samakal); travelinfo's Dhaka–Elisha list shows **"MV Green Line-2 — 8:00 AM from Sadarghat"**; pbinf (2025/2026): GL-2/GL-3 run Dhaka 8:30 AM / Ilisha 2:30 PM daily, **economy ৳400, business ৳500**, contact 09613316557 (+88 02 8331302-4). Two sources → Bhola service LIKELY still listed as running.

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka ⇄ Barishal | Barishal service closed since 2022; now Dhaka ⇄ Ilisha (Bhola) | WRONG |
| Status | active | not on Barishal route; active on Bhola route (LIKELY) | WRONG as recorded |
| Departure | 08:30 AM / 02:30 PM (5h) | Bhola run: Dhaka 08:00–08:30 AM / Ilisha 02:30 PM, ~5h; catamaran day service | times coincidentally close, but for the WRONG route |
| Fares | economyChair 800, businessClassAC 1200 | Bhola route: economy 400, business 500 | WRONG → 400 / 500 (if re-routed) |
| Contact | 01730060076 | 09613316557 (pbinf) | LIKELY outdated |
| No cabins, chair-only | — | correct (catamaran, seats only) | CONFIRMED |

Sources: https://www.dhakatribune.com/bangladesh/291106/green-line-halts-dhaka-barisal-waterway-services , https://www.tbsnews.net/bangladesh/transport/green-line-halts-dhaka-barishal-waterway-services-465138 , https://samakal.com/bangladesh/article/4793/ , https://travelinfo.com.bd/dhaka-to-elisha-launch-schedule-and-ticket-price/ , https://pbinf.com/ভোলা-টু-ঢাকা-গ্রীন-লাইন-লঞ/

## 7. MV Green Line 3 (mv-green-line-3)

**DISCONTINUED on Dhaka⇄Barishal — CONFIRMED.**
- Bangla Tribune (2022-07-26): GL-3, in service on the route since 2015-09-08, was stopped from 2022-07-26 without prior notice due to acute passenger shortage after the Padma Bridge opened (750 seats, <200 passengers/trip). Pre-closure schedule: **Dhaka 8:00 AM; Barishal 3:30 PM**. Pre-closure fares: **economy ৳700, business ৳1,000**. Corroborated by TBS and Dhaka Tribune.
- pbinf (2025) says GL-3 sometimes substitutes on the Dhaka–Bhola day run (LIKELY).

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Status | active (Dhaka ⇄ Barishal) | service suspended 2022-07-26, never resumed | WRONG → discontinued |
| Departure | 08:00 AM / 03:00 PM (6h) | was 08:00 AM / 03:30 PM, 5–6h | Barishal dep WRONG (03:30 PM), moot given closure |
| Fares | economyChair 800, businessClassAC 1200 | were 700 / 1,000 at closure | WRONG → 700 / 1000 (historical) |
| Contact | 01730060004 | Green Line waterways line 09613316557 | LIKELY outdated |

Sources: https://www.banglatribune.com/country/barishal/755159/ , https://www.tbsnews.net/bangladesh/transport/green-line-halts-dhaka-barishal-waterway-services-465138 , https://www.dhakatribune.com/bangladesh/291106/green-line-halts-dhaka-barisal-waterway-services , https://pbinf.com/ভোলা-টু-ঢাকা-গ্রীন-লাইন-লঞ/

## 8. MV Kalam Khan 7 (mv-kalam-khan-7)

**Real vessel, but the standard name is "MV M Khan-7" (এম খান-৭)** — "Kalam Khan-7" appears nowhere; the older related Barishal launch is MV Kalam Khan-1 (a different, also-active vessel, dep ~8:45 PM). Recommend renaming to "MV M Khan-7" (keep "Kalam Khan 7" as alias at most).

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route | Dhaka ⇄ Barishal | Same, rotation service | CONFIRMED |
| Status | active | active (Facebook: "সেপ্টেম্বর মাসে রোটেশন ছাড়া প্রতিদিন চলাচল"); YouTube reports it was repaired in Barishal after a Meghna collision (fog season 2025) then returned | CONFIRMED active (minor incident note) |
| Departure | 09:00 PM both | **Dhaka: even dates 8:30 PM; Barishal: odd dates 9:00 PM** (vromontrips + FB) | WRONG for Dhaka side → 08:30 PM |
| Duration | 5h 30m | ~7h | WRONG → "7h" |
| Deck | 300–350 | 404 (3rd-class official) / ~400 | LIKELY → {min:400, max:404} or 400 |
| Sofa | (not in schema; described ৳600 in description) | 800 | description outdated |
| Single | 1000–1400 nonAC / 1500 AC | 1,616 (AC/non-AC, official list) | WRONG-ish → ~1600 |
| Double | 2000–2400 / 2500 | 3,232 (official list) | WRONG-ish → ~3200 |
| Family | 2500–3500 | 2,500–3,500 | CONFIRMED |
| Semi-VIP | (absent) | 4,500 | missing |
| VIP | 6000–15000 | 7,000–15,000 | LIKELY → {7000–15000} |
| Contact | 01712053123 | Dhaka: 01711-755166, 01796-924292, 01332-528602/603; Barishal: 01620-600467, 01737-911114, 01714-421057, 01759-095240 (vromontrips dedicated page; 01332-528603 also in vromontrips route list; 01711755166/01759095240 also in amaderlaunch FB post) | WRONG → 01711-755166 / 01332-528603 |
| Operator | Mahfuz Khan Ltd | not verified anywhere | UNVERIFIED |

Sources: https://vromontrips.com/m-khan-7-launch-cabin-booking/ , https://vromontrips.com/dhaka-to-barisal-launch-cabin-booking-number/ , https://www.facebook.com/amaderlaunch/ (posts: "নতুন লঞ্চ এম খান-৭ … সরকার নির্ধারিত ভাড়ার তালিকা"; booking numbers) , https://www.facebook.com/ExtremeLaunchLover/ (rotation posts) , https://www.youtube.com/watch?v=L2HHIdByKMI ("মেঘনায় লঞ্চের সংঘর্ষ, বরিশালে মেরামত হচ্ছে এম খান-৭")

## 9. MV Kirtankhola 2 (mv-kirtankhola-2)

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route/Status | Dhaka ⇄ Barishal, active | Same, nightly | CONFIRMED |
| Departure | 09:00 PM both | 9:00 PM both ends (goofly24; corroborated by route lists; one 2026 list says 9:15 PM) | CONFIRMED |
| Duration | 5h 30m | ~7h (arr ~4 AM) — dataset's own description admits "often quoted nearer 7 hours" | WRONG → "7h" |
| Deck | 200–350 | 300–400 | WRONG low end → {min:300, max:400} |
| Single | nonAC 1400 / AC 1000–1500 | route range 1000–1500 (K-2 is the cheaper of the pair) | LIKELY OK |
| Double | nonAC 2400 / AC 1800–2500 | route range 2000–2600 | LIKELY OK |
| Family | 3200–3500 | 2500–3500 | LIKELY OK |
| VIP | 4000–7000 | 6000–8000 (Kirtankhola-specific, goofly24) | LIKELY → {6000–8000} |
| Contact | 01712495145 | **01771-497432, 01711-473661, 01719-288939** (vromontrips list for "Kirtankhola-2 & 10"; 01771-497432 also on worldinfo57 with 01778-786954) | WRONG → 01719-288939 / 01711-473661 / 01771-497432 |
| Specs | 3 floors, 18 kn, 2 engines | unverified | UNVERIFIED |

Sources: https://blog.goofly24.com/ঢাকা-বরিশাল-লঞ্চ/ , https://vromontrips.com/dhaka-to-barisal-launch-cabin-booking-number/ , https://worldinfo57.com/ঢাকা-থেকে-বরিশাল-লঞ্চ-টিক/ , https://bd-info.com/dhaka-to-barishal-launch-ticket-price/

## 10. MV Kirtankhola 10 (mv-kirtankhola-10)

| Field | Dataset | Found | Verdict |
|---|---|---|---|
| Route/Status | Dhaka ⇄ Barishal, active | Same, nightly; one of the biggest/most luxurious on the route | CONFIRMED |
| Departure | 09:00 PM both | 9:00 PM both ends | CONFIRMED |
| Duration | 5h 30m | ~7h | WRONG → "7h" |
| Deck | 250–400 | 300–400 | LIKELY → {min:300, max:400} |
| Single | 1000–1600 | 1000–1600 (matches search-aggregated figure) | CONFIRMED |
| Double | 2000–2500 | 2000–2500 (one aggregator said "double 1600" — outlier, ignore) | LIKELY OK |
| Family | 4000 | route family range 2500–4000 | LIKELY OK |
| VIP | 4000–8000 | 6000–8000 | LIKELY → {6000–8000} |
| Contact | 01733337553 | same trio as K-2: 01771-497432, 01711-473661, 01719-288939 | LIKELY WRONG → those numbers |
| Specs | 3 floors, 19 kn, 2 engines | Cabin stock reported: 102 single + 70 double + family/semi-VIP + VIP cabins (counts vary: "6 family, 17 VIP" vs "2 family-VIP, 6 VIP"). Floors/speed unverified (commonly described as a four-deck vessel, but no fetchable source confirmed) | UNVERIFIED; floors possibly 4 |

Sources: https://vromontrips.com/dhaka-to-barisal-launch-cabin-booking-number/ , https://blog.goofly24.com/ঢাকা-বরিশাল-লঞ্চ/ , YouTube review "Kirtonkhola 10 Launch EXCLUSIVE – ALL Cabin Fare" https://www.youtube.com/watch?v=e03SkbqKbQg , https://www.banglanews24.com/national/news/bd/643440.details (inauguration; paywalled on fetch)

---

## Cross-cutting recommendations

1. Set every Dhaka⇄Barishal night-launch duration to **"7h"** (dep 9:00 PM → arr ~4:00 AM). (Adventure 1/9, M Khan-7, Kirtankhola 2/10.)
2. Deck fares: floor at **৳300, ceiling ৳400** for the route (post-Aug-2022 pricing).
3. **MV Adventure 9** → status suspended (route permit cancelled 2025-12-26 after fatal Meghna collision).
4. **MV Green Line 2 & 3** → Dhaka⇄Barishal day service discontinued since 2022-07-26; GL-2 (and sometimes GL-3) later listed on Dhaka⇄Ilisha (Bhola), 8:00–8:30 AM out / 2:30 PM back, eco ৳400 / business ৳500.
5. **MV Farhan 8** → move to route Dhaka ⇄ Monpura–Hatiya; dep Dhaka "06:00 PM", Hatiya side ~"01:30 PM"; deck 550, single 1200, double 2200, family {3000,3500}, VIP {5000,6000}; chair fares null.
6. **MV Dipraj** → no evidence on Dhaka⇄Barishal; family operates Dhaka⇄Madaripur (Dipraj-4, 7:45 PM, 4-day rotation). Flag entry.
7. **MV Adventure 11** → no independent trace; flag as unverified/possible phantom.
8. **MV Kalam Khan 7** → rename to **MV M Khan-7**; Dhaka dep 08:30 PM (even dates) / Barishal 09:00 PM (odd dates); fares & contacts per vromontrips (contact 01711-755166 etc.).
9. Contacts for Kirtankhola 2 & 10 → 01719-288939, 01711-473661, 01771-497432; Adventure 9 → 01746-174594 / 01783-613948; Adventure 1 → 01747-696963 (or 01324-444755).
