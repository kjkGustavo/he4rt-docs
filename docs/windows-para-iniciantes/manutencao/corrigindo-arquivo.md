---
id: win-corrigindo
title: Corrigindo arquivos do Windows
---

Abra novamente o Windows PowerShell e execute o comando 'sfc /scannow',
esse comando verifica e repara arquivos protegidos do Windows e demora
certa de 20-30 minutos.

Ainda na mesma janela, porem isso funciona apenas para Windows 8 e 10,
execute o comando 'dism /online /cleanup-image /restorehealth' e tecle
enter.

Esse comando repara e restaura arquivos corrompidos ou ausentes do
sistema operacional e demora cerca de 20-40 minutos.
