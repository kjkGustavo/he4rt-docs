---
id: win-rapidez
title: Dicas para windows rápido
---

- Manter Windows Update atualizado.

- Mantenha sempre o antivirus atualizado.

- A cada 15 dias execute uma limpeza com o Ccleaner e com o Defraggler.

- Cuidado com extensões de navegadores pois muitas delas podem danificar
  seu computador

- Seja crítico e não acredite que em tudo que você ver, não existe nada
  milagroso na internet

- Se você tem um computador antigo, NÃO instale otimizadores, eles vão
  apenas prejudicar o seu PC, ao inves isso, compre um SSD

- Recuse qualquer programa que prometa otimizar seu computador e deixar
  ele 10x mais rápido ou qualquer outra coisa do tipo

- Evite ao máximo usar cracks e ativadores.

## Registro do Windows

O registro do windows é uma das partes mais importantes do sistema, nela
contém mais de 2 milhões e meio de chaves únicas, ou seja, mais de 2
milhões de configurações do Windows e de softwares nele instalado

O registro pode ser acesso rodando o comando 'regedit' no 'Executar',
mas eu obviamente não recomendo isso, pode deve ser modificado somente
por quem sabe exatamente o que está fazendo, pois qualquer alteração
pode corromper seu S.O

O registro do Windows é composto de 5 importantes arquivos, que ficam
localizados na pasta

```shell
  C\>Windows\>System32\>config
```

Os 5 arquivos são:

### SAM

Ele guarda informações sobra a conta dos usuários

### Security

Armazena informações especificas sobre segurança

### Software

Tem informações sobre programas instalados

### System

Armazena as configurações do computador

### Default

Armazena configurações padrões usadas por serviços e programas
instalados no Windows

Essas informações são carregas na inicialização do Windows, e por isso,
quando feito uma alteração, precisa reiniciar o computador.

Muitos programas como Ccleaner entre outros tem a opção de limpar o
registro, o que é enormemente desnecessário e um grande erro, pois isso
além de não mudar nada no desempenho, pode vir a causar problemas.

Entenda, que o define o sistema, são as CONFIGURAÇÕES dessas chaves, e
não a QUANTIDADE delas, então sair deletado tais chaves ou usando
softwares para o mesmo são muda nada e ainda pode te causar problemas. O
Windows carrega todas as chaves, mais de 2 milhoes, essas são carregas
em menos de 5s pelo windows, remover 5, 500, 50000, ou 100.000 chaves
não vai mudar absolutamente nada.
