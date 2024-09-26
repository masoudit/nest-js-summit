// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const fashionBaseNames = [
  'کت',
  'پیراهن',
  'شلوار',
  'کتانی',
  'کفش',
  'روسری',
  'شال',
  'چادر',
  'کیف',
  'عینک',
  'کمربند',
  'کلاه',
  'جوراب',
  'دستکش',
  'کاپشن',
  'بارانی',
  'ژاکت',
  'تاپ',
  'بلوز',
  'پالتو',
  'لباس ورزشی',
  'لباس راحتی',
  'کفش مجلسی',
  'کفش ورزشی',
  'مانتو',
  'لباس مجلسی',
  'جین',
  'لباس خواب',
  'شلوارک',
  'صندل',
  'لباس کودک',
  'لباس نوزاد',
  'دستبند',
  'گردنبند',
  'ساعت',
  'پاپیون',
  'گیره مو',
  'بند ساعت',
  'جوراب زنانه',
  'پانچو',
  'شلوار رسمی',
  'لباس زنانه',
  'لباس مردانه',
  'کفش کودک',
  'کت شلوار',
  'بلوز زنانه',
  'لباس شب',
  'کفش چرم',
  'کیف دستی',
  'کت پاییزه',
  'لباس زیر',
  'کیف پول',
  'لباس تابستانی',
  'پیراهن زنانه',
  'لباس شنا',
  'کفش پاشنه‌دار',
  'کفش بچه‌گانه',
  'لباس جین',
  'کت چرم',
  'کت جین',
  'شال گردن',
  'هودی',
  'کاپشن زنانه',
  'پالتو زنانه',
  'لباس زنانه اسپرت',
  'کتاب دست دوم',
  'کیف زنانه',
  'شلوار جین',
  'بلوز مردانه',
  'تیشرت زنانه',
  'تیشرت مردانه',
  'بلوز دخترانه',
  'جوراب شلواری',
  'سارافون',
  'بافت زنانه',
  'لباس اداری',
  'کفش دخترانه',
  'لباس مجلسی زنانه',
  'پاپیون مردانه',
  'کفش مردانه',
  'کفش مجلسی زنانه',
  'پوتین',
  'نیم‌پوتین',
  'لباس رسمی',
  'کفش تابستانی',
  'کت چرم زنانه',
  'لباس پاییزی',
  'سویشرت',
  'بافت مردانه',
  'کفش اسپرت',
  'لباس فرم',
  'کلاه زنانه',
  'کمربند مردانه',
  'روسری ابریشمی',
  'لباس عروس',
  'کفش عروس',
  'کیف عروس',
  'اکسسوری',
  'لباس شب زنانه',
  'لباس مهمانی',
];
const adjectives = [
  'جدید',
  'عالی',
  'پرفروش',
  'باکیفیت',
  'ممتاز',
  'حرفه‌ای',
  'برتر',
  'مناسب',
  'ارزان',
  'لوکس',
];

