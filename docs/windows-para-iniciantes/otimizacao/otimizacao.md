---
id: win-otimizacao
title: Otimização no Windows
---

## Desfragmentação de Hds e SSDs

Primeiramente é importante entender o que é um arquivo fragmentado. Ao
se salvar um arquivo, ele sempre é salvo em pequenas partes, caso haja o
espaço livre contínuo, ele salvará com blocos sequenciais(como bloco
1,2,3,4,5) uma após a outra.

Caso não haja espaço para deixar de forma sequencial, o arquivo se torna
fragmentado, e sempre que você for abrir esse arquivo, o seu HD terá que
rodar o pino até localizar todos os pontos desse arquivo fragmentado
pelo seu disco rígido, o que causa uma grande lentidão, quando lidos e
quando salvos.

Quando há uma desfragmentação, você consegue deixar esses arquivos de
forma sequencial, fazendo com que a leitura e procura deles seja de
forma rápida.

Para desfragmentar seu disco rígido, basta acessar o site
[[https://www.ccleaner.com/defraggler]{.underline}](https://www.ccleaner.com/defraggler)
e baixe o programa pelo link do Ccleaner.

Ao executar o programa, certifique-se de ter desmarcado qualquer caixa
de software adicional

![defrag](assets/images/windows-para-iniciantes/defrag.png)

Após isso, pode clicar em 'Install', no final, retornará essa janela

![defrag](assets/images/windows-para-iniciantes/defrag1.png)

DESMARQUE essa caixinha e clique em Run
Defraggler

Agora com ele aberto, vamos configurar, clique em Setings ou Opções →
Mapa do dispositivo(Drive Map).

![defrag](assets/images/windows-para-iniciantes/defrag3.png)

Depois, clique em Visão customizada ou Custom View, escolha 12x12,
estilo Plano e modo Barras, clique em Ok.

Clique novamente em Opções, Opções novamente e clique em desfragmentar,
nessa janela, marque a caixinha e digite '1000'(mil) e clique em Ok

Depois vá até a página Saúde ou Health e verifique os seguintes dados

![defrag](assets/images/windows-para-iniciantes/defrag4.png)

Caso onde está escrito Good(Bom), esteja
escrito outra coisa em amarelo ou vermelho, seu HD certamente está com
um problema, e na área grande em vermelho, caso qualquer uma das linhas
esteja vermelha, é risco total e seu recomendo que faça backups de seus
dados pois seu HD pode parar a qualquer momento.

Agora vá em Opções novamente, deixe o mouse sobre 'Boot time defrag' ou
Desfragmentação na inicialização, selecione 'Executar uma vez' e depois
na janela que vai aparecer clique em Não, dessa forma, a próxima
inicialização do computador, será rodado o desfragmentador para os
arquivos que o programa não pode mexer enquanto o windows trabalha.

Após isso, clique em Desfragmentar ou Defrag no canto inferior esquerdo

Caso aparece Otimizar, significa que você está usando um SSD, clique na
setinha ao lado e escolha Desfragmentar e clique em Sim(Yes) na janela
que irá aparecer e a desfragmentação inicializará.

Seja paciente, pois pode demorar algumas horas e recomendo que deixe o
seu notebook na tomada durante o processo, e não faça NADA no computador
durante o processo, deixe ele sozinho com nada executando de fundo
rodando.

Existem diversos "técnicos" na internet alegando que é RUIM e
PREJUDICIAL a desfragmentação em SSDs, pois essa informação está ERRADA,
mesmo que em maioria das vezes seja desnecessário, a desfragmentação do
mesmo NÃO estraga seu SSD nem deixa ele com mal funcionamento ou
qualquer outra coisa do tipo.

O que ocorre é uma grande desinformação, pois pessoas que são leigas no
assunto insistem em "ajudar" a comunidade com dicas falsas que não valem
de nada.
