---
id: cplusplus-compilador
title: Introdução ao compilador
---

Para compilar um programa em C++, usamos um compilador C++. O compilador percorre cada arquivo de código-fonte (.cpp) em seu programa e executa duas tarefas importantes:

Primeiro, ele verifica seu código para garantir que ele siga as regras da linguagem C++. Se isso não ocorrer, o compilador fornecerá um erro (e o número da linha correspondente) para ajudar a identificar o que precisa ser corrigido. O processo de compilação também será abortado até que o erro seja corrigido.

Segundo, ele converte seu código-fonte em um arquivo de linguagem de máquina chamado arquivo de objeto. Os arquivos de objetos são normalmente chamados de name.o ou name.obj, em que name é o mesmo nome do arquivo .cpp do qual foi produzido.

Por exemplo,se você tem seu `main.cpp`, ele irá gerar um arquivo objeto `main.o`

![Compilador_pt1](assets/images/cpp-para-iniciantes/compilador_pt1.png)
