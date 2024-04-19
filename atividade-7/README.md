## Atividade: Construindo uma Aplicação Meteorológica com MVC

### Objetivo
Desenvolver uma aplicação web simples que exiba informações meteorológicas para uma determinada cidade, utilizando o padrão de arquitetura MVC no frontend e consumindo a API do OpenWeatherMap.org.

### Passo 1: Configuração do Projeto
- Crie uma estrutura de pastas para o projeto.
- Crie os arquivos necessários em suas respectivas pastas, lembrando que o `index.html` deve ficar na raiz do projeto.

### Passo 2: Configuração do Serviço de API
- Registre-se no OpenWeatherMap.org para obter uma chave de API gratuita.
- Crie um arquivo JavaScript para o serviço de API (por exemplo, `WeatherService.js`).
- Implemente funções para fazer requisições à API do OpenWeatherMap utilizando a chave de API e retornar os dados meteorológicos.

### Passo 3: Modelos de Dados
- Defina os modelos de dados necessários para representar as informações meteorológicas retornadas pela API.
- Isso pode incluir classes ou objetos JavaScript para armazenar dados como temperatura, condições climáticas, umidade, etc.

### Passo 4: Controladores
- Crie controladores JavaScript para manipular a lógica da aplicação e a interação com os modelos e visualizações.
- Os controladores devem ser responsáveis por chamar o serviço de API, atualizar os modelos de dados e atualizar as visualizações conforme necessário.

### Passo 5: Visualizações
- Desenvolva as visualizações HTML e CSS para exibir as informações meteorológicas na página.
- Utilize classes ou IDs HTML para identificar os elementos que serão atualizados dinamicamente com os dados do modelo.

### Passo 6: Integração MVC
- Integre os modelos, controladores e visualizações para criar uma aplicação coesa que siga o padrão MVC.
- Certifique-se de que os controladores estejam chamando os serviços de API para atualizar os modelos e que as visualizações estejam sendo atualizadas conforme necessário.

### Passo 7: Teste e Ajustes
- Teste a aplicação para garantir que ela esteja funcionando corretamente.
- Faça ajustes conforme necessário para melhorar a experiência do usuário ou corrigir eventuais bugs.

### Passo 8: Opcionais
- Adicione a possibilidade de o usuário digitar a cidade que deseja visualizar o clima.
