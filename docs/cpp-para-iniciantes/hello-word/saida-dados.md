---
id: cplusplus-saida-dados
title: Saída de Dados e Biblioteca `<iostream>`
---

```cpp{0}
    std::cout << "Hello World" << std::endl;
```

- `std::cout` (out de saída) pertence a biblioteca `<iostream>` significa que queremos exibir algo na tela, ou seja, uma saída de algum dado que passarmos para o `std::cout`.

- O operador << significa que estamos passando algo para 'a direção', no caso para o std::cout, sendo também um operador da `<iostream>`.

- Para passarmos um conjunto de caracteres(chamado de string) precisamos colocar entre "",no caso a string `Hello World`.
  Espaços `" "` também contam como caracteres.

- `std::endl` também pertence a `<iostream>` que executa a quebra de linha,ou seja, sempre quando chamada irá mandar todo o conteúdo sucessor para uma nova linha.

- Todo o final de linha de código precisamos colocar `;` para indicarmos pro compilador que pode executar o proximo conteúdo.

- `std::` é um espaço de nome para as bibliotecas padrões do C++, para acessarmos o seu conteúdo precisamos usar `std::` e entrar neste espaço de nome reservado `std`, com `::` indicando a entrada.

```cpp{0}
#include <iostream>
int main()
{
    std::cout << "A" << std::endl;
    std::cout << "B";
}
```

Irá ser exibido:

A

B

```cpp{0}
#include <iostream>
int main()
{
    std::cout << "A" << "B";
}
```

Irá ser exibido:
AB

- Algumas IDE's faz a quebra de linha automaticamente sem a necessidade do `std::endl`.

- Todos os conceitos passado será utilizado ao longo do curso, então não se assuste que com a prática estes conceitos serão facilmente fixados,e estaremos disponibilizando listas de exercícios com gabarito para melhor fixação.
