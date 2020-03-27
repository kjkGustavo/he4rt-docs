---
id: cplusplus-operadores-logicos
title: Operadores Lógicos
---

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
    std::string nome;
    std::cout << "Digite seu nome: " << std::endl;
    std::getline(std::cin, nome); // Não tem necessidade do std::cin.ignore() pois não tem entrada de dados de outro tipo anteriormente.
    if(nome.size() < 0) // Verificando se a quantidade de caracteres for menor que 0,ou seja, ERRO
        std::cout << "ERRO!" << std::endl; // Quando temos apenas uma linha, podemos omitir o escopo
    else if(nome.size() >= 0 && nome.size() <= 5) // Quantidade de caracteres maior que 0 E menor que 5
        std::cout << "Existe entre 0 e 5 caracteres nesta string" << std::endl;
    else if(nome.size() > 5 && nome.size() <= 10)
        std::cout << "Existe entre 6 e 10 caracteres nesta string" << std::endl;
    else
        std::cout << "Existe mais de 10 caracteres nesta string" << std::endl;
    // std::string é uma classe e possui funções próprias para manipular,no caso o size(), na seção de funções você irá entender este conceito.
}
```
