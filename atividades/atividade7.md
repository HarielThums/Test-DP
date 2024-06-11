# Atividade 7

- [ ] Fazer um endpoint para validação, tratando os itens das vendas verificando se o valor total dos itens (vendaItens.valor * vendaItens.quantidade) é igual ao venda.valorPago retornando todas as vendas do cliente. 
  - path: GET `/cliente/${id}}/vendas/validar`

  ```
  [
    {
        id: 06c4b56c-1eb9-49e7-bbb7-dd4979f0475b,
        status: 'Paga',
        valorPago: 100.00,
        valorTotalItens: 100.00
    },
    {
        id: dca5a097-77b1-4458-8ca5-ac9ed5a20b04,
        status: 'Aguardando Pagamento'
        valorPago: 100.00,
        valorTotalItens: 90.00,
    }
  ]
  ```

- [ ] Caso enviar um cliente inexistente 

  ```
  {
    message: "Cliente não encontrado",
    status: 404
  }
  ```

(Evidências no evidencia.doc)

- [ ] - Retorno da consulta referente aos cliente id: 1 e 2
- [ ] - Retorno do exception de cliente não encontrado
