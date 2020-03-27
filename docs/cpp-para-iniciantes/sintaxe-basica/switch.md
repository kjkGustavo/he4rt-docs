---
id: cplusplus-switch
title: Switch
---

Para facilitar a utilização de `if/else if/else` temos o `switch`, que executa um certo bloco dependendo da `condição no switch`

A utlização do `switch` e totalmente opcional e é útil apenas para certos casos

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

    int numero1, numero2, resultado;
    char opcao;
    std::cout << "Digite um numero: \n";
    std::cin >> numero1;
    std::cout << "Digite um segundo numero: \n";
    std::cin >> numero2;
    std::cout << "Digite uma opção: (A)Soma / (B) Subtracao / (C) Multiplicacao / (D) Divisao \n";
    std::cin >> opcao;
    switch(opcao) // Switch de opcao
    {
        case 'A': // condição: true = executa o bloco / false = pula para o próximo caso e seu bloco
        {
            resultado = numero1 + numero2;
            break; // Em switch, precisamos utilizar o break para nao carregar as outras condicoes em sequencia,falaremos mais sobre o break na secao de loop
        }
        case 'B':
        {
            resultado = numero1 - numero2;
            break;
        }
        case 'C':
        {
            resultado = numero1 * numero2;
            break;
        }
        case 'D':
        {
            resultado = numero1 / numero2;
            break;
        }
    }
    std::cout << "O resultado da operacao e: " << resultado << std::endl;
}
```
