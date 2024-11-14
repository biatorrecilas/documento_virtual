---
sidebar_position: 3
---
#  Getting Started – Back-End 

Welcome to our guide that is designed to help you get started and get familiar with our platform. Below we have outlined all the initial configurations that need to be done so that you can start making the most of the complete project.

## Necessary tools
- **Java 17** – Java is a widely used programming language and platform for developing enterprise, web, and mobile applications, known for its security, performance, and portability. At HAPPDINE, we use Java as the foundation to build a robust and scalable framework that meets the needs of high performance and system reliability. This choice allows us to easily integrate various functionalities and ensure that the system works efficiently in different environments, providing a solid experience for both users and administrators.

- **JDK** - The Java Development Kit (JDK) is a complete set of tools essential for developing Java applications. It includes the Java Runtime Environment (JRE), compilers, and several other tools that facilitate the creation, debugging, and execution of Java applications. The JDK offers all the resources necessary for programmers to develop, test, and implement robust and efficient solutions, allowing the complete development of projects in a simplified and integrated manner.

- **Maven** - Apache Maven is a widely used build automation tool for Java projects that simplifies and automates the compilation process, dependency management, reporting, and documentation. With a declarative structure based on POM (Project Object Model), Maven facilitates standardization and consistency in the project lifecycle, allowing developers to efficiently manage libraries and plugins and keep the project well-documented and organized.

- **MySQL Workbench** - MySQL Workbench is an integrated visual tool for modeling, developing, and administering MySQL databases. It provides features that make it easy to create and edit tables, execute SQL queries, visualize data, and optimize performance. We use MySQL Workbench to manage and structure the HAPPDINE database, simplifying design and maintenance tasks and ensuring that database operations are performed efficiently and in an organized manner.

- **Python 3.11** – Python 3.11 brings major performance improvements and new features, ideal for developing modern applications. We used Python to implement the HAPPDINE AI code, leveraging its simplicity and power to efficiently create complex functionality.

- **OpenCV** - OpenCV (Open Source Computer Vision Library) is an open-source computer vision library widely used for image and video processing. It provides a set of algorithms and tools that facilitate image analysis and manipulation, object detection, facial recognition, and other computer vision tasks. We use OpenCV at HAPPDINE to enhance visual processing and facilitate the implementation of artificial intelligence features for queue monitoring and flow optimization.

- **YOLO v8** - You Only Look Once (YOLO) v8 is one of the latest and most advanced real-time object detection solutions. YOLO v8 combines accuracy and speed, making it ideal for applications that require efficient processing and fast detection, such as visual monitoring and object recognition in videos. We use YOLO v8 at HAPPDINE to enhance queue monitoring and optimize visual management, quickly identifying flows and patterns that help improve the customer experience in the restaurant.

- **Ultralytics** - Ultralytics is the organization responsible for developing the latest versions of YOLO, including YOLO v8. It provides a highly optimized object detection implementation that makes it easy to integrate YOLO with AI frameworks and computer vision tools. With advanced features, Ultralytics simplifies the use of YOLO, making it accessible to developers looking for accuracy and efficiency in real-time object detection and tracking tasks. We leveraged Ultralytics’ solutions at HAPPDINE to effectively integrate YOLO v8, increasing accuracy and speed in queue monitoring and visual management.

- **IntelliJ IDEA (IDE)** - IntelliJ IDEA is one of the most popular and robust IDEs for Java development, recognized for its advanced features that facilitate productivity and code quality. It offers intelligent editing with auto-completion, automated refactoring, extensive support for frameworks such as Spring Boot, and seamless integration with build tools such as Maven and Gradle (depending on your project preference). The IDE also includes debugging tools, integrated version control, and testing, providing a complete environment for agile and efficient development of Java projects.

### Endpoints
Java Back-End

- Restaurant

The GET/restaurants endpoint allows access to a complete list of all restaurants registered in the HAPPDINE system. When making a request to this endpoint, users receive essential information about each restaurant, making it easier to consult data such as name, location and service details. This feature is essential for presenting all available restaurant options in a centralized and organized manner, improving the browsing experience and planning for users in the corporate environment.

Restaurant endpoint:
```bash
Base Url: http://{IP}:{PortApplication} 
```

Get restaurants:
```bash
GET - /restaurantes 

Type: JSON 
```

Return:

```bash

Status code: 200 OK 

{ 

    “id_restaurante”: UUID, 

    “nome”: “String”, 

    “descricao”: “String”, 

    “infoRestauranteModel”: UUID 

} 
```
 

