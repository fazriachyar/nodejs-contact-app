// core module
// file system

const fs = require('fs');
const readline = require('readline');

//menuliskan string ke file secara (synchronus)

// try {
//     fs.writeFileSync('data/text.txt', 'hello world secara synchronus');
// } catch (error) {
//     console.log(error)
// }

// menulis string secara asynchronus

// fs.writeFile('data/text.txt', 'hello world secara asnyc', (e) => {
//     console.log(e)
// })

// membaca isi file (synchronus)

// const data = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(data);

// membaca isi file (async)

// fs.readFile('data/text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//membuat folder data jika belum ada
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

//membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

rl.question('masukkan nama anda : ', (nama) => {
    rl.question('masukkan nomor hp anda : ', (nomor) => {
        
        const contact = { nama, nomor};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log(`terima kasih, semoga harimu menyenangkan :)`);

        rl.close();
    });
});





