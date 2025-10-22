# 💻 TecBlog: O seu site de tecnologia

## Sobre o Projeto

O *TecBlog* é a simulação da página principal de um portal de notícias dedicado à Tecnologia. O objetivo principal, foi praticar e consolidar os fundamentos que estou aprendendo em *HTML* (HyperText Markup Language, a linguagem responsável por toda a estrutura e marcação do site) e *CSS* (Cascading Style Sheets, a linguagem de estilos que define a apresentação e o design do layout).

*⚠️ Ponto Importante:*
Este é um projeto apenas HTML e CSS e atualmente, os links de navegação e as postagens não são funcionais.

## 🛠️ Tecnologias e Técnicas Empregadas

Este projeto foi construído utilizando apenas as tecnologias base da web:

| Tecnologia | Descrição |
| :--- | :--- |
| *HTML* | Utilizado para toda a marcação e estrutura semântica do conteúdo. |
| *CSS* | Responsável pelo design, cores e o layout |

### 💡 O que foi praticado:

#### *Estrutura (HTML)*

* Estruturação com divs, IDs e classes para separar seções da página (#cabecalho, #principal, .postagem, #area-lateral, #rodape).

* Criação de blocos de conteúdo simulando postagens, com títulos, datas, imagens e textos de exemplo.

* Utilização de links internos no menu e nas categorias (ainda sem destino real, por ser um projeto estático).

#### *Estilização e Layout (CSS)*

* *Layout Fixo e Centralizado:* Definição de uma largura fixa (width: 920px) para o container principal (#principal) e centralização usando margin: 0 auto;.
* *Posicionamento Clássico (Float):* Utilização da propriedade float: left; e float: right; para criar as colunas principais:
    * A área de postagens (.postagens) flutua à esquerda (width: 660px).
    * A área lateral (#area-lateral) flutua à direita (width: 240px).
* *Clearfix para Rodapé:* Uso da propriedade clear: both; no rodapé (#rodape) para garantir que ele seja posicionado corretamente abaixo de todas as colunas flutuantes.
* *Reset de Estilos:* Inclusão de um reset básico (* { margin: 0; padding: 0; }) para garantir a consistência de renderização entre navegadores.
* *Estilização de Navegação:* Implementação de efeitos hover nos links do menu para melhorar a experiência do usuário.
* *Paleta de Cores:* Uso de uma paleta simples e consistente, destacando a cor principal *Laranja (#f7b600)* para títulos e fundo do cabeçalho.

## 🎨 Estrutura do Código e Cores

| Elemento | Propósito | Cor CSS (Principal) |
| :--- | :--- | :--- |
| *Fundo do Body* | Background da página | #e6e6e6 (Cinza claro) |
| *Cabeçalho (#cabecalho)* | Identidade Visual do Blog | #f7b600 (Laranja) |
| *Corpo do Artigo* | Fundo das Postagens | #fff (Branco) |
| *Cor Principal* | Títulos e Links (h2, a:link) | #f7b600 (Laranja) |