const electronicsBaseNames = [
  'گوشی موبایل',
  'لپ‌تاپ',
  'تبلت',
  'تلویزیون',
  'دوربین',
  'کنسول بازی',
  'هدفون',
  'هندزفری',
  'اسپیکر',
  'موس',
  'کیبورد',
  'مودم',
  'روتر',
  'پرینتر',
  'اسکنر',
  'فلش مموری',
  'هارد اکسترنال',
  'کابل شارژ',
  'پاور بانک',
  'دوربین مدار بسته',
  'کیف لپ‌تاپ',
  'کاور موبایل',
  'ساعت هوشمند',
  'پخش‌کننده موسیقی',
  'هندزفری بلوتوث',
  'هدست',
  'میکروفون',
  'رم',
  'کیس کامپیوتر',
  'لوازم جانبی موبایل',
  'دوربین عکاسی',
  'مانیتور',
  'تجهیزات شبکه',
  'ویدئو پروژکتور',
  'هدفون بی‌سیم',
  'کنترلر بازی',
  'موبایل هوشمند',
  'باتری موبایل',
  'کارت حافظه',
  'وب‌کم',
  'دوربین فیلمبرداری',
  'پاور کیس',
  'کابل شبکه',
  'مودم جیبی',
  'لوازم جانبی کامپیوتر',
  'هارد داخلی',
  'دستگاه پخش بلوری',
  'پاور ساپلای',
  'کیس گیمینگ',
  'کیبورد مکانیکی',
  'کنسول دستی',
  'دسته بازی',
  'مانیتور گیمینگ',
  'ساعت ورزشی',
  'ترازو دیجیتال',
  'اکشن کمرا',
  'سنسور حرکتی',
  'گیم پد',
  'گجت هوشمند',
  'لوازم جانبی لپ‌تاپ',
  'رادیو',
  'تلویزیون هوشمند',
  'آنتن دیجیتال',
  'دسته بازی بی‌سیم',
  'دوربین ورزشی',
  'پایه نگهدارنده موبایل',
  'محافظ صفحه نمایش',
  'دوربین امنیتی',
  'بیسیم',
  'کیبورد وایرلس',
  'کنترل تلویزیون',
  'ریموت هوشمند',
  'هندزفری باسیم',
  'اسپیکر بلوتوث',
  'پد شارژ',
  'مودم ADSL',
  'تقسیم‌کننده USB',
  'کابل HDMI',
  'میکروفون یقه‌ای',
  'ساعت دیجیتال',
  'گوشی ضد آب',
  'پخش کننده بلوتوث',
  'کنترلر صوتی',
  'آمپلی‌فایر',
  'پد موس',
  'کاور لپ‌تاپ',
  'کیبورد بلوتوث',
  'موس بی‌سیم',
  'ریموت گیمینگ',
  'سیستم صوتی خانگی',
];
const adjectives2 = [
  'طلایی',
  'متنوع',
  'مدرن',
  'ساده',
  'پرقدرت',
  'پیشرو',
  'نوآور',
  'حرفه‌ای',
  'دقیق',
  'ظریف',
];

const homeBaseNames = [
  'مبل',
  'صندلی',
  'میز',
  'تخت خواب',
  'کتری',
  'یخچال',
  'فریزر',
  'گاز',
  'ماشین لباسشویی',
  'ماشین ظرفشویی',
  'مایکروویو',
  'آبمیوه‌گیری',
  'پلوپز',
  'سرخ‌کن',
  'آون توستر',
  'همزن برقی',
  'چرخ گوشت',
  'جاروی برقی',
  'اتو',
  'پلوپز',
  'پنکه',
  'بخاری',
  'کولر',
  'چای‌ساز',
  'قهوه‌ساز',
  'آب سردکن',
  'تصفیه هوا',
  'بخارشوی',
  'آبگرمکن',
  'اجاق گاز',
  'پرده',
  'لوستر',
  'آباژور',
  'فرش',
  'موکت',
  'قالی',
  'قابلمه',
  'ماهیتابه',
  'بشقاب',
  'قاشق',
  'چنگال',
  'ظروف سرو',
  'دیوارکوب',
  'آینه',
  'کتابخانه',
  'دکوراسیون داخلی',
  'قاب عکس',
  'ساعت دیواری',
  'پادری',
  'ظروف پلاستیکی',
  'سطل زباله',
  'آویز لباس',
  'رخت آویز',
  'کابینت',
  'کمد لباس',
  'جا کفشی',
  'سرویس آشپزخانه',
  'سبد لباس',
  'جعبه ابزار',
  'ظروف نگهداری غذا',
  'لامپ',
  'لامپ ال ای دی',
  'لامپ کم مصرف',
  'چراغ مطالعه',
  'جاروی شارژی',
  'پرده حمام',
  'روتختی',
  'بالشت',
  'پتو',
  'میز ناهارخوری',
  'رومیزی',
  'سرویس قاشق و چنگال',
  'کتری برقی',
  'ظرف شیشه‌ای',
  'سرویس چای خوری',
  'قوری',
  'سماور',
  'سرویس قاشق',
  'ظروف کریستال',
  'ظروف چوبی',
  'سبد خرید',
  'ظروف ملامین',
  'ظروف سرامیکی',
  'سرویس پذیرایی',
  'ظروف فلزی',
  'سینی',
  'باکس تزئینی',
  'کفپوش',
  'تابلو',
  'رادیاتور',
];
const adjectives3 = [
  'خارق‌العاده',
  'سرسبز',
  'جادار',
  'باکیفیت',
  'دوستانه',
  'شیک',
  'تمیز',
  'بادوام',
  'هوشمند',
  'سریع',
];

