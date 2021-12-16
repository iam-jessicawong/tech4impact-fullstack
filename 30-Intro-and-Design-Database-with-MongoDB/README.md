1. Relasi *Skiljek* dan Schema.

    Relasi: One-to-one 

    Schema:
    ```json
    {
      "_id": "ObjectId('61bb2da4ecb3cf0106d64edc')",
      "fullName": "Jessica Wong",
      "email": "jessicawong@mail.com",
      "phoneNumber": "0123456789101"
    }
    ```

<br>

2. Relasi *SkilShop* dan Schema.

    Relasi : One-to-few

    Schema:
    ```json
    {
      "_id": "ObjectId('61bb3c1cecb3cf0106d64edf')",
      "fullName": "Jessica Wong",
      "phoneNumber": "0123456789101",
      "address": [
        {"street": "185, Merdeka Pasar", "city": "Tapaktuan"},
        {"street": "289-1113, Nishishinjuku Shinjuku Sumitomobiru(31-kai)", "city": "Shinjuku-ku"}
      ]
    }
    ```

<br>

3. Relasi *SkilShop* dan Schema
    
    Relasi: One-to-many

    Schema:
    ```json
    {
      "_id": "ObjectId('61bb3c1cecb3cf0106d64edf')",
      "productName": "Kaos Polos",
      "brandName": "SkilShirt",
      "variants": [
        {
          "variantName": "Kaos Polos Hitam",
          "color": "Hitam",
          "quantity": 12,
          "price": "Rp 99.000"
        },
        {
          "variantName": "Kaos Polos Navy",
          "color": "Navy",
          "quantity": 10,
          "price": "Rp 99.000"
        }
      ]
    }
    ```


<br>

4. Relasi *SkilFlix* dan Schema

    Relasi: Many-to-many

    Schema:

    Cinema:
    ```json
    {
      "_id": "ObjectId('61bb3c1cecb3cf0106d64f1d')",
      "cinemaName": "CGF",
      "location": "Pondok Indah Mall",
      "films": [
        "ObjectId('61bb3c1cecb3cf0106d64uio')", 
        "ObjectId('61bb3c1cecb3cf0106d64plk')"
      ]
    },
    {
      "_id": "ObjectId('61bb3c1cecb3cf0106d64f0s')",
      "cinemaName": "Cinema31",
      "location": "Mall Kelapa Gading",
      "films": [
        "ObjectId('61bb3c1cecb3cf0106d64uio')",
        "ObjectId('61bb3c1cecb3cf0106d64plk')"
      ]
    }
    ```

    Movie:
    ```json
    {
      "_id": "ObjectId('61bb3c1cecb3cf0106d64uio')",
      "filmName": "Venom 2",
      "cinemas": [
        "ObjectId('61bb3c1cecb3cf0106d64f1d')", 
        "ObjectId('61bb3c1cecb3cf0106d64f0s')"
      ]
    },
    {
      "_id": "ObjectId('61bb3c1cecb3cf0106d64plk')",
      "filmName": "Spiderman No Way Home",
      "cinemas": [
        "ObjectId('61bb3c1cecb3cf0106d64f1d')", 
        "ObjectId('61bb3c1cecb3cf0106d64f0s')"
      ]
    }
    ```