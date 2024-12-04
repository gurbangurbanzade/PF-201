let name = "salam*qurban";

let result = name.length;
// 1 - bu method her hansisa bir stringin uzunlugunu tapmaq ucun istifade olunur
console.log("result", result);

console.log(name.split("*"));
// 1. **Bir stringin uzunluğunu necə tapa bilərsiniz?**
// function("salam")---> 6
// 2. **Stringdəki müəyyən hərfin necenci oldugunu hansı metodla əldə edə bilərsiniz?**
// function("l","salam")---> 3-ci herfdir
// 3. **Bir stringdə hərfin Unicode dəyərini necə öyrənə bilərsiniz?**
// function("l","salam")---> unicode deyeri
// 4. **Stringi böyük hərflərə necə çevirə bilərsiniz?**
// function("salam")---> SALAM
// 5. **Stringi kiçik hərflərə necə çevirə bilərsiniz?**
// function("saLAm")---> salam
// 6. **Stringin hər iki tərəfindən boşluqları necə silə bilərsiniz?**
// function("  salam  ")---> salam
// 7. **Bir stringdəki müəyyən bir sözü başqa bir sözlə necə əvəz edə bilərsiniz?**
// function("Menim adim Qurban","kanan")---> Menim adim kanan
// 8. **Stringi necə tərsinə çevirə bilərsiniz?**
// function("salam")---> malas
// 9. **Stringdəki bütün hərfləri necə dəyişə bilərsiniz (böyükdən kiçiyə və əksinə)?**
// function("SaLaMLa")---> sAlAmlA
// 9. **Bir stringdən yalnız rəqəmləri necə çıxara bilərsiniz?**
// function("sl12sfa2321sfafa")---> slsfasfafa
// 10. **Stringdəki ilk hərfi böyük hərf etmək üçün hansı metodlardan istifadə edə bilərsiniz?**
// function("menIm aDim qurBandir")---> Menim Adim Qurbandir
// 11. **Bir stringin daxilində neçə hərf və neçə rəqəm olduğunu necə müəyyən edə bilərsiniz?**
// function("sl124asdfa23")---> herf-7 reqem-5
// 12. **Bir stringdəki bütün boşluqları necə aradan qaldıra bilərsiniz?**
// function("menIm aDim qurBandir")---> "menImaDimqurBandir"
// 13. **Stringdə birinci və sonuncu sözün yerini necə dəyişə bilərsiniz?**
// function("menIm aDim qurBandir")---> "qurBandir aDim menIm"
