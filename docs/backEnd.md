---
sidebar_position: 3
---
#  Getting Started – Back-End 

Bem-vindo ao nosso guia que foi projetado para ajudá-lo a dar os primeiros passos e se ambientar com nossa plataforma. Abaixo escrevemos todas as configurações iniciais que precisam ser feitas para que você possa começar a aproveitar ao máximo o projeto completo. 

## Ferramentas necessárias
- **Java 17** – Java é uma linguagem de programação e uma plataforma amplamente utilizada para o desenvolvimento de aplicativos corporativos, web e móveis, conhecida por sua segurança, desempenho e portabilidade. No HAPPDINE, utilizamos Java como a base para construir uma estrutura robusta e escalável, que atende às necessidades de alta performance e confiabilidade do sistema. Essa escolha permite integrar facilmente diversas funcionalidades e garantir que o sistema funcione de maneira eficiente em diferentes ambientes, proporcionando uma experiência sólida tanto para os usuários quanto para os administradores. 

- **JDK** - O Java Development Kit (JDK) é um conjunto completo de ferramentas indispensáveis para o desenvolvimento de aplicativos em Java. Ele inclui o Java Runtime Environment (JRE), compiladores, e diversas outras ferramentas que facilitam a criação, depuração e execução de aplicações Java. O JDK oferece todos os recursos necessários para programadores desenvolverem, testarem e implementarem soluções robustas e eficientes, permitindo o desenvolvimento completo de projetos de maneira simplificada e integrada. 

- **Maven** - O Apache Maven é uma ferramenta de automação de build amplamente utilizada em projetos Java, que simplifica e automatiza o processo de compilação, gestão de dependências, geração de relatórios e documentação. Com uma estrutura declarativa baseada em POM (Project Object Model), o Maven facilita a padronização e a consistência no ciclo de vida do projeto, permitindo que desenvolvedores gerenciem bibliotecas e plugins de maneira eficiente e mantenham o projeto bem documentado e organizado. 

- **MySQL Workbench** - O MySQL Workbench é uma ferramenta visual integrada para modelagem, desenvolvimento e administração de bancos de dados MySQL. Ele oferece recursos que facilitam a criação e edição de tabelas, execução de consultas SQL, visualização de dados e otimização de performance. Utilizamos o MySQL Workbench para gerenciar e estruturar o banco de dados do HAPPDINE, simplificando tarefas de design e manutenção e garantindo que as operações de banco de dados sejam realizadas de forma eficiente e organizada. 

- **Python 3.11** – A versão 3.11 do Python traz grandes melhorias em desempenho e novos recursos, ideais para o desenvolvimento de aplicações modernas. Utilizamos Python para implementar o código da inteligência artificial do HAPPDINE, aproveitando sua simplicidade e poder para criar funcionalidades complexas de forma eficiente. 

- **OpenCV** - OpenCV (Open Source Computer Vision Library) é uma biblioteca de visão computacional de código aberto amplamente usada para processamento de imagens e vídeos. Ela oferece uma série de algoritmos e ferramentas que facilitam a análise e manipulação de imagens, detecção de objetos, reconhecimento facial e outras tarefas de visão computacional. Utilizamos o OpenCV no HAPPDINE para aprimorar o processamento visual e facilitar a implementação de funcionalidades de inteligência artificial voltadas para o monitoramento das filas e otimização de fluxos. 

- **YOLO v8** - A versão 8 do You Only Look Once (YOLO) é uma das mais recentes e avançadas na detecção de objetos em tempo real. YOLO v8 combina precisão e velocidade, ideal para aplicações que requerem processamento eficiente e detecção rápida, como monitoramento visual e reconhecimento de objetos em vídeos. Utilizamos o YOLO v8 no HAPPDINE para aprimorar o monitoramento das filas e otimizar a gestão visual, identificando rapidamente fluxos e padrões que ajudam a melhorar a experiência dos usuários no restaurante. 

