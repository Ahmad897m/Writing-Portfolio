/* English <-> Arabic switch for the home page. Arabic switches the page to right-to-left. */
(function () {
  "use strict";

  var AR = {
    "Ahmad Mustafa | Content Writer (Arabic & English)": "أحمد مصطفى | كاتب محتوى (عربي وإنجليزي)",
    "Ahmad Mustafa": "أحمد مصطفى",
    "Home": "الرئيسية", "About": "نبذة عني", "Services": "الخدمات", "Packages": "الباقات",
    "How I Work": "طريقة عملي", "Portfolio": "معرض الأعمال", "Contact": "تواصل",
    "Content Writer — Arabic & English": "كاتب محتوى — بالعربية والإنجليزية",
    "I write": "أكتب",
    "Contact me": "تواصل معي", "Download my CV": "حمّل سيرتي الذاتية",
    "Name:": "الاسم:", "Profile:": "التخصص:", "Content Writer (Arabic & English)": "كاتب محتوى (عربي وإنجليزي)",
    "Email:": "البريد:", "Phone:": "الهاتف:",
    "What I do": "ما أقوم به",
    "Marketing and SEO articles": "مقالات تسويقية ومقالات SEO",
    "Researched, fact-checked articles in Arabic and English for clinics, software, industry and finance.": "مقالات مبنية على البحث ومدقَّقة المعلومات، بالعربية والإنجليزية، للعيادات وشركات البرمجيات والصناعة والمال.",
    "Social media content plans": "خطط محتوى لوسائل التواصل الاجتماعي",
    "Monthly plans with posts, reels and stories: the text inside each design, the caption and the platform.": "خطط شهرية تضم المنشورات والريلز والستوريز: النص داخل كل تصميم، والكابشن، والمنصة.",
    "Video scripts": "نصوص الفيديو",
    "YouTube episodes and ad scripts, written to be heard.": "حلقات يوتيوب ونصوص إعلانية، مكتوبة لتُسمع.",
    "Copywriting": "الكتابة الإعلانية",
    "Captions, ad copy and promotional posts in the brand’s voice.": "كابشنات ونصوص إعلانية ومنشورات ترويجية بصوت العلامة التجارية.",
    "Website and company content": "محتوى المواقع والشركات",
    "Company profiles and website pages.": "ملفات تعريفية للشركات وصفحات المواقع.",
    "Research and fact-checking": "البحث وتدقيق المعلومات",
    "Every claim checked against its source before it reaches you.": "كل معلومة تُراجَع مع مصدرها قبل أن تصلك.",
    "About me": "نبذة عني",
    "My name is Ahmad Mustafa. I am 26 years old, from Aleppo, Syria. I graduated in 2026 from the Faculty of Information Engineering at Aleppo University. Since 2020, I have been working as a content and copywriter across various fields. I’ve collaborated with multiple companies and creators, producing articles, video scripts, and marketing content that resonates with diverse audiences. I am passionate about research, storytelling, and fact-checking—and I bring a unique blend of analytical thinking and business insight to every piece I write.":
      "اسمي أحمد مصطفى، عمري 26 عامًا، من حلب في سوريا. تخرجت عام 2026 من كلية الهندسة المعلوماتية في جامعة حلب. أعمل منذ عام 2020 ككاتب محتوى وكاتب إعلانات في مجالات متنوعة. تعاونت مع عدة شركات وصنّاع محتوى، وكتبت مقالات ونصوص فيديو ومحتوى تسويقيًا يخاطب جمهورًا متنوعًا. أحب البحث وفن السرد وتدقيق المعلومات، وأجمع في كل نص أكتبه بين التفكير التحليلي والفهم التجاري.",
    "I craft persuasive copy for ads, email campaigns, landing pages, and sales materials. My copy is designed to grab attention, connect emotionally, and convert readers into customers. I focus on clarity, benefit-driven messaging, and a tone that matches your brand voice.":
      "أكتب نصوصًا إعلانية مقنعة للإعلانات وحملات البريد الإلكتروني وصفحات الهبوط والمواد البيعية. صُمّمت نصوصي لتلفت الانتباه وتخاطب المشاعر وتحوّل القرّاء إلى عملاء. أركز على الوضوح والرسائل التي تبرز الفائدة، وعلى نبرة تناسب صوت علامتك.",
    "Content Writing": "كتابة المحتوى",
    "I write SEO-optimized articles, blog posts, and video scripts that are clear, engaging, and tailored to your audience. My content helps you build trust, increase website traffic, and improve search engine rankings. Whether you need long-form articles or short scripts, I deliver content that informs, inspires, and drives action.":
      "أكتب مقالات محسَّنة لمحركات البحث، ومقالات مدونات ونصوص فيديو واضحة وجذابة ومناسبة لجمهورك. يساعدك محتواي على بناء الثقة وزيادة زيارات موقعك وتحسين ترتيبه في محركات البحث. سواء احتجت مقالات طويلة أو نصوصًا قصيرة، أقدّم محتوى يُعلِّم ويُلهم ويدفع إلى الفعل.",
    "Marketing Services": "الخدمات التسويقية",
    "I develop integrated content strategies for social media, email marketing, and digital campaigns. From content calendars to performance analysis, I help you plan, create, and optimize content that aligns with your business goals and engages your target audience effectively.":
      "أضع استراتيجيات محتوى متكاملة لوسائل التواصل الاجتماعي والبريد الإلكتروني والحملات الرقمية. من جداول المحتوى إلى تحليل الأداء، أساعدك على تخطيط المحتوى وإنتاجه وتحسينه بما يخدم أهداف عملك ويجذب جمهورك المستهدف.",
    "Service Packages": "باقات الخدمات",
    "Clear scope, so you know what you get. Prices depend on length and topic: ask for a quote.": "نطاق واضح لتعرف ما ستحصل عليه. تعتمد الأسعار على الطول والموضوع: اطلب عرض سعر.",
    "Articles": "المقالات",
    "Arabic or English articles, researched and fact-checked.": "مقالات بالعربية أو الإنجليزية، مبنية على البحث ومدقَّقة.",
    "Keyword and outline agreed before writing": "الاتفاق على الكلمات المفتاحية والهيكل قبل الكتابة",
    "Sources listed for every claim": "ذكر المصادر لكل معلومة",
    "Delivered as a Google Doc or Word file": "تُسلَّم بصيغة Google Doc أو ملف Word",
    "Get a quote": "اطلب عرض سعر",
    "Social Media Monthly Plan": "خطة شهرية لوسائل التواصل",
    "A full month of content, ready for your designer.": "شهر كامل من المحتوى جاهز لمصمّمك.",
    "12 posts, 4 reels and 4 stories": "12 منشورًا و4 ريلز و4 ستوريز",
    "Text inside each design, caption and platform": "النص داخل كل تصميم، والكابشن، والمنصة",
    "A dated publishing schedule": "جدول نشر بالتواريخ",
    "Video and Ad Scripts": "نصوص الفيديو والإعلانات",
    "Scripts for YouTube episodes and short ads.": "نصوص لحلقات يوتيوب وإعلانات قصيرة.",
    "A hook for the first seconds": "جملة افتتاحية تشدّ المشاهد في الثواني الأولى",
    "Scene-by-scene structure": "بنية مقسّمة مشهدًا مشهدًا",
    "On-screen text and captions": "النص على الشاشة والكابشن",
    "Website and Company Content": "محتوى المواقع والشركات",
    "Words for the pages that explain what you do.": "كلمات للصفحات التي تشرح ما تقوم به.",
    "Company profile and About page": "الملف التعريفي للشركة وصفحة «من نحن»",
    "Service and product pages": "صفحات الخدمات والمنتجات",
    "Consistent brand voice": "صوت علامة تجارية متّسق",
    "Five steps from your brief to the final file": "خمس خطوات من طلبك إلى الملف النهائي",
    "Brief": "الطلب", "We agree the goal, the audience, the tone and the deadline.": "نتفق على الهدف والجمهور والنبرة والموعد النهائي.",
    "Research": "البحث", "I study your business, your competitors and the keywords your audience uses.": "أدرس عملك ومنافسيك والكلمات التي يستخدمها جمهورك.",
    "Outline": "الهيكل", "You see the structure or the monthly plan before I write the full text.": "ترى الهيكل أو الخطة الشهرية قبل أن أكتب النص الكامل.",
    "Write and fact-check": "الكتابة والتدقيق", "I write in Arabic or English, then check every claim against its source.": "أكتب بالعربية أو الإنجليزية، ثم أتحقق من كل معلومة مع مصدرها.",
    "Edit and deliver": "التحرير والتسليم", "I edit, apply your feedback and send the final files.": "أحرّر النص، وأطبّق ملاحظاتك، وأرسل الملفات النهائية.",
    "WORKS COMPLETED": "الأعمال المنجزة", "YEARS OF EXPERIENCE": "سنوات الخبرة", "TOTAL CLIENTS": "إجمالي العملاء",
    "Social media strategy, by client": "استراتيجيات وسائل التواصل، حسب العميل",
    "Social Media Strategy": "استراتيجية وسائل التواصل",
    "Articles, scripts and website content": "مقالات ونصوص ومحتوى مواقع",
    "Marketing Article for RE BEAUTY CLINIC": "مقال تسويقي لعيادة RE BEAUTY", "Medical Marketing": "تسويق طبي",
    "Marketing Article for Al Hude Machine": "مقال تسويقي لشركة Al Hude Machine", "Industrial Marketing": "تسويق صناعي",
    "Marketing Article for RIZE": "مقال تسويقي لشركة RIZE", "Digital Marketing": "تسويق رقمي",
    "Marketing Article for FACTO SOLUTIONS": "مقال تسويقي لشركة FACTO SOLUTIONS", "Business Marketing": "تسويق الأعمال",
    "Marketing Article for BE NEW CLINIC": "مقال تسويقي لعيادة BE NEW",
    "Marketing Article for Al-Hussein": "مقال تسويقي لشركة Al-Hussein",
    "YouTube Script – Motivational Video": "نص فيديو يوتيوب – فيديو تحفيزي", "YouTube Scriptwriting": "كتابة نصوص يوتيوب",
    "YouTube Script – Sports Video": "نص فيديو يوتيوب – فيديو رياضي",
    "Investment Article – Real Estate": "مقال استثماري – عقارات", "Finance & Investment": "المال والاستثمار",
    "Company Profile & Website Content": "ملف تعريفي للشركة ومحتوى الموقع", "Corporate Content": "محتوى الشركات",
    "Training & Certifications": "التدريب والشهادات",
    "Writing, storytelling, SEO and social media advertising": "الكتابة والسرد وتحسين محركات البحث والإعلان عبر وسائل التواصل",
    "Edraak, with Grow with Google": "إدراك، بالتعاون مع Grow with Google",
    "Specialization: Digital Analytics, The Right Online Presence, Search Engine Optimization": "تخصص متكامل: التحليلات الرقمية، الحضور الرقمي الصحيح، تحسين محركات البحث",
    "University of Michigan (Coursera)": "جامعة ميشيغان (Coursera)", "Macquarie University (Coursera)": "جامعة ماكواري (Coursera)",
    "Wesleyan University (Coursera)": "جامعة ويسليان (Coursera)", "Edraak": "إدراك",
    "Verify certificate": "تحقق من الشهادة",
    "Get in Touch": "تواصل معي",
    "Have a project in mind? Send me a short brief and I will reply with a quote.": "لديك مشروع؟ أرسل لي موجزًا قصيرًا وسأرد عليك بعرض سعر.",
    "Email me": "راسلني بالبريد", "Download my CV (PDF)": "حمّل سيرتي الذاتية (PDF)",
    "Syria - Aleppo": "سوريا - حلب",
    "© Copyright": "© حقوق النشر", ". All Rights Reserved": ". جميع الحقوق محفوظة"
  };
  var MONTHS = { Jan: "يناير", January: "يناير", Feb: "فبراير", February: "فبراير", Mar: "مارس", March: "مارس", Apr: "أبريل", April: "أبريل",
    May: "مايو", Jun: "يونيو", June: "يونيو", Jul: "يوليو", July: "يوليو", Aug: "أغسطس", August: "أغسطس", Sep: "سبتمبر", September: "سبتمبر",
    Oct: "أكتوبر", October: "أكتوبر", Nov: "نوفمبر", November: "نوفمبر", Dec: "ديسمبر", December: "ديسمبر" };
  var MONTH_RE = /\b(January|February|March|April|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b\.?/g;

  var TYPED = {
    en: null,
    ar: "مقالات تسويقية,استراتيجيات وسائل التواصل,نصوص فيديو,محتوى مواقع,مقالات SEO,نصوص إعلانية"
  };

  var originals = new WeakMap();
  var lang = "en";

  function translate(text) {
    var key = text.replace(/\s+/g, " ").trim();
    if (AR[key]) { var lead = /^\s/.test(text) ? " " : "", trail = /\s$/.test(text) ? " " : ""; return lead + AR[key] + trail; }
    if (/\b(20\d\d)\b/.test(key) && MONTH_RE.test(key)) { MONTH_RE.lastIndex = 0; return key.replace(MONTH_RE, function (m) { return MONTHS[m.replace(".", "")] || m; }); }
    MONTH_RE.lastIndex = 0;
    return null;
  }

  function walk(toArabic) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        return (p === "SCRIPT" || p === "STYLE" || !n.nodeValue.trim()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) {
      if (toArabic) {
        var out = translate(n.nodeValue);
        if (out !== null) { if (!originals.has(n)) originals.set(n, n.nodeValue); n.nodeValue = out; }
      } else if (originals.has(n)) {
        n.nodeValue = originals.get(n);
      }
    }
  }

  function retype(isAr) {
    var el = document.querySelector(".typed");
    if (!el || !window.Typed) return;
    if (TYPED.en === null) TYPED.en = el.getAttribute("data-typed-items");
    if (window.__typed && window.__typed.destroy) window.__typed.destroy();
    el.textContent = "";
    window.__typed = new Typed(".typed", {
      strings: (isAr ? TYPED.ar : TYPED.en).split(","), loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000
    });
  }

  function apply(next) {
    lang = next;
    var ar = next === "ar";
    var h = document.documentElement;
    h.setAttribute("lang", next);
    h.setAttribute("dir", ar ? "rtl" : "ltr");
    walk(ar);
    document.title = ar ? AR["Ahmad Mustafa | Content Writer (Arabic & English)"] : "Ahmad Mustafa | Content Writer (Arabic & English)";
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = ar ? "English" : "عربي";
    retype(ar);
    try { localStorage.setItem("lang", next); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", function (e) { e.preventDefault(); apply(lang === "ar" ? "en" : "ar"); });
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    if (saved === "ar") window.addEventListener("load", function () { apply("ar"); });
  });
})();
