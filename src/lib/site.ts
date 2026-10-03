export const site = {
  name: "سپید ثبت",
  tagline: "ثبت شرکت و برند، ساده و مطمئن",
  description:
    "سپید ثبت، همراه شما در ثبت شرکت، ثبت برند و تمام تغییرات اداری کسب‌وکار در سراسر ایران — با مشاوره رایگان و پیگیری اختصاصی.",
  url: "https://sepid-sabt.ir",
  phoneDisplay: "۰۲۱-۱۲۳۴۵۶۷۸",
  phoneHref: "tel:+982112345678",
  whatsappHref: "https://wa.me/989120000000",
  telegramHref: "https://t.me/sepidsabt",
  email: "sepid.sabt@gmail.com",
  instagramHref: "https://instagram.com/sepid.sabt",
} as const;

export const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/services/company-registration", label: "ثبت شرکت" },
  { href: "/services/company-changes", label: "تغییرات شرکت" },
  { href: "/services/brand-registration", label: "ثبت برند" },
  { href: "/blog", label: "وبلاگ" },
  { href: "/about", label: "درباره ما" },
] as const;

export const footerServiceLinks = [
  { href: "/services/company-registration", label: "ثبت شرکت" },
  { href: "/services/company-changes", label: "تغییرات شرکت" },
  { href: "/services/brand-registration", label: "ثبت برند" },
  { href: "/services/legal-books-sealing", label: "پلمپ دفاتر قانونی" },
] as const;

export const footerCompanyLinks = [
  { href: "/about", label: "درباره ما" },
  { href: "/blog", label: "وبلاگ" },
  { href: "/faq", label: "سوالات متداول" },
  { href: "/contact", label: "تماس با ما" },
] as const;

export const trustStats = [
  { value: "+۱۲", label: "سال سابقه فعالیت" },
  { value: "+۲٬۴۰۰", label: "شرکت ثبت‌شده" },
  { value: "< ۲ساعت", label: "میانگین زمان پاسخگویی" },
  { value: "٪۹۸", label: "رضایت مشتریان" },
] as const;

export const processSteps = [
  {
    title: "مشاوره رایگان",
    description: "نیاز شما را بررسی و بهترین نوع شرکت را پیشنهاد می‌دهیم.",
  },
  {
    title: "آماده‌سازی مدارک",
    description: "اساسنامه، اظهارنامه و مدارک لازم را برایتان تنظیم می‌کنیم.",
  },
  {
    title: "ثبت و پیگیری",
    description: "مراحل اداری را در سامانه ثبت شرکت‌ها پیگیری می‌کنیم.",
  },
  {
    title: "تحویل مدارک",
    description: "آگهی تاسیس و شناسه ملی را دریافت و به شما تحویل می‌دهیم.",
  },
] as const;

export const whyUs = [
  {
    title: "سرعت در انجام کار",
    description: "پیگیری فعال پرونده شما تا نتیجه نهایی، بدون معطلی‌های معمول اداری.",
  },
  {
    title: "پشتیبانی مستقیم و اختصاصی",
    description: "یک کارشناس مشخص، در تمام مراحل پاسخگوی شماست.",
  },
  {
    title: "سال‌ها تجربه و اعتبار",
    description: "بیش از یک دهه فعالیت در حوزه ثبت شرکت و برند در سراسر ایران.",
  },
  {
    title: "قیمت منصفانه و شفاف",
    description: "هزینه‌ها را پیش از شروع کار، شفاف و بدون هزینه پنهان اعلام می‌کنیم.",
  },
] as const;
