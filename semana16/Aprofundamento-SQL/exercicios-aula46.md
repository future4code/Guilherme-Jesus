### Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary;
apaga a coluna de salario

b)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
troca o nome da coluna gender para sex
c)
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Troca gender por gender e se mantem o mesmo só que com o maximo de 255 strigs a digitar
d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a) 
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "2015-03-15"
WHERE id= "003";

b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

c)
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";


d)
UPDATE Actor
SET name = "Aline Moraes",
salary = "3000000",
birth_date = "2018-03-25",
gender = "female"
WHERE id= "005";

### Exercício 3
a) 
UPDATE Actor
SET name = "Oconnor",
birth_date = "2018-03-36"
WHERE id= "078";

b)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

c)
DELETE FROM Actor WHERE gender = "male" AND salary > 1500000;



### Exercício 4
a) 
SELECT MAX(salary) FROM Actor;

b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)
SELECT SUM(salary) FROM Actor;


### Exercício 5
a) 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- ESTA QUERY COUNT RETORNA TODA A QUANTIDADE DE GENEROS SEXUAIS DOS ATORES E ATRIZES
-- GROUP BY SEPARA POR GENERO "MALE" AN "FEMALE" E A QUANTIDADE DE CADA

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT gender, AVG(salary) AS "Quantidade" FROM Actor 
GROUP BY gender;


### EXERCICIO 6 
a)
ALTER TABLE Filmes
ADD playing_limit_date DATE ;

b)
ALTER TABLE Filmes
CHANGE Avaliacao Avaliacao FLOAT;

c)
UPDATE Filmes -- ATUALIZAR VALORES DA TABELA
SET playing_limit_date = "2021-09-30"
WHERE id = "002";

d)
UPDATE Filmes -- ATUALIZAR VALORES DA TABELA
SET playing_limit_date = "2021-07-25"
WHERE id = "003";

e)
DELETE FROM Filmes WHERE id = "001";

f)
UPDATE Filmes -- ATUALIZAR VALORES DA TABELA
SET Sinopse = "Testando update"
WHERE id = "001";
-- atualiza porem na atualizacao nao da erro mais tambem nao aparece na tabela


### EXERCICIO 7
a)
SELECT id, Título, Sinopse FROM Filmes WHERE Avaliacao > 7.5;
SELECT AVG(Avaliacao) FROM Filmes;

b)
SELECT COUNT(*) FROM Filmes
WHERE playing_limit_date > CURDATE();

c)
SELECT COUNT(*) FROM Filmes
WHERE Data_de_Lancamento > CURDATE();

d)
SELECT MAX(Avaliacao) FROM Filmes;

e)
SELECT MIN(Avaliacao) FROM Filmes;

### EXERCICIO 8

a)
SELECT * FROM Filmes
ORDER BY Título ASC;

b)
SELECT * FROM Filmes
ORDER BY Título DESC
LIMIT 5;

c)
SELECT * FROM Filmes
ORDER BY playing_limit_date
LIMIT 3;

d)
SELECT * FROM Filmes 
WHERE Data_de_Lancamento < CURDATE() 
ORDER BY Data_de_Lancamento DESC 
LIMIT 3;

e)
SELECT * FROM Filmes
ORDER BY Avaliacao DESC
LIMIT 3;



