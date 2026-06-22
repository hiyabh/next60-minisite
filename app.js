/* ============================================================
   The Next 60 — interactions: i18n, nav, reveal, count-up, form
   ============================================================ */
(function () {
  "use strict";

  /* ---------- i18n dictionary ---------- */
  var T = {
    he: {
      skip: "דלג לתוכן הראשי",
      nav_about60: "על The Next 60", nav_company: "על החברה", nav_economic: "מודל כלכלי",
      nav_facilities: "פסיליטיז", nav_projects: "פרויקטים", nav_contact: "צרו קשר",
      scroll: "גלול",
      hero_title: "הפרק הבא שלכם מתחיל עכשיו.",
      hero_sub: "החיים מעבר לגיל 60 לא מאטים – הם מתעצבים אל שיא הסטנדרט. THE NEXT 60: תפיסה מעודכנת למגורי יוקרה לבני 60+. כאן, חוויית מגורים אקסקלוסיבית וקהילה הומוגנית נבחרת, פוגשות את הביטחון האישי והפיננסי המוחלט של נכס בבעלותכם הפרטית המלאה.",
      brand_eyebrow: "קצת עלינו",
      brand_head: "הגעתם לשלב שבו אתם כבר לא צריכים להוכיח דבר לאף אחד, <strong class=\"hl\">אבל אתם ממש לא מתכוונים להאט.</strong>",
      brand_p1: "NEXT 60 נולד עבור הקהל שלא רוצה להתפשר, שמביא איתו תרבות עשירה, סטייל אישי ודרישות בלתי מתפשרות מהחיים.",
      brand_p2: "לא מדובר בעוד פתרון מגורים מסורתי או מסגרת של דיור מוגן רגילה, אלא באבולוציה של הלייפסטייל העירוני. כאן, האדריכלות המופתית והמערכות החכמות ביותר הן רק המעטפת לחוויית חיים מלאה: קהילה הומוגנית של אנשים החולקים תחומי עניין דומים, חיי חברה ותרבות תוססים, ומעל הכל –",
      brand_tag: "מעטפת ביטחון אישי מוחלט ושקט נפשי שמלווה אתכם בכל יום מחדש. זהו המקום שבו העצמאות המלאה שלכם פוגשת את הסטנדרט הגבוה ביותר שלכם.",
      stat_sqm: "מ״ר של חווית מגורים", stat_units: "יחידות דיור", stat_projects: "פרוייקטים",
      projects_eyebrow: "פרויקטים",
      projects_title: "שלוש שכונות. שלוש יצירות ארכיטקטוניות.",
      projects_sub: "מיקומי מפתח אסטרטגיים המבטיחים שילוב נדיר בין פסטורליות ירוקה, נגישות עירונית וערך נדל\"ני מוצק.",
      proj1_title: "לב הכרם", proj1_desc: "חוויית בוטיק בלב העיר, שכונה המשלבת היסטוריה ירושלמית עם קצב מודרני.", proj1_loc: "שכונת בית הכרם",
      proj2_title: "בית וגן", proj2_desc: "שכונת בית וגן עם נוף עוצר נשימה, וחוויית מגורים תורנית, שלווה, ומלאת השראה.", proj2_loc: "שכונת בית וגן",
      proj3_title: "THE EMBASSY", proj3_desc: "מגורי עילית אקסקלוסיביים בנקודת המפגש של שלוש מהשכונות הוותיקות, המוערכות והמבוקשות בירושלים – המושבה הגרמנית, בקעה וארנונה.", proj3_loc: "שכונת ארנונה",
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
      pillar3_d: "המודל של NEXT 60 מציע פריצת דרך גם בהוצאות השוטפות: דמי הניהול מותאמים ושקופים, ובתמורה אתם מקבלים את מעטפת השירותים המלאה – אבטחה, תחזוקה, חיי תרבות עשירים ומערך Wellness מתקדם על פי דרישה אישית. כל זאת, מבלי לוותר על אף זכות או גמישות משפטית השמורה לבעלי נכסים פרטיים.",
      about_eyebrow: "על החברה",
      about_title: "המוניטין שמאחורי החזון.",
      about_lead: "הניסיון, היציבות והחוסן הכלכלי שמעניקים לכם שקט נפשי מלא.",
      about_p1: "מאחורי מותג העילית NEXT 60 עומדת <strong>קבוצת בינה (Bina Group)</strong> – מחברות הייזום, הנדל\"ן והבנייה המובילות והאיתנות בישראל.<br>עם מוניטין של למעלה משני עשורים, הקבוצה מציגה <strong>ניסיון עשיר ומוכח</strong> בייזום, הקמה וניהול של שכונות מגורים, מתחמי דיור מוגן, מבני ציבור, מסחר ותעשייה באזורי הביקוש החזקים בירושלים ובמרכז הארץ.",
      about_p2: "קבוצת בינה, אשר בנתה ואכלסה בגאווה <strong>אלפי יחידות דיור</strong> לאורך השנים, מביאה כעת את כל הידע ההנדסי, המומחיות הניהולית והסטנדרטים התפעוליים המחמירים ביותר אל קטגוריית מגורי היוקרה של ירושלים.<br>אנו מחויבים <strong>ליחס אישי, שקיפות מלאה ומצוינות בלתי מתפשרת</strong>.",
      contact_title: "בואו נדבר",
      f_fname: "שם פרטי *", f_lname: "שם משפחה *", f_phone: "טלפון *", f_email: "אימייל",
      f_project: "הפרויקט המועדף עליכם *", f_message: "הודעה", f_message_ph: "תכתוב את ההודעה שלך ...",
      f_consent: "אני מסכים/ה ל<a href=\"tos.html\" target=\"_blank\" rel=\"noopener\">תנאי השימוש</a> ול<a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">מדיניות הפרטיות</a>", f_submit: "שלח",
      f_err: "נא למלא את כל שדות החובה (שם פרטי, שם משפחה, טלפון, פרויקט ואישור התנאים).",
      f_ok: "תודה! פנייתכם נשלחה. ניצור קשר בהקדם.",
      footer_copy: "כל הזכויות שמורות", footer_terms: "תקנון אתר", footer_tos: "תנאי שימוש",
      footer_privacy: "מדיניות פרטיות", footer_a11y: "הצהרת נגישות", footer_credit: "איפיון אסטרטגיה ועיצוב:"
    },
    en: {
      skip: "Skip to main content",
      nav_about60: "About The Next 60", nav_company: "About Us", nav_economic: "Economic Model",
      nav_facilities: "Facilities", nav_projects: "Projects", nav_contact: "Contact",
      scroll: "Scroll",
      hero_title: "Your next chapter begins now.",
      hero_sub: "Life beyond 60 doesn't slow down — it refines itself to the peak of standard. THE NEXT 60: a renewed vision for luxury living for ages 60+. Here, an exclusive living experience and a hand-picked homogeneous community meet the absolute financial security of a property held in your own full private ownership.",
      brand_eyebrow: "A little about us",
      brand_head: "You've reached the stage where you no longer have to prove anything to anyone — <strong class=\"hl\">but you have absolutely no intention of slowing down.</strong>",
      brand_p1: "NEXT 60 was born for those who refuse to compromise, who bring with them a rich culture, personal style, and uncompromising demands of life.",
      brand_p2: "This is not another traditional housing solution or an ordinary assisted-living framework — it is an evolution of the urban lifestyle. Here, exemplary architecture and the smartest systems are merely the envelope for a complete life experience: a homogeneous community of people who share similar interests, a vibrant social and cultural life, and above all —",
      brand_tag: "a shell of absolute personal security and peace of mind that accompanies you every single day. This is where your full independence meets your highest standard.",
      stat_sqm: "sqm of living experience", stat_units: "housing units", stat_projects: "projects",
      projects_eyebrow: "Projects",
      projects_title: "Three neighborhoods. Three architectural masterpieces.",
      projects_sub: "Strategic key locations ensuring a rare blend of green pastoral surroundings, urban accessibility, and solid real-estate value.",
      proj1_title: "Lev HaKerem", proj1_desc: "A boutique experience in the heart of the city — a neighborhood blending Jerusalem heritage with a modern rhythm.", proj1_loc: "Beit HaKerem neighborhood",
      proj2_title: "Beit VeGan", proj2_desc: "Beit VeGan neighborhood with breathtaking views and a serene, inspiring, tradition-rich living experience.", proj2_loc: "Beit VeGan neighborhood",
      proj3_title: "THE EMBASSY", proj3_desc: "Exclusive elite living at the meeting point of three of Jerusalem's most established, valued and sought-after neighborhoods — the German Colony, Baka, and Arnona.", proj3_loc: "Arnona neighborhood",
      fac_eyebrow: "Facilities",
      fac_sub: "The shared spaces in NEXT 60 complexes are designed as a natural extension of your private home. We created facilities and services at the highest international standard, to deliver absolute comfort, cultural interest, and personally tailored daily serenity in every project.",
      fac1_t: "Wellness Pavilion", fac1_s: "Harmony of body and mind",
      fac1_d: "A luxury health and spa complex featuring a heated indoor pool open 365 days a year, a gym equipped with the most advanced technology, and an intimate studio for yoga, pilates and movement classes.",
      fac2_t: "Elite Culture", fac2_s: "Content, inspiration and gathering",
      fac2_d: "Your stage for a rich culture and a vibrant social life within the community. Among the spaces at your disposal: an intimate cinema, quiet reading lounges, and an elegant business lounge for discreet work and meetings in complete comfort.",
      fac3_t: "Panoramic Hosting", fac3_s: "The Jerusalem hosting culture",
      fac3_d: "Your home remains the perfect place to host family and the people you love. Our designed rooftop spaces overlook the skyline and the breathtaking historic views of Jerusalem, alongside traditional touches including a shared sukkah deck, spacious and elegant.",
      fac4_t: "Absolute Peace", fac4_s: "A shell of service and security",
      fac4_d: "Freedom and reliability begin when every detail is managed for you, behind the scenes. The complexes offer a magnificent lobby with a 24/7 reception and security desk, thorough maintenance for the building and private apartments, and personal concierge services backed by a private, discreet medical array.",
      banner_head: "Jerusalem architecture, an advanced living culture, and full proprietary security registered in the land registry.",
      eco_eyebrow: "About the economic model",
      eco_title: "Changing the rules of the game — investing in Jerusalem real estate, not in an eroding deposit",
      eco_p1: "Unlike traditional assisted-living models based on enormous deposits that erode and lose value year after year, NEXT 60 presents a pure, secure and worthwhile real-estate model. An uncompromising life experience that protects your family's capital and offers the most responsible housing solution in Israel.",
      pillars_title: "The three pillars of your peace of mind",
      pillar1_t: "A real-estate asset",
      pillar1_d: "At NEXT 60 you don't rent an apartment and you don't deposit capital that vanishes. You purchase a luxury real-estate asset, registered in your name in the land registry, fully and privately.",
      pillar2_t: "Financial growth and erosion protection", pillar2_sub: "(the investment stays in the family)",
      pillar2_d: "While in the traditional assisted-living market the deposit erodes and shrinks in the operator's favor, at NEXT 60 there is no erosion of your capital. Your investment is anchored in the heart of Jerusalem's strong luxury-living market. The asset's value appreciates over the years, remains an integral part of the family capital, and can be sold or rented at your discretion.",
      pillar3_t: "Attractive management fees and full freedom of action",
      pillar3_d: "The NEXT 60 model offers a breakthrough in ongoing costs too: management fees are tailored and transparent, and in return you receive the full service envelope — security, maintenance, a rich cultural life and an advanced Wellness program on personal demand. All this, without giving up any right or legal flexibility reserved for private property owners.",
      about_eyebrow: "About us",
      about_title: "The reputation behind the vision.",
      about_lead: "The experience, stability and financial strength that give you complete peace of mind.",
      about_p1: "Behind the NEXT 60 elite brand stands <strong>Bina Group</strong> — one of Israel's leading and most robust development, real-estate and construction companies.<br>With a reputation spanning over two decades, the group brings <strong>rich, proven experience</strong> in initiating, building and managing residential neighborhoods, assisted-living complexes, public buildings, commerce and industry across the strongest demand areas of Jerusalem and central Israel.",
      about_p2: "Bina Group, which has proudly built and populated <strong>thousands of housing units</strong> over the years, now brings all of its engineering knowledge, managerial expertise and most rigorous operational standards to Jerusalem's luxury-living category.<br>We are committed to <strong>a personal touch, full transparency and uncompromising excellence</strong>.",
      contact_title: "Let's talk",
      f_fname: "First name *", f_lname: "Last name *", f_phone: "Phone *", f_email: "Email",
      f_project: "Your preferred project *", f_message: "Message", f_message_ph: "Write your message ...",
      f_consent: "I agree to the <a href=\"tos.html\" target=\"_blank\" rel=\"noopener\">terms of use</a> and <a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">privacy policy</a>", f_submit: "Send",
      f_err: "Please fill in all required fields (first name, last name, phone, project and consent).",
      f_ok: "Thank you! Your message has been sent. We'll be in touch shortly.",
      footer_copy: "All rights reserved", footer_terms: "Site terms", footer_tos: "Terms of use",
      footer_privacy: "Privacy policy", footer_a11y: "Accessibility statement", footer_credit: "Strategy & design by:"
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

    /* contact form */
    var form = document.getElementById("contactForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("formStatus");
      var ok = form.fname.value.trim() && form.lname.value.trim() &&
               form.phone.value.trim() && form.project.value && form.consent.checked;
      if (!ok) {
        status.style.color = "#8a1f1f";
        status.textContent = T[current].f_err;
        return;
      }
      var body = encodeURIComponent(
        "שם: " + form.fname.value + " " + form.lname.value +
        "\nטלפון: " + form.phone.value +
        "\nאימייל: " + form.email.value +
        "\nפרויקט: " + form.project.value +
        "\nהודעה: " + form.message.value);
      status.style.color = "";
      status.textContent = T[current].f_ok;
      window.location.href = "mailto:info@thenext60.co.il?subject=" +
        encodeURIComponent("פנייה מהאתר — The Next 60") + "&body=" + body;
      form.reset();
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
