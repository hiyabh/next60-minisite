# Memory Primer — מיני-סייט The Next 60

> Last updated: 2026-06-23 — לידי הטופס נותבו ל-`inonbina@gmail.com` (Web3Forms key חדש). deploy `3ce943e`. journal מלא: `~/.claude/skills/session-journal/logs/2026-06-23-next60-minisite.md`.

## ניתוב לידי הטופס ל-inonbina@gmail.com (2026-06-23) — deploy `3ce943e`
- **בוצע:** הוחלף ה-Web3Forms `access_key` ב-[index.html](../../index.html) (שורה 279, ×2 עותקים): `4292b260-…` (hiyalea) → `97564830-047d-45ee-8369-6b09cc003c85` (נוצר עבור `inonbina@gmail.com`). לידי הטופס מגיעים מעכשיו ל-Inon.
- **למה key חדש ולא טקסט:** ב-Web3Forms היעד נקבע רק ע"י ה-token; שדה `access_key` לא מקבל כתובת מייל (שובר את הטופס). ה-key נשלח רק לתיבת היעד → המשתמש יצר אותו ומסר.
- **State:** הושלם, אומת ב-build החי (github.io → key `97564830`, Pages build=built). נותר: בדיקת מסירה אמיתית בדפדפן headful + אישור מ-Inon.

