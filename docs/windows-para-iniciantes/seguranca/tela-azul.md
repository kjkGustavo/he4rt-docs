---
id: win-tela-azul
title: Tela Azul
---

A tela azul acontece quando o próprio Windows fica instável, e ao
contrário do que é acreditado, ele NÃO está travado, o erro em questão é
colocado em DUMP pela memória e depois o sistema é reiniciado, ele
apenas bloqueia qualquer interação via mouse/teclado do usuário.

A informacao mais importante da tela azul é o Stop code, mas segundo a
telemetria do Windows, 20 desses códigos são responsável por 90% dos
casos, de 300 codes.

Os mais comuns estão relacionados a memória ram, incompatibilidade e
drivers.

Recomendo que, para que se possa monitorar esses erros, você ative o
mini dump, para isso, vá para:

Abrir o Explorar de arquivos → clique com o botão direito em 'Meu
computador' e 'Propriedades' → Configurações Avançadas do Sistema →
Terceiro e último botão de Configurações(inicialização e recuperação) e
escolha a opção 'Despejo de memória pequeno (256KB) em 'Gravando
informações de depuração' clique em Ok até fechar tudo.

Para que se possa monitorar esse erro, basta baixar esse programa:

[[https://www.nirsoft.net/utils/blue_screen_view.html]]()

Com o programa instalado, depois de ocorrer a tela azul, basta abrir ele
e será lhe mostrado EXATAMENTE o que causou o erro(driver responsável
pelo erro).
