/*/Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, 
přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. 
Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. 
Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. 
Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? 
Vypište do stránky i příjem divadla se započítanou slevou pro studenty.*/

const listek = 12;
const navtevnik = 174;
const divadlo = 15; 

const income = navstevnik * divadlo * listek;
console.log(income)
const slevaStudent = 0.65 * 12
const pocetStudentu = 0.4 * 174
const novyPrijem = slevaStudent * 15 * pocetStudentu
console.log(novyPrijem)

/*/Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. 
S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.
Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. 
Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). 
Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže./*/

console,log(Math.random()*100)