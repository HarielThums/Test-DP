# Atividade 3

- [ ] Fazer a um endpoint para atualizar os dados de um cliente
  - path: PUT `/cliente/${id}`
- [ ] - Caso não enviar o o CPF completo, com mascara, não deve salvar.

  ```
  {
    "message": "O CPF informado é inválido. XXX.XXX.XXX-XX",
    "status": 400
  }
  ```

- [ ] - Caso não encontrar o cliente.

  ```
  {
    "message":"Cliente não encontrado",
    "status": 404
  }
  ```

(Evidências no evidencia.doc)

- [ ] - Atualização do Cliente : nome Juliana
- [ ] - Exception enviando um cpf com 111.123.123
- [ ] - Exception do cliente não encontrado id: "993b3177-b577-4921-a897-dbd8b1a2d285"