- **Ultralytics** - Ultralytics é a organização responsável pelo desenvolvimento das versões mais recentes do YOLO, incluindo o YOLO v8. Ela fornece uma implementação altamente otimizada de detecção de objetos, que facilita a integração do YOLO com frameworks de IA e ferramentas de visão computacional. Com recursos avançados, Ultralytics simplifica o uso do YOLO, tornando-o acessível para desenvolvedores que buscam precisão e eficiência em tarefas de detecção e rastreamento de objetos em tempo real. Utilizamos as soluções da Ultralytics no HAPPDINE para integrar o YOLO v8 de forma eficaz, aumentando a precisão e a velocidade no monitoramento das filas e no gerenciamento visual. 

- **IntelliJ IDEA (IDE)** - O IntelliJ IDEA é uma das IDEs mais populares e robustas para desenvolvimento Java, reconhecida por seus recursos avançados que facilitam a produtividade e a qualidade do código. Ele oferece edição inteligente com autocompletar, refatoração automatizada, suporte extensivo a frameworks como Spring Boot e integração perfeita com ferramentas de build, como Maven e Gradle (de acordo com a preferência do projeto). A IDE também inclui ferramentas de depuração, controle de versão integrado e testes, proporcionando um ambiente completo para o desenvolvimento ágil e eficiente de projetos em Java. 

### Endpoints
Back-End em Java

- Restaurante 

O endpoint GET/restaurantes permite acessar uma lista completa de todos os restaurantes registrados no sistema HAPPDINE. Ao fazer uma solicitação para esse endpoint, os usuários recebem informações essenciais de cada restaurante, facilitando a consulta de dados como nome, localização e detalhes de atendimento. Esse recurso é fundamental para apresentar todas as opções de restaurantes disponíveis de forma centralizada e organizada, melhorando a experiência de navegação e o planejamento dos usuários no ambiente corporativo. 

Endpoint Restaurante: 
```bash
Base Url: http://{IP}:{PortApplication} 
```

Pegar restaurantes: 
```bash
GET - /restaurantes 

Type: JSON 
```

Retorno: 

```bash

Status code: 200 OK 

{ 

    “id_restaurante”: UUID, 

    “nome”: “String”, 

    “descricao”: “String”, 

    “infoRestauranteModel”: UUID 

} 
```
 

- Cardápio 

A funcionalidade de cardápio no HAPPDINE foi desenvolvida para facilitar tanto a gestão quanto o acesso às opções de refeição. Com essa ferramenta, os administradores podem cadastrar e organizar os cardápios conforme os dias da semana, garantindo que todas as atualizações sejam simples e rápidas. Assim que o cardápio é registrado, os usuários conseguem visualizar as opções disponíveis, permitindo que se planejem melhor e tenham uma experiência mais satisfatória no restaurante. Essa funcionalidade reforça o compromisso do HAPPDINE em oferecer transparência e conveniência para todos que utilizam o restaurante. 

Endpoints Cardápio: 
```bash
Base Url: http://{IP}:{PortApplication} 
```

Registrar Cardápio – Moda da Casa: 
```bash
POST - /modadacasa/cardapios 

Type: JSON 
```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```
Retorno: 

```bash
Status code: 201 created 

