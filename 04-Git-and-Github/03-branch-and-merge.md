1.  What does `git clean` do? <br>
    `git clean` menghapus untracked file dan direktori dari working tree atau dengan kata lain menghapus file dan direktori yang baru dibuat dalam working directory dan belum dimasukkan ke version control. `git clean` sama dengan command `rm` untuk menghapus file secara permanen dan tidak bisa diundo (dibatalkan/dikembalikan).

2.  What do the `-d and -f` flags for `git clean` do? <br>
    `-d` merupakan option untuk menghapus untracked direktori dan `-f` merupakan required option untuk menjalankan penghapusan (singkatan dari force), jika tidak ditambahkan -f maka git tidak akan melakukan penghapusan kecuali konfigurasi option *clean.requireForce* diset menjadi *false*. Kombinasi `-d dan -f` akan memberitahu kepada gi clean untuk menghapus untracked directory.

3.  What `git` command creates a branch? <br>
    **git branch *branch_name***

4.  What is the difference between a fast-forward and recursive merge? <br>
    ***Fast-forward merge*** merupakan merging yang dilakukan ketika kedua branch masih berada pada satu jalur commit yang sama. Sedangkan ***recursive merge*** merupakan merging yang dilakukan ketika dua branch yang dimerge tidak lagi berada dalam satu jalur atau dengan kata lain kedua branch tersebut sudah memiliki commitnya masing-masing. Dengan *recursive merge* maka proses merging yang dilakukan akan membuat sebuah commit baru untuk menyatukan kedua branch sedangkan dengan *fast-forward merge* maka head nya hanya akan berpindah ke commit terbaru dari branch yang dimerge (tidak membuat commit baru).
    Berikut ini merupakan contoh dari ***Fast-forward* merge** dan ***Recursive merge***
    ![Fast-forward merge](https://user-images.githubusercontent.com/61933958/134110878-a05a835c-f5f9-4849-8c92-79df11fd4be8.png)
    ![Recursive merge](https://user-images.githubusercontent.com/61933958/134110882-838b7e25-c344-44ee-8f7e-e3fa5ce24f96.png)

5.  What `git` command changes to another branch? <br>
    **git checkout *branch_name***

6.  How do you remove **modified or deleted** files from the working directory? <br>
    **git checkout *file_name*** (to discard changes in working directory) atau **git rm -f *file_name*** (to remove modified files from working directory) <br>
    **git add -u** (to staged the changes, it will also remove the modified or deleted files from working directory)

7.  What `git` command deletes a branch? <br>
    **git branch -d *branch_name*** (untuk branch yang sudah dimerge atau dipush) <br>
    **git branch -D *branch_name*** (untuk branch yang belum dimerge atau dipush)

8.  What does the `git diff` command do? <br>
    Melihat perbedaan yang terjadi pada file yang dimodifikasi tapi belum dimasukkan ke staging area

9.  How do you remove files from the staging area? <br>
    remove berdasarkan file :
    - **git reset HEAD *file_name***
    - **git restore --staged *\<file>***
    
    remove everything from the staging area :
    - **git reset HEAD**
    - **git restore --staged .**

10. How do merge conflicts happen?
    <br> Merge conflicts terjadi ketika dua branch yang ingin digabungkan memodifikasi atau memiliki perbedaan pada lokasi yang sama di satu file yang sama. Atau sederhananya terdapat perbedaan isi dari satu file pada baris yang sama. Misal seperti di branch A file buah.txt pada baris ke-4 tertulis anggur namun pada branch B file buah.txt baris ke-4 tertulis apel, jika kedua branch tersebut dimerge maka akan terjadi conflict.