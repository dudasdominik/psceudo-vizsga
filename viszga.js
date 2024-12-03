// A program egy tömböt és egy számot kér be a felhasználótól.
// Ellenőrzi, hogy a szám szerepel-e a tömbben, majd ha igen, 
// rendezi a tömböt és binary search segítségével megkeresi a szám indexét.

// 1. A tömb bekérése és konvertálása számmá
const inputArray = prompt("Add meg a számokat vesszővel elválasztva:").split(",").map(Number);
// A szám bekérése, amit keresni fogunk
const searchNumber = Number(prompt("Add meg a keresendő számot:"));

// Ellenőrizzük, hogy a megadott szám szerepel-e a tömbben
if (inputArray.includes(searchNumber)) {
  console.log(`A szám (${searchNumber}) szerepel a tömbben.`);

  // A tömb rendezése növekvő sorrendbe
  const sortedArray = inputArray.sort((a, b) => a - b); // Hibátlan sort függvény

  console.log("Rendezett tömb:", sortedArray);

  // Bináris keresés implementációja
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (array[mid] === target) {
        return mid; // Megtaláltuk a számot, visszatérünk az indexszel
      } else if (array[mid] < target) {
        left = mid + 1; // A célérték a jobb oldali tartományban van
      } else {
        right = mid - 1; // A célérték a bal oldali tartományban van
      }
    }

    return -1; // Ha nem található meg a szám, -1-et adunk vissza
  }

  // Binary search hívása
  const resultIndex = binarySearch(sortedArray, searchNumber);
  console.log(`A szám indexe a rendezett tömbben: ${resultIndex}`);
} else {
  console.log(`A szám (${searchNumber}) nem található a tömbben.`);
}

// --- Hibás rész ---
// Szándékosan hibás sort metódus
const faultySortedArray = inputArray.sort(); // HIBA: A sort() alapértelmezés szerint stringként rendezi az elemeket
console.log("Hibás rendezés eredménye (stringként):", faultySortedArray);
// Hibás binarySearch miatt rossz indexet fog adni

// --- Hiba kijavítása ---
// A rendezési metódust helyesen adjuk meg: a - b növekvő sorrendhez
const fixedSortedArray = inputArray.sort((a, b) => a - b);
console.log("Javított rendezett tömb:", fixedSortedArray);

// A sort() hibája:
// A sort() alapértelmezés szerint stringként kezeli az elemeket, ezért a számokat helytelenül rendezi (pl. [10, 2, 30] => [10, 2, 30]).
// Megoldás:
// Használjuk a (a - b) komparátorfüggvényt a számok helyes sorrendbe állításához.