- Menu

The menu functionality in HAPPDINE was developed to facilitate both management and access to meal options. With this tool, administrators can register and organize menus according to the days of the week, ensuring that all updates are simple and fast. Once the menu is registered, users can view the available options, allowing them to better plan and have a more satisfactory experience at the restaurant. This functionality reinforces HAPPDINE's commitment to offering transparency and convenience to everyone who uses the restaurant.

Menu endpoints:
```bash
Base Url: http://{IP}:{PortApplication} 
```

Menu Post – Moda da Casa: 
```bash
POST - /modadacasa/cardapios 

Type: JSON 
```

Attributes:
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
Return:

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
 

Menu Post – Receita do Chefe: 

```bash
POST - /receitadochefe/cardapios 

Type: JSON 
```

Attributes: 
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

Return: 

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
 

Menu Post – Grill e Bem-Estar: 

```bash
POST - /grillebemestar/cardapios 

Type: JSON 
```

Attributes: 
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

Return: 

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
 

Menu Post – De Bem Com a Vida: 

```bash
POST - /debemcomavida/cardapios 

Type: JSON 

```

Attributes: 
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

Return: 

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
 

Get Menu – Moda da Casa: 

```bash
GET - /modadacasa/cardapios 

Type: JSON 
```

Return: 

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

Get Menu – Receita do Chefe: 

```bash
GET - /receitadochefe/cardapios 

Type: JSON 
```
Return: 

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
 

Get Menu – Grill e Bem Estar: 

```bash
GET - /grillebemestar/cardapios 

Type: JSON 
```

Return: 

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
 

Get Menu – De Bem Com a Vida: 

```bash
GET - /debemcomavida/cardapios 

Type: JSON 
```

Return: 

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


Edit Menu – Moda da Casa: 
```bash
PUT - /modadacasa/cardapios 

Type: JSON 
```

Attributes: 
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

Return: 

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
 

Edit Menu – Receita do Chefe: 
```bash
PUT - /receitadochefe/cardapios 

Type: JSON 
```

Attributes: 
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

Return: 

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

Edit Menu – Grill e Bem-Estar: 
```bash
PUT - /grillebemestar/cardapios 

Type: JSON 
```

Attributes: 
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


Return: 
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
 

Edit Menu – De Bem Com a Vida: 
```bash
PUT - /debemcomavida/cardapios 

Type: JSON 
```

Attributes: 
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

Return: 
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
 

- Votes – Favorite of the Day

The “Favorite of the Day” feature gives users the opportunity to vote for their favorite dish of the day, promoting a fun and engaging interaction with the menu. Votes are collected in a simple way, allowing each customer to express their preference. For administrators, this feature becomes a valuable tool, as it allows them to visualize the results through graphs, making it easier to analyze customer preferences. With this information, administrators can make informed decisions about the menu, ensuring that the most popular dishes are always highlighted in the meals served.

Favorite of the Day endpoints:
```bash
Base Url: http://{IP}:{PortApplication}/api 
```

Post Vote:

```bash
POST – /votos 

Type: JSON 
```

Attributes: 
```bash
{ 

    data_registro: String 

    fk_idrestaurantevotes: UUID 

} 
```

Return: 

```bash
Status code: 201 created 

{ 

    “data_registro”: “String”, 

    “fk_idrestaurantevotes”: UUID 

} 
```
 

Get votes:
```bash
GET – /votos/filter?restauranteId=${restaurante_id}&registro=${data_registro} 

Type: JSON 
```

Return: 
```bash
Status code: 200 OK 

{ 

    “id_voto”: “UUID”, 

    “quantidade”: “Inteiro” 

} 
``` 

- Feedback

Your feedback is essential to us! The HAPPDINE feedback feature has been specially designed to allow you to share your impressions of the restaurant and the platform in a simple and effective way. By taking a few minutes to tell us about your experience, you help us identify what is working well and where we can improve. Your opinions are essential to continually improving our services and ensuring that your experience on HAPPDINE fully meets your expectations. We sincerely thank you for your contribution and for being part of our improvement journey!

Endpoints Feedback:
```bash
Base Url: http://{IP}:{PortApplication}/api 
```

Post feedback:
```bash
POST – /comentarios/create-coment 

Type: JSON 
```

Attributes: 
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

Return: 
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
 

Get restaurant feedback:
```bash
GET – /comentarios/restaurante 
```

Return: 
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
 

Get website feedback (HAPPDINE):
```bash
GET – /comentarios/website 
```

Return: 
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
 

