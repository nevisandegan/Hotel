import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:" در کابین چوبی دنج 001، بهترین اقامتگاه لوکس را برای زوج‌ها کشف کنید.این کابین خیره‌کننده که در جنگلی زیبا واقع شده است، مکان خلوت و صمیمی را ارائه می‌دهد.در داخل، از فضای داخلی چوبی با کیفیت بالا، فضای نشیمن راحت، شومینه و آشپزخانه کاملاً مجهز.تخت خواب شیک کینگ با ملحفه‌های ظریف، خوابی آرام در شب را تضمین می‌کند.در دوش آبگرم استراحت کنید و در عرشه خصوصی با جکوزی استراحت کنید."
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "cabin-002.jpg",
    description: "فرار به آرامش طبیعت و غرق در تجمل در کابین دنج ما 002. این کابین ایده آل برای زوج ها، خلوتگاهی صمیمی و خلوت در قلب جنگلی زیبا را ارائه می دهد. در داخل، فضای داخلی گرم و دلپذیری خواهید دید که از ارتفاعات ساخته شده اند. چوب با کیفیت، یک منطقه نشیمن راحت، یک شومینه و یک آشپزخانه کاملاً مجهز. اتاق خواب مجلل دارای یک تخت کینگ سایز مجلل و دوش آبگرم است. در عرشه خصوصی با جکوزی استراحت کنید و از زیبایی طبیعت لذت ببرید."
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description: "زندگی خانواده لوکس را در کابین چوبی متوسط 003 ما تجربه کنید. این کابین برای خانواده های حداکثر 4 نفره ایده آل است، این کابین فضایی راحت و دلپذیر با تمام امکانات مدرن ارائه می دهد. در داخل، فضای داخلی گرم و دلپذیری خواهید یافت که با کیفیت بالا ساخته شده اند. چوب، فضای نشیمن راحت، شومینه، و آشپزخانه کاملاً مجهز. اتاق خواب ها دارای تخت خواب های مجلل و حمام های آبگرم هستند. کابین دارای یک عرشه خصوصی با جکوزی و قسمت نشیمن در فضای باز است که برای تماشای محیط طبیعی عالی است. "
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "cabin-004.jpg",
    description: "تعطیلات خانوادگی لوکس را در این کابین با اندازه متوسط 004 بگذرانید. این کابین که برای خانواده های حداکثر 4 نفره طراحی شده است، اقامتگاه مجللی را برای مسافران فهیم فراهم می کند. در داخل، کابین دارای فضای داخلی مجلل است که از مرغوب ترین چوب ساخته شده است. یک منطقه نشیمن راحت، یک شومینه، و یک آشپزخانه لذیذ کاملاً مجهز. اتاق خواب‌ها با تخت‌خواب‌های مجلل و حمام اختصاصی با الهام از آبگرم تزئین شده‌اند. به عرشه خصوصی‌تان بروید و در محیط طبیعی غوطه‌ور شوید در حالی که در فضای گرم خود استراحت کنید. وان."
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description: "از یک استراحت راحت و دنج با گروه یا خانواده خود در کابین جادار 005 ما لذت ببرید. این کابین که برای گنجایش حداکثر 6 نفر طراحی شده است، خلوتگاهی منزوی در قلب طبیعت ارائه می دهد. در داخل، کابین دارای فضای داخلی گرم و جذاب است که با کیفیت ساخته شده است. چوب، قسمت نشیمن با شومینه، و آشپزخانه کاملاً مجهز. اتاق خواب‌ها راحت و مجهز به حمام اختصاصی هستند. به عرشه خصوصی خود بروید و در حالی که در وان آب گرم خود استراحت می‌کنید، به محیط طبیعی اطراف بروید.»"
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "cabin-006.jpg",
    description: "مظهر لوکس بودن را با گروه یا خانواده خود در کابین چوبی جادار ما 006 تجربه کنید. این کابین برای گنجاندن راحت تا 6 نفر طراحی شده است، این کابین خلوتگاهی مجلل در قلب طبیعت ارائه می دهد. در داخل کابین، فضای داخلی مجلل ساخته شده از چوب درجه یک ساخته شده است. یک منطقه نشیمن بزرگ با شومینه، و یک آشپزخانه لذیذ کاملاً مجهز. اتاق خواب‌ها با تخت‌های مجلل و حمام‌های اختصاصی مانند اسپا تزئین شده‌اند. به عرشه خصوصی خود بروید و در محیط طبیعی غوطه‌ور شوید و در حالی که در فضای گرم خود استراحت کنید. وان."
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "cabin-007.jpg",
    description: "گروه بزرگ یا چندین خانواده خود را در کابین چوبی بزرگ و جادار 007 اسکان دهید. این کابین که به راحتی تا 8 نفر را در خود جای می دهد، یک خلوتگاه خلوت در قلب جنگل ها و کوه های زیبا ارائه می دهد. در داخل، کابین دارای فضای داخلی گرم و جذاب است. ساخته شده از چوب مرغوب، چندین قسمت نشیمن با شومینه، و آشپزخانه کاملاً مجهز. اتاق خواب‌ها راحت و مجهز به حمام اختصاصی هستند. کابین دارای یک عرشه خصوصی با جکوزی و قسمت نشیمن در فضای باز است که برای استراحت در فضای باز مناسب است. محیط طبیعی."
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description: "مظهر تجمل و عظمت را با گروه بزرگ خود یا چندین خانواده در کلبه بزرگ ما 008 تجربه کنید. این کابین خلوتگاه مجللی را ارائه می دهد که تمام نیازها و خواسته های شما را برآورده می کند. کابین دارای طراحی مجلل است و دارای روکش های سطح بالا است. جزئیات پیچیده و مرغوب ترین چوب در سرتاسر داخل کابین، دارای چندین قسمت نشیمن باشکوه با شومینه، یک ناهار خوری رسمی، و یک آشپزخانه لذیذ است که رویای یک سرآشپز است. اتاق خواب ها برای نهایت راحتی و لوکس طراحی شده اند، با تخت خواب های مجلل و حمام های اختصاصی الهام گرفته از آبگرم. بیرون بروید و از عرشه خصوصی خود در زیبایی طبیعت غوطه ور شوید، دارای جکوزی مجلل و قسمت های نشیمن بزرگ برای آرامش و لذت نهایی."
  },
];
