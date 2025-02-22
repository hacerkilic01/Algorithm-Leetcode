// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
      return "";
    }
    
    const gcdLength = gcd(str1.length, str2.length);
    
    // Bu substring, ortak bölen string adayıdır.
    const candidate = str1.substring(0, gcdLength);

    return candidate;
  }
  
  const s1 = "ABCABCABC";
  const s2 = "ABCABC";
  console.log(gcdOfStrings(s1, s2));