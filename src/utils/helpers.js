import { formatDistance, parseISO } from 'date-fns';
import { differenceInDays } from 'date-fns/esm';


export function convertEnNumberToPersian(number) {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  number = number.toString().split("");
  let persianNumber = "";
  for (let i = 0; i < number.length; i++) {
    number[i] = persian[number[i]];
  }
  for (let i = 0; i < number.length; i++) {
    persianNumber += number[i];
  }
  return persianNumber;
};

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value
  );

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat('fa-IR', {
    day: 'numeric',
    month: 'short',

  }).format(new Date(dateStr));

}
export function formatDateWithHour(dateStr) {
  return new Intl.DateTimeFormat('fa-IR', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}
export function formatDay(dateStr) {
  return new Intl.DateTimeFormat('fa-IR', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(dateStr));

}

