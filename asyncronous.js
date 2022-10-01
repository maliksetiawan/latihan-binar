


// // ======= Asynchronous ==========///
// function Foo (){
//     return "FOO"
// }


// function Bar (){
//     return "BAR"
// }

// setTimeout(() => {
//     console.log("ASYNC")
// }, 1000)


// console.log(Foo())
// console.log(Bar())





// // ====== Call Back ============//

// // ======= callback time out====///
// const isAsync = (num, callback) => {
//     setTimeout(() => callback(num + 10), 10000 )
// }
// isAsync(5,console.log)

// // ======= call back  =======///

// const download = (url, callback) => {
//     console.log(`Downloading from ${url}`);
//     setTimeout(() => callback(),5000)
// };

// const url1 = `https://brachio.site/download`;
// const url2 = `https://trex.site/download`;
// const url3 = `https://stego.site/download`;

// download(url1, () => {
//     download(url2, () =>{
//         download(url3, () => {
//             console.log("DOWNLOAD COMPLETE");
//         })
//     })
// })


//============ Promise =============//////

const teman = ["farhan","irzan","adji","malik"]
const mobil = ["bmw","honda","suzuki","juki"]
//produce
function CariTeman(dataTeman, namaTeman){
    return new Promise((resolve, reject) => {
        const cari = dataTeman.includes(namaTeman)
        if(cari){
            resolve(`Success : ${namaTeman} ditemukan`)
        }
        reject(`Error :  ${namaTeman} tidak Ditemukan`)
    })
}
function CariMobil(dataMobil, namaMobil){
    return new Promise((resolve, reject) => {
        const cari = dataMobil.includes(namaMobil)
        if(cari){
            resolve(`Success : ${namaMobil} ditemukan`)
        }
        reject(`Error :  ${namaMobil} tidak Ditemukan`)
    })
}


//consuming
async function isAsyncAwait(){ //menggunakan asyncawait
    try {                      // contoh diyutub https://www.youtube.com/watch?v=4xsvn6VUTwQ
                   
       const rawTeman = await CariTeman(teman, "farhan")
       const rawMobil = await CariMobil(mobil, "bmw")
        console.log("TEMAN : ", rawTeman);
        console.log("mobil : ", rawMobil);
    } catch (error) {
        console.log(error);
    }
}
isAsyncAwait()
 
// CariTeman(teman,"irzan") //menggunakan catch dan then
// .then(result => console.log(result))
// .catch(error => console.log(error))