const beautyBaseNames = [
  'کرم صورت',
  'کرم ضد آفتاب',
  'کرم مرطوب کننده',
  'رژ لب',
  'عطر',
  'شامپو',
  'صابون',
  'کرم ضد چروک',
  'کرم دور چشم',
  'ژل شستشو',
  'فوم شستشو',
  'تونر',
  'ماسک صورت',
  'کرم ضد لک',
  'روغن آرگان',
  'کرم روشن کننده',
  'کرم ضد جوش',
  'کرم دست',
  'روغن مو',
  'کرم مو',
  'رنگ مو',
  'کرم موبر',
  'ادکلن',
  'ماسک مو',
  'خمیر دندان',
  'دهان شویه',
  'موزدایی',
  'اسکراب',
  'پد آرایشی',
  'خط چشم',
  'ریمل',
  'پودر صورت',
  'فونداسیون',
  'پرایمر',
  'پودر فیکس',
  'سایه چشم',
  'لاک ناخن',
  'چسب مژه',
  'مژه مصنوعی',
  'آرایش پاک‌کن',
  'دستمال مرطوب',
  'کرم پا',
  'عطر زنانه',
  'عطر مردانه',
  'کرم شب',
  'کرم روز',
  'صابون گیاهی',
  'عصاره گیاهی',
  'لوسیون',
  'دستکش یکبار مصرف',
  'وسایل آرایش',
  'کیف آرایشی',
  'میکاپ',
  'سرم مو',
  'سرم صورت',
  'مکمل‌های غذایی',
  'قرص‌های ویتامین',
  'چای سبز',
  'مکمل‌های گیاهی',
  'پودر پروتئین',
  'کرم ضد حساسیت',
  'پد قاعدگی',
  'محافظت کننده لب',
  'عطر طبیعی',
  'شامپو گیاهی',
  'روغن طبیعی',
  'لوسیون بدن',
  'کرم ترمیم کننده',
  'کرم فشرده',
  'کرم ضد عفونی‌کننده',
  'لوسیون ضد عفونی‌کننده',
  'ماسک مو ترمیمی',
  'کرم اصلاح',
  'خمیر دندان سفید کننده',
  'پودر دکلره',
  'کرم مژه',
  'نرم کننده مو',
  'سرم ترمیم کننده',
  'کرم دست و ناخن',
  'کرم زخم',
  'کرم ضد التهاب',
  'کرم ضد آکنه',
  'پد لایه‌بردار',
  'کرم ضد ریزش مو',
  'شامپو ضد شوره',
  'محلول ضد باکتری',
  'سرم آبرسان',
  'کرم اسکراب',
  'کرم مغذی',
  'محلول پاک‌کننده آرایش',
  'اسپری خوشبو کننده',
  'کرم شفاف کننده',
  'کرم نرم کننده',
  'روغن خراطین',
  'کرم مرطوب کننده دست',
  'کرم تسکین‌دهنده',
  'کرم درمانی',
  'لوسیون تسکین‌دهنده',
  'مکمل‌ سلامت پوست',
  'کرم مراقبتی',
];
const adjectives4 = [
  'جدید',
  'مناسب',
  'پرنور',
  'نرم',
  'کلاسیک',
  'زیبا',
  'سفید',
  'خاص',
  'مینیاتوری',
  'شگفت‌انگیز',
];

