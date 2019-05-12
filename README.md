# PacMan-Arcade-Machine

## Nama : Juniardi Akbar
## NIM : 13517075
## No urutan lab IRK : 2

## Deskripsi singkat aplikasi
1. Game ini dibangun dengan menggunkaan P5.js
2. Highscore disimpan di dalam file ajax/score.json
3. JQuery digunakan untuk mengupdate file score.json

## Panduan memainkan permainan
1. Di awal permainan, masukkan nama Anda terlebih dahulu. Lalu klik tombol start.
![alt text](https://raw.githubusercontent.com/juniardiakbar/PacMan-Arcade-Machine/master/path/startmenu.png)
2. Saat game dimulai, Anda dapat menggerakkan pacman dengan arrow keyboard.
3. Empat buah bot ghost akan mengejar Anda dengan menggunakan algortima BFS.
![alt text](https://raw.githubusercontent.com/juniardiakbar/PacMan-Arcade-Machine/master/path/gameplay.png)
4. Jika posisi pacman sama dengan posisi bot, game akan berakhir dan akan ditampilkan sebuah page yang berisi tombol start again dan tombol highscore.
![alt text](https://raw.githubusercontent.com/juniardiakbar/PacMan-Arcade-Machine/master/path/gameover.png)
5. Untuk melihat highscore, klik tombol highscore.
![alt text](https://raw.githubusercontent.com/juniardiakbar/PacMan-Arcade-Machine/master/path/highscore.png)

## Alasan menggunakan algoritma BFS
Algoritma BFS akan lebih mudah dipahami dan akan lebih efektif untuk mengejar player. Algoritma BFS akan mengiripkan rute dari posisi bot ke posisi pemain sehingga pergerakan bot akan efektif. Pada setiap tick saat player berpindah, maka posisi keempat bot juga akan berpindah mengejar pemain. Ini mengakibatkan permainan akan semakin sulit.
