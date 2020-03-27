---
id: cplusplus-classes-objetos
title: Classes
---

Embora o C ++ forneça vários tipos de dados fundamentais (por exemplo, char, int, long, float, double, etc ...) que geralmente são suficientes para resolver problemas relativamente simples, pode ser difícil resolver problemas complexos usando apenas esses tipos. Um dos recursos mais úteis do C ++ é a capacidade de definir seus próprios tipos de dados que melhor correspondem ao problema que está sendo resolvido. Você já viu como tipos e estruturas enumerados podem ser usados para criar seus próprios tipos de dados personalizados.

No mundo da programação orientada a objetos, geralmente queremos que nossos tipos não apenas mantenham dados, mas também forneçam funções que funcionem com os dados. Em C ++, isso geralmente é feito através da palavra-chave da classe. O uso da palavra-chave class define um novo tipo definido pelo usuário chamado class.

No C ++, classes e estruturas são essencialmente as mesmas. De fato, a seguinte estrutura e classe são efetivamente idênticas:

```cpp{0}
struct FuncionarioStruct
{
    std::string m_nome;
    int m_idade;
};

class FuncionarioClasse
{
public:
    std::string m_nome;
    int m_idade;
};
```