{ 

    “data”: “String”, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Registrar Cardápio – Receita do Chefe: 

```bash
POST - /receitadochefe/cardapios 

Type: JSON 
```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```

Retorno: 

```bash
Status code: 201 created 

{ 

    “data”: “String”, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Registrar Cardápio – Grill e Bem-Estar: 

```bash
POST - /grillebemestar/cardapios 

Type: JSON 
```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```

Retorno: 

```bash
Status code: 201 created 

{ 

    “data”: “String”, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Registrar Cardápio – De Bem Com a Vida: 

```bash
POST - /debemcomavida/cardapios 

Type: JSON 

```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```

Retorno: 

```bash
Status code: 201 created 

{ 

    “data”: “String”, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Pegar Cardápios – Moda da Casa: 

```bash
GET - /modadacasa/cardapios 

Type: JSON 
```

Retorno: 

```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```

Pegar Cardápios – Receita do Chefe: 

```bash
GET - /receitadochefe/cardapios 

Type: JSON 
```
Retorno: 

```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Pegar Cardápios – Grill e Bem Estar: 

```bash
GET - /grillebemestar/cardapios 

Type: JSON 
```

Retorno: 

```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Pegar Cardápios – De Bem Com a Vida: 

```bash
GET - /debemcomavida/cardapios 

Type: JSON 
```

Retorno: 

```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```


Editar Cardápios – Moda da Casa: 
```bash
PUT - /modadacasa/cardapios 

Type: JSON 
```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```

Retorno: 

```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Editar Cardápios – Receita do Chefe: 
```bash
PUT - /receitadochefe/cardapios 

Type: JSON 
```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```

Retorno: 

```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```

Editar Cardápios – Grill e Bem-Estar: 
```bash
PUT - /grillebemestar/cardapios 

Type: JSON 
```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```


Retorno: 
```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

Editar Cardápios – De Bem Com a Vida: 
```bash
PUT - /debemcomavida/cardapios 

Type: JSON 
```

Atributos: 
```bash
{ 

    data: String, 

    prato_principal: String, 

    guarnicao: String, 

    sobremesa: String 

    salada: String 

    fk_restaurante: UUID 

} 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “id_cardapio”: UUID, 

    “prato_principal”: “String”, 

    “guarnicao”: “String”, 

    “sobremesa”: “String”, 

    “salada”: “String”, 

    “data”: “String”, 

    “fk_restaurante”: UUID 

} 
```
 

- Votos – Queridinho do Dia 

A funcionalidade "Queridinho do Dia" oferece aos usuários a oportunidade de votar em seu prato preferido do dia, promovendo uma interação divertida e engajante com o cardápio. Os votos são coletados de forma simples, permitindo que cada cliente expresse sua preferência. Para os administradores, essa funcionalidade se torna uma ferramenta valiosa, pois permite visualizar os resultados por meio de gráficos, facilitando a análise das preferências dos clientes. Com essas informações, os administradores podem tomar decisões informadas sobre o cardápio, garantindo que os pratos mais populares sejam sempre destaque nas refeições servidas. 

Endpoints Queridinho do Dia: 
```bash
Base Url: http://{IP}:{PortApplication}/api 
```

Registrar Voto: 

```bash
POST – /votos 

Type: JSON 
```

Atributos: 
```bash
{ 

    data_registro: String 

    fk_idrestaurantevotes: UUID 

} 
```

Retorno: 

```bash
Status code: 201 created 

{ 

    “data_registro”: “String”, 

    “fk_idrestaurantevotes”: UUID 

} 
```
 

Pegar votos: 
```bash
GET – /votos/filter?restauranteId=${restaurante_id}&registro=${data_registro} 

Type: JSON 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “id_voto”: “UUID”, 

    “quantidade”: “Inteiro” 

} 
``` 

- Feedback 

Seu feedback é fundamental para nós! A funcionalidade de feedback do HAPPDINE foi especialmente desenvolvida para permitir que você compartilhe suas impressões sobre o restaurante e a plataforma de forma simples e eficaz. Ao dedicar alguns minutos para nos contar sobre sua experiência, você nos ajuda a identificar o que está funcionando bem e onde podemos melhorar. Suas opiniões são essenciais para aprimorarmos continuamente nossos serviços e garantir que sua experiência no HAPPDINE atenda plenamente às suas expectativas. Agradecemos sinceramente por sua contribuição e por fazer parte da nossa jornada de melhoria! 

Endpoints Feedback: 
```bash
Base Url: http://{IP}:{PortApplication}/api 
```

Registrar Feedback:  
```bash
POST – /comentarios/create-coment 

Type: JSON 
```

Atributos: 
```bash
{ 

    nome: String, 

    opcao: Enum, 

    comentario: String, 

    timestampp: String, 

    estrela: 0, 

    cor_estrela: String, 

    isAprovado: Boolean 

} 
```

Retorno: 
```bash
Status code: 201 created 

{ 

    “nome”: “String”, 

    “opcao”: Enum, 

    “comentario”: “String”, 

    “timestampp”: “String”, 

    “estrela”: 0, 

    “cor_estrela”: “String”, 

    “isAprovado”: Boolean 

} 
```
 

Buscar os feedbacks do restaurante: 
```bash
GET – /comentarios/restaurante 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “nome”: “String”, 

    “opcao”: Enum, 

    “comentario”: “String”, 

    “timestampp”: “String”, 

    “estrela”: 0, 

    “cor_estrela”: “String”, 

    “isAprovado”: Boolean 

} 
```
 

Buscar os feedbacks da plataforma (HAPPDINE): 
```bash
GET – /comentarios/website 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “nome”: “String”, 

    “opcao”: Enum, 

    “comentario”: “String”, 

    “timestampp”: “String”, 

    “estrela”: 0, 

    “cor_estrela”: “String”, 

    “isAprovado”: Boolean 

} 
```
 

Buscar os feedbacks da página do administrador para o restaurante: 
```bash
GET – /comentarios/admin/restaurante 
```
Retorno: 
```bash
Status code: 200 OK 

