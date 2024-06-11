# Atividade 2

- [ ] Fazer um endpoint para salvar os dados de um cliente com os campos (nome,telefone,cpf) da tabela cliente. E retornar qual foi o id inserido.
  - path: POST `/cliente`

  ```
  { 
    id: b0db705f-e2bc-4908-9ba8-8195bb8d3799 
  }
  ```

- [ ] - Criar um validator para CPF, deve validar mascara, quantidade de caracteres e tipo de caracteres.

- [ ] - Criar um validator para Telefone, deve validar mascara, quantidade de caracteres e tipo de caracteres.

- [ ] - Caso não enviar um CPF válido, não deve salvar.

  ```
  {
      message: "O CPF informado é inválido. XXX.XXX.XXX-XX",
      status: 400
  }
  ```

- [ ] - Caso não enviar um Telefone válido, não deve salvar.

  ```
  {
      message: "O Telefone informado é inválido. (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.",
      status: 400
  }
  ```

(Evidências no evidencia.doc)

- [ ] - Exception enviando um cpf com 111.123.123
- [ ] - Exception enviando um telefone com (00) 000-000
- [ ] - Criação do Cliente com os dados a seguir
    `{ nome: Renata, cpf: "123.123.123-12", telefone (62) 98112-1233 }`
