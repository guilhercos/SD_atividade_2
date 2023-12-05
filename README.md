# Repositório da atividade 2 - Sistemas Distribuídos

## Objetivo

###### Este mini-projeto tem o objetivo de criar um sistema para explorar o consumo e publicação de serviços REST com integração com a API do Google Books.

> [!WARNING]
> Você precisará de um container com o MongoDB rodando no docker.


## Executando

**1. Instale as dependências dentro de cada api:**

```
cd books/; npm i; cd ..; cd comments/; npm i; cd ..;cd gateway/; npm i; cd ..
```
**2. Inicie seu container mongo no Docker.**

**3. Abra 3 terminais na pasta raiz.**

**4. Execute cada api em terminais diferentes:**

##### API Books

```
cd books/; npm start
```

##### API Comments

```
cd comments/; npm start
```

##### API Gateway

```
cd gateway/; npm start
```

**5. Vá para a seguinte URL em seu navegador:**

```
http://localhost:3000/
```

## Utilizando

###### Primeiramente entre com sua conta do google na tela inicial.

###### Faça uma pesquisa por algum livro no input da tela de pesquisa.

###### Ao clicar em um livro, você será redirecionado para a página de detalhamento do livro.

###### É possível ainda fazer comentários atrelados àquele livro na seção de comentários logo abaixo da sinopse.