const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const groupAlphabetically = (unOrdered) => {
  const alphabets = letters.toLocaleLowerCase().split("");
  const alphabeticallyGrouped = alphabets.map((letter) => {
    const regex = new RegExp("^" + letter);
    const orderedChunk = unOrdered.filter((item) =>
      regex.test(item.english.toLocaleLowerCase())
    );
    const sorted = orderedChunk.sort();

    return {
      letter,
      items: sorted,
    };
  });
  const filtered = alphabeticallyGrouped.filter(
    (item) => item.items.length > 0
  );
  return filtered;
};

export default groupAlphabetically;
