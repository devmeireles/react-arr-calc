export function detectSums(arr) {
  const matches = [];

  if (!Array.isArray(arr)) throw Error("Input is not an array");

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sumIndex = arr.indexOf(arr[i] + arr[j]);

      if (sumIndex !== -1 && sumIndex !== i && sumIndex !== j) {
        const pA = Math.min(i, j);
        const pB = Math.max(i, j);

        const existingMatch = matches.find(
          (match) =>
            match.pA === pA && match.pB === pB && match.sum === sumIndex
        );
        if (!existingMatch) {
          matches.push({ pA, pB, sum: sumIndex });
        }
      }
    }
  }

  return matches;
}

export function calculateResult(input) {
  const parsedInput = input
    .split(",")
    .map((i) => {
      const num = parseInt(i.trim(), 10);
      return isNaN(num) ? null : num;
    })
    .filter((i) => i !== null);

  let error = null;
  let result = "";
  try {
    result = detectSums(parsedInput);
  } catch (e) {
    error = e.message;
  }
  return { input: parsedInput, result, error };
}
