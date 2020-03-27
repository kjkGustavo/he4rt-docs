---
id: cplusplus-entrada-dados
title: Entrada de Dados com `std::cin`
---

Agora iremos falar do `std::cin`(c in) da biblioteca `<iostream>`, ela permite a entrada de dados,sendo sua sintaxe parecida com a do `std::cout`

```cpp{0}
std::cin >> <variavel>;
```

Note que como estamos entrando com dados, temos que indicar pelo operador `>>`, sendo o inverso do operador de saída `std::cout` que utilizamos `<<`.

## Exemplos

- Entrada e saída de dados de um determinado aluno

```cpp{0}
#include <iostream>
int main ()
{
    int idade; // Declarando a idade do aluno
    // Saida de dados, perguntando para o utilizador do programa a idade do aluno
    std::cout << "Digite a idade do aluno: " << std::endl;
    //Entrada de dados com o nome do aluno
    std::cin >> idade; // Entrada de dados para a variável idade,ou seja,o que o utilizador digitar irá ir para o inteiro `idade`
    // Saida de dados de uma string e em sequência a idade do aluno
    std::cout << "A idade do aluno e: " << idade << std::endl;
}
```

- Lembrando que `std::cout << "Digite a idade do aluno: " << std::endl;` é apenas visual para a interação de programa-usuário.

- Existe outras formas de inicialização:

```cpp{0}
#include <iostream>
int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */
    //Tipos de inicialização
    int a = 5, A = 6; // Inicialização por cópia
    int b( 7 ), B( 8 ); // Inicialização direta
    int c{ 9 }, C{ 10 }; // Inicialização uniforme
    std::cout << a << std::endl;
    std::cout << A << std::endl;
    std::cout << b << std::endl;
    std::cout << B << std::endl;
    std::cout << c << std::endl;
    std::cout << C << std::endl;
    int a, b( 5 );
    std::cout << a << " " << b << std::endl; // Saída: 0 5
}
```
