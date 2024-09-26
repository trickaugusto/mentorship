# Configuração chave SSH
A chave SSH é uma forma de autenticação segura que permite que você acesse seus repositórios do GitHub sem precisar digitar seu nome de usuário e senha toda vez que fizer push ou pull.

## Gerando uma nova chave SSH
1. Abra o terminal ubuntu
2. Cole o texto abaixo, substituindo o email pelo seu email do GitHub
```bash
ssh-keygen -t ed25519 -C "email_do_github@gmail.com"
```
3. Pressione Enter para aceitar o local padrão para salvar a chave
4. Pressione Enter para não adicionar uma senha à chave
5. Cole o texto abaixo para adicionar a chave ao ssh-agent
```bash
eval "$(ssh-agent -s)";
ssh-add ~/.ssh/id_ed25519
```
6. Copie a chave para adicionar ao GitHub
```bash
cat ~/.ssh/id_ed25519.pub
```
Após esse comando a chave já estará copiada, agora é só adicionar ao GitHub.

7. Acesse o [GitHub](www.github.com) e faça login
8. Clique na sua foto de perfil no canto superior direito e vá em `Settings`
9. No menu lateral esquerdo, clique em `SSH and GPG keys`
10. Clique em `New SSH key`
11. Cole a chave no campo `Key` e clique em `Add SSH key`

Agora, será possível fazer a comunicação com o GitHub sem precisar digitar usuário e senha toda vez que fizer push ou pull.

# Criar um novo repositório
Agora que já temos a chave SSH configurada, vamos criar um novo repositório no GitHub.

1. Acesse o [GitHub](www.github.com) e faça login
2. Na página inicial, tem um botão no lado superior direito que é um +, clique nele e selecione `New repository`.
3. Preencha o nome do repositório (pode ser qualquer um, mas crie com "mentoria - [SEU NOME]") e clique em `Create repository`.

Pronto, agora você tem um repositório no GitHub para subir seus códigos.
Ainda é um repositório vazio, vamos subir um código de exemplo.

# Subir um código de exemplo
Vamos seguir o passo a passo abrindo direto o VSCODE e criando por lá.

1. Abra o Visual Studio Code
2. Clique em `File` > `Open Folder` e selecione a pasta onde você quer criar o código de exemplo
3. Crie um arquivo com nome qualquer com a extensão .txt
4. Digite algo no arquivo e salve

Agora, vamos subir esse arquivo para o repositório que criamos.

1. Abra o terminal integrado do VSCODE (Ctrl + `), ou abra o terminal externo do ubuntu.
2. Se você abriu o terminal integrado, você já está na pasta do projeto, se abriu o terminal externo, navegue até a pasta do projeto com o comando `cd nome_da_pasta`.
3. Inicialize o repositório git com o comando `git init` (Esse comando cria o arquivo .git que é o repositório local)
4. Adicione o arquivo ao repositório com o comando `git add .`
5. Faça o commit do arquivo com o comando `git commit -m "Primeiro commit"`
6. Adicione o repositório remoto com o comando `git remote add...` (esse comando é dado pelo GitHub, copie e cole no terminal)
7. Faça o push do arquivo com o comando `git push -u origin master`

Pronto, agora você tem um arquivo no seu repositório do GitHub.

# Criando uma branch (Atividade principal)
Branches são ramificações do código principal, que permitem que você trabalhe em novas funcionalidades sem interferir no código principal.

Nesse momento, o objetivo é vocês criarem uma branch, alterando o primeiro arquivo criado e fazendo um commit nessa branch.
Qualquer dúvida, terá alguns itens que você pode consultar arquivo ./leitura.md