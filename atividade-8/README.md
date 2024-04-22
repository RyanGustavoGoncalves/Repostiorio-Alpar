1. A função `push` adiciona um ou mais itens ao final de um array, e retorna o novo índice. A função `Push` altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Push.

   Cole o a sua função Push:

   ```javascript
   push(array, item) {...}
   ```
   Opcionalmente, aceite infinitos itens:

   ```javascript
   push(array, ...items) {...}
   ```
2. A função `pop` remove o último item do array, e retorna o item removido. A função `Pop` altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Pop.

   Cole o a sua função Pop:

   ```javascript
   pop(array) {...}
   ```
3. A função `shift` remove o primeiro item do array, e retorna o item removido. A função `Shift` altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Shift.

   Cole o a sua função Shift:

   ```javascript
   shift(array) {...}
   ```
4. A função `unshift` adiciona um ou mais itens no início do array, e retorna o novo índice. A função `Unshift` altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Unshift.

   Cole o a sua função Unshift:

   ```javascript
   unshift(array, item) {...}
   ```
   Opcionalmente, aceite infinitos itens:

   ```javascript
   unshift(array, ...items) {...}
   ```
5. A função `slice` retorna um pedaço do array, de um índice de início, até um índice de fim (sem incluí-lo). A função `Slice` NÃO altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Slice.

   Cole o a sua função Slice:

   ```javascript
   slice(array, indexStart, indexEnd) {...}
   ```
   Opcionalmente, aceite o `indexEnd` como opcional:

   ```javascript
   slice(array, indexStart, indexEnd?) {...}
   ```
6. A função `splice` remove itens de um array de um índice de um inicio, e deleta a quantidade de itens informados, e por fim, adiciona itens a partir do índice informado logo depois de removê-los. A função `Splice` altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Splice.

   Cole o a sua função Splice:

   ```javascript
   splice(array, indexStart, deleteCount) {...}
   ```
   Opcionalmente, adicione infinitos itens na posição indicada após remover os itens indicados:

   ```javascript
   splice(array, indexStart, deleteCount, ...itemsToAdd) {...}
   ```
7. A função `forEach` percorre todo o array, executando uma função callback passando o item do array como parametro. `forEach` não tem retorno. A função `ForEach` NÃO altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função ForEach.

   Cole o a sua função ForEach:

   ```javascript
   foreach(array, callback) {...}
   ```
   Não esqueça de passar o item do array para a execução do callback:

   ```javascript
   ex: callback(array[i])
   ```
8. A função `map` percorre todo o array, executando uma função callback passando o item do array como parametro, e monta um novo array com o retorno de cada callback executado. A função `Map` NÃO altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Map.

   Cole o a sua função Map:

   ```javascript
   map(array, callback) {...}
   ```
   Não esqueça de passar o item do array para a execução do callback, e adicioná-lo ao novo array:

   ```javascript
   ex: newArray[i] = callback(array[i])
   ```
9. A função `filter` percorre todo o array, executando uma função callback passando o item do array como parametro, monta e retorna um novo array com os itens do array original cujo o retorno do callback executado contenha um valor verdadeiro. A função `Filter` NÃO altera o array original.

   Cole a sua função do Javascript:
   Faça sua própria implementação da função Filter.

   Cole o a sua função Filter:

   ```javascript
   filter(array, callback) {...}
   ```
   Não esqueça de passar o item do array para a execução do callback, e usá-lo na comparação:

   ```javascript
   ex: if(callback(array[i]))
   ```
10. A função `reduce` percorre todo o array, executando uma função callback passando uma variável acumuladora e o item do array como parametro, o retorno da função callback será o novo valor do acumulador que será passado para a próxima execução do callback. A função `reduce` também aceita um outro parametro, que é o valor inicial do acumulador, a fim de evitar erros durante a execução. A função `Reduce` NÃO altera o array original.

    Cole a sua função do Javascript:
    Faça sua própria implementação da função Reduce.

    Cole o a sua função Reduce:

    ```javascript
    reduce(array, callback, initialAcumulatorValue) {...}
    ```
    Não esqueça de passar o item do array e o acumulador para a execução do callback, e usá-lo na comparação:

    ```javascript
    ex: acumulador = callback(acumulador, array[i])
    ```