{ 

    “id_feedback”: UUID, 

    “nome”: “String”, 

    “opcao”: Enum, 

    “comentario”: “String”, 

    “timestampp”: “String”, 

    “estrela”: 0, 

    “cor_estrela”: “String”, 

    “isAprovado”: Boolean 

} 
```
 

Buscar os feedbacks da página do administrador para a plataforma (HAPPDINE): 
```bash
GET – /comentarios/admin/website 
```
Retorno: 
```bash
Status code: 200 OK 

{ 
    “id_feedback”: UUID, 

    “nome”: “String”, 

    “opcao”: Enum, 

    “comentario”: “String”, 

    “timestampp”: “String”, 

    “estrela”: 0, 

    “cor_estrela”: “String”, 

    “isAprovado”: Boolean 

} 
```


Editar Feedback:  
```bash
PUT – /comentarios/admin 

Type: JSON 
```
Atributos: 
```bash
{ 

    nome: String, 

    opcao: Enum, 

    comentario: String, 

    timestampp: String, 

    estrela: 0, 

    cor_estrela: String, 

    isAprovado: Boolean 

} 
```
Retorno: 
```bash
Status code: 200 OK 

{ 
    “nome”: “String”, 

    “opcao”: Enum, 

    “comentario”: “String”, 

    “timestampp”: “String”, 

    “estrela”: 0, 

    “cor_estrela”: “String”, 

    “isAprovado”: Boolean 

} 
```

- Notificações  

As notificações do HAPPDINE foram projetadas para manter você sempre atualizado com informações importantes sobre o restaurante. Com esse recurso, os administradores podem enviar alertas em tempo real, mantendo os usuários informados sobre atualizações de cardápios, horários de atendimento, tempo de espera das filas e outras comunicações relevantes. Esse sistema de notificações facilita o acompanhamento e melhora a organização, garantindo que sua experiência no restaurante seja sempre prática e otimizada. 

Endpoints Notificações: 
```bash
Base Url: http://{IP}:{PortApplication}/api 
```
Registrar Notificação:  
```bash
POST – /avisos/upload 

Type: JSON 
```
Atributos: 
```bash
{ 

recado: String, 

timestamp: String, 

file: BLOB, 

categoria: ENUM (‘MENSAGEM’, ‘ATENCAO, ‘ESTRELA’) 

} 
```
Retorno: 
```bash
Status code: 201 created 

{ 

    “recado”: “String”, 

    “timestamp”: “String”, 

    “imagem”: “BLOB”, 

    “categoria”: “ENUM (‘MENSAGEM’, ‘ATENCAO, ‘ESTRELA’)” 

} 
```
 

Pegar Notificação: 
```bash
GET – /{id}/details 

Type: JSON 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “recado”: “String”, 

    “timestamp”: “String”, 

    “imagem”: “BLOB”, 

    “categoria”: “ENUM (‘MENSAGEM’, ‘ATENCAO, ‘ESTRELA’)” 

    Id: UUID 

} 
```
 

- Fila 

A funcionalidade de fila do HAPPDINE permite ao administrador organizar e gerenciar as praças, alocando cada restaurante à sua praça correspondente de forma prática e eficiente. Com essa organização, é possível visualizar em tempo real a situação de cada fila, facilitando o controle do fluxo de clientes em diferentes áreas e aprimorando a experiência de todos no restaurante. Além disso, o sistema oferece uma visão clara e organizada das filas, permitindo ajustes rápidos e garantindo que os usuários saibam o tempo estimado de espera em cada praça. 

Endpoints Fila: 
```bash
Base Url: http://{IP}:{PortApplication}/api 
```

Registrar Fila: 
```bash
POST – /fila

