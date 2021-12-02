-- create database --
create database skilvulbookstore;

use skilvulbookstore;

-- create table penerbit
create table penerbit(
  id int(10) auto_increment primary key not null,
  nama varchar(50),
  kota varchar(50)
);

-- insert data penerbit
insert into penerbit(nama, kota) values
('Penguin Books', 'New York'),
('Atria Books', 'New York'),
('Kepustakaan Populer Gramedia', 'Jakarta'),
('Bloomsbury Publishing', 'London');

-- create table penulis
create table penulis(
  id int(10) auto_increment primary key not null,
  nama varchar(50),
  kota varchar(50)
);

-- insert data penulis
insert into penulis(nama, kota) values
('Haemin Sunim', 'Seoul'),
('John Connolly', 'New York'),
('Leila S. Chudori', 'Jakarta');

-- create table buku
create table buku(
  id int(10) auto_increment primary key not null,
  isbn varchar(50),
  judul varchar(50),
  penulis int(10),
  penerbit int(10),
  harga int(10),
  stock int(10),
  constraint fk_buku_penulis foreign key(penulis) references penulis(id),
  constraint fk_buku_penerbit foreign key(penerbit) references penerbit(id)
);

-- insert data buku
insert into buku values
('', '0143132288', 'Love for Imperfect Things', 1, 1, 300000, 8),
('', '6024246943', 'Laut Bercerita', 3, 3, 89000, 100),
('', '0743298853', 'The Book of Lost Things', 2, 2, 80000, 9),
('', '0143130773', 'The Things You Can See Only When You Slow Down', 1, 1, 200000, 7);

-- inner join
select buku.id, isbn, judul, penulis, penerbit.nama as penerbit, harga, stock from buku inner join penerbit on buku.penerbit = penerbit.id;

-- left join
select buku.id, isbn, judul, penulis, penerbit.nama as penerbit, harga, stock from buku left join penerbit on buku.penerbit = penerbit.id;

-- right join
select buku.id, isbn, judul, penulis, penerbit.nama as penerbit, harga, stock from buku right join penerbit on buku.penerbit = penerbit.id;

-- max
select MAX(harga) from buku where stock < 10;

-- min
select MIN(harga) from buku;

-- count
select COUNT(*) from buku where harga < 100000;
