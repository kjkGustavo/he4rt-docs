---
id: cplusplus-vinculador
title: Vinculador
---

- Depois que o compilador cria um ou mais arquivos de objeto, outro programa chamado vinculador(linker) entra em ação. O trabalho do linker e dividido em três etapas:

- Primeiro, pegue todos os arquivos de objetos gerados pelo compilador e combine-os em um único programa executável.

![Compilador_pt2](assets/images/cpp-para-iniciantes/compilador_pt2.png)

- Em segundo lugar, além de poder vincular arquivos de objeto, o vinculador também é capaz de vincular arquivos de biblioteca. Um arquivo de biblioteca é uma coleção de código pré-compilado que foi “empacotado” para reutilização em outros programas, como o já usado `<iostream>`.

- Em terceiro lugar, o vinculador garante que todas as dependências entre arquivos sejam resolvidas corretamente. Por exemplo, se você definir algo em um arquivo .cpp e usá-lo em outro arquivo .cpp, o vinculador conectará os dois juntos. Se o vinculador não conseguir conectar uma referência a algo com sua definição, você receberá um erro de vinculador e o processo de vinculação será interrompido.
