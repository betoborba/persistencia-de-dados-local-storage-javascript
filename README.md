# Persistência de dados com localStorage

## O que é localStorage?

O `localStorage` é um recurso do navegador que permite salvar informações localmente, ou seja, no próprio navegador do usuário.

De forma simplificada, ele funciona como um pequeno armazenamento de dados. Mesmo que o usuário feche a aba ou o navegador, as informações salvas podem continuar disponíveis quando ele acessar o site novamente.

## Para que serve?

O `localStorage` pode ser usado para guardar informações simples relacionadas à experiência do usuário em um site.

Por exemplo, em uma loja virtual, é possível armazenar dados como:

- Nome do cliente;
- Idade;
- Preferências do usuário;
- Time ou clube favorito;
- Produtos deixados no carrinho de compras;
- Preferência de tema, como modo claro ou modo escuro.

## Exemplos de uso

Com os dados salvos no navegador, o site pode oferecer uma experiência mais personalizada para o usuário.

Alguns exemplos:

- Exibir uma saudação de boas-vindas com o nome do cliente;
- Manter produtos no carrinho mesmo após o usuário fechar a aba;
- Personalizar as cores da página com base na preferência do usuário;
- Salvar a escolha entre tema claro e tema escuro;
- Guardar pequenas configurações feitas pelo usuário no site.

## Observação importante

O `localStorage` deve ser usado apenas para informações simples e não sensíveis.

Não é recomendado salvar dados como:

- Senhas;
- Dados bancários;
- Documentos pessoais;
- Tokens de acesso importantes;
- Informações privadas do usuário.

Isso acontece porque os dados do `localStorage` ficam disponíveis no navegador e podem ser acessados por scripts executados na página.

A capacidade de armazenamento do `localStorage` é de até 5MB, no geral.

## Próximos exercícios

Neste projeto, vou praticar alguns exemplos usando `localStorage`, como:

- Salvar o nome do usuário;
- Recuperar uma informação salva;
- Remover dados do navegador;
- Criar uma saudação personalizada;
- Salvar preferências simples de layout.

## Salvar e recuperar dados

Para salvar uma informação no navegador do usuário como o `localStorage`, devemos utilizar o método `setItem()`. Esse método contém dos parâmetros: chave(nome da variável) e valor (conteúdo da variável)

```javascript
localStorage.setItem("idade", 35);
```

- Outro detalhe importante é que os dados salvos pertencem ao navegador e ao domínio que armazenou os dados. Os dados do `localStorage` podem ser removido se o usuário limpar os dados de navegação do browser.

Para recuperar e verificar a existencia de um dado armazenado no browser, é necessário utilizar o método `getItem()` com o nome da chave utilizada.

```javascript
const idade = localStorage.getItem("idade");
```

Outra informação importante é que os dados são salvos como string. Então ao invés de somar os dados armazenados serão concatenados.

```javascript
const idade = localStorage.getItem("idade");
const soma = idade + 1;
alert(soma); // 351
```

## Convertendo valores do localStorage

Os dados salvos no `localStorage` são armazenados como texto, mesmo quando parecem números.

Por isso, ao recuperar um valor numérico, pode ser necessário converter esse valor usando a função `Number()`.

```javascript
localStorage.setItem("idade", "35");

const idade = Number(localStorage.getItem("idade"));
const soma = idade + 1;

alert(soma); // 36
```

Também é possível acessar ou salvar valores no localStorage usando a notação de objeto, com ponto ou colchetes.

nome da variável:

- `(localStorage.idade = 17)`

notação com colchete:

- `(localStorage['idade'] = 17)`

O método mais recomendado pelos estudos é o `setItem` isso porque deixa mais explicado.

```javascript
setItem(); // salvar
getItem(); // buscar
removeItem(); // remover
clear(); // limpar tudo
```

## Utilizando Bootstrap 

Framework de HTML e CSS que tem a função de facilitar o layout e responsividade. Como facilitar a adaptação para versão mobile. 

melhor local para adicionar: 

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Meu Projeto</title>

  <!-- Bootstrap CSS -->
  <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" 
    rel="stylesheet"
  >

  <!-- O CSS vem depois do Bootstrap -->
  <link rel="stylesheet" href="css/style.css">
</head>
```