
// ======== contoh replaceAll========//

//const str = "087 877 355 753";
//const value = str.replaceAll(" ","-");
//console.log(value);

//const url = " Hello Saya Ridwan";
//const value = url.substring(17,url.length)
//console.log(value);

//================== contoh lowercase dan upper case ========//

//const url = " HeLlO SaYa RiDwaN";
//const frontend = url.toLocaleLowerCase()
 //const frontendd = url.toUpperCase() 
//console.log(frontend); 
//console.log(frontendd);//(ganti valuenya sesuaiin)

//====== Contoh Trim ==========================//

//const url = "     HELLO SAYA RIDWAN           "
//const value = url.trim()
//console.log("TANPA TRIM : ",url.length); 
//console.log("DENGAN TRIM : ", value.length);

//const NUMBER = ["ingin", "aku", "menjadi", "sukses"]
//console.log(NUMBER.sort());

//=============CONTOH Sort=========================//

//const sorting = () => "HELLO";
//[2, 3, 4, 5, 6, 7].sort((a, b)=> {
//    console.log("INI A: ", a)
//   console.log("INI B: ", b)
// })

//===============contoh array dan object==============//

//const array = [];
//const object = {
//    name: "malik",
  //  umur: "24",
   // gender: "cowo",
    //pekerjaan: ["gojek","grab","opang","maxim"],
    //kepala: {
      //  mata:2,
       // idung:1,
        //kuping:2
    //}
// }; <- materi selesai array object

//===============contoh soal rows ==================//

//const rows = [{
//   id:1,
 // name:'Malik',
//   is_manager: true,
 //  start_date:'17-08-2015',
 //  uang: 2000
//},{
//   id:2,
 //  name:'Emma',
//   age:'24',
 //  is_manager: true,
 //  start_date:'15-08-2015',
 //  uang: 3000
//},{
  // id:3,
   // name:'Icha',
  //  age:'21',
   // is_manager: false,
   // start_date:'16-08-2015',
 //   uang: 4000
 //}
 //];
//const value = rows.sort((a, b) => {
  //  if(a.name > b.name){
 //       return 1
 //       ? 1 : ((n.name > a.name) ? -1 :0)
 //   } else if (b.name > a.name){
  //      return -1
 //   }
 //   else{
 //       return 0
 //   }
// })
// console.log(value); < akhir contoh rows 

//=======CONTOH indexOF dan Includes=======================//

// CONTOH indexOF dan Includes
// const str = "aku sedang belajar searching algorithm"
// const str1 = str.lastIndexOf("Searching Algorithm")
// const str2 = str.includes("searching algorithm")

// console.log("dengan index of :", str1);
// console.log("dengan includes: ", str2); << Akhir contoh index of dan includes 


//==============Contoh search pada string=======//

// const str = "aku sedang belajar searching algorithm"
// const index1 = str.search(/SeArChInG AlGoRiThM/i) // <<== Menggunakan Regex
// console.log(index1 === -1 ? "KALIMAT NOT FOUND" : "KALIMAT DITEMUKAN"); // <<= CONTOH yang simple
 //const index1 = str.search("/SeArChInG AlGoRiThM/") <<== contoh yang panjang
 // if (index1 === -1){
 //   console.log("KALIMAT TIDAK DITEMUKAN")
 // }
 //else {
 //  console.log("KALIMAT DITEMUKAN")
 // }

 //===========contoh penggunanaan array()========///
 
 // const array = [1,2,3,4,5,"malik",6]
 // const value = array.includes("nothing") <<-includes
 //  atau const value = array.indexOf("malik") <<-- indexof
 // console.log(value);

// const array = [1,2,3,4,5,"malik",6]
 //const value = array.filter((value => value === 1)) <<- filter
// console.log(value);

//const value = rows.filter ((value => value.age >= 40))
// console.log(value); << ^^^ contoh menggunakan rows 

// ========= contoh implementasi search pada nama ===//





// ================== map dan reduce pada array =====//
       //MAP//

 //const value = rows.map ((isValue, isIndex) => {
 //   return "umur " + isValue.name + " adalah " + isValue.age
 //})

// console.log(value);

      //reduce//
  
  //const value = rows.reduce((acc, value, index) => {
   // acc =[ {...acc,
     // ...value,
    //  kelas:"2",
     // jurusan:"MIPA",
     // index,
    //}]
  //  return acc
  //},  )
  //console.log(value);

  //=========================function==============//
  const order = [{
    id:1,
    nama_barang: "Iphone 14",
    price: 200000,
    diskon:30,
  },{
    id:2,
  nama_barang: "laptop",
  price: 400000,
  diskon:5,
  },{
    id:3,
  nama_barang: "Meja",
  price: 300000,
  diskon: 10
  }];
  


  //const Foo = ({
 //   str1,
   // str2,
   // str3
 // }) => {
 //   return `${str1} ${str2} ${str3}`
 // }

 // console.log(Foo({
  //  str1: "Hello World",
  //  str2: "Hello Binar",
  //  str3: "Hello Teman"
 // }))
 

//  const diskon = ({ price, diskon}) => {
//     return (price * diskon) / 100
//  }

//  const value = rows.map((item) => {
//   return {
//     ...item,
//     akumulasi: diskon({ price: item.price, diskon: item.diskon}),
//     outputDiskon: item.price - diskon({ price: item.price, diskon: item.diskon})
//   }

//  })
 
// console.log(value);

 const looping = (array, callback) => {
  const newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i].nama_barang))
  }
  return newArray
 }

 console.log(looping(order, (item) =>{
  return item
 }))