# Changelog

כל שינוי משמעותי לפרויקט מתועד כאן.
פורמט: [Keep a Changelog](https://keepachangelog.com) · גרסאות: [SemVer](https://semver.org).

## [Unreleased]

### Changed (שונה) — 2026-06-17 · התאמת פיקסל מלאה ל-Figma
- **השוואה מלאה מול עיצוב ה-Figma המקורי (frame Desktop-5) ותיקון ~8 פערים מבניים** שבהם הבנייה הקודמת סטתה מהעיצוב:
  - **Hero** — הוסר רקע ה-navy הכחול (לא קיים בעיצוב); כעת תמונת בניין עם overlay כהה-נייטרלי וכותרת בצבע קרם, כבעיצוב.
  - **תפריט** — לוגו בצבע קרם (במקום זהב), כפתור "צרו קשר" כפיל קרם מלא, וסדר/תווית פריטים לפי העיצוב ("על The Next 60").
  - **גלריה** — מ-2 תמונות סטטיות ל-**רצועה אופקית נגללת (marquee) של 4 הדמיות** (חזית · ספא · סלון · מתחם לילה), עוצרת ב-hover.
  - **סטטיסטיקות** — פיל שקוף-לבן דק עם יישור לימין (במקום קופסה ממוסגרת ממורכזת).
  - **כרטיסי פרויקטים** — תמונה כמעט-ריבועית + לוגו-מים קרם + כיתוב על פאנל זכוכית (מיקום · שם · תיאור) בגוון מנטה.
  - **פסיליטיז** — כיתוב ממורכז (כותרת + תת-כותרת) במקום פינתי-תחתון.
  - **המודל הכלכלי** — רקע-תמונה מלא + כרטיס בהיר עם טקסט כהה בצד, במקום split כהה.
  - **עמודי התווך** — מספרי 01/02/03 ב-Pinyon Script **קרם מלא ובולט** (במקום watermark זהב חיוור).
  - **על החברה** — כרטיס badge שקוף-לבן אנכי (במקום ריבוע navy), בצד הנכון.
  - **טופס קשר** — תמונה אנכית + אייקון WhatsApp ליד הכותרת.
- אוחדו תוויות הסקציות (eyebrow) לפילים שקופים-לבנים תואמי-עיצוב, כולל וריאנט כהה למודל הכלכלי.

### Added (תוסף)
- **גרסה חדשה לחלוטין של האתר לפי עיצוב ה-Figma הרשמי** ("קבוצת בינה - Next 60") — שפה עיצובית יוקרתית כהה (Hero בכחול navy `#01144f`, סקציות ירוק-כהה `#18221d`, טופס cream, accent זהב) המחליפה את הפלטה הקודמת. הגרסה החדשה היא כעת העמוד הראשי — [index.html](index.html), [styles.css](styles.css), [app.js](app.js).
- 12 סקציות חדשות נאמנות לעיצוב: Hero, מניפסטו "The Next 60", גלריה + סטטיסטיקות (100,000 / 500+ / 3), שלושה פרויקטים (לב הכרם · בית וגן · THE EMBASSY), Lifestyle & Wellness (4 facilities), באנר נוף ירושלים, המודל הכלכלי, שלושת עמודי התווך (01/02/03), על קבוצת בינה, טופס "בואו נדבר", ו-footer.
- 18 הדמיות חדשות יוצאו ישירות מ-Figma ואופטמו — [assets/figma/](assets/figma/).
- הנפשות: scroll-reveal מדורג, count-up לסטטיסטיקות, Ken-Burns ב-Hero, hover zoom לכרטיסים, סיבוב לחותם, מספרי 01/02/03 ב-Pinyon Script, ניווט עם section-spy, ותמיכת `prefers-reduced-motion`.
- טיפוגרפיה: `Assistant` (חלופה חינמית ל-Almoni) + `Pinyon Script` לכותרות אנגלית והמספור.
- טופס יצירת קשר עם ולידציה בצד-לקוח ושליחת mailto.

### Changed (שונה)
- **הגרסה הקודמת (זהב/קרם) הועברה ל-[/old/](old/index.html)** ונשמרת כגיבוי נגיש.
- האתר נותר דו-לשוני (HE/EN) עם טוגל ושמירת בחירה ב-localStorage; כל התוכן החדש תורגם לאנגלית.
- הדמיית החוץ של **Embassy Court** הוחלפה בהדמיה החדשה (`beit-ha-yedidut-c04_0`) — מופיעה בכרטיס הפרויקט ובתמונת ה-hero של סקציית העומק — [index.html](index.html).

### Fixed (תוקן)
- תמונת ה-hero של Embassy Court הוצגה חתוכה (גובה קבוע + `object-fit: cover`); רצועת ה-hero כעת ביחס `16:9` התואם לתמונה, כך שכל הבניין נראה במלואו — [index.html](index.html).
- צבע הגופן בתגיות הפרויקטים (בייזום/בשיווק/בתכנון) שונה ללבן לקריאות מלאה על רקע העיגולים החומים — [index.html](index.html).

## [1.2.0] — 2026-06-02

### Changed (שונה)
- **החלפת הפרויקטים המוצגים** באתר לפי בקשת הלקוח — כעת מוצגים שלושה: **[החיד״א](index.html)**, **Embassy Court**, **לב הכרם** (בסדר זה).
- כרטיסי החיד״א ולב הכרם הם כרטיסים בלבד (ללא סקציית עומק); ה-CTA שלהם מפנה ל-`#contact`. Embassy Court נשמר במלואו עם סקציית העומק.
- קישורי הפוטר עודכנו: החיד״א, Embassy Court, לב הכרם.

### Added (תוסף)
- `assets/chida-hero.jpg` — הדמיית לילה של בניין החיד״א (מתוך חומרי המקור).
- `assets/lev-hakerem-hero.jpg` — הדמיית מגדל לב הכרם בשכונת בית הכרם.
- תוכן כרטיסים דו-לשוני (HE/EN) לשני הפרויקטים החדשים, מבוסס על מצגות המסחר וחומרי המקור.

### Removed (הוסר)
- **הוד דניה** — כרטיס + סקציית העומק המלאה + פלטת ה-CSS + מפתחות i18n + תמונות `hod-dania-*`.
- **הוד ירושלים** — כרטיס + שאריות CSS/i18n יתומות (`.proj-jerusalem`, `jerusalem_*`) + תמונה `hod-jerusalem.jpg`.

## [1.1.0] — 2026-05-28

### Changed (שונה)
- **רענון מותג מלא** לפי PDF מיתוג רשמי `שפה עיצובית חדשה/the NEXT60.pdf`
- **לוגו**: הוחלף JPEG ישן ב-4 וריאציות PNG עם שקיפות מקצועית — full / wordmark / icon / favicon
- **פלטת צבעים אחידה**: עברה מ-3 פלטות נפרדות (זהב/נחושת/חרס) לפלטה רשמית אחת — RAW UMBER, TIMBER WOLF, CREAM, LIGHT/DARK GREEN, GOLD/BEIGE. Accent שונה לכל פרויקט מתוך אותה משפחה.
- **טיפוגרפיה**: נוסף `Pinyon Script` (אקצנט יוקרתי בכותרת hero) + `Cinzel` (caps). הוסר Playfair Display (זמין רק כ-fallback). Cormorant Garamond נשאר כתחליף ל-Athelas.
- **Tagline**: "The Art of Excellence" → "Boutique Living" בכל המופעים (title, meta, footer, dictionary HE/EN)
- **hero subtitle נכתב מחדש** — קצר וברור יותר: "דיור בוטיק יוקרתי לגיל 60+. שלושה פרויקטים בירושלים..."
- **navbar logo**: עבר ל-wordmark קומפקטי (במקום הלוגו המלא הישן)
- **footer logo**: עבר ל-badge עגול קטן עם פילטר עדין על רקע ירוק כהה

### Added (תוסף)
- `assets/brand/` — תיקייה חדשה עם 8 קבצי לוגו (@1x + @2x)
- `assets/brand/favicon.ico` + `favicon.png` — favicon למותג
- Class חדש `.h-script` ל-Pinyon Script accents
- Class חדש `.h-caps` ל-Cinzel uppercase
- "boutique living" ב-Pinyon Script מעל ה-h1 ב-hero (גם HE גם EN)
- `_process_brand.py` — סקריפט Pillow לעיבוד לוגואים מ-PDF

### Removed (הוסר)
- `assets/logo.jpg` הישן — הוחלף ב-`assets/brand/*.png` עם שקיפות
- `mix-blend-mode: multiply` על `.nav-logo img`, `.hero-logo`, `.footer-logo img` — לא נדרש יותר עם PNG שקופים

### Fixed (תוקן)
- שיפור drop-shadow על logo בfooter (`drop-shadow` במקום `mix-blend-mode: screen` הישן)
- Contrast משופר על כל הטקסטים — הפלטה החדשה עם dark-green-on-cream נותנת WCAG AA+

## [1.0.0] — 2026-05-27

### Added (תוסף)
- בנייה ראשונית של הסייט — `index.html` עם 10 סקציות
- 3 פרויקטים: הוד דניה, Embassy Court, הוד ירושלים
- דו-לשוני HE/EN עם dictionary של ~120 מפתחות
- 11 תמונות מעובדות ב-`assets/`
- 5 viewports × 2 שפות QA אוטומטי עם Playwright (`_qa.py`)
- פריסה ל-GitHub Pages — https://hiyabh.github.io/next60-minisite/

### Fixed (תוקן בסשן 2 — 2026-05-27)
- תפריט המבורגר ב-LTR לא נפתח (specificity bug) — selectors מפורשים
- כפתור החלפת שפה הוסתר ב-mobile — הוצא ל-`<div class="nav-actions">`
- FOUC על טעינת שפה — inline `<script>` ב-`<head>` לפני first paint
- CLS = 0 — הוספת `width/height` לכל ה-`<img>` + `scroll-margin-top` לכל section
