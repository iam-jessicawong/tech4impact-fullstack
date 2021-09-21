1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu <br>
    ![Fork Repo](https://user-images.githubusercontent.com/61933958/134162977-1c60d609-c0f3-4286-ad51-d5a69042bf82.png)
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya.
    ```
    git clone https://github.com/iam-jessicawong/tech4impact-students-bio.git
    ```
3. Buatlah branch baru dengan nama lengkap kamu. Misalnya `david-winalda`. Jangan melakukan perubahan pada branch `master`.
    ```
    git branch jessica-wong
    ```
4. Checkout ke dalam branch tersebut yang telah kamu buat
    ```
    git checkout jessica-wong
    ```
5. Buatlah 1 file format `.md` dengan nama lengkap kamu. Contoh `davidwinalda.md`
    ```
    touch jessicawong.md
    ```
6. Isi file tersebut `davidwinalda.md` dengan konten di bawah ini:
    ```
    Nama Lengkap: David Winalda
    Umur: 27
    Pesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang
    ```
    ```
    nano jessicawong.md
    cat jessicawong.md
    ```
    ![Nano file jessicawong.md](https://user-images.githubusercontent.com/61933958/134162976-1d30c1b3-53ae-4de2-91ef-f9b69cb563fa.png)
    ![Isi File jessicawong.md](https://user-images.githubusercontent.com/61933958/134162974-6db1ebda-625e-44da-9745-ebd1cff6801d.png)
7. Masukkan file `.md` tersebut ke dalam staging area
    ```
    git add jessicawong.md
    ```
8. Commit dengan memberikan pesan nama file `.md` kamu
    ```
    git commit -m "jessicawong.md"
    ```
9. Merge branch yang telah kamu buat ke dalam branch `master`
    ```
    git checkout master
    git merge jessica-wong
    ```
10. Push ke dalam branch `master`
    ```
    git push origin master
    ```
11. Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch `master` pada GitHub Repository aslinya.
    ![Pull request to Github original repo](https://user-images.githubusercontent.com/61933958/134162968-c8634b1a-73d1-408e-a9e1-048304e48c99.png)
    [Link pull request](https://github.com/impactbyte/tech4impact-students-bio/pull/43)
