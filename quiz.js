const text = "nama saya adalah budi, saya bekerja sebagai frontend engineer"

const array = [1000, 20, 15, 18, 1, 9, 35]

const isObject = {
    nama_mobil: "ferrari",
    kecepatan: "6000 cc",
    harga: 20000000000,
    tipe: "tidak diketahui"
}
const arrayOf = [{
    nama_mobil: "lamborgini",
    kecepatan: "8000 cc",
    harga: 70000000000,
    tipe: "aventador"
}]

// nomor 1 //

// const value = text.replaceAll("frontend", "javascripts");
// console.log(value);


// nomor 2 // 

// const value = text.substring(23,text.length)
// console.log(value);

// nomor 3 //
// const frontend = text.toLocaleLowerCase()
// const frontendd = text.toUpperCase() 
// console.log(frontend); 
// console.log(frontendd);

// nomor 4 //
// const valueAB = array.sort((a,b) => a - b)
// const valueBA = array.sort((a,b) => b - a)

// console.log(valueAB);
// console.log(valueBA);
// nomor 5  dan nomor 6 //

// const str1 = text.lastIndexOf("frontend engineer")
// const str2 = text.includes("frontend engineer")

// console.log("dengan number:", str1);
// console.log("dengan boolean value: ", str2); 

// nomor 7  dan nomor 8// 

// const str1 = array.indexOf(18)
// const str2 = array.includes("2000")

// console.log(array[str1])

// console.log("temukan nilai 2000 = ", str2);

// nomor  9 //

// const value = array.filter((value => value === 1000)) 
// console.log(value[0]);

// nomor 10 // 

// const value = array.filter((value => value === 1000)) 
// console.log(value);

// nomor 11 // 
// function arrayPush(isObject){
//     arrayOf.push(Object)
//     return arrayOf
// }
// const value = arrayPush({
//     nama_mobil: "ferrari",
//     kecepatan: "6000 cc",
//     harga: 200000000,
//     tipe: "tidak diketahui"
// })
// console.log(value);

//nomor 12//
function stringReplace(text){
    return text.replace("frontend", "javascripts")
}
function substring(text){
    return text.substring(23,text.length)
}
function toUpperCase(text){
    return text.toUpperCase()
}
function sort(array){
    return valueAB = array.sort((a,b) => a - b)
}
function lastIndexOf(text){
    return text.lastIndexOf(("frontend engineer"))
}
function includes(text){
    return text.includes(("frontend engineer"))
}
function indexOF(array){
    return array.indexOf(18)
}
function includes(array){
    return array.includes(1000)
}
function filter(array){
    return array.filter((value => value === 1000))
}
function filterr(array){
    return array.filter((value => value === 1000))
}
function arrayPush(isObject){
    arrayOf.push(Object)
    return arrayOf
}
const value = arrayPush({
    nama_mobil: "ferrari",
    kecepatan: "6000 cc",
    harga: 200000000,
    tipe: "tidak diketahui"
})


console.log(stringReplace(text));
console.log(substring(text));
console.log(toUpperCase(text));
console.log(sort(array));
console.log(lastIndexOf(text));
console.log(includes(text));
console.log(indexOF(array));
console.log(includes(array));
console.log(filter(array)[0]);
console.log(filterr(array));
console.log(value)

//1 . gunakan metode replaceAll() pada input variable text diatas: 
//output: "nama saya adalah budi saya bekerja sebagai javascript engineer"

//2. gunakan metode substring() pada input variable text diatas:
// output : "saya bekerja sebagai frontend engineer" 

//3. gunakan metode toUpperCase() pada input variable text diatas:
// output : "NAMA SAYA ADALAH BUDI, SAYA BEKERJA SEBAGAI FRONTEND ENGINEER"

//4. gunakan metode sorting berdasarkan descending dan ascending pada input variable array diatas:
// output : ascending :[1, 9, 15, 18, 20, 35, 1000]
// output : descending: [1000, 35, 20, 18, 15, 9, 1]

//5. gunakan metode indexOf() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" = (number of character)

//6. gunakan metode includes() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" : (boolean value)

//7. gunakan metode indexOf() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 18 = [nilainya]

//8. gunakan metode includes() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 2000 = false

//9. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : hapus nilai selain 1000 = [35, 20, 18, 15, 9, 1]

//10. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai sama dengan 1000 = [1000]

//11. gabungkan variable isObject kedalam variable arrayOf dengan menggunakan method push atau spread operator
/**
    output:
     const arrayOf = [{
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador"
    },{
        nama_mobil: "ferrari",
        kecepatan: "6000 cc",
        harga: 20000000000,
        tipe: "tidak diketahui"
    }]
 * */ 

//11. Buat metode Function() dari sebuah  semua methode algorithma yg telah di kerjakan lalu return setiap kondisinya dan berikan nama function yg sesuai denga kebutuhan 
/**
    output : 
        function(){
            // isilah metode tersebut kedalam function()///
            // berikan return valuenya
        } 
* */