Type: JSON 
```
Atributos: 
```bash
{ 

    is_ativado: Boolean, 

    localização: String, 

    Fk_idrestaurante: UUID 

} 
```

Retorno: 
```bash
Status code: 201 created 

{ 

    “localizacao”: “String”, 

    “fk_idrestaurante”: “UUID”, 

    “id”: “UUID”, 

    “is_ativado”: “Boolean” 

} 
```
 
- Movimentação 

A funcionalidade de monitoramento do HAPPDINE permite o registro dos horários de maior e menor movimentação no restaurante, oferecendo uma visão detalhada do fluxo de clientes ao longo do dia. Com esses dados, é possível identificar padrões de movimentação, permitindo que a administração planeje melhor o atendimento e otimize os recursos conforme a demanda. Esse monitoramento preciso contribui para um ambiente mais organizado e uma experiência mais agradável para todos os usuários. 

Endpoints Monitoramento: 
```bash
Base Url: http://{IP}:{PortApplication}/api 
```
Registrar Monitoramento:  
```bash
POST – /monitoramento 

Type: JSON 
```
Atributos: 
```bash
{ 

    data_registro: String, 

    horario_registro: String, 

    quantidade: Inteiro, 

    situação: ENUM (‘VERMELHO’, ‘AMARELO’, ‘VERDE’), 

    fk_fila: UUID 

} 
```
Retorno: 
```bash
Status code: 201 Created 

{ 

    “Id_movimentacao”: “UUID” 

    “data_registro”: “String”, 

    “horario_registro”: “String”, 

    “situação”: ENUM (‘VERMELHO’, ‘AMARELO’, ‘VERDE’), 

    “quantidade”: “Inteiro”, 

    “fk_fila”: “UUID” 

} 
```

Pegar o último horário registrado: 

```bash
GET – /monitoramento/ultimo/{localizacao} 

Type: JSON 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “id_movimentacao”: “UUID”, 

    “data_registro”: “String”, 

    “horário_registro”: “String”, 

    “situacao”: “ENUM (‘VERMELHO’, ‘AMARELO’, ‘VERDE’)”, 

    “quantidade”: “Inteiro”, 

    “fk_fila”: “UUID” 

} 
```

Pegar os monitoramentos registrados no dia: 

```bash
GET – /monitoramento/pegar/data/{data} 

Type: JSON 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “id_movimentacao”: “UUID”, 

    “data_registro”: “String”, 

    “horário_registro”: “String”, 

    “situacao”: “ENUM (‘VERMELHO’, ‘AMARELO’, ‘VERDE’)”, 

    “quantidade”: “Inteiro”, 

    “fk_fila”: “UUID” 

} 
```

Emails 
A funcionalidade de emails no HAPPDINE permite que os usuários insiram seu nome e endereço de email, garantindo que os administradores possam enviar os cardápios diretamente para cada colaborador. Essa ferramenta facilita a comunicação e garante que todos os usuários estejam sempre informados sobre as opções disponíveis, promovendo uma experiência mais personalizada e conveniente. Ao receber os cardápios por email, os colaboradores podem planejar suas refeições com antecedência, melhorando a organização e a satisfação geral no ambiente do restaurante. 

Endpoints Email: 
```bash
Base Url: http://{IP}:{PortApplication}/ 
```

Registrar Email: 
```bash
POST – /register-email 

Type: JSON 
```
Atributos: 
```bash
{ 

    nome: String, 

    email: String 

} 
```

Retorno: 
```bash
Status code: 201 created 

{ 

    “id_email”: UUID, 

    “nome”: “String”,  

    “email”: “String” 

} 
```

Pegar Emails: 
```bash
GET – /emails 

Type: JSON 
```

Retorno: 
```bash
Status code: 200 OK 

{ 

    “id_email”: UUID, 

    “nome”: “String”,  

    “email”: “String” 

} 
```