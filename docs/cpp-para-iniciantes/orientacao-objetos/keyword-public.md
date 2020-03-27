---
id: cplusplus-keyword-public
title: Keyword public, protected e private
---

Note a utilização do `public`, quer dizer que tanto membros da classe(ou seja, funções que estão dentro da classe) e membros externos podem acessar esta variável.

Por exemplo:

```cpp{0}
struct FuncionarioStruct
{
    std::string m_nome;
    int m_idade;
};
int main()
{
  FuncionarioStruct f;
  f.m_nome = "João";
}
```

É possivel modificar diretamente o nome pois struct's não possuem keyword de acesso, e por padrão utilizam `public`
