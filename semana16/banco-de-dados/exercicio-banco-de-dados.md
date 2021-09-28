### Exercício 1
a) 
VARCHAR serve para representar strings, juntamente com (255) que significa,
a quantidade de caracteres máxima.
NOT NULL nao pode ser null
Date representa uma data

b) 
SHOW DATABASES traz os nome da tabela existente.

c)DESCRIBE mostra como esta estruturada a tabela, id ,name , salary e demais colunas.

### Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("01" , "Fatima Bernardes", 10000, "1945-08-23", "female"),
("02" , "Falcao", 10000, "1932-05-23", "male");

a) ("002" , "Glória Pires", 1200000, "1963-08-23", "female")


b) Código de erro: 1062. Entrada duplicada '01' para a chave 'PRIMÁRIA' 0,156 s
cada id é unico, não é possivel duplicar um value de uma query.

c)Error Code: 1136. Column count doesn't match value count at row 1	0.156 sec,

A contagem de colunas não corresponde à contagem de valores na linha 1 0,156 s
dentro dos Values possui "birth_date e gender" e não foi especificado como coluna dentro dos parenteses.

Maneira Correta
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d)Código de erro: 1364. O campo 'nome' não tem um valor padrão 0,156 s
Faltou colocar o nome no parenteses como coluna e não esta dentro do Value o nome!

Maneira Correta
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "William Bonner",
  400000,
  "1949-04-18", 
  "male"
);

e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 0,156 s
Faltou as aspas na data

Maneira correta
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercício 3
a) SELECT id, name from Actor WHERE gender = "female"

b)
SELECT * 
FROM Actor 
WHERE salary AND name = "Tony Ramos";

c)
SELECT *
FROM Actor
WHERE gender = "Masculino";
Só aceita na lingua inglesa

d)
SELECT *
FROM Actor
WHERE salary < 500000;

e)
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,156 s
o parametro da coluna se chama name, e o do exercicio esta nome, este é o motivo do erro

### Exercício 4
a) A query está dizendo nome tem "A" ou nome tem "J" e salario acima de 300.000

b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c)
SELECT *
FROM Actor
WHERE (name LIKE "G%" OR name LIKE "g%");

retorna Null não tem nenhum que possui g no nome

d)

SELECT *
FROM Actor
WHERE 
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

### Exercício 4

a)
TEXT é usado para grandes pedaços de dados de string. Se o comprimento do campo exceder um certo limite, o texto será armazenado fora da linha.

USE `lovelace-2147372-guilherme-jesus`;

CREATE TABLE Filmes(
id VARCHAR (255) PRIMARY KEY,
Titulo VARCHAR(255) NOT NULL UNIQUE,
Sinopse TEXT NOT NULL,
Data_de_Lancamento DATE NOT NULL,
Avaliacao INT NOT NULL
);

INSERT INTO Filmes
(id, Titulo, Sinopse, Data_de_Lancamento, Avaliacao)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há 
muitos anos e enfrentam a rotina do casamento.
Um dia eles são atingidos por um fenômeno inexplicável
e trocam de corpos",
"2006-01-06",
7
),
(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos,
 sempre causa grandes confusões. 
 A vida dela e dos seus quatro filhos sofre uma 
 reviravolta depois que Zaida, empregada e amiga de Dona Picucha,
 anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
 que só quer saber de farras e jogatina nas boates.
A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

