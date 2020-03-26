---
id: linux-arquivamento-arquivo
title: Arquivamento de arquivos
---

# 01 - Arquivamento de arquivos

## Conteúdo do artigo

[Compactação](#Compactação)<br>
[Descompactação](#Descompactação)<br>
[Referências](#Referências)<br>
[Autores](#Autores)

---

O arquivamento de arquivos geralmente é utilizado quando queremos copiar alguns diretórios ou transferi-los pela rede. Existem diversos comandos para a execução desta ação, como [gzip](http://guialinux.uniriotec.br/gzip/) e [bzip](http://guialinux.uniriotec.br/bzip2/) entre outros, porém nesse artigo só abordaremos o comando `tar`.

> ## Compactação
>
> O comando `tar`, que signfica _tape archive_, é utilizado para compactação e descompactação de arquivos. Em grande parte dos casos em que compactamos arquivos usando o tar é gerado um arquivo com extensão **.tar**.

Sintaxe:

```console
tar [opções] <arquivo.tar> <arquivo>
```

Exemplo de compactação comum de arquivos:

```console
lucashe4rt@He4rt-PC:~$ tar -cvf exemplo.tar exemplo/
```

No exemplo acima nós compactamos o diretório _exemplo/_ transformando-o no arquivo _exemplo.tar_

As opções acima significam:

| Opção | Função                                           |
| ----- | ------------------------------------------------ |
| -c    | cria um novo arquivo .tar                        |
| -v    | mostra uma descrição do progresso de compactação |
| -f    | nome do arquivo                                  |

### Criar arquivos .tar.gz

Para maior compactação nós utilizamos o gzip, assim gerando um arquivo _.tar.gz_.

Para criarmos um arquivo _tar.gz_ basta somente adicionarmos a opção `-z` junto as outras. Exemplo:

```console
lucashe4rt@He4rt-PC:~$ tar -cvzf exemplo.tar.gz exemplo/
```

_Obs: a opção -z representa a compressão gzip_.

### Criar arquivos .tar.bz2

Arquivos **.bz2** nos oferece uma maior compactação quando comparamos com o gzip, no entanto, ele leva mais tempo para compressão e descompactação.

Para gerarmos um arquivo _.tar.bz2_ adicionamos a opção `-j` junto as outras. Exemplo:

```console
tar -cvjf exemplo.tar.gz exemplo
```

### Adicionar arquivos em um .tar

Nós também podemos inserir arquivos em um .tar mesmo depois de compactado, para isso utilizamos a opção `-r`.

```console
tar -rvf exemplo.tar.gz exemplo1.txt
```

> ## Descompactação
>
> Para fazermos a descompactação de arquivos, como dito anteriormente, nós também utilizamos o comando `tar`.

Sintaxe:

```console
tar -xvf <arquivo.tar>
```

Exemplo de descompactação no diretório corrente:

```console
tar -xvf exemplo.tar
```

Para descompactarmos o arquivo em outro diretório:

```console
tar -xvf exemplo.tar -C ~/Documents/
```

A opção `-C` é utilizada para a extração ser feita em outro diretório.

### Descompactar arquivos .tar.gz, .tar.bz2

Para descompactarmos arquivos com essas extensões usamos o mesmo comando com as mesmas opções

Exemplo:

```console
lucashe4rt@He4rt-PC:~$ tar -xvf exemplo.tar.gz


lucashe4rt@He4rt-PC:~$ tar -xvf exemplo.tar.gz.bz2
```

### Descompactar somente um único item de um .tar

#### .tar

```console
lucashe4rt@He4rt-PC:~$ tar -xvf exemplo.tar exemplo.txt
```

#### .tar.gz

```console
lucashe4rt@He4rt-PC:~$ tar -zxvf exemplo.tar.gz exemplo.txt
```

#### .tar.bz2

```console
lucashe4rt@He4rt-PC:~$ tar -jxvf exemplo.tar.gz exemplo.txt
```

### Descompactar varios itens de um .tar

#### .tar

```console
lucashe4rt@He4rt-PC:~$ tar -xvf exemplo.tar exemplo.txt exemplo1.txt
```

#### .tar.gz

```console
lucashe4rt@He4rt-PC:~$ tar -zxvf exemplo.tar.gz exemplo.txt exemplo1.txt
```

#### .tar.bz2

```console
lucashe4rt@He4rt-PC:~$ tar -jxvf exemplo.tar.gz exemplo.txt exemplo1.txt
```

---

## Referências

[Hostinger - Comando Tar](https://www.hostinger.com.br/tutoriais/comando-tar-linux/)

## Autores

- **Lucas Silva (LucasHe4rt)** - _Back-end Developer & Member of He4rt Developers_ - [Twitter](https://twitter.com/lucashe4rt)
