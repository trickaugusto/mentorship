# Instalação do NVM
O NVM é um gerenciador de versões do Node.js. Com ele, podemos instalar e alternar entre diferentes versões do Node.js. Isso é muito útil quando estamos trabalhando em projetos que utilizam versões diferentes do Node.js.

Para instalar o NVM, siga os passos abaixo:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Após a instalação, feche o terminal e abra novamente. Para verificar se o NVM foi instalado corretamente, execute o comando:
```
nvm --version
```

# Instalação do Node.js
Com o NVM instalado, podemos instalar o Node.js. Para isso, execute o comando:
```
nvm install --lts
```

Com isso, você consegue rodar arquivos .js no terminal.

# Executando arquivos.js
Crie um arquivo com o nome index.js com o seguinte conteúdo:
```javascript
console.log('Hello, World!');
```

Agora execute o arquivo com o comando no terminal:
```
node index.js
```

# Exercícios práticos
Na pasta da aula 04, existe um arquivo chamado `exercicio.js`. COPIE esse arquivo para a pasta que desejar no seu computador e siga as instruções para realizar o exercício prático.