const foodBaseNames = [
  'چای',
  'قهوه',
  'شکلات',
  'آجیل',
  'میوه',
  'سبزیجات',
  'غلات',
  'تنقلات',
  'سوسیس',
  'کالباس',
  'ماکارونی',
  'پاستا',
  'پیتزا',
  'خوراکی‌های آماده',
  'غذاهای کنسروی',
  'سالاد',
  'دسر',
  'کیک',
  'بستنی',
  'خمیر',
  'مربا',
  'عسل',
  'لیمو',
  'آبمیوه',
  'نوشابه',
  'دوغ',
  'آب معدنی',
  'سموید',
  'غذای دریایی',
  'مرغ',
  'گوشت قرمز',
  'گوشت سفید',
  'پنیر',
  'خامه',
  'ماست',
  'ترشی',
  'غذاهای محلی',
  'غذاهای سنتی',
  'غذای گیاهی',
  'غذای مخصوص کودکان',
  'چاشنی',
  'ادویه',
  'زیتون',
  'سرکه',
  'سس',
  'کدو',
  'کنگر',
  'نارگیل',
  'کلم',
  'سیب‌زمینی',
  'پودر سوخاری',
  'غذای سریع',
  'پیتزای یخ‌زده',
  'کیک یخ‌زده',
  'چای سبز',
  'چای سیاه',
  'کیک تولد',
  'غذای فریزری',
  'غذای طبیعی',
  'فست فود',
  'نوشیدنی انرژی‌زا',
  'نوشیدنی‌های گیاهی',
  'بستنی چوبی',
  'بستنی قیفی',
  'غذای خانگی',
  'سالاد میوه',
  'پلو',
  'عدس',
  'حبوبات',
  'چاشنی مخصوص',
  'ادویه‌های معطر',
  'کودکانه',
  'آب‌میوه طبیعی',
  'غذاهای بین‌المللی',
  'سوشی',
  'پاستای تازه',
  'شیرینی',
  'نوشیدنی گرم',
  'شیر',
  'ماکارونی پخته شده',
  'چای سرد',
  'فنجان چای',
  'کتاب دستور پخت',
  'غذای کم کالری',
  'غذای حاضری',
  'غذای دیابتی',
  'پیتزای خانگی',
  'دسر یخی',
  'دسر سنتی',
  'غذای بین‌المللی',
];
const adjectives5 = [
  'جدید',
  'مناسب',
  'پرنور',
  'نرم',
  'کلاسیک',
  'زیبا',
  'سفید',
  'خاص',
  'مینیاتوری',
  'شگفت‌انگیز',
];

