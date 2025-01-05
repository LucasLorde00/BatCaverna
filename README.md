# Batcaverna - Site Interativo

Este é um site interativo inspirado no universo do Batman. Ele contém informações sobre Bruce Wayne e Batman, além de funcionalidades como envio de e-mails, autenticação de usuários e gerenciamento de crimes. O projeto foi desenvolvido com HTML, CSS, JavaScript e a API EmailJS para envio de e-mails.

## Funcionalidades

### 1. **Sobre Bruce Wayne e Batman**
- O site contém duas seções: uma sobre **Bruce Wayne** e outra sobre **Batman**.
- Ao clicar nas seções, a descrição correspondente é exibida.

### 2. **Envio de E-mail**
- O site permite que o usuário envie um e-mail para um contato específico.
- A funcionalidade é implementada usando a API [EmailJS](https://www.emailjs.com/).

### 3. **Autenticação de Usuários**
- O site permite a autenticação de usuários com credenciais predefinidas (ex: "batman", "robin").
- Após o login bem-sucedido, uma mensagem de boas-vindas é exibida.

### 4. **Gerenciamento de Crimes**
- O site possui um sistema para adicionar, editar e excluir crimes, que são armazenados no `localStorage` do navegador.
- Cada crime possui uma descrição e uma data, e o usuário pode editar ou excluir crimes da lista.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5**
- **EmailJS (para envio de e-mails)**

## Estrutura do Projeto

### 1. **HTML**
- A estrutura da página é composta por um cabeçalho, navegação, conteúdo principal e rodapé.
- O conteúdo principal é dividido entre informações sobre Bruce Wayne e Batman, que podem ser acessadas clicando nas respectivas áreas.

### 2. **CSS**
- O estilo é personalizado para o fundo do site com uma imagem da Batcaverna, além de um layout flexível.
- O modal de contato e a navegação também têm seus estilos ajustados para melhorar a experiência do usuário.

### 3. **JavaScript**
- **Função de Login**: Valida as credenciais dos usuários e exibe uma mensagem de boas-vindas.
- **Envio de E-mail**: Usa a API EmailJS para enviar e-mails com dados fornecidos pelo usuário.
- **Gerenciamento de Crimes**: Permite adicionar, editar, excluir e exibir crimes armazenados no `localStorage`.

## Como Usar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Navegue pelas seções e explore as funcionalidades.
4. Para enviar um e-mail, clique no link de **Contato** na navegação e preencha o formulário.
5. Faça login com as credenciais predefinidas para acessar a área de autenticação.
6. Adicione, edite ou exclua crimes usando a seção de gerenciamento de crimes.

## Como Rodar Localmente

1. Clone este repositório ou baixe o código.
2. Abra o arquivo `index.html` diretamente em seu navegador.
3. Certifique-se de que o arquivo `app.js` esteja corretamente vinculado ao HTML para garantir o funcionamento da funcionalidade de e-mail e gerenciamento de crimes.

---

## Observações

- **EmailJS**: O envio de e-mails utiliza a API EmailJS, e para isso é necessário configurar uma conta no serviço e inserir suas credenciais. Para testar o envio de e-mails, o código está configurado para enviar e-mails para `lucasorge.dev@gmail.com`, mas você pode alterar isso facilmente.
  
- **Segurança**: O código contém uma autenticação simples para usuários autorizados (como "batman", "robin", etc.), mas não deve ser usado em um ambiente de produção sem medidas adequadas de segurança.