## עלייה לדומיין next60.co.il + טופס עובד (2026-06-23) — deploy `06905b3`+`c1365b2`
- **בקשה:** להעלות את האתר לדומיין `next60.co.il` שהמשתמש מחזיק (רשום ב-domainthenet), ושטופס יצירת הקשר יעבוד באמת.
- **דומיין:** נוסף קובץ `CNAME` ([CNAME](../../CNAME)) ל-repo (commit `06905b3`). בפאנל domainthenet הוזנו (ע"י המשתמש, בהדרכה) 4 רשומות A ל-`@` → `185.199.108–111.153` + CNAME `www → hiyabh.github.io`. ה-DNS התפשט מהר ואומת חי (apex+www). GitHub זיהה את הדומיין אוטומטית מקובץ ה-CNAME; `http://next60.co.il` מגיש 200. **HTTPS**: הופעל `gh api PUT pages cname=...` לנעור הקצאת תעודה; `https_enforced` יוגדר true אוטומטית כשהתעודה תהיה מוכנה (ניטור ברקע).
- **טופס:** הוחלף `mailto:info@thenext60.co.il` ב-fetch ל-Web3Forms ([app.js](../../app.js) handler + [index.html](../../index.html) hidden fields). Access key: `4292b260-1431-4fef-b95b-ced1ed3e0777` (גלוי-בכוונה, קשור ל-hiyalea@gmail.com). הלידים מגיעים ל-Gmail. נוספו מצבי שליחה/שגיאה + i18n (`f_sending`/`f_neterr`) he+en.
- **לקח מרכזי:** בדיקת הטופס מ-PowerShell/Chrome-headless נחסמת ע"י Cloudflare (403 "Just a moment" → נראה כשגיאת CORS); רק **Chrome headful** (puppeteer-core, `headless:false`, פרופיל) עבר — קיבל `200 success:true`. מבקרים אמיתיים לא נחסמים. לבדיקות Web3Forms עתידיות: headful בלבד.
- **State:** הושלם ואומת מקצה-לקצה (API success + מייל בתיבת Gmail). נותר רק שה-HTTPS cert יסתיים (אוטומטי).
- **TODO/הערה:** הדפים המשפטיים + ה-from_name עדיין מזכירים `info@thenext60.co.il` (דומיין שונה מ-next60.co.il). המשתמש ציין שהנמען ישתנה בעתיד — אז להחליף access key/דומיין מייל כשתהיה תיבה ב-next60.co.il.



## הסרת כוכבי המותג (2026-06-23) — deploy `ec761f8`
- **בקשה:** להוריד את אייקוני הכוכב מכל המקומות באתר, כולל בגרסה האנגלית, בלי להרוס דבר קיים.
- **בוצע:** הוסרו כל 5 תגיות `<img class="diamond float" src="assets/brand/star.svg">` ([index.html](../../index.html)) — 2 סביב ה-wordmark (Manifesto), 1 ליד Lifestyle & Wellness, 2 סביב כותרת שלושת עמודי התווך. נוקה גם ה-CSS שלא נותר בשימוש ([styles.css](../../styles.css)): `.diamond`, `.diamond.float`, `@keyframes floatY`.
- **למה בטוח:** הכוכבים היו `aria-hidden` ללא `data-i18n` (קישוט, אין מה לסנכרן ל-T.en); המכלים flex ממורכזים → הסרת אלמנטים שוליים שומרת מרכוז. אומת ב-grep (אין שאריות) + צילום הירו תקין.
- **State:** הושלם, סונכרן בשני העותקים, commit+push (`ec761f8`) אומת.

## הירו — שבירת שורה + scrim לקריאוּת (2026-06-23) — deploy `8fab0c6`
- **בקשה:** (1) שבירת שורה בכותרת המשנה של ההירו לפני "THE NEXT 60"; (2) שהבניין+שמיים+טקסט-על-השמיים ייראו כמו רפרנס המעצבת ויעבדו בכל הגדלים.
- **בוצע סופית:** (א) שבירת שורה (`<br>`) אחרי המשפט הראשון ב-he+en ([index.html](../../index.html) + [app.js](../../app.js)). (ב) סבב ארוך של ניסיונות להוריד/להרחיב את הבניין כך שכל הטקסט על השמיים (translateY → max(18vh,17vw) → height-based → הרחבת תמונה ל-2920×1460) — **כולם בוטלו לבקשת המשתמש** (`git checkout f535b94`), ההירו חזר למקור (cover/height:84%). (ג) הפתרון שנבחר לקריאוּת: **scrim** — חיזוק `.hero::before` (radial+linear navy) שמכהה את האזור מאחורי הטקסט ונמוג למטה, הבניין נשאר חי. אומת בהשוואה מצולמת לפני/אחרי.
- **לקח מרכזי:** תמונה ענייה בשמיים (יחס 1.78, בניין ממלא רוחב) → אי-אפשר full-bleed+שמיים-לטקסט+בניין-מלא יחד בשום CSS; הרחבת תמונה ידנית יוצרת תפרים. scrim הוא הפתרון הפרקטי. ראה [[next60-hero-bottom-anchor-sky-seam]].
- **State:** הושלם, סונכרן בשני העותקים, commit+push (`8fab0c6`) אומת. המשתמש אישר "בינתיים זה בסדר".

## תוכן משפטי מקצועי לדפים המשפטיים (2026-06-23) — deploy `f581d6c`
- **בקשה:** להיכנס לארבעת הדפים המשפטיים (תקנון, תנאי שימוש, מדיניות פרטיות, הצהרת נגישות) ולכתוב בהם תוכן מעולה כאילו נכתב ע"י עו"ד מקצועי.
- **בוצע:** הוחלף ה-placeholder בכל ארבעת הקבצים ([terms.html](../../terms.html), [tos.html](../../tos.html), [privacy.html](../../privacy.html), [accessibility.html](../../accessibility.html)) בתוכן משפטי מלא. **מדיניות הפרטיות** נכתבה בהלימה לתיקון 13 לחוק הגנת הפרטיות (בתוקף 14.8.2025 — אומת ב-WebSearch): מידע אוטומטי (IP/עוגיות/מזהה/מיקום) כמידע אישי, זכויות נושא מידע מורחבות, אבטחה, שמירה, קטינים. **הנגישות** עם תשתית חוקית מלאה (חוק שוויון 1998, תקנות 2013, ת"י 5568 / WCAG 2.0 AA). **תקנון** + **תנאי שימוש** עם היעדר-הצעה/הסתמכות (הנוסח המחייב=הסכם מכר חתום), קניין רוחני, דיוור (סעיף 30א), הגבלת אחריות, דין וסמכות שיפוט ירושלים. הוסרו תוויות ה-"טיוטה placeholder".
- **הערה לעו"ד:** התוכן מקצועי ומוכן, אך ערכים ספציפיים לחברה (ח.פ./שם תאגיד רשום/כתובת/טלפון/שם רכז נגישות) לא הוזנו (לא להמציא) — מנוסחים גנרית סביב "קבוצת בינה" + info@thenext60.co.il. מומלץ אימות עו"ד סופי לפני עלייה לאוויר.
- **State:** הושלם, HTML validated (תגיות מאוזנות, RTL נשמר), סונכרן לעותק ה-deploy, commit+push (`f581d6c`) אומת.

## תיקוני מלל + סנכרון דו-לשוני he↔en (2026-06-23) — deploy `673ed69`
- **בקשה:** (1) להסיר נקודה מכותרת ההירו, (2) להסיר "על" מתווית הניווט "על The Next 60", (3) לעבור על כל הגרסה האנגלית ולתקן ניסוחים שלא מתאימים לאופי האנגלי, (4) להגדיר כלל קבוע לסנכרן כל שינוי לאנגלית.
- **בוצע:** הסרת נקודה ב-`hero_title` (he+en) + הסרת "About"/"על" מ-`nav_about60` (he+en) ב-[app.js](../../app.js)+[index.html](../../index.html). ליטוש 5 ניסוחים אנגליים מילוליים: homogeneous→like-minded (×2), peak of standard→highest standard, shell of security→cocoon, shell of service→envelope, proprietary security→ownership security.
- **כלל קבוע:** זיכרון [[next60-bilingual-sync]] — כל שינוי תוכן חייב להשתקף ב-`T.en`, תרגום רעיון לא מילולי, אחידות פיסוק.
- **פער ידוע (follow-up):** `alt`/`aria-label`/`<title>`/`meta`/`og:description` ב-index.html לא עוברים i18n — נשארים עברית במצב אנגלי. תיקון דורש להרחיב את `setLanguage()` ל-attributes. לא בוצע (סיכון לשכבת a11y) — להציע למשתמש.
- **State:** הושלם, סונכרן בשני העותקים (זהים), `node -c` עבר, commit+push (`673ed69`) אומת.

## גלריית ההדמיות — 2 תמונות + מהירות (2026-06-23) — deploy `4cb7d39`
- **בקשה:** להוסיף 2 תמונות (`נקסט 60 1/2.png`) לרצועה הנעה בסקשן ההדמיות + להאיץ קצת את הגלילה, בלי לשבור כלום.
- **בוצע:** עיבוד התמונות ל-`gallery-5.jpg`/`gallery-6.jpg` (1000×562, cover-crop, ל-`assets/figma`); הוספת 2 `<figure>` ל-`#galleryTrack` ([index.html](../../index.html)); האצת `marquee 48s→42s` ([styles.css](../../styles.css)). מנגנון הלולאה (שכפול אוטומטי ב-app.js + `translateX(-50%)`) ללא שינוי.
- **QA Playwright:** 12 ילדים ברצועה (6+6 שכפול → לולאה חלקה), `animationDuration: 42s`, כל 6 ה-src נטענים, רינדור תקין.
- **State:** הושלם, סונכרן בשני העותקים, commit+push (`4cb7d39`) אומת.

## "על המודל הכלכלי" — המלל על השקיעה (2026-06-22) — deploy `a5aa429`
- **בקשה:** לדייק את המלל בסקשן `#economic` שיֵשב על השקיעה כמו ברפרנס, בלי לשבור כלום אחר שעובד.
- **בוצע (styles.css בלבד):** (1) `.economic-card max-width 620px→460px` — הכותרת נשברת ל-5 שורות ויושבת על פס-השמיים הימני, נקייה מהבניין (קצה-טקסט 49%→58% מול קצה-בניין 56%). (2) `.economic-bg img` — `object-position`/`transform-origin` מ-`right center`→`right top`: נחשפים שמיים מעל גג הבניין וקו-האופק יורד 60%→76%, כך שגם פסקת ההסבר נופלת על השמיים. הבניין נשאר דחוף שמאלה (scale 1.25 מעוגן-ימין — ללא שינוי).
- **QA Playwright:** 1804/1440/390 — כותרת על השקיעה, שמיים מעל הגג, פסקה קריאה; מובייל ו-EN ללא רגרסיה.
- **State:** הושלם, סונכרן בשני העותקים, commit+push (`a5aa429`) אומת. ראה זיכרון [[next60-object-position-no-shift-wide-ratio]].

## "על החברה" — פסקת סיום תואמת רפרנס (2026-06-22) — deploy `202abfa`
- **בקשה:** לדייק את טקסט סקשן `#about` שיהיה דומה יותר לתמונת הרפרנס, בלי לשבור כלום אחר.
- **בוצע:** המשפט "אנו מחויבים ליחס אישי..." נותק מ-`about_p2` והורחב ל-`about_p3` — פסקה שלמה מודגשת (ליווי ישיר מהתכנון עד מסירת המפתח, אחריות+חוסן פיננסי, אלפי דיירים מרוצים, שילוב אדריכלות+גב כלכלי). עברית+אנגלית ([app.js](../../app.js)), fallback ב-[index.html](../../index.html), עיצוב `.about-emph` (font-weight 600, לבן) ב-[styles.css](../../styles.css).
- **State:** הושלם, סונכרן בשני העותקים, commit+push (`202abfa`) אומת.

## פסיליטיז — תיאור מלא ב-hover (2026-06-22)
- **בקשה:** במצב רגיל כותרת+כותרת-משנה; ב-hover התמונה מתכהה והתיאור המלא נחשף. בלי לשבור כלום אחר.
- **בוצע:** הוספת `<p class="facility-desc">` ל-4 הכרטיסים ([index.html](../../index.html)), מפתחות i18n `fac1_d`–`fac4_d` עברית+אנגלית ([app.js](../../app.js)). CSS: כותרת-המשנה הפכה קבועה, התיאור הארוך הוא שנחשף ב-hover (`@media (hover:hover)`), `direction` לפי שפה; touch מציג הכל.
- **QA Playwright:** desc default `opacity:0/max-h:0` → hover `opacity:1/max-h:273px`; subtitle `0.95`; 0 console errors. צילומים אישרו ויזואלית.
- **דיוקי תוכן:** "ולאונג' עסקים מפואר" (במקום OCR "ולאפשר"), "פתרונות מסורתיים" (במקום "פינות מסורתיים"). אם המשתמש ירצה ניסוח אחר — לשנות.
- **State:** הושלם, סונכרן בשני העותקים. **טרם בוצע commit/push לעותק ה-deploy** (מתבצע בסגירת הסשן).

## שורת סטטיסטיקות תואמת Figma (2026-06-22) — deploy `32db4ec`
- **בקשה:** "תדייק את השורה מתחת לגלריה שתהיה דומה לתמונה" (crop של Frame 5 מ-Figma) — בלי לשבור כלום אחר.
- **מקור אמת:** `_figma_ref/nodes_60-899.json` → Frame 5 (1194×149): `cornerRadius:32`, stroke לבן 1px, fill לבן `opacity 0.10`, אפקט `GLASS`. מספרים `#d7d1c7` (=`--wolf`, **לא** לבן) fontSize 91 weight 500; תוויות `#d7d1c7` fontSize 60 weight 400.
- **שונה ב-`.stats`/`.stat-num`/`.stat-label` בלבד (שני העותקים):** רקע 0.06→**0.10**; נוסף `border 1px rgba(255,255,255,0.45)` + `backdrop-filter: blur(8px)`; `align-items:center`; מספרים `--white`→**`--wolf`**; תוויות הוגדלו `clamp(1.2rem,2.3vw,2rem)` + הוסרה ה-opacity (אטימות מלאה). radius כבר היה 32px.
- **לא נגעתי:** גלריה, סדר עמודות LTR, אנימציית הספירה, breakpoint מובייל.
- **פתוח (לא בוצע):** בתמונה `500+` ובקוד הסטטי `+500` — לא שינוי ויזואלי שהתבקש; הוצע למשתמשת והושאר.

## סקשן "קצת עלינו" — מכונת כתיבה בגלילה (2026-06-22) — deploy `ae39bde`→`ae0bcaf`
- **הערת מעצבת:** "אנימציית מכונת כתיבה — ככל שגוללים מופיע יותר טקסט, כותב את הטקסט ביחד עם הקורא."
- **מומש:** טקסט המניפסט מתפצל לתווים (`.tw-char` spans, recursive splitter ששומר `<strong>` ו-RTL). מיפוי גלילה→אינדקס תו, סמן זהב מהבהב (`.tw-char.cur::after`), הפיך. מחליף את `scroll-fade` הישן (הוסר מ-HTML/CSS/JS). מכבד `prefers-reduced-motion` + ווידג'ט a11y-nomotion. נבנה מחדש אחרי החלפת שפה דרך hook `window.__twSetup` ב-`setLanguage`.
- **תיקון חשוב (commit 2, `ae0bcaf`):** המשתמשת ביקשה כתיבה **רציפה מלמעלה למטה** ולא במקביל. שונה ממיפוי per-element (כל בלוק לפי מיקומו → כתיבה מקבילה) ל**רצף תווים גלובלי אחד**: התקדמות גלילה אחת דרך כל הבלוק (firstEl.top→lastEl.bottom, START 0.80→END 0.45 vh) → אינדקס תו יחיד → סמן יחיד.
- **באג שתפסתי:** השמטתי `ticking=false` בתחילת `update()` → שער ה-rAF נתקע אחרי הגלילה הראשונה (שקרתה ב-scrollY=0, p=0). תוקן.
- **פריסה תואמת רפרנס:** הכותרת "אבל אתם ממש לא מתכוונים להאט." מודגשת+מוגדלת (`.hl`, block); הגוף מ-2 עמודות→עמודה אחת ממורכזת; המשפט הסוגר הופרד ל-`brand_tag` (tagline מנטה). פוצל גם ב-i18n עברית+אנגלית.
- **QA:** Playwright 1440 — `monotonic=True` ב-5 נקודות גלילה (אין כתיבה מקבילה), סמן יחיד, עברית+אנגלית, 0 console. סונכרן ל-deploy copy + push.

## הירו תואם לרפרנס (2026-06-22, לילה) — deploy `01c6c3d`→`35d0953`
- **רקע:** המשתמש שלח screenshot של הרפרנס (= `hero-blue.jpg` המקורי, בהיר). הירו החי היה: כותרת לבנה, overlay כהה מאוד, בניין שתופס את כל הפריים.
- **תוקן (commit `01c6c3d`):** (1) כותרת לבן→קרם חם (טוקן `--cream-title #e7dcc7`); (2) התמונה עוגנה לתחתית (`position:absolute; bottom:0; height:84%; object-position:center bottom`) מעל רקע navy → בניין נמוך-מימין + שמיים פתוחים מעל הכותרת; (3) overlay הוקל מאוד (בניין+שמיים חיים); (4) הטקסט לשליש העליון (`justify-content:flex-start`).
- **באג שני שהמשתמש תפס (commit `35d0953`):** "פס כחול מתחת לסרגל". השורש: 16% העליונים שהתמונה (מעוגנת-תחתית) לא כיסתה נשארו רקע navy שטוח כהה (`#020e35`) — כהה בהרבה מגוון השמיים האמיתי של התמונה (`~#1e3c76`), נוצר תפר אופקי. **פתרון:** כיוונון `.hero-bg` background לגוון השמיים (`#20407c`) + `mask-image` fade רך בקצה העליון של התמונה + החלשת ה-wash. ראה [[next60-hero-bottom-anchor-sky-seam]].
- **QA:** Playwright 1903/1512/390 — קומפוזיציה תואמת ליעד, הפס נעלם, 0 console errors. סונכרן ל-deploy copy (diff נקי) + push.

## מיקום לוגואים (2026-06-22, ערב) — deploy `e56fdc3`→`d3f9310`
- **העיגול המסתובב בהירו** עבר מימין לשמאל: `inset-inline-start:6%` → `left:6%; right:auto` (physical, נשאר שמאל בשתי השפות). יושב בשמאל-תחתון ליד רמז ה-Scroll, בלי חפיפה.
- **שני הלוגואים למעלה אוחדו לימין:** הוצא `nav-seal` מ-`nav-actions` (שם היה `order:9` שדחף שמאלה) ונעטף עם ה-wordmark ב-`div.nav-brand` (flex). ב-RTL: "the Next 60" הכי מימין, הלוגו העגול משמאלו — בדיוק כבקשת המשתמש.
- **תזכורת dual-copy:** המשתמש "לא ראה שינוי" כי ערכתי רק Downloads; האתר החי מ-`projects\next60-minisite`. סונכרן (diff נקי) + push `d3f9310`. ראה [[next60-minisite-dual-copy-deploy]].
- **QA:** Playwright 1440 — אומת חזותית: עיגול מסתובב שמאל-תחתון; למעלה-ימין wordmark+seal בסדר הנכון.

## סבב תיקונים קטן (2026-06-22, מאוחר) — deploy `58c0f21`→`e56fdc3`
- **על החברה** — תמונת הרקע כמעט לא נראתה → opacity 0.55→0.92 + הקלת overlay (נוף העיר נראה, טקסט קריא).
- **קו גלילה גלובלי** — נוסף `.scroll-rail` קבוע בקצה שמאל שמתמלא 0→100% לפי `scrollY/max` (app.js), עם נקודה זוהרת; מחליף את הרמז שנתקע בהירו. אומת 0%↔100%, 0 console, 0 גלישה.
- **מודל כלכלי — הבניין שמאלה (תוקן פעמיים):** `object-position` לבד **לא הזיז** במידות רחבות (סקשן גבוה → יחס קונטיינר רחב מהתמונה → התמונה נכנסת במלואה, אין crop). הפתרון הסופי: `transform: scale(1.25)` + `transform-origin: right center` + `overflow:hidden` — zoom מעוגן-ימין שדוחק את הבניין שמאלה ומגדיל את השקיעה מימין. עובד בכל יחס. ראה זיכרון [[next60-object-position-no-shift-wide-ratio]].
- **פרויקטים** — הוחלפו ה-`src` בין בית וגן ↔ ארנונה (Embassy) שהיו הפוכים. השמות סמנטית עדיין "הפוכים" מול הכרטיס (לא שינינו קבצים) — אפשרי refactor שמות עתידי.
- **QA:** Playwright ב-1920/1440/390 — בכולם הבניין שמאלה, הטקסט על השקיעה, קריא; הקו 0→100%.

## סבב הערות המעצבת (2026-06-22)
- **בוצע ונפרס (`e6b1651`→`7a4a816`):** ~30 תיקונים מרשימת המעצבת. טיפוגרפיה (Rubik כחלופת-Almoni דרך `--font-main`); תפריט frosted-white+blur בגלילה; הירו (ריווח 105%, מניעת מילה יתומה, רמז "Scroll"+קו נגלל משמאל, נייד-כותרת-למעלה); scroll-fade בסקשן "קצת עלינו" (opacity 0.1→1 לפי viewport); כוכבי מותג 4-פינות (SVG, `#D7D1C7`); מירכוז stats; פרויקטים (pin, פינות 57px, תמונה לכל פרויקט); facilities (כותרת תמיד-גלויה + הסבר ב-hover); באנר לוגו זהב; **מודל כלכלי בלי רקע לבן** (טקסט לבן על השקיעה + overlay כיווני); עמודי תווך (מספרים בזהב לצד כותרת + תמונות שונות + **קו מחבר SVG מצויר-בגלילה** seal→about→שמאלה); about (הבלטות+badge stroke/blur+רקע נראה); CTA (placeholder ימין, ריווח, קישורי תנאים); פוטר (לוגו Quatro+קישור, קישורים לעמודים).
- **חדש:** 4 עמודים משפטיים (terms/tos/privacy/accessibility — RTL, **טיוטה לעו"ד**) + `legal.css`; **ווידג'ט נגישות** `a11y.js` (גודל פונט, ניגודיות, הדגשת קישורים, פונט קריא, עצירת אנימציות, איפוס; localStorage; בכל העמודים).
- **נכסים שנוצרו:** `assets/brand/` → star.svg, quatro.svg, pin.svg (data-URI mask), gold-logo.png (חולץ מ-`GOLD text .svg`).
- **QA:** 0 console errors, 0 גלישה אופקית (desktop+390), כל הבדיקות עברו (Playwright); ווידג'ט נגישות נבדק אינטראקטיבית.
- **חסמים/להמשך:** (1) **Almoni אמיתי** — צריך רישיון/woff2 (כרגע Rubik). (2) **טקסט משפטי** — placeholder עד עו"ד. (3) **אייקון מיקום מקורי + צילום אפקט הגלילה** — לא היו בתיקיית המעצבת; נוצרו גרסאות תואמות-מותג. (4) **טקסטי facilities מדויקים + URL לוגו Quatro** (כרגע qutro.co.il) + **"N" של ה-CTA מ-Figma** — לאמת מול המעצבת.

## (היסטוריה) רדיזיין Figma מלא 2026-06-17 — deploys `41810cb`→`e6b1651`

## Post-deploy QA + fixes (2026-06-17 לילה)
- **QA מקיף:** 0 console errors, 0 broken links, 0 i18n חסר, כל 17 הנכסים קיימים; אינטראקציות עברו (marquee, hover-reveal, תפריט, החלפת שפה).
- **רספונסיביות:** אפס גלישה אופקית ב-22 רוחבים (320–2560). תוקן: נקודת המבורגר 760→**980** (בטאבלט הקישורים נדחסו).
- **תיקוני באגים שהמשתמש תפס:** (1) **לוגו נמתח** — חסר `height:auto` (ה-HTML `height` מעך עם `object-fit:fill`); נוסף ל-bina/watermark/banner. (2) **נייד — תפריט שבור** (CTA נשבר/חפף) → `white-space:nowrap` + הסתרת CTA ≤760. (3) **נייד — כיתובי פסיליטיז נעלמו** (תלויי-hover) → `@media (hover:none)`. (4) **נייד — ריבוע כחול קבוע מימין** = פאנל off-canvas שהציץ 71px; השורש: `inset-inline-end:0` ב-RTL = `left:0`, אז `translateX(105%)` לא הספיק → עוגן ל-`inset-inline-start:0`.
- **State:** ✅ הכל נפרס ואומת (iPhone 13 emulation HE+EN). אתר חי תקין.



## This session (2026-06-17 ערב — רדיזיין נאמן-Figma דרך MCP)
- **רקע:** המשתמש סקר את האתר החי מול Figma ומצא ~19 פערים עיצוביים ("העיצוב לא תואם", ירידת איכות).
- **גישה לנכסים:** חיברנו את **Figma הרשמי MCP** (OAuth). ה-MCP דורש **הרשאת עריכה** — הקובץ המקורי (בעלות המעצב) מחזיר "no edit access". הפתרון: המשתמש **שכפל** את הקובץ אליו (file key חדש `UWegytpRjv7AKGKf0U6vop`). אז `download_assets` עבד — משכתי **wordmark כ-SVG** ו**הדמיות אותנטיות**. ⚠️ **תוכנית Starter חינמית → מגבלת tool-calls** נתקלה אחרי ~5 קריאות; לכן רק חלק מהנכסים נמשך (4 פסיליטיז + economic). שאר הנכסים (לוגואים וקטוריים, hero/cityscape/about-bg/bina/project) **עדיין PNG ראסטר**.
- **Done (מבני — כולם תוקנו ואומתו ב-render):** איחוד הגוון הירוק (#18221d, הוסר #1b2626 הבהיר) + gradient במניפסטו (#080f0d→#18221d); header — לוגו עגול לשמאל, wordmark מימין; "the Next 60" → wordmark; **גלריה = marquee מסתובב רציף** (החליף scroll-driven); stats סדר Figma (`direction:ltr`); פרויקטים סדר+קצוות עליונים-מעוגלים-תחתונים-ישרים; פסיליטיז — היפוך כותרת (פסקה שמאל/קורסיב ימין) + סדר 2×2 (`direction:ltr`) + **הדמיות MCP אותנטיות**; **עמודי תווך — שכתוב מלא: 2 עמודות + קו מפריד מרכזי + מספור-רקע 01/02/03 + scroll-reveal + תוקן נוסח עמוד 02**; מודל כלכלי — כרטיס+הדמיה 1920px; על-החברה overlay אחיד; contact גוונים תואמים.
- **סבב assets (REST — אחרי שהמשתמש סיפק FIGMA token):** מגבלת ה-MCP עקפה דרך REST על העותק (`/v1/files/{key}/images` לא חסום). נמשכו והוחלו: **wordmark וקטורי SVG** (node `60:1329`, fill #d7d1c7) → `assets/brand/wordmark.svg` בכל המופעים (הוסרו ה-CSS filters); **חותם** hi-res שקוף + **בינה** נקי שקוף; הדמיות hi-res ל-Hero (40183959), cityscape (7e099e29), about-bg (57eec368); **תמונת בניין משותפת** (9b529739) לשלושת כרטיסי הפרויקטים. סקריפט `_figma_pull.py` (token מ-env, לא נשמר).
- **State:** ✅ **3 deploys נדחפו** — `41810cb` (מבני) → `b996584` (assets אותנטיים) → `26abbb7` (changelog). GitHub Pages בנוי. כל ~19 הפערים שהמשתמש דיווח טופלו ואומתו ב-render.
- **⚠️ פתוח:** (1) **Blocker dual-copy** עדיין. (2) בינה הוא raster (אין וקטור ב-Figma) — שקוף+נקי, מספיק. (3) המגבלה של Figma MCP (Starter) — לעבודות assets עתידיות להשתמש ב-REST token, לא ב-MCP download_assets. ראה [[figma-rest-api-export-workflow]]. **נוקה:** `assets/figma_new/`.

## Previous session (2026-06-17 צהריים — התאמת פיקסל מלאה ל-Figma)
- **Done:** השוואה מלאה של האתר מול frame **Desktop-5** (node `60:898`) ב-Figma ותיקון **~8 פערים מבניים** שבהם הבנייה הקודמת סטתה מהעיצוב. נמצא שהבנייה של 2026-06-16 הייתה **פרשנות מפושטת**, לא נאמנה. תיקונים: Hero (הוסר navy → תמונה+overlay כהה+כותרת קרם); תפריט (לוגו קרם, CTA פיל קרם מלא, סדר+תווית "על The Next 60"); גלריה (4 תמונות marquee אופקי במקום 2 סטטיות); stats (פיל שקוף-דק מיושר ימין); כרטיסי פרויקטים (לוגו-מים קרם + כיתוב זכוכית מנטה); פסיליטיז (כיתוב ממורכז); מודל כלכלי (רקע-תמונה מלא + כרטיס בהיר טקסט-כהה); עמודי-תווך (מספרי 01/02/03 קרם בולטים במקום watermark זהב); על-החברה (כרטיס שקוף-לבן אנכי במקום ריבוע navy); קשר (תמונה אנכית + whatsapp).
- **שיטת עבודה:** ה-`/v1/images` (render) של Figma היה **חסום rate-limit כל הסשן** (429 גם על node בודד — מכסת רינדור מוצתה). עקפתי ע"י שליפת **spec מלא עם קואורדינטות מדויקות** (`/v1/files/.../nodes`) — מיקום/גודל/צבע/פונט/טקסט/gradient לכל אלמנט — ובניתי מהקואורדינטות. אימות ע"י **צילומי Playwright משלי ב-1440** (`_shot_sections.py`,`_verify2.py`). סקריפטים+spec ב-`_figma_ref/`,`_cmp/` (עותק עבודה בלבד).
- **סבב 2 (אחה"צ) — הערות ה-Figma:** המשתמש הצביע שפספסתי את **ה-comments** ב-Figma. שלפתי 31 הערות (`/v1/files/{key}/comments` — לא חסום, ב-`_figma_ref/comments.txt`). מומשו 4 הנפשות לפי הוראות הצוות (Lior Katz): **typewriter** במניפסטו (נכתב תו-אחר-תו בגלילה), **קרוסלת-גלילה** בגלריה (4 תמונות מתקדמות אופקית לפי scroll, לא marquee), **hover-reveal** בפסיליטיז (תמונה מתכהה + כיתוב מופיע), **"מסך מתרחב"** במודל הכלכלי (scaleX reveal). **תוקן Hero בחזרה ל-navy/כחול** (טעיתי שהורדתי — העיצוב כן כחול; תמונת `hero-blue.jpg` מ-gal4). תיקוני נוסח: "החיים", "הביטחון האישי והפיננסי", "מותג" (לא תת-מותג).
- **State:** ✅ commits `352dc33`+`49f4e54` נדחפו, live מאומת (markers + assets 200). QA: 5 viewports×HE/EN, 0 console, H-overflow נפתר.
- **⚠️ פתוח להמשך:** (1) **render ויזואלי 1:1** של Figma עדיין לא בוצע — מכסת `/v1/images` הייתה חסומה כל הסשן; שווה לרנדר Desktop-5 ל-overlay כשתתאפס. (2) פונט **Almoni** חסר (Assistant חלופה) → אם יסופקו קבצים, @font-face. (3) הערות Figma פתוחות שלא מומשו: הוספת טלפון/אימייל/שעות/מיקום בטופס קשר (דורש פרטי לקוח), "לוגו עגול חסר" ~y8503. (4) Blocker dual-copy עדיין קיים.

## Previous session (2026-06-16 — רדיזיין מלא לפי Figma)
- **Done:** נבנתה **גרסה חדשה לחלוטין** של האתר לפי קובץ Figma רשמי ("קבוצת בינה - Next 60", frame Desktop-5 1440×9275). שלפתי את העיצוב דרך Figma REST API (token חד-פעמי שהמשתמש סיפק — לא נשמר). שפה כהה יוקרתית: Hero navy `#01144f`, סקציות `#18221d`, טופס cream `#d7d1c7`, זהב accent. פונט `Assistant` (חלופת Almoni) + `Pinyon Script`. 12 סקציות. 18 הדמיות יוצאו מ-Figma ל-`assets/figma/` (3.7MB). קבצים חדשים: `index.html` + `styles.css` + `app.js`. הגרסה הישנה הועברה ל-`old/index.html` (נתיבי assets → `../assets/`).
- **State:** ✅ נפרס בשני העותקים, commit `32b4b03` נדחף, live מאומת — root=גרסה חדשה, /old/=ישנה (שניהם http 200). QA: desktop+mobile+EN, אפס שגיאות console.
- **טיפוגרפיה — לתשומת לב:** העיצוב משתמש ב-Almoni/Ploni/Mikhmoret (מאסטרפונט, מסחריים). השתמשנו ב-Assistant כחלופה חינמית. אם יוסיפו קבצי Almoni → @font-face לנאמנות 1:1.
- **⚠️ Blocker פעיל (עדיין):** שני עותקים מסונכרנים — כל עריכה דורשת `cp` לשני + push. [[next60-minisite-dual-copy-deploy]]. **Next:** לאחד לעותק אחד.

## Previous session (2026-06-02 — הדמיית Embassy Court)
- **Done:** הדמיית החוץ של Embassy Court הוחלפה מ-`beit-ha-yedidut-c02-people` ל-`beit-ha-yedidut-c04_0` (כרטיס + hero של סקציית עומק). תוקן חיתוך: `.proj-hero-strip` עבר מגובה קבוע ל-`aspect-ratio: 16/9` התואם לתמונה (1800×1012). [index.html:679, 1194, 1242].
- **State:** ✅ תוקן בשני העותקים, commits `a72c98c`+`3440fa7` נדחפו, GitHub Pages התעדכן.
- **⚠️ Blocker פעיל:** קיימים **שני עותקים מסונכרנים** — עותק עבודה ב-`Downloads\מיניסייט נקסט 60` (כולל docs/CHANGELOG) ו-repo deploy ב-`projects\next60-minisite`. כל עריכה דורשת `cp` לעותק השני + push. **Next:** לאחד לעותק אחד.
- פירוט מלא: journal `2026-06-02-next60-minisite.md`.

## Project Overview

**שם הפרויקט**: מיני-סייט תדמיתי למותג **The Next 60** (Boutique Living).

**מהות**: עמוד יחיד (Single-Page) דו-לשוני (עברית/אנגלית) המציג מותג גג של דיור בוטיק יוקרתי לגיל 60+ ושלושה פרויקטים שתחתיו. נועד לשמש כשער כניסה לפנייה ראשונית — לא מערכת הזמנות, לא CRM.

**Stack**: HTML5 + CSS3 inline + Vanilla JS. ללא frameworks, ללא build step. תמונות מעובדות עם Python+Pillow.

**🌐 Live URL**: https://hiyabh.github.io/next60-minisite/
**📦 Repo**: https://github.com/hiyabh/next60-minisite (public)

## Done (סשן 1 — 2026-05-26 — בנייה ראשונית)

הסייט נבנה מאפס: `index.html` (~2000 שורות, HTML+CSS+JS inline), 11 תמונות מעובדות ב-`assets/` (2.2MB), 10 סקציות עם פלטות צבעים נפרדות לכל פרויקט (זהב/נחושת/חרס). דו-לשוני HE/EN עם dictionary של ~120 מפתחות.

## Done (סשן 2 — 2026-05-27 — QA מקיף, תיקון 4 באגים, פריסה)

### בדיקות שבוצעו
QA אוטומטי עם Playwright על **5 viewports × 2 שפות** (10 קומבינציות): mobile 375, tablet 768, laptop 1024, desktop 1440, wide 1920 — כולל בדיקות navbar scrolled state, hover, focus, menu open/close, language switch, smooth scroll, lazy images.

### 4 באגים תוקנו

| # | חומרה | באג | תיקון |
|---|---|---|---|
| 1 | HIGH | תפריט המבורגר ב-LTR (אנגלית) לא נפתח בכלל — `html[dir="ltr"] .nav-links` (specificity 0,2,1) ניצח את `.nav-links.open` (0,2,0) | הוספת selectors מפורשים `html[dir="rtl"] .nav-links.open, html[dir="ltr"] .nav-links.open` + `visibility: hidden/visible` למצב סגור/פתוח (a11y) |
| 2 | MEDIUM | כפתור החלפת שפה הוסתר בתוך תפריט ההמבורגר על mobile/tablet — לא ניתן לגלות | הוצאת הכפתור מתוך `<ul class="nav-links">` ל-`<div class="nav-actions">` חדש — תמיד נראה ליד ההמבורגר |
| 3 | LOW | FOUC על טעינת שפה — כש-EN שמור ב-localStorage, מוצג HE לרגע | inline `<script>` ב-`<head>` שמגדיר `dir/lang` לפני first paint |
| 4 | HIGH | CLS — תמונות בלי `width/height` גרמו לשיפט בלייאאוט כש-lazy images נטענו; קליק "למד עוד" נחת בנקודה הלא נכונה | `width/height` על כל 13 ה-`<img>`, `scroll-margin-top: 80px` על כל section, מעבר מ-custom JS scroll ל-native `target.scrollIntoView({behavior:'smooth', block:'start'})` |

### תוצאות סופיות
- 0 באגים ב-QA אוטומטי
- 0 console errors / page errors
- כל 11 התמונות נטענות נכון
- CLS=0
- הפרסה הושלמה ל-GitHub Pages

### Deployment
- Repo נוצר: https://github.com/hiyabh/next60-minisite (public)
- רק `index.html` + `assets/` + `README.md` נופצו (לא ה-PDFים המקוריים)
- GitHub Pages הופעל על main branch
- Live בתוך ~30 שניות אחרי push

## Done (סשן 3 — 2026-05-28 — רענון מותג מלא לפי PDF חדש)

המשתמש סיפק `שפה עיצובית חדשה/the NEXT60.pdf` — מסמך מיתוג רשמי של 23 עמודים. הסייט יושר במלואו:

### נכסי לוגו חדשים
- חולצו 4 וריאציות מ-PDF (Pillow + PyMuPDF): `logo-full.png`, `logo-wordmark.png`, `logo-icon.png`, `favicon.png/.ico` — כולם PNG עם שקיפות נקייה (`_process_brand.py`)
- כל הקבצים ב-`assets/brand/` עם גרסאות @1x ו-@2x ל-srcset
- הוסר `assets/logo.jpg` הישן + `mix-blend-mode: multiply` שלא נדרש יותר

### פלטת צבעים חדשה (אחידה למותג)
| שם | HEX | שימוש |
|---|---|---|
| GOLD/BEIGE | `#806b59` | accent ראשי + Dania |
| RAW UMBER | `#4f2d1d` | Jerusalem accent |
| DARK GREEN | `#18221d` | Embassy + footer + dark surfaces |
| LIGHT GREEN | `#576865` | text-secondary |
| CREAM | `#f2f2f2` | bg-primary |
| TIMBER WOLF | `#d7d1c7` | bg-tertiary |
| LIGHT BLACK | `#2d302e` | text-primary |

### טיפוגרפיה
- **הוסף**: `Pinyon Script` (אקצנט יוקרתי — "boutique living" ב-hero), `Cinzel` (caps)
- **נשמר**: Cormorant Garamond (כתחליף ל-Athelas, דומה ויזואלית), Heebo (עברית)
- **הוסר**: Playfair Display (זמין כ-fallback בלבד)
- **חדש**: classes `.h-script`, `.h-caps` ל-typography עקבית

### Tagline + קופי
- "The Art of Excellence" הוסר; הוחלף ב-"Boutique Living" בלבד
- `<title>` עודכן ל-"The Next 60 — Boutique Living"
- `hero_sub` נכתב מחדש (קצר ומדויק יותר): "דיור בוטיק יוקרתי לגיל 60+. שלושה פרויקטים בירושלים — בעלות מלאה, קהילה אמיתית, שירות ללא פשרות."
- footer_tagline עודכן ב-HE+EN

### תוצאות
- ✅ QA Playwright: 0 באגים על 5 viewports × 2 שפות (10 קומבינציות)
- ✅ 0 console errors מקומית + לייב
- ✅ כל הלוגואים והפונטים נטענים נכון
- ✅ פריסה ל-GitHub Pages עברה תוך 30 שניות
- ✅ smoke test לייב עבר: title נכון, logos טוענים, language toggle עובד

### Files חדשים
- `_process_brand.py` — סקריפט Pillow לעיבוד הלוגואים מ-PDF
- `assets/brand/*.png` (×8) — לוגואים מעובדים @1x + @2x
- `assets/brand/favicon.ico` + `favicon.png`
- `_brand_after/`, `_live_after/` — צילומי "אחרי" לאישור ויזואלי

## Done (סשן 4 — 2026-06-02 — הסרת 6 בלוקי תוכן לפי בקשת לקוח)

המשתמש ביקש להסיר 6 בלוקים מהאתר. כולם הוסרו (112 שורות), פריסה אומתה לייב:
1. הוד דניה — "מתקנים ושירותים" (h3 + facilities-grid)
2. Embassy Court — "פלטת החומרים" (materials-row)
3. Embassy Court — "מתקנים ושטחים משותפים" (facilities-grid)
4. Embassy Court — "חלוקת קומות" (floors-list)
5+6. כל סקשן הוד ירושלים המעמיק (#proj-jerusalem) — כולל "שירותים ומתקנים מרכזיים". המשתמש הבהיר: "המופע השני" = הסקשן המעמיק, לא הכרטיס.

ניקוי קישורים שבורים: הוסר CTA "למד עוד" מכרטיס הוד ירושלים + קישור "הוד ירושלים" בפוטר (שניהם הצביעו ל-#proj-jerusalem שנמחק). **כרטיס הוד ירושלים ברשת הפרויקטים נשמר** (המופע הראשון).

- מבנה אומת: 7 sections פתוחים/סגורים מאוזנים, 0 קישורים שבורים.
- מפתחות i18n של הבלוקים שהוסרו נותרו במילון (לא בשימוש, לא מזיקים) — ניקוי אופציונלי עתידי.
- Commit `e0ba8b0` (112 deletions, 0 insertions — diff אטומי). נפרס ל-GitHub Pages, אומת עם WebFetch.

## Done (סשן 5 — 2026-06-02 — החלפת פרויקטים: חיד״א + לב הכרם)

המשתמש ביקש להחליף את הפרויקטים המוצגים. כעת מוצגים שלושה: **החיד״א · Embassy Court · לב הכרם**. הוסרו **הוד דניה** (כרטיס + סקציית עומק מלאה) ו**הוד ירושלים** (כרטיס + כל שאריות ה-CSS/i18n היתומות מסשן 4).

### החלטות שאושרו עם הלקוח (AskUserQuestion)
1. **כרטיסים בלבד** לשני הפרויקטים החדשים (ללא סקציות עומק) — ה-CTA שלהם מפנה ל-`#contact` ("לפרטים ↓").
2. **תוכן מחומרי המקור** — חולץ מ-`פרוייקטים/לב הכרם/מצגת מסחר לב הכרם.pptx` + `לב הכרם עידו הרצל 108.pdf`, ומ-`פרוייקטים/החיד''א/` (הסכם מכר סרוק → פרטים מוגבלים).
3. **תמונות מעובדות מהמקור** — `chida-hero.jpg` (1800×1200, הדמיית לילה) + `lev-hakerem-hero.jpg` (1200×1600, מגדל בית הכרם).

### מה בוצע
- `_process_images.py`: JOBS עודכן — הוסרו 5 jobs של דניה + job של ירושלים + job של logo; נוספו 2 jobs חדשים.
- HTML: כרטיס 1 → החיד״א, כרטיס 3 → לב הכרם (Embassy ללא שינוי). סקציית עומק הוד דניה נמחקה כליל.
- CSS: הוסרו `--proj-dania-*`, `--proj-jerusalem-*`, ובלוק `.proj-jerusalem` היתום (~100 שורות). צבעי ה-card-tags נותקו למשתנים גנריים `--tag-active-bg` / `--tag-heritage-bg`.
- i18n: מפתחות `card_chida_*`, `card_kerem_*`, `card_contact_cta`, `footer_chida/kerem` נוספו ל-HE+EN; כל מפתחות `dania_*`/`jerusalem_*`/`card_dania_*`/`card_jerusalem_*`/`footer_dania/jerusalem` הוסרו. **פריטי i18n: 118 ב-HE = 118 ב-EN, פאריטי מלא.**
- פוטר: עודכן ל-החיד״א / Embassy / לב הכרם.

### אימות
- ✅ ולידציה: 0 קישורים שבורים (`#proj-dania`/`#proj-jerusalem`), 0 מפתחות i18n יתומים, כל `data-i18n` מוגדר.
- ✅ QA Playwright (5 viewports × 2 langs): 0 bugs, 0 console errors, 0 page errors. (`_qa.py` עודכן — הוסרו ה-section IDs המתים מהרשימה.)
- ✅ פריסה ל-GitHub Pages — commit `2814076`. אומת לייב: index + 2 תמונות hero מחזירים HTTP 200, 0 רפרנסים ישנים.
- גרסה: **1.2.0** (MINOR — תוכן user-visible חדש).

## State

- ✅ הסייט פונקציונלי לחלוטין, חי באינטרנט — מציג **החיד״א · Embassy Court · לב הכרם**
- ✅ ניתן לשתף את ה-URL הציבורי: https://hiyabh.github.io/next60-minisite/
- ✅ כל הנכסים בתיקיית הפרויקט המקומית `c:/Users/hiya/Downloads/מיניסייט נקסט 60/` (לא git repo)
- ✅ קבצי הפריסה (clean copy) ב-`C:/Users/hiya/projects/next60-minisite/` (git repo)
- ✅ הפרויקטים המקוריים (PDFים, מצגות, תמונות מקור) לא נגעו — הם בתיקיית `פרוייקטים/`
- ⚠️ דומיין עדיין `hiyabh.github.io/next60-minisite/` — אם יידרש דומיין מותג (לדוגמה `thenext60.co.il`), צריך לרכוש ולהוסיף CNAME

## Next steps (אופציונליים — לסשנים עתידיים)

- **דומיין מותגי**: לרכוש `thenext60.co.il` (או דומה) ולהגדיר CNAME ב-GitHub Pages
- ✅ ~~**לוגו PNG עם שקיפות**~~ — בוצע בסשן 3 (מ-PDF המיתוג הרשמי)
- **טופס יצירת קשר אמיתי**: כרגע ה-CTAs פותחים `mailto:`/`tel:`. אם יידרש טופס שמירה ב-DB → Vercel Functions / Formspree
- **סקציות עומק לחיד״א/לב הכרם**: כרגע כרטיסים בלבד. כשיהיו יותר חומרים (הדמיות פנים, מפרט, פרטי קשר) אפשר להוסיף deep-dive sections כמו ל-Embassy. ללב הכרם יש 2 מצגות מסחר עשירות לחילוץ.
- **אימות פרטי החיד״א**: ההסכם הסרוק לא נתן מספרי דירות/כתובת מדויקת — הקופי תיאורי בכוונה. לאמת מול הלקוח לפני העמקה.
- **SEO meta tags**: OpenGraph, Twitter Cards, structured data (LocalBusiness/Residence)
- **Analytics**: Google Analytics / Plausible
- **שימוש ב-Cinzel ל-numerals (01/02/03)**: כעת ב-Cormorant — אפשר להעלות יוקרה

## Blockers

אין.

## Key Decisions Made

1. **Hero בהיר ולא כהה** — תואם ללוגו JPEG על רקע קרם מובנה
2. **3 סקציות עומק במקום modals** — לפי בקשת המשתמש
3. **פלטה אחידה למותג עם accent שונה לכל פרויקט** (סשן 3 — עודכן): Dania=Gold, Embassy=Dark Green, Jerusalem=Raw Umber. כל הצבעים מהפלטה הרשמית החדשה.
4. **הוד ירושלים — אותם מאפיינים אבל זהות ויזואלית שונה** — layout שונה, פלטה חמה יותר, sepia treatment על התמונה
5. **GitHub Pages** ולא Vercel — אין צורך ב-backend, GitHub Pages חינמי ופשוט, gh CLI כבר מחובר
6. **Public repo** — נדרש ל-GitHub Pages חינמי, ואין סודות בקוד
7. **Athelas → Cormorant Garamond** (סשן 3) — Athelas הוא Apple system font, לא ב-Google Fonts; Cormorant Garamond דומה ויזואלית
8. **Logo wordmark לnavbar, full לhero, icon לfooter** (סשן 3) — קומפקטיות בנav, נוכחות חזקה ב-hero, badge קטן בfooter

## Files

| Path | Purpose |
|---|---|
| `index.html` | הסייט המלא — ניתן לפתוח ישירות |
| `assets/*.jpg` | 10 תמונות פרויקטים (logo.jpg הוסר בסשן 3) |
| `assets/brand/*.png` | 8 קבצי לוגו מותג (full/wordmark/icon × @1x@2x) + favicon |
| `_process_images.py` | סקריפט build לעיבוד תמונות (רץ פעם אחת) |
| `_process_brand.py` | סקריפט Pillow לעיבוד לוגואים מ-PDF (סשן 3) |
| `שפה עיצובית חדשה/the NEXT60.pdf` | מסמך מיתוג רשמי (סשן 3) |
| `_verify.py` | סקריפט Playwright לאימות בסיסי |
| `_qa.py` | סקריפט QA מקיף — 5 viewports × 2 langs |
| `_probe.py` | סקריפט debug לבדיקת scroll/CLS |
| `_smoke_live.py` | smoke test מול ה-URL הציבורי |
| `_screenshots/*`, `_qa_shots/*`, `_live_shots/*` | צילומי מסך לאישור ויזואלי |
| `_qa_report.json` | דוח QA אוטומטי |
| `docs/memory/primer.md` | קובץ זה |
| `פרוייקטים/*` | נכסי המקור (PDF, PPTX, תמונות) — לא נוגעים |
| `C:/Users/hiya/projects/next60-minisite/` | git repo נקי שנפרס ל-GitHub Pages |
