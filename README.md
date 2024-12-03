# Pszeudokód

1. **Számok bekérése**
   - Kérd be a felhasználótól a számokat, vesszővel elválasztva.
   - Konvertáld a tömb elemeit számokká.

2. **Keresendő szám bekérése**
   - Kérd be a keresendő számot.

3. **Ellenőrzés**: Ha a keresendő szám szerepel a tömbben:
   - Írd ki, hogy a szám szerepel a tömbben.
   - **Rendezés**: Rendezd a tömb elemeit növekvő sorrendbe.
     - **Hibás rendezés**: `inputArray.sort()` alapértelmezés szerint stringként rendezi az elemeket, ami hibás eredményt adhat számok esetén. 
       - Példa: `[10, 2, 30]` rendezése eredménye `[10, 2, 30]` lesz, mivel az elemeket karakterláncként rendezi (a "2" előbb van, mint a "10").
     - **Helyes rendezés**: `inputArray.sort((a, b) => a - b)`, hogy biztosítsd a számok helyes sorrendbe állítását.
   - Írd ki a rendezett tömböt.
   - **Bináris keresés** a rendezett tömbön a keresett számmal:
     - **Kezdőértékek**:
       - `bal` = 0
       - `jobb` = tömb hossza - 1
     - **Amíg** `bal` kisebb vagy egyenlő `jobb`:
       - `közép` = (`bal` + `jobb`) / 2 (egész része)
       - **Ha** `közép` elem értéke egyenlő a keresett számmal:
         - Térj vissza az indexével.
       - **Ha** a `közép` elem kisebb a keresett számnál:
         - A célérték a jobb oldali tartományban van (`bal` = `közép` + 1).
       - **Ha** a `közép` elem nagyobb a keresett számnál:
         - A célérték a bal oldali tartományban van (`jobb` = `közép` - 1).
     - **Ha** nem található a szám, térj vissza -1-el.
   - Írd ki a keresett szám rendezett tömbbeli indexét.

4. **Ha a keresett szám nem található a tömbben**:
   - Írd ki, hogy a szám nem szerepel a tömbben.
