# Overclock

E-commerce em HTML, CSS e JavaScript. Visual inspirado em lojas de informática como a Pichau, com identidade própria, um banner principal e quatro ofertas na página inicial.

## Arquivos

- `index.html`: página inicial.
- `catalogo.html`: catálogo com busca, categorias e ordenação.
- `produto.html`: detalhes, especificações, quantidade e compra do produto.
- `carrinho.html`: itens, alteração de quantidade, remoção e totais.
- `checkout.html`: formulário e confirmação de pedido.
- `favoritos.html`: produtos salvos.
- `style.css`: estilos e adaptação a celular, tablet e desktop.
- `script.js`: dados do catálogo, layout compartilhado e todas as interações.
- `assets/`: ilustrações vetoriais e ícone da loja.

## Personalização

Edite a lista `produtos` no início de `script.js` para alterar nomes, SKUs, preços, imagens, estoque e especificações. As cores principais estão nas variáveis de `:root` em `style.css`. O preço `preco` é o preço à vista; o preço no cartão é calculado para que o Pix tenha 10% de desconto. O parcelamento respeita o menor limite entre os produtos do carrinho.

Carrinho e favoritos são salvos em `localStorage`. A newsletter apenas salva o interesse localmente, sem armazenar ou enviar o e-mail. Dados do checkout não são armazenados. 

Não há backend, conta de usuário, cobrança, emissão de boleto ou Pix real. Uma loja comercial precisa de integração com estoque, pedidos, frete e provedor de pagamentos. As fontes Inter e Barlow Condensed usam Google Fonts; há fontes alternativas se a conexão estiver indisponível.

## Verificação

Fluxo verificado no navegador: abertura de produto, adição e alteração de quantidade, persistência após atualização, busca, favoritos, seleção de pagamento e frete, cálculo do total e conclusão de pedido. JavaScript validado com `node --check`.
