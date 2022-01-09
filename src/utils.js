export function ISOStringToDate(string){
  return new Date(string.replace(/-/g, '/').replace(/T.+/, ''));
}

export function areDateStringsSameDate(string1, string2){
  return ISOStringToDate(string1).toDateString() === ISOStringToDate(string2).toDateString();
} 
