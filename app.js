/* ============================================================
   The Next 60 — interactions: i18n, nav, reveal, count-up, form
   ============================================================ */
(function () {
  "use strict";

  /* ---------- i18n dictionary ---------- */
  var T = {
    he: {
      skip: "דלג לתוכן הראשי",
      intro_skip: "דלג",
      nav_about60: "The Next 60", nav_company: "על החברה", nav_economic: "מודל כלכלי",
      nav_facilities: "פסיליטיז", nav_projects: "פרויקטים", nav_contact: "צרו קשר",
      scroll: "גלול",
      hero_title: "הפרק הבא שלכם מתחיל עכשיו",
      hero_sub: "החיים מעבר לגיל 60 לא מאטים - הם מתעצבים אל שיא הסטנדרט.<br>THE NEXT 60: תפיסה מעודכנת למגורי יוקרה לבני 60+. כאן, חוויית מגורים אקסקלוסיבית וקהילה הומוגנית נבחרת, פוגשות את הביטחון האישי והפיננסי המוחלט של נכס בבעלותכם הפרטית המלאה.",
      brand_eyebrow: "קצת עלינו",
      brand_head: "הגעתם לשלב שבו אתם כבר לא צריכים להוכיח דבר לאף אחד, <strong class=\"hl\">אבל אתם ממש לא מתכוונים להאט.</strong>",
      brand_p1: "NEXT 60 נולד עבור הקהל שלא רוצה להתפשר, שמביא איתו תרבות עשירה, סטייל אישי ודרישות בלתי מתפשרות מהחיים.",
      brand_p2: "לא מדובר בעוד פתרון מגורים מסורתי או מסגרת של דיור מוגן רגילה, אלא באבולוציה של הלייפסטייל העירוני. כאן, האדריכלות המופתית והמערכות החכמות ביותר הן רק המעטפת לחוויית חיים מלאה: קהילה הומוגנית של אנשים החולקים תחומי עניין דומים, חיי חברה ותרבות תוססים, ומעל הכל -",
      brand_tag: "מעטפת ביטחון אישי מוחלט ושקט נפשי שמלווה אתכם בכל יום מחדש. זהו המקום שבו העצמאות המלאה שלכם פוגשת את הסטנדרט הגבוה ביותר שלכם.",
      stat_sqm: "מ״ר של חווית מגורים", stat_units: "יחידות דיור", stat_projects: "פרוייקטים",
      projects_eyebrow: "פרויקטים",
      projects_title: "שלוש שכונות. שלוש יצירות ארכיטקטוניות.",
      projects_sub: "מיקומי מפתח אסטרטגיים המבטיחים שילוב נדיר בין פסטורליות ירוקה, נגישות עירונית וערך נדל\"ני מוצק.",
      proj1_title: "לב הכרם", proj1_desc: "חוויית בוטיק בלב העיר, שכונה המשלבת היסטוריה ירושלמית עם קצב מודרני.", proj1_loc: "שכונת בית הכרם",
      proj2_title: "החיד\"א", proj2_desc: "שכונת בית וגן עם נוף עוצר נשימה, וחוויית מגורים תורנית, שלווה, ומלאת השראה.", proj2_loc: "שכונת בית וגן",
      proj3_title: "THE EMBASSY COURT", proj3_desc: "מגורי עילית אקסקלוסיביים בנקודת המפגש של שלוש מהשכונות הוותיקות, המוערכות והמבוקשות בירושלים - המושבה הגרמנית, בקעה וארנונה.", proj3_loc: "שכונת בקעה",
      proj3_watch: "צפו בסרטון", video_close: "סגור", video_title: "סרטון פרויקט - THE EMBASSY COURT",
      fac_eyebrow: "פסיליטיז",
      fac_sub: "המרחבים המשותפים בקומפלקסים של NEXT 60 מעוצבים כהרחבה טבעית של ביתכם הפרטי. יצרנו עבורכם מתקנים ושירותים בסטנדרט הבינלאומי הגבוה ביותר, כדי להעניק נוחות מוחלטת, עניין תרבותי ושלווה יומיומית מותאמת אישית בכל פרויקט.",
      fac1_t: "Wellness Pavilion", fac1_s: "הרמוניה של גוף ונפש",
      fac1_d: "מתחם בריאות וספא יוקרתי הכולל בריכת שחייה מקורה ומחוממת הפתוחה 365 ימים בשנה, חדר כושר מאובזר בטכנולוגיה המתקדמת ביותר, וסטודיו אינטימי לשיעורי יוגה, פילאטיס ותנועה.",
      fac2_t: "Elite Culture", fac2_s: "תוכן, השראה ומפגש",
      fac2_d: "הבמה שלכם לתרבות עשירה וחיי חברה תוססים בתוך הקהילה האיכותית של המתחם. בין המרחבים העומדים לרשותכם: אולם קולנוע אינטימי, ספריות הגות שקטות, ולאונג' עסקים מפואר המאפשר עבודה ופגישות דיסקרטיות בנינוחות מוחלטת.",
      fac3_t: "Panoramic Hosting", fac3_s: "תרבות האירוח הירושלמית",
      fac3_d: "הבית שלכם נשאר המקום המושלם לארח בו את המשפחה והאנשים האהובים עליכם. מתחמי ה-Rooftop המעוצבים שלנו משקיפים אל קו הרקיע והנוף ההיסטורי עוצר הנשימה של ירושלים, לצד פתרונות מסורתיים הכוללים רחבת סוכה משותפת, רחבת ידיים ומפוארת.",
      fac4_t: "Absolute Peace", fac4_s: "מעטפת שירות וביטחון",
      fac4_d: "החופש והאמינות מתחילים כשכל הפרטים מנוהלים עבורכם בקפידה מאחורי הקלעים. הקומפלקסים מציעים לובי מרהיב עם עמדת קבלה ואבטחה 24/7, שירותי תחזוקה יסודיים למבנה ולדירות הפרטיות, ושירותי קונסיירז' אישיים המרכזים מערך רפואי פרטי ודיסקרטי ברקע.",
      banner_head: "אדריכלות ירושלמית, תרבות חיים מתקדמת וביטחון קנייני מלא בטאבו.",
      eco_eyebrow: "על המודל הכלכלי",
      eco_title: "משנים את חוקי המשחק - משקיעים בנדל\"ן ירושלמי, לא בפיקדון נשחק",
      eco_p1: "בניגוד למודלים המסורתיים של הדיור המוגן, המבוססים על פיקדונות ענק הנשחקים מדי שנה ומאבדים מערכם, NEXT 60 מציגה מודל נדל\"ני טהור, בטוח ומשתלם. חוויית חיים חסרת פשרות השומרת על ההון המשפחתי שלכם ומציגה את פתרון המגורים האחראי ביותר בישראל.",
      pillars_title: "שלושת עמודי התווך לשקט הנפשי שלכם",
      pillar1_t: "נכס נדל\"ני",
      pillar1_d: "ב-NEXT 60 אינכם שוכרים דירה ואינכם מפקידים הון שנעלם. אתם רוכשים נכס נדל\"ני יוקרתי, הרשום על שמכם בטאבו באופן מלא ופרטי.",
      pillar2_t: "צמיחה פיננסית והגנה משחיקה", pillar2_sub: "(ההשקעה נשארת במשפחה)",
      pillar2_d: "בזמן שבשוק הדיור המוגן המסורתי הפיקדון הולך ומצטמצם לטובת החברה המפעילה, ב-NEXT 60 אין שחיקה של ההון שלכם. השקעתכם מעוגנת בלב שוק מגורי העילית החזק של ירושלים. ערך הנכס משתבח עם השנים, נשאר חלק בלתי נפרד מההון המשפחתי, וניתן למכירה או להשכרה על פי רצונכם.",
      pillar3_t: "דמי ניהול אטרקטיביים וחופש פעולה מלא",
      pillar3_d: "המודל של NEXT 60 מציע פריצת דרך גם בהוצאות השוטפות: דמי הניהול מותאמים ושקופים, ובתמורה אתם מקבלים את מעטפת השירותים המלאה - אבטחה, תחזוקה, חיי תרבות עשירים ומערך Wellness מתקדם על פי דרישה אישית. כל זאת, מבלי לוותר על אף זכות או גמישות משפטית השמורה לבעלי נכסים פרטיים.",
      about_eyebrow: "על החברה",
      about_title: "המוניטין שמאחורי החזון.",
      about_lead: "הניסיון, היציבות והחוסן הכלכלי שמעניקים לכם שקט נפשי מלא.",
      about_p1: "מאחורי מותג העילית NEXT 60 עומדת <strong>קבוצת בינה (Bina Group)</strong> - מחברות הייזום, הנדל\"ן והבנייה המובילות והאיתנות בישראל.<br>עם מוניטין של למעלה משני עשורים, הקבוצה מציגה <strong>ניסיון עשיר ומוכח</strong> בייזום, הקמה וניהול של שכונות מגורים, מתחמי דיור מוגן, מבני ציבור, מסחר ותעשייה באזורי הביקוש החזקים בירושלים ובמרכז הארץ.",
      about_p2: "קבוצת בינה, אשר בנתה ואכלסה בגאווה <strong>אלפי יחידות דיור</strong> לאורך השנים, מביאה כעת את כל הידע ההנדסי, המומחיות הניהולית והסטנדרטים התפעוליים המחמירים ביותר אל קטגוריית מגורי היוקרה של ירושלים.",
      about_p3: "אנו מחויבים ליחס אישי, שקיפות מלאה ומצוינות בלתי מתפשרת. כקבוצה המלווה באופן ישיר וצמוד כל פרויקט משלב התכנון ועד למסירת המפתח והניהול השוטף, אנו מעניקים ללקוחותינו אחריות וחוסן פיננסי - כפי שמעידים אלפי דיירים מרוצים. איתנו, אתם נהנים מהשילוב המושלם בין אדריכלות מתקדמת לבין גב כלכלי איתן ובטוח.",
      team_eyebrow: "מאחורי התכנון",
      team_title: "כשניסיון של עשורים פוגש שפה עיצובית חדשה.",
      team_sub: "את התכנון של The Next 60 מובילים שני משרדים משלימים: משרד אדריכלים ירושלמי ותיק, שמביא ארבעה עשורים של ידע ומבט רחב, לצד סטודיו בוטיק צעיר לעיצוב פנים, שמביא שפה עכשווית ומדויקת. מהמעטפת ועד הפרט הקטן ביותר.",
      team_a_role: "האדריכל", team_a_name: "י. מולכו אדריכלים", team_a_since: "פועל משנת",
      team_a_bio: "בראשות האדריכל יעקב מולכו, משרד י. מולכו אדריכלים פועל משנת 1978 ומחזיק בתיק עבודות מגוון החוצה קשת רחבה של תחומי אדריכלות. בתחום המגורים תכנן המשרד פרויקטים בכל קנה מידה, מבתים פרטיים ועד בנייני מגורים ומתחמים גדולים בני מאות יחידות דיור. בתחום מבני הציבור נמנים על עבודותיו בתי ספר, מתנ\"סים, מעונות יום, בתי מלון, קניונים ומוסדות אקדמיים, לצד מתחמי משרדים, תעשייה ולוגיסטיקה בהיקפים נרחבים.",
      team_b_role: "אדריכלית הפנים", team_b_mark: "LIR STOTZKY STUDIO", team_b_name: "סטודיו ליר סטוצקי",
      team_b_bio: "סטודיו ליר סטוצקי הוא סטודיו בוטיק לעיצוב המתמחה באדריכלות פנים ובעיצוב לבתי יוקרה, למרחבים ציבוריים ולמשרדים. הסטודיו מלווה פרויקטים מורכבים ללקוחות פרטיים ועסקיים, מתוך אמונה באיזון הרמוני בין חזון יצירתי לבין ביצוע מדויק וממושמע. הגישה הקפדנית של הסטודיו משלבת דיוק אדריכלי עם אסתטיקה מזוקקת, ויוצרת חוויות מרחביות פונקציונליות ועיצוב על-זמני בעל חתימה מקורית ושפה עיצובית ייחודית ומדויקת.",
      team_quote: "כאן היוקרה אינה נמדדת בראוותנות, אלא בהרמוניה שבין האסתטיקה לפונקציונליות, וביצירת תחושה חמה של שלווה ושייכות שעוטפת את חוויית המגורים כולה.",
      team_quote_name: "ליר סטוצקי", team_quote_role: "אדריכלית פנים",
      team_lir_alt: "ליר סטוצקי, אדריכלית הפנים של הפרויקט",
      contact_title: "בואו נדבר",
      f_fname: "שם פרטי *", f_lname: "שם משפחה *", f_phone: "טלפון *", f_email: "אימייל",
      f_project: "הפרויקט המועדף עליכם *", f_message: "הודעה", f_message_ph: "תכתוב את ההודעה שלך ...",
      f_consent: "אני מסכים/ה ל<a href=\"tos.html\" target=\"_blank\" rel=\"noopener\">תנאי השימוש</a> ול<a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">מדיניות הפרטיות</a>", f_submit: "שלח",
      f_err: "נא למלא את כל שדות החובה (שם פרטי, שם משפחה, טלפון, פרויקט ואישור התנאים).",
      f_sending: "שולח…",
      f_neterr: "אירעה תקלה בשליחה. נסו שוב בעוד רגע, או צרו קשר טלפונית.",
      f_ok: "תודה! פנייתכם נשלחה. ניצור קשר בהקדם.",
      footer_copy: "כל הזכויות שמורות", footer_terms: "תקנון אתר", footer_tos: "תנאי שימוש",
      footer_privacy: "מדיניות פרטיות", footer_a11y: "הצהרת נגישות", footer_credit: "איפיון אסטרטגיה ועיצוב:",
      footer_facebook: "עמוד הפייסבוק של נקסט 60", footer_instagram: "עמוד האינסטגרם של נקסט 60"
    },
    en: {
      skip: "Skip to main content",
      intro_skip: "Skip",
      nav_about60: "The Next 60", nav_company: "About Us", nav_economic: "Economic Model",
      nav_facilities: "Facilities", nav_projects: "Projects", nav_contact: "Contact",
      scroll: "Scroll",
      hero_title: "Your next chapter begins now",
      hero_sub: "Life beyond 60 doesn't slow down - it refines itself to the highest standard.<br>THE NEXT 60: a renewed vision for luxury living for ages 60+. Here, an exclusive living experience and a hand-picked, like-minded community meet the absolute financial security of a property held in your own full private ownership.",
      brand_eyebrow: "A little about us",
      brand_head: "You've reached the stage where you no longer have to prove anything to anyone - <strong class=\"hl\">but you have absolutely no intention of slowing down.</strong>",
      brand_p1: "NEXT 60 was born for those who refuse to compromise, who bring with them a rich culture, personal style, and uncompromising demands of life.",
      brand_p2: "This is not another traditional housing solution or an ordinary assisted-living framework - it is an evolution of the urban lifestyle. Here, exemplary architecture and the smartest systems are merely the envelope for a complete life experience: a like-minded community of people who share similar interests, a vibrant social and cultural life, and above all -",
      brand_tag: "a cocoon of absolute personal security and peace of mind that accompanies you every single day. This is where your full independence meets your highest standard.",
      stat_sqm: "sqm of living experience", stat_units: "housing units", stat_projects: "projects",
      projects_eyebrow: "Projects",
      projects_title: "Three neighborhoods. Three architectural masterpieces.",
      projects_sub: "Strategic key locations ensuring a rare blend of green pastoral surroundings, urban accessibility, and solid real estate value.",
      proj1_title: "Lev HaKerem", proj1_desc: "A boutique experience in the heart of the city - a neighborhood blending Jerusalem heritage with a modern rhythm.", proj1_loc: "Beit HaKerem neighborhood",
      proj2_title: "HaChida", proj2_desc: "Beit VeGan neighborhood with breathtaking views and a serene, inspiring, tradition-rich living experience.", proj2_loc: "Beit VeGan neighborhood",
      proj3_title: "THE EMBASSY COURT", proj3_desc: "Exclusive elite living at the meeting point of three of Jerusalem's most established, valued and sought-after neighborhoods - the German Colony, Baka, and Arnona.", proj3_loc: "Baka neighborhood",
      proj3_watch: "Watch the film", video_close: "Close", video_title: "Project film - THE EMBASSY COURT",
      fac_eyebrow: "Facilities",
      fac_sub: "The shared spaces in NEXT 60 complexes are designed as a natural extension of your private home. We created facilities and services at the highest international standard, to deliver absolute comfort, cultural interest, and personally tailored daily serenity in every project.",
      fac1_t: "Wellness Pavilion", fac1_s: "Harmony of body and mind",
      fac1_d: "A luxury health and spa complex featuring a heated indoor pool open 365 days a year, a gym equipped with the most advanced technology, and an intimate studio for yoga, pilates and movement classes.",
      fac2_t: "Elite Culture", fac2_s: "Content, inspiration and gathering",
      fac2_d: "Your stage for a rich culture and a vibrant social life within the community. Among the spaces at your disposal: an intimate cinema, quiet reading lounges, and an elegant business lounge for discreet work and meetings in complete comfort.",
      fac3_t: "Panoramic Hosting", fac3_s: "The Jerusalem hosting culture",
      fac3_d: "Your home remains the perfect place to host family and the people you love. Our designed rooftop spaces overlook the skyline and the breathtaking historic views of Jerusalem, alongside traditional touches including a shared sukkah deck, spacious and elegant.",
      fac4_t: "Absolute Peace", fac4_s: "An envelope of service and security",
      fac4_d: "Freedom and reliability begin when every detail is managed for you, behind the scenes. The complexes offer a magnificent lobby with a 24/7 reception and security desk, thorough maintenance for the building and private apartments, and personal concierge services backed by a private, discreet medical array.",
      banner_head: "Jerusalem architecture, an advanced living culture, and full ownership security, registered in the land registry.",
      eco_eyebrow: "About the economic model",
      eco_title: "Changing the rules of the game - investing in Jerusalem real estate, not in an eroding deposit",
      eco_p1: "Unlike traditional assisted-living models based on enormous deposits that erode and lose value year after year, NEXT 60 presents a pure, secure and worthwhile real estate model. An uncompromising life experience that protects your family's capital and offers the most responsible housing solution in Israel.",
      pillars_title: "The three pillars of your peace of mind",
      pillar1_t: "A real estate asset",
      pillar1_d: "At NEXT 60 you don't rent an apartment and you don't deposit capital that vanishes. You purchase a luxury real estate asset, registered in your name in the land registry, fully and privately.",
      pillar2_t: "Financial growth and erosion protection", pillar2_sub: "(the investment stays in the family)",
      pillar2_d: "While in the traditional assisted-living market the deposit erodes and shrinks in the operator's favor, at NEXT 60 there is no erosion of your capital. Your investment is anchored in the heart of Jerusalem's strong luxury-living market. The asset's value appreciates over the years, remains an integral part of the family capital, and can be sold or rented at your discretion.",
      pillar3_t: "Attractive management fees and full freedom of action",
      pillar3_d: "The NEXT 60 model offers a breakthrough in ongoing costs too: management fees are tailored and transparent, and in return you receive the full service envelope - security, maintenance, a rich cultural life and an advanced Wellness program on personal demand. All this, without giving up any right or legal flexibility reserved for private property owners.",
      about_eyebrow: "About us",
      about_title: "The reputation behind the vision.",
      about_lead: "The experience, stability and financial strength that give you complete peace of mind.",
      about_p1: "Behind the NEXT 60 elite brand stands <strong>Bina Group</strong> - one of Israel's leading and most robust development, real estate and construction companies.<br>With a reputation spanning over two decades, the group brings <strong>rich, proven experience</strong> in initiating, building and managing residential neighborhoods, assisted-living complexes, public buildings, commerce and industry across the strongest demand areas of Jerusalem and central Israel.",
      about_p2: "Bina Group, which has proudly built and populated <strong>thousands of housing units</strong> over the years, now brings all of its engineering knowledge, managerial expertise and most rigorous operational standards to Jerusalem's luxury-living category.",
      about_p3: "We are committed to a personal touch, full transparency and uncompromising excellence. As a group that directly and closely accompanies every project - from the planning stage through key handover and ongoing management - we provide our clients with accountability and financial strength, as thousands of satisfied residents can attest. With us, you enjoy the perfect blend of advanced architecture and a solid, secure financial backbone.",
      team_eyebrow: "Behind the design",
      team_title: "Where decades of experience meet a new design language.",
      team_sub: "The Next 60 is shaped by two complementary studios: a veteran Jerusalem architecture firm bringing four decades of knowledge and a wide perspective, alongside a young boutique interior studio bringing a precise, contemporary language. From the envelope down to the smallest detail.",
      team_a_role: "The Architect", team_a_name: "J. Molho Architects", team_a_since: "Active since",
      team_a_bio: "Led by renowned architect Jacob Molho, the J. Molho Architects firm has been active since 1978, building a diverse portfolio across a wide range of architectural disciplines. In the residential sector, the firm has designed projects of all scales, from private homes to apartment buildings and large-scale complexes comprising hundreds of units. The firm's public building portfolio includes schools, community centers, daycare facilities, hotels, malls, and academic institutions, as well as large-scale office, industrial, and warehouse developments.",
      team_b_role: "The Interior Architect", team_b_mark: "LIR STOTZKY STUDIO", team_b_name: "Lir Stotzky Studio",
      team_b_bio: "Lir Stotzky Studio is a boutique design studio specializing in interior architecture and design for luxury residences, public spaces, and offices. The studio undertakes a range of complex projects for private and corporate clients and believes in pursuing a harmonious balance between creative vision and disciplined execution. The studio's meticulous approach blends architectural precision and refined aesthetics, creating functional spatial experiences and timeless designs with an original signature, expressing a unique, precise design language.",
      team_quote: "Here, luxury is not expressed through extravagance, but in the harmony between aesthetics and functionality, and in the creation of a warm sense of calmness and belonging that envelops the entire residential experience.",
      team_quote_name: "Lir Stotzky", team_quote_role: "Interior architect",
      team_lir_alt: "Lir Stotzky, the project's interior architect",
      contact_title: "Let's talk",
      f_fname: "First name *", f_lname: "Last name *", f_phone: "Phone *", f_email: "Email",
      f_project: "Your preferred project *", f_message: "Message", f_message_ph: "Write your message ...",
      f_consent: "I agree to the <a href=\"tos.html\" target=\"_blank\" rel=\"noopener\">terms of use</a> and <a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">privacy policy</a>", f_submit: "Send",
      f_err: "Please fill in all required fields (first name, last name, phone, project and consent).",
      f_sending: "Sending…",
      f_neterr: "Something went wrong while sending. Please try again in a moment, or contact us by phone.",
      f_ok: "Thank you! Your message has been sent. We'll be in touch shortly.",
      footer_copy: "All rights reserved", footer_terms: "Site terms", footer_tos: "Terms of use",
      footer_privacy: "Privacy policy", footer_a11y: "Accessibility statement", footer_credit: "Strategy & design by:",
      footer_facebook: "The Next 60 Facebook page", footer_instagram: "The Next 60 Instagram page"
    }
  };

  var current = localStorage.getItem("next60-lang") || "he";

  function setLanguage(lang) {
    current = lang;
    localStorage.setItem("next60-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    var dict = T[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v === undefined) return;
      // allow trusted inline markup (emphasis, <br>, legal links) from the dictionary
      if (v.indexOf("<") !== -1) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-ph")];
      if (v !== undefined) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-alt")];
      if (v !== undefined) el.setAttribute("alt", v);
    });
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "he" ? "EN" : "עב";
    // text nodes were just rewritten — rebuild the scroll typewriter spans
    if (window.__twSetup) window.__twSetup();
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    setLanguage(current);

    /* language toggle */
    var langToggle = document.getElementById("langToggle");
    if (langToggle) langToggle.addEventListener("click", function () {
      setLanguage(current === "he" ? "en" : "he");
    });

    /* Embassy Court video modal — self-hosted, loads only on click */
    (function videoModal() {
      var modal = document.getElementById("embassyModal");
      if (!modal) return;
      var video = modal.querySelector(".video-modal__video");
      var SRC = "assets/video/embassy-court.mp4";
      var lastFocus = null;

      function open(trigger) {
        lastFocus = trigger || document.activeElement;
        if (!video.querySelector("source")) {
          var s = document.createElement("source");
          s.src = SRC; s.type = "video/mp4";
          video.appendChild(s);
          video.load();
        }
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        var closeBtn = modal.querySelector(".video-modal__close");
        if (closeBtn) closeBtn.focus();
      }

      function close() {
        try { video.pause(); video.currentTime = 0; } catch (e) {}
        var s = video.querySelector("source");
        if (s) { video.removeChild(s); video.load(); } // drop the network request + free memory
        modal.hidden = true;
        document.body.style.overflow = "";
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      }

      document.querySelectorAll("[data-video-open]").forEach(function (btn) {
        btn.addEventListener("click", function () { open(btn); });
      });
      modal.querySelectorAll("[data-video-close]").forEach(function (el) {
        el.addEventListener("click", close);
      });
      document.addEventListener("keydown", function (e) {
        if (modal.hidden) return;
        if (e.key === "Escape") { close(); return; }
        if (e.key !== "Tab") return;
        var f = modal.querySelectorAll("button, video, [href], [tabindex]:not([tabindex='-1'])");
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
    })();

    /* Intro logo splash — plays once per session, muted, then fades into the hero.
       The head gate already added .intro-skip for repeat visitors / reduced-motion. */
    (function introSplash() {
      var splash = document.getElementById("introSplash");
      if (!splash) return;
      if (document.documentElement.classList.contains("intro-skip")) {
        splash.parentNode.removeChild(splash);
        return;
      }
      var video = splash.querySelector(".intro-splash__video");
      var HARD_CAP_MS = 8000; // never trap the visitor, even if the video stalls
      var FADE_LEAD = 0.7;    // begin the dissolve this many seconds before the clip ends
      var FADE_MS = 950;      // keep in sync with the CSS transition duration
      var done = false, timer = null;

      function finish() {
        if (done) return;
        done = true;
        clearTimeout(timer);
        try { sessionStorage.setItem("next60-intro-seen", "1"); } catch (e) {}
        splash.classList.add("intro-splash--out");
        document.body.style.overflow = "";
        setTimeout(function () { if (splash.parentNode) splash.parentNode.removeChild(splash); }, FADE_MS);
      }

      document.body.style.overflow = "hidden";
      var s = document.createElement("source");
      s.src = "assets/video/logo-intro.mp4"; s.type = "video/mp4";
      video.appendChild(s);
      video.load();
      var p = video.play();
      if (p && p.catch) p.catch(finish); // autoplay blocked → skip immediately

      // Tie the fallback to the real duration once known so a slow load isn't cut short;
      // the hard cap (set below) guards the case where metadata never arrives.
      video.addEventListener("loadedmetadata", function () {
        clearTimeout(timer);
        timer = setTimeout(finish, video.duration * 1000 + 800);
      });
      // Start the dissolve slightly before the clip ends so the logo melts into the hero
      // instead of stopping dead and then fading out.
      video.addEventListener("timeupdate", function () {
        if (video.duration && video.currentTime >= video.duration - FADE_LEAD) finish();
      });
      video.addEventListener("ended", finish);
      splash.querySelector(".intro-splash__skip").addEventListener("click", finish);
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") finish(); });
      timer = setTimeout(finish, HARD_CAP_MS);
    })();

    /* navbar scroll state */
    var nav = document.getElementById("nav");
    function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 50); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* hamburger */
    var navToggle = document.getElementById("navToggle");
    var navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        var open = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(open));
      });
    }

    /* smooth-scroll + close mobile menu + active link */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (navLinks) navLinks.classList.remove("open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      });
    });

    /* scroll reveal + staggered children + count-up trigger */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
        setTimeout(function () {
          el.classList.add("in");
          if (el.hasAttribute("data-typewriter")) typewriter(el);
        }, delay);
        if (el.querySelector) {
          el.querySelectorAll("[data-count]").forEach(countUp);
        }
        if (el.hasAttribute("data-count")) countUp(el);
        io.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll(".reveal, .reveal-expand").forEach(function (el) { io.observe(el); });

    /* scroll-driven typewriter (designer: "a typewriter that writes the text
       together with the reader as they scroll"). Each .tw-scroll element is split
       into per-character spans; the element's position in the reading band
       (START→END vh) maps to how many characters are written, with a blinking
       caret at the write head. Reversible — scrolling up un-writes the text.
       Honors prefers-reduced-motion (text shown in full, no split). */
    (function () {
      var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // viewport fractions anchoring the write window: start when the first line
      // is ~80% down the screen, finish once the last line has risen to ~45%.
      var START = 0.80, END = 0.45;
      var chars = [];                // flat, in DOM order across all .tw-scroll
      var firstEl = null, lastEl = null;

      // recurse, wrapping each text character in a span; keep element wrappers
      // (e.g. <strong>) so emphasis + RTL order are preserved.
      function splitChars(node, out) {
        [].slice.call(node.childNodes).forEach(function (child) {
          if (child.nodeType === 3) {
            var text = child.nodeValue, frag = document.createDocumentFragment(), i;
            for (i = 0; i < text.length; i++) {
              var s = document.createElement("span");
              s.className = "tw-char";
              s.textContent = text[i];
              out.push(s);
              frag.appendChild(s);
            }
            node.replaceChild(frag, child);
          } else if (child.nodeType === 1) {
            splitChars(child, out);
          }
        });
      }

      function setup() {
        chars = []; firstEl = null; lastEl = null;
        if (REDUCE) return;
        var els = document.querySelectorAll(".tw-scroll");
        els.forEach(function (el) { splitChars(el, chars); el.classList.add("tw-ready"); });
        if (els.length) { firstEl = els[0]; lastEl = els[els.length - 1]; }
        update();
      }

      // single continuous write head: one global progress over the whole block
      // maps to one character index, so text writes strictly top→bottom (one caret).
      function update() {
        ticking = false;
        if (REDUCE || !chars.length || !firstEl) return;
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var sy = window.scrollY || window.pageYOffset || 0;
        var topAbs = firstEl.getBoundingClientRect().top + sy;
        var botAbs = lastEl.getBoundingClientRect().bottom + sy;
        var startScroll = topAbs - START * vh;
        var endScroll = botAbs - END * vh;
        var p = (sy - startScroll) / ((endScroll - startScroll) || 1);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        var n = Math.round(p * chars.length);
        for (var i = 0; i < chars.length; i++) {
          var s = chars[i];
          var on = i < n;
          if (s._on !== on) { s.classList.toggle("on", on); s._on = on; }
          var cur = (i === n - 1 && p > 0 && p < 1);
          if (s._cur !== cur) { s.classList.toggle("cur", cur); s._cur = cur; }
        }
      }

      var ticking = false;
      function onTw() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
      window.addEventListener("scroll", onTw, { passive: true });
      window.addEventListener("resize", onTw, { passive: true });
      // re-split after a language switch rewrites the text nodes
      window.__twSetup = setup;
      setup();
    })();

    /* site-wide scroll progress rail — fills top→bottom with overall page
       scroll progress so a single gold line advances down the page with you. */
    (function () {
      var fill = document.querySelector(".scroll-rail-fill");
      if (!fill) return;
      var ticking = false;
      function update() {
        ticking = false;
        var doc = document.documentElement;
        var max = (doc.scrollHeight - window.innerHeight) || 1;
        var p = window.scrollY / max;
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        fill.style.height = (p * 100).toFixed(2) + "%";
      }
      function onRail() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
      window.addEventListener("scroll", onRail, { passive: true });
      window.addEventListener("resize", onRail, { passive: true });
      update();
    })();

    /* connector line — draws itself (stroke-dashoffset) as it scrolls through
       the viewport: descends from the rotating seal, reaches About, turns left. */
    (function () {
      var path = document.getElementById("connectorPath");
      if (!path || !path.getTotalLength) return;
      var wrap = path.closest(".pillar-connector");
      var len = path.getTotalLength();
      path.style.strokeDasharray = len;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        path.style.strokeDashoffset = 0; return;
      }
      path.style.strokeDashoffset = len;
      var ticking = false;
      function draw() {
        ticking = false;
        var r = wrap.getBoundingClientRect();
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var start = vh * 0.85, end = vh * 0.35;
        var pr = (start - r.top) / (start - end);
        pr = pr < 0 ? 0 : pr > 1 ? 1 : pr;
        path.style.strokeDashoffset = len * (1 - pr);
      }
      function onDraw() { if (!ticking) { ticking = true; requestAnimationFrame(draw); } }
      window.addEventListener("scroll", onDraw, { passive: true });
      window.addEventListener("resize", onDraw, { passive: true });
      draw();
    })();

    /* gallery — continuously rotating marquee carousel (CSS-driven).
       Duplicate the figures once so the loop is seamless. */
    var gallery = document.getElementById("gallery");
    var galTrack = document.getElementById("galleryTrack");
    if (gallery && galTrack) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gallery.classList.add("swipe");
      } else {
        Array.prototype.slice.call(galTrack.children).forEach(function (fig) {
          var clone = fig.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          galTrack.appendChild(clone);
        });
      }
    }

    /* active section highlight */
    var sections = [].slice.call(document.querySelectorAll("main section[id]"));
    var links = {};
    document.querySelectorAll(".nav-link").forEach(function (l) {
      links[l.getAttribute("href")] = l;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var l = links["#" + en.target.id];
          if (l) {
            Object.keys(links).forEach(function (k) { links[k].classList.remove("active"); });
            l.classList.add("active");
          }
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(function (s) { spy.observe(s); });

    /* contact form — submits to Web3Forms (no backend needed) */
    var form = document.getElementById("contactForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("formStatus");
      var submitBtn = form.querySelector("button[type=submit]");
      var ok = form.fname.value.trim() && form.lname.value.trim() &&
               form.phone.value.trim() && form.project.value && form.consent.checked;
      if (!ok) {
        status.style.color = "#8a1f1f";
        status.textContent = T[current].f_err;
        return;
      }
      status.style.color = "";
      status.textContent = T[current].f_sending;
      if (submitBtn) submitBtn.disabled = true;
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      }).then(function (res) { return res.json(); }).then(function (data) {
        if (data.success) {
          status.style.color = "";
          status.textContent = T[current].f_ok;
          form.reset();
        } else {
          status.style.color = "#8a1f1f";
          status.textContent = T[current].f_neterr;
        }
      }).catch(function () {
        status.style.color = "#8a1f1f";
        status.textContent = T[current].f_neterr;
      }).then(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  });

  /* typewriter — types the text in as it enters view (Figma design note) */
  var TW_SPEED = 26; // ms per character
  function typewriter(el) {
    if (el.dataset.twDone) return;
    el.dataset.twDone = "1";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var full = el.textContent;
    el.style.minHeight = el.offsetHeight + "px"; // reserve space, avoid jump
    el.textContent = "";
    el.classList.add("typing");
    var i = 0;
    (function tick() {
      el.textContent = full.slice(0, i);
      if (i < full.length) { i++; setTimeout(tick, TW_SPEED); }
      else { el.classList.remove("typing"); }
    })();
  }

  /* count-up animation */
  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1600, start = null;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = (suffix === "+" ? "+" : "") + target.toLocaleString("en-US"); return; }
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = (suffix === "+" ? "+" : "") + val.toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
