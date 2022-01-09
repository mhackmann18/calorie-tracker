export function ISOStringToDate(string){
  return new Date(string.replace(/-/g, '/').replace(/T.+/, ''));
}

export function areDatesSameDay(string1, string2){
  return string1.toDateString() === string2.toDateString();
} 
