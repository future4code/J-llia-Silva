# RESPOSTAS

##Exercicio1

a) O VARCHAR serve para receber string, o (255) significa que a string pode ter até 255 caracteres e isto é uma convesão. Poderiamos também usar apenas o CHAR para receber strings porém isso faria com que sempre ficassem reservados 255 espaços e isso poderia tomar muito espaço e não ficar uma tabela agradável.
O NOT NULL serve como o required: para indicar que esse campo não aceita null, ou seja, ele tem que ser obrigatoriamente preenchido. 
O DATE serve para indicar que esta coluna vai receber uma inforção do tipo data e o PRIMARY KEY serve como chave identificadora e é obrigatória.

b)Quando utilizado o comando SHOW TABLES me aparece todas as tabelas que teho criadas. Já com o SHOW DATABASES me aparece a lista de banco de dados.

c)Utilizando o comando DESCRIBE Actor primeiro descobri que o caps da letra importa e este comando me retorna informações sobre a tabela, ex: quais os tipos, se aceita NULL se tem Key e de qual tipo é a key.
```

##Exercício2
a) a query ficou assim :

 VALUES(
 "002", 
 "Glória Pires", 
 120000, 
 "1963-08-23", 
 "female");

 b) o erro foi -> Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'	E isso aconteceu porque estou tentando criar uma linha com o mesmo identificador de outra que já existe e por se tratar de um identificador não pode ser repetido,s e não, perde a função.

 c) o erro foi -> Error Code: 1136. Column count doesn't match value count at row 1 E isso aconteceu porque eu informei que iria passar 3 valores (id, name, salary) e depois passei 5 valores.
 Para corrigir acrescentei birth_date, gender dentro dos paranteses do INSERT.

 d) o erro foi -> Error Code: 1364. Field 'name' doesn't have a default value E isso aconteceu porque o coluna NAME nao aceita NUll, ela precisa ser orbigatóriamente preenchida. 

 e) o erro foi -> Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 E isso conteceu por que a data foi passada sem as aspas, para resolver coloquei as aspas.

 f) a query ficou assim :
 INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
 "006", 
 "Júllia", 
 1000000, 
 "1997-09-06", 
 "female");

 ```

##Exercício3
a) a query ficou assim :
SELECT * from Actor WHERE gender = "female";

b) a query ficou assim :
SELECT salary from Actor WHERE name LIKE "t%y%";

c) a query ficou assim :
SELECT * from Actor WHERE gender = "invalid"; 
e o resultado foi uma tabela de apenas uma linha e todos os campos preenchido com NULL, acredito ser proque não existe nenhuma linha que esteja com o valor inválido no campo gender.

d) a query ficou assim : 
SELECT id, name, salary from Actor WHERE salary <=50000; e não apareceu ninguém, mas se o valor fosse 5.000 , a queri ficaria assim: 
SELECT id, name, salary from Actor WHERE salary <=500000; e apareceriam 4 pessoas.

e) o erro foi->	Error Code: 1054. Unknown column 'nome' in 'field list'	e isso aconteceu porque não existe o campo "nome" e sim "name" corrigindo isso deu certo e ele me retornou a pessoa na colocação 002 - Gloria Pires.
 ```
 

##Exercício 4 
a) Será selecionado dentro da tabela Actor, todas as informações da pessoa que o seu nome comece por A ou por J desde que essa pessoa receba acima de 3.000.

b) a query ficou assim :
SELECT * FROM Actor WHERE (name NOT LIKE "A%" ) AND salary > 350000;

c) a query ficou assim : 
SELECT * from Actor WHERE name LIKE "%G%"; obs: não importa o Caps.

d) a query ficou assim:
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000 ;

##Exercício 5
a) CREATE TABLE Movie(
id INT PRIMARY KEY, 
name VARCHAR(255) NOT NULL, 
synopsis TEXT NOT NULL, 
release_date DATE NOT NULL,
assessment TINYINT
);

demais questões: 
VALUES 
(1,"Se Fosse Você","Sinopse: `Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7 ),
(2,"Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10), 
(3,"Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8 ), 
(4,"Carnaval","Quatro amigas curtinho o carnaval em Salvador.", "2021-06-02", 9 )

## Exercício 6

as querys ficaram assim:
a)SELECT id, name, assessment from Movie WHERE id = "002";
b)SELECT * from Movie WHERE name = "se fosse voce";
c)SELECT id, name, synopsis from Movie WHERE assessment >7;

##Exercício 7 

as querys ficaram assim:
a) SELECT  name from Movie WHERE name LIKE "%vida%";
b)SELECT * from Movie WHERE (synopsis LIKE "%vida%" OR name LIKE "%vida%");
c)SELECT * from Movie WHERE release_date < "2021-07-19";
d)SELECT * from Movie WHERE (synopsis LIKE "%vida%" OR name LIKE "%vida%") AND release_date < "2021-07-19";