create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table program (
  id int unsigned primary key auto_increment not null,
  title varchar(50),
  synopsis text not null,
  poster text,
  country varchar(50),
  year int,
  category_id int unsigned not null
);

create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(25)
);
