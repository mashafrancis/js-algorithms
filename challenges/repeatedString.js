function repeatedString(s, n) {
  const counta = (str) => str.split('')
    .filter(c => c === 'a')
    .length;

  const d = Math.floor(n / s.length);
  const r = n - (s.length * d);
  return d * counta(s) + counta(s.substr(0, r))
}
