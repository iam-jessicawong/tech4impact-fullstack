1. membuat sebuah folder kosong dengan namamu sendiri
    ```
    mkdir jessica
    ```
    
2. membuat sebuah file dengan nama `README.md`, isi file tersebut dengan kalimat<br>`"Halo perkenalkan aku halaman utama"`
    ```
    touch README.md
    nano README.md
    ```
    
3. insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi Git Repository"`
    ```
    git init
    git add .
    git commit -m "Inisialisasi Git Repository"
    ```
    
4. buat `branch` baru dengan nama `cv`, hal ini berguna agar histori kita tidak tercampur
    ```
    git branch cv
    ```
    
5. pindah `branch` kedalam `cv`, kemudian buat file dengan nama `cv.txt` dan isi file tersebut dengan kalimat:<br>`"Ini adalah file CV"`
    ```
    git checkout cv
    touch cv.txt
    nano cv.txt
    ```
    
6. kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi CV"`
    ```
    git add cv.txt
    git commit -m "Inisialisasi CV"
    ```
    
7. tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan `commit`
    ```
    nano cv.txt
    git commit -am "menambahkan perusahaan pertama"
    nano cv.txt
    git commit -am "menambahkan perusahaan kedua"
    nano cv.txt
    git commit -am "menambahkan perusahaan ketiga"
    ```
    
8. kembali ke `branch master`
    ```
    git checkout master
    ```
    
9. ubah file `README.md` menjadi
    ```
    Halo perkenalkan aku halaman utama

    Ini adalah update pertama pada branch master
    ```
    jangan lupa untuk mendokumentasikannya menggunakan `commit` dengan pesan<br>`"update master pertama"`
    ```
    nano README.md
    git commit -am "update master pertama"
    ```
    
10. gabungkan `branch cv` kedalam `branch master` menggunakan perintah `git merge`
    ```
    git merge cv
    ```
    
11. unggah Git Repository tersebut kedalam GitHub
