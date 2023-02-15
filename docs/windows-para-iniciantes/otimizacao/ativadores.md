---
id: win-ativadores
title: Mostrando como os ativadores corrompem o Windows
---

Para isso, eu baixei uma ISO oficial pelo próprio site da Microsoft,
para isso, usei a ferramenta que ela proporciona nesse link:
[https://www.microsoft.com/pt-br/software-download/windows10]

Para coletar as alterações feitas no registro e no Windows, eu usei o
Regshot.

A configuração da máquina virtual é a seguinte:

![maquina](assets/images/windows-para-iniciantes/máquinavirtual.png)

E o Windows não está ativado.

Para começar os testes, iniciei o Regshot, tirei a primeira shot do
sistema e executei o Ativador 1, escolhi a opção W10 Digital Activation e
aguardei finalizar a ativação

![maquina](assets/images/windows-para-iniciantes/teste1.png)

Após. Eu rodei o 2nd shot e fiz a opção de Comparar.

| Ativadores | Keys Deletadas | Keys Adicionadas | Values Deletados | Values Adicionados | Values Modificados |
| ---------- | -------------- | ---------------- | ---------------- | ------------------ | ------------------ |
| Ativador 1 | 3              | 51               | 5                | 108                | 167                |
| Ativador 2 | 2              | 42               | 2                | 114                | 233                |

Fica evidente, dessa forma, que o Windows termina completamente
diferente do que ele deveria ser e feito para trabalhar, com essas
modificações, o sistema ficará extremamente instável, tendo diversas
telas azuis e erros aleatórios.
