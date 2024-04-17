## Descrição da Atividade
Os alunos vão desenvolver uma aplicação web que simula um sistema de controle de iluminação para uma casa. A aplicação terá botões para ligar e desligar as luzes de diferentes cômodos e mostrará o estado atual de cada luz.

### Objetivos
- Implementar o padrão Singleton para garantir que apenas uma instância do controle de iluminação seja criada.
- Utilizar o padrão Observer para notificar mudanças no estado das luzes para a interface gráfica.
- Praticar a interação entre HTML e JavaScript para controlar os elementos da interface.

### Passo a Passo

#### Passo 1: Estrutura HTML
1. Crie um arquivo HTML (index.html).
2. Adicione botões para cada cômodo da casa (sala, cozinha, quarto, banheiro).
3. Inclua um indicador visual para o estado da luz de cada cômodo.

#### Passo 2: JavaScript com Singleton e Observer
1. Crie um arquivo JavaScript (iluminacao.js).
2. Defina uma classe `ControleIluminacao` que seguirá o padrão Singleton.
3. Implemente métodos para adicionar observadores e notificá-los sobre mudanças.
4. Permita alterar o estado das luzes e notificar todos os observadores.
