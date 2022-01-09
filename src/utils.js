export function ISOStringToDate(string){
  return new Date(string.replace(/-/g, '/').replace(/T.+/, ''));
}
