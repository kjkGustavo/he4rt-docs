---
id: win-desenvolvimento
title: Desenvolvimento
---

## Powershell

Ao contrário de interfaces de linha de comando tradicionais, os cmdlets
do PowerShell são projetados para lidar com objetos. Um objeto
representa informações estruturadas que vão além da uma cadeia de
caracteres exibida na tela. A saída do comando sempre acompanha
informações extras que poderão ser usadas quando necessário.

Quando você digita um comando, o PowerShell sempre processa a linha de
comando de entrada diretamente, ele também formata a saída exibida na
tela, essa diferença é considerável porque reduz o trabalho necessário
em cada cmdlet. Isso garante que você possa fazer as coisas sempre da
mesma maneira com qualquer cmdlet. Os desenvolvedores de cmdlet não
precisam escrever códigos para analisar os argumentos de linha de
comando ou formatar a saída.

o parâmetro `-?` sempre significa "mostre-me a Ajuda para este
comando\".

O cmdlet, por ter comandos grandes, trabalha com verbos em inglês, então
a memorização fica bem fácil

Você pode listar todos os comandos que incluem um determinado verbo com
o parâmetro `Verb` para Get-Command. Por exemplo, para ver todos os
cmdlets que usam o verbo Get

![command](assets/images/windows-para-iniciantes/command.png)

por exemplo, para desligar o computador pelo powershell, é
Stop-Computer.

Outros comandos no Powershell, como listagem de arquivos etc segue o
padrão Linux, exemplo

- cd

- ls

- ps

- kill

- clear

Documentação
Powwershell:[[https://docs.microsoft.com/pt-br/powershell/scripting/learn/understanding-important-powershell-concepts?view=powershell-7]{.underline}](https://docs.microsoft.com/pt-br/powershell/scripting/learn/understanding-important-powershell-concepts?view=powershell-7)

## WSL no Windows

WSL é um recurso relativamente recente, no qual integra o kernel Linux
juntamente com o Windows de forma nativa e oficial

Para ativar o recuso é bem simples, basta pesquisar no Windows 10 por
"Ativar ou desativar recursos do Windows" e pressionar enter

![recursos](assets/images/windows-para-iniciantes/recursosdowindows.png")

Após isso, abaixe pela barra de navegação
e procure pela seguinte opção:

![subsistema](assets/images/windows-para-iniciantes/subsistema.png")
Após isso, basta ir na loja da Microsoft e pesquisar pela sua distro, depois, basta iniciar pela própria loja.