const hardwareBaseNames = [
  'دریل',
  'مته',
  'پیچ گوشتی',
  'چکش',
  'متر',
  'آچار',
  'چرخ‌خیاطی',
  'چرخ‌دنده',
  'تراز',
  'فازمتر',
  'پنس',
  'دستگاه جوش',
  'سوهان',
  'گیره',
  'کاتر',
  'دستگاه برش',
  'تیغ‌برش',
  'آب‌پاش',
  'تیغه',
  'کف‌سابی',
  'سرپیک',
  'دستگاه سنباده',
  'پمپ',
  'انبر',
  'پرس',
  'سوزن',
  'بست',
  'سیم‌چین',
  'چسب',
  'لوازم جانبی',
  'کابل',
  'کارتن',
  'سطل',
  'تسمه',
  'باند',
  'شیلنگ',
  'فیلتر',
  'ابزار باغبانی',
  'دستکش کار',
  'براق کننده',
  'جعبه ابزار',
  'دستگاه چندکاره',
  'میخ',
  'سوزن ته‌گرد',
  'کیف ابزار',
  'کاردک',
  'کلیپس',
  'چرخ‌دنده فلزی',
  'ابزار برقی',
  'ابزار دستی',
  'ابزار برقی صنعتی',
  'ابزار دقیق',
  'ابزار تست',
  'ابزار کالیبراسیون',
  'دستگاه حفاری',
  'کمپرسور',
  'تخریب',
  'دستگاه بتن‌ریزی',
  'دستگاه سشوار صنعتی',
  'مخلوط‌کن',
  'شمع',
  'دستگاه سنگ‌زنی',
  'سمباده زن',
  'دستگاه تراش',
  'دستگاه فشار',
  'ابزار اندازه‌گیری',
  'پمپ باد',
  'لوازم یدکی',
  'گوشی دیجیتال',
  'پیشنهاد ویژه',
  'ابزار دقیق دیجیتال',
  'چرخ‌دستی',
  'دستگاه دریل پیچ',
  'دستگاه ویبراتور',
  'میز کار',
  'فروشگاه آنلاین ابزار',
  'بست و لوازم جانبی',
  'ابزار کشت',
  'نوار چسب',
  'خدمات تعمیر',
  'دستگاه برش فلز',
  'موتور قایق',
  'وسایل نقلیه',
  'چراغ قوه',
  'ابزار کمرشکن',
  'دستگاه گرم‌کن',
  'دستگاه یخ‌ساز',
  'کارواش',
  'پد پولیش',
  'لوازم نگهداری',
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generatePersianCategoryNames(count, adjectives, baseNames) {
  // Add a number component to increase uniqueness
  // Generate all possible combinations
  const allCombinations = [];

  for (let base of baseNames) {
    for (let adj of adjectives) {
      allCombinations.push(`${base} ${adj}`);
    }
  }

  // Shuffle the array to get random combinations
  const shuffledCombinations = shuffleArray(allCombinations);

  // Select the first 'count' combinations
  return shuffledCombinations.slice(0, count);
}

const categoryNames0 = generatePersianCategoryNames(
  1000,
  fashionBaseNames,
  adjectives,
);
const categoryNames1 = generatePersianCategoryNames(
  1000,
  electronicsBaseNames,
  adjectives2,
);
const categoryNames2 = generatePersianCategoryNames(
  1000,
  homeBaseNames,
  adjectives3,
);
const categoryNames3 = generatePersianCategoryNames(
  1000,
  beautyBaseNames,
  adjectives4,
);
const categoryNames4 = generatePersianCategoryNames(
  1000,
  foodBaseNames,
  adjectives5,
);
const categoryNames5 = generatePersianCategoryNames(
  1000,
  hardwareBaseNames,
  adjectives5,
);

// const categoryNames = [...categoryNames1, ...categoryNames1, ...categoryNames2, ...categoryNames3, ...categoryNames4, ...categoryNames5]
// Save the array of names to a file
const data = [];

const generateItem = (name, id, parent_id) => {
  const itemDetail = {
    id: id,
    name: name,
    commission_normal: Math.random() * 101,
    commission_normal_new: Math.random() * 101,
    commission_promotion: Math.random() * 101,
    commission_promotion_new: Math.random() * 101,
    parent_id: parent_id ? parent_id : null,
  };
  return itemDetail;
};

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const listGenreateor = (catNames) => {
  const rootId = data.length + 1;
  // set root
  data.push(generateItem(catNames[0], data.length + 1, null));
  // filter 1%3
  const level1 = catNames.filter((_, i) => i % 3 === 0);
  const levetl1StartId = data[data.length - 1].id;
  level1.forEach((name, index) => {
    const idx = rootId + index + 1;
    data.push(generateItem(name, idx, rootId));
  });

  let remain = catNames.filter((_, i) => i % 3 !== 0);
  const level2 = remain.filter((_, i) => i % 2 === 0);
  const levetl2StartId = data[data.length - 1].id;
  level2.forEach((name, index) => {
    const idx = data.length + 1;
    data.push(generateItem(name, idx, data[levetl1StartId + index].id));
  });

  remain = remain.filter((_, i) => i % 2 !== 0);
  const level3 = remain.filter((_, i) => i % 2 === 0);
  const levetl3StartId = data[data.length - 1].id;
  level3.forEach((name, index) =>
    data.push(
      generateItem(name, data.length + 1, data[levetl2StartId + index].id),
    ),
  );

  remain = remain.filter((_, i) => i % 2 !== 0);

  remain.forEach((name, index) => {
    let d = data[levetl3StartId + index]?.id;
    if (!d) {
      d = getRandomBetween(rootId, data.length);
    }
    return data.push(generateItem(name, data.length + 1, d));
  });
};
listGenreateor(categoryNames0);
listGenreateor(categoryNames1);
listGenreateor(categoryNames2);
listGenreateor(categoryNames3);
listGenreateor(categoryNames4);
listGenreateor(categoryNames5);
// const d = [0,1,2,3,4,5].map(item => {})

const jsonData = JSON.stringify(data, null, 2); // The second argument is for pretty printing
fs.writeFile('statics.json', jsonData, (err) => {
  if (err) throw err;
  console.log('File saved successfully!');
});
