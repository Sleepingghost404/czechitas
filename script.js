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