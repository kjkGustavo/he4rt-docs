---
id: cplusplus-comentarios
title: Comentários
---

- Podemos escrever conteúdo no nosso código apenas para visualização utlizando `//` e `/* */`

```cpp{0}
int main ()
{
    int numero = 3 // variavel numero de tipo inteiro que recebe o valor '3'
    /**
    Podemos também comentar trechos de código
    que não quisermos utilizar em um
    determinado momento
    */
}
```

- Exemplos de declaração de variáveis e utilizações gerais:

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
    int inteiro = 5;
    char caractere = 'a';
    float fracionario = 5.2f;
    bool booleano = true;
    int inteiro_vazio;
    std::cout << inteiro << caractere << fracionario << std::endl; // Exibição: 5a5.2
    std::cout << inteiro << " " << caractere << " " << fracionario << std::endl; // Exibição: 5 a 5.2
    std::cout << inteiro_vazio << std::endl; // Exibição: 0
    std::cout << booleano << std::endl // Exibição: true
    // É possivel quebrar linha também com a string "\n"
    std::cout << inteiro << "\n" << caractere << "\n" << fracionario << "\n";
}
```