Get feedback from admin page for restaurant:
```bash
GET – /comentarios/admin/restaurante 
```
Return: 
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
 

Get feedback from admin page to website (HAPPDINE):
```bash
GET – /comentarios/admin/website 
```
Return: 
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


Edit Feedback:
```bash
PUT – /comentarios/admin 

Type: JSON 
```
Attributes: 
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
Return: 
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

- Notifications

HAPPDINE notifications are designed to keep you up to date with important information about your restaurant. With this feature, administrators can send real-time alerts, keeping users informed about menu updates, opening hours, queue times and other relevant communications. This notification system makes it easier to stay on track and improves organization, ensuring that your restaurant experience is always convenient and optimized.

Notifications Endpoints:
```bash
Base Url: http://{IP}:{PortApplication}/api 
```
Post notification:
```bash
POST – /avisos/upload 

Type: JSON 
```
Attributes: 
```bash
{ 

recado: String, 

timestamp: String, 

file: BLOB, 

categoria: ENUM (‘MENSAGEM’, ‘ATENCAO, ‘ESTRELA’) 

} 
```
Return: 
```bash
Status code: 201 created 

{ 

    “recado”: “String”, 

    “timestamp”: “String”, 

    “imagem”: “BLOB”, 

    “categoria”: “ENUM (‘MENSAGEM’, ‘ATENCAO, ‘ESTRELA’)” 

} 
```
 

Get Notification:
```bash
GET – /{id}/details 

Type: JSON 
```

Return: 
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
 

- Queue

HAPPDINE's queue functionality allows administrators to organize and manage the queues, assigning each restaurant to its corresponding queue in a practical and efficient manner. With this organization, it is possible to view the status of each queue in real time, facilitating control of the flow of customers in different areas and improving the experience for everyone in the restaurant. In addition, the system offers a clear and organized view of the queues, allowing for quick adjustments and ensuring that users know the estimated waiting time in each queue.

Queue Endpoints:
```bash
Base Url: http://{IP}:{PortApplication}/api 
```

Queue Post:
```bash
POST – /fila

Type: JSON 
```
Attributes: 
```bash
{ 

    is_ativado: Boolean, 

    localização: String, 

    Fk_idrestaurante: UUID 

} 
```

Return: 
```bash
Status code: 201 created 

{ 

    “localizacao”: “String”, 

    “fk_idrestaurante”: “UUID”, 

    “id”: “UUID”, 

    “is_ativado”: “Boolean” 

} 
```
 
- Movement

HAPPDINE's monitoring functionality allows you to record the times of highest and lowest traffic in the restaurant, providing a detailed view of customer flow throughout the day. With this data, it is possible to identify movement patterns, allowing management to better plan service and optimize resources according to demand. This precise monitoring contributes to a more organized environment and a more pleasant experience for all users.

Monitoring endpoints:
```bash
Base Url: http://{IP}:{PortApplication}/api 
```
Post monitoring:
```bash
POST – /monitoramento 

Type: JSON 
```
Attributes: 
```bash
{ 

    data_registro: String, 

    horario_registro: String, 

    quantidade: Inteiro, 

    situação: ENUM (‘VERMELHO’, ‘AMARELO’, ‘VERDE’), 

    fk_fila: UUID 

} 
```
Return: 
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

Get the last recorded time:

```bash
GET – /monitoramento/ultimo/{localizacao} 

Type: JSON 
```

Return: 
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

Get the monitoring records for the day:

```bash
GET – /monitoramento/pegar/data/{data} 

Type: JSON 
```

Return: 
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

- Emails 

HAPPDINE’s email functionality allows users to input their name and email address, ensuring that administrators can send menus directly to each employee. This tool facilitates communication and ensures that all users are always informed about the options available, promoting a more personalized and convenient experience. By receiving menus via email, employees can plan their meals in advance, improving organization and overall satisfaction in the restaurant environment.

Email endpoints:
```bash
Base Url: http://{IP}:{PortApplication}/ 
```

Post Email:
```bash
POST – /register-email 

Type: JSON 
```
Attributes: 
```bash
{ 

    nome: String, 

    email: String 

} 
```

Return: 
```bash
Status code: 201 created 

{ 

    “id_email”: UUID, 

    “nome”: “String”,  

    “email”: “String” 

} 
```

Get Emails: 
```bash
GET – /emails 

Type: JSON 
```

Return: 
```bash
Status code: 200 OK 

{ 

    “id_email”: UUID, 

    “nome”: “String”,  

    “email”: “String” 

} 
```