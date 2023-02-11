// Practise set 1
const str1 = "Astro@@32 1";
const str2 = "astro@@32 1";
// creating RegExp; means regular expression
const pattern = new RegExp(str1, "gi"); // g: means global it includes all string character set || i: means insensitive (a-z A-Z) doesn't care
// matching two strings
if (pattern.test(str2) == true) {
  console.log("Equal");
} else {
  console.log("Not equal");
}
