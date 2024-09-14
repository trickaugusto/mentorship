# Atividades aula 1

## Contas e configurações
- Criar conta no [GitHub](https://www.github.com)
- Criar conta no [Beecrowd](https://judge.beecrowd.com/pt/login), usaremos mais pra frente
- Baixar e instalar o [Visual Studio Code](https://code.visualstudio.com/)

### WSL
Baixar o [WSL](https://github.com/codeedu/wsl2-docker-quickstart?tab=readme-ov-file#instala%C3%A7%C3%A3o-do-wsl-2), subssistema linux para windows.

Siga o tutorial, quando eu fiz a instalação recentemente segui basicamente esse passo a passo:

- Ir em painel de controle > programas > ativar ou desativar recursos do windows. Procure as opções seguintes e as ative:
    - Ativar hyper-v
    - Plataforma de máquina virtual
    - Subsistema do windows para linux
- Rodar no terminal do windows o comando "wsl --install"

Se tiver usando o windows terminal, você pode abrir o terminal linux selecionando ele no menu dropdown (uma setinha)

#### Throubleshooting
Se no terminal LINUX aparecer algum erro parecido com esse: **Please enable the Virtual Machine Platform Windows**... e pedir pra ativar algo na bios, tente isso:

- Rode o comando no terminal WINDOWS: "wsl --set-default-version 1"
- Abra o terminal do ubuntu
- Rode novamente no terminal do WINDOWS: "wsl --set-default-version 2"

Isso deve resolver o problema.