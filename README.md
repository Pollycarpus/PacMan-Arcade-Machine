# PacMan-Arcade-Machine

PacMan-Arcade-Machine adalah game sejenis persis atau sama seperti permainan pacman yang sama seperti pacman yang telah melegenda.

## Nama
Muhammad Fikri Hizbullah

## NIM
13517104

## No. Urut Pilihan
3 atau 4 (lupa..)

## Cara Bermain
Kamu harus sudah menginstall
1. Node JS
2. ExpressJS

Setelah itu, masuk ke folder clone dari repository ini dan jalankan perintah
```bash
    node app
```
![Run the node](screenshots/nodeapp.JPG?raw=true "Run the Game")

lalu buka http://localhost:8080.

![The game](screenshots/thegame.JPG?raw=true "The game")
Permainan menggunakan arah keyboard untuk menggerakan si pacman. 

![Eat the coin](screenshots/eatcoin.JPG?raw=true "Eat the Coin")
Koin menambah 10 skor

![Eat the cherries](screenshots/eatcherries.JPG?raw=true "Eat the Cherries")
ceri menambah 50 skor

Permainan akan kalah bilamana pacman dengan ghost dalam satu petak. Permainan akan menang bilamana pacman berhasil memakan semua koin dan buah ceri yang ada.

![Scoreboard](screenshots/scoreboard.JPG?raw=true "Scoreboard")
Setelah permainan usai, akan ditampilkan scoreboard yang mana akan diurutkan dari yang memiliki score terbesar ke yang terkecil. Jika ingin membuat permainan baru cukup muat ulang web. Selamat bermain!

## Alasan Pemilihan Algoritma
Pada permainan ini, ghost yang mengejar si pacman dirancang dengan menggunakan algoritma BFS karena pada persoalan ini graf yang merepresentasikan <i>maze</i> setiap sisinya tidak mempunyai arah dan juga tidak memiliki berat atau nilai. Setiap simpul dari awal harus ditelusuri dahulu semua anak simpulnya jadi semua sisi dapat ditelusuri dengan baik dan dijamin pasti akan menemukan solusi terbaik.
