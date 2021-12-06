-- create user
CREATE TABLE user(
  user_id int AUTO_INCREMENT PRIMARY KEY,
  name varchar(100),
  email varchar(100) UNIQUE,
  password varchar(255)
);

-- create singer
CREATE TABLE singer(
  singer_id int AUTO_INCREMENT PRIMARY KEY,
  name varchar(100)
);

-- create album
CREATE TABLE album(
  album_id int AUTO_INCREMENT PRIMARY KEY,
  name varchar(255),
  singer_id int,
  CONSTRAINT fk_album_singer_id FOREIGN KEY(singer_id) REFERENCES singer(singer_id)
);

CREATE TABLE track(
  track_id int AUTO_INCREMENT PRIMARY KEY,
  title varchar(255),
  singer_id int,
  album_id int,
  CONSTRAINT fk_track_singer_id FOREIGN KEY(singer_id) REFERENCES singer(singer_id),
  CONSTRAINT fk_track_album_id FOREIGN KEY(album_id) REFERENCES album(album_id)
);

CREATE TABLE playlist(
  playlist_id int AUTO_INCREMENT PRIMARY KEY,
  user_id int,
  CONSTRAINT fk_playlist_user_id FOREIGN KEY(user_id) REFERENCES user(user_id)
);

CREATE TABLE playlist_track(
  playlist_id int,
  track_id int,
  CONSTRAINT fk_playlist_track_playlist FOREIGN KEY(playlist_id) REFERENCES playlist(playlist_id),
  CONSTRAINT fk_playlist_track_track FOREIGN KEY(track_id) REFERENCES track(track_id)
);