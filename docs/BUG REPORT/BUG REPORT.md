| [BUGS REPORTS]{.smallcaps} |                    |
|----------------------------|--------------------|
| QA/Tester                  | **Marcel Abramo**  |
| Data dos testes            | **16/08/2025**     |
| Software/Site              | **Real World App** |

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th>BUG 001:<br />
<strong>TRANS-003</strong></th>
<th>Sistema permite transação com saldo zero</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Descrição</td>
<td>O sistema está permitindo enviar dinheiro mesmo quando o saldo da
conta está zerado (R$0,00), violando a regra básica de transações
financeiras.</td>
</tr>
<tr class="even">
<td>Passos para Reprodução</td>
<td>1. Acessar uma conta com saldo $0,00<br />
2. Clicar em "Enviar Dinheiro"<br />
3. Inserir qualquer valor (ex: $50,00)<br />
4. Confirmar a transação</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Sistema deve bloquear a transação e exibir: "Saldo insuficiente.
Operação cancelada."</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>Sistema autoriza a transação e exibe mensagem de sucesso
("Transaction Submitted").</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Prioridade</td>
<td><strong><mark>Alta</mark></strong> / Média / Baixa</td>
</tr>
<tr class="odd">
<td>Tipo</td>
<td>Funcional (Validação de regra de negócio)</td>
</tr>
<tr class="even">
<td>Evidência</td>
<td><p><img src="media/image1.png"
style="width:6.1375in;height:2.41736in" /></p>
<p><img src="media/image2.png"
style="width:6.1375in;height:2.97708in" /></p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th>BUG 002:<br />
<strong>TRANS-002</strong></th>
<th>Sistema permite enviar valor acima do saldo existente</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Descrição</td>
<td>O sistema permite enviar dinheiro mesmo quando o saldo é abaixo do
valor da transação.<br />
A transação consome todo o saldo existe. Isso viola regra básica de
transações financeiras.</td>
</tr>
<tr class="even">
<td>Passos para Reprodução</td>
<td>1. Acessar uma conta com saldo (ex: $99.600,00)<br />
2. Clicar em "Enviar Dinheiro"<br />
3. Inserir qualquer valor (ex: $10.000.000.000.000,00)<br />
4. Confirmar a transação</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Sistema deve bloquear a transação e exibir: "Saldo insuficiente.
Operação cancelada."</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>Sistema autoriza a transação e exibe mensagem de sucesso
("Transaction Submitted").</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Prioridade</td>
<td><strong><mark>Alta</mark></strong> / Média / Baixa</td>
</tr>
<tr class="odd">
<td>Tipo</td>
<td>Funcional (Validação de regra de negócio)</td>
</tr>
<tr class="even">
<td>Evidência</td>
<td><p><img src="media/image3.png" /></p>
<p><img src="media/image4.png" /></p></td>
</tr>
</tbody>
</table>
