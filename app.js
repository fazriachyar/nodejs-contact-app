const contacts = require("./contacts")

const main = async() => {
    const nama = await contacts.tulisPertanyaan("Siapa nama anda ? : ");
    const nomor = await contacts.tulisPertanyaan("Berapa nomor telepon anda ? : ");
    const email = await contacts.tulisPertanyaan("masukkan email anda : ")

    contacts.simpanContact(nama,nomor,email);
}

main();
