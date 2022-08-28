function rot13(str) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  let accumulator = '';


  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let isALetter = alphabet.includes(char);

    if (isALetter === false) {
      accumulator += char;
    } else {
      const charIndex = alphabet.findIndex(e => e === char);

      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13]
    }

  }
  return accumulator;
}












test('rot13', () => {
  expect(rot13("SERR PBQR PNZC")).toStrictEqual("FREE CODE CAMP");
});
