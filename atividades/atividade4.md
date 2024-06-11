# Atividade 4

- [ ] Fazer um endpoint que devera retornar os dados das vendas do cliente.
  - path: GET `/cliente/${id}/vendas`

  ```
  [
    {
      "cliente": {
        "nome": cliente.nome,
        "telefone": cliente.telefone
      },
      "codigoNotaFiscal": "venda.codigoNotaFiscal",
      "valorTotal": sum(vendaItens.valor),
      "itens": [
        {
          "nome" : vendaItens.nome,
          "valor" : vendaItens.valor,
          "quantidade" : vendaItens.quantidade
        }
      ],
      "createdAt": venda.createdAt,
    }
  ]
  ```

- [ ] Caso o cliente não for encontrado deve voltar um error conforme abaixo:
  ```
  {
    "message":"Cliente não encontrado",
    "status": 404,
  }
  ```

(Evidências no evidencia.doc)

- [ ] - Consulta retornando o json
- [ ] - Exception consultando o cliente id: b0db705f-e2bc-4908-9ba8-8195bb8d3799
