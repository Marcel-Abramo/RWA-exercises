![](media/image1.png){width="3.2666666666666666in"
height="0.44166666666666665in"}

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 28%" />
<col style="width: 41%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr class="header">
<th><strong><span class="smallcaps">FEATURE</span></strong></th>
<th><strong><span class="smallcaps">CENÁRIOS DE
TESTE</span></strong></th>
<th><strong><span class="smallcaps">CASOS DE TESTE</span></strong></th>
<th><strong><span class="smallcaps">ID</span></strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td rowspan="3"><strong>LOGIN DO USUÁRIO</strong></td>
<td>Login válido</td>
<td>Login com usuário e senha válidos</td>
<td>LOGIN-001</td>
</tr>
<tr class="even">
<td rowspan="2">Login inválido</td>
<td>Login com senha incorreta</td>
<td>LOGIN-002</td>
</tr>
<tr class="odd">
<td>Login com nome de usuário inexistente</td>
<td>LOGIN-003</td>
</tr>
<tr class="even">
<td rowspan="4"><strong>REGISTRO DE USUÁRIO</strong></td>
<td>Registro válido</td>
<td>Campos obrigatórios preenchidos</td>
<td>REG-001</td>
</tr>
<tr class="odd">
<td rowspan="3">Registro inválido</td>
<td>Campo "senha" vazio</td>
<td>REG-002</td>
</tr>
<tr class="even">
<td>Campo "Nome" vazio</td>
<td>REG-003</td>
</tr>
<tr class="odd">
<td>Campo "Nome de usuário" vazio</td>
<td>REG-004</td>
</tr>
<tr class="even">
<td rowspan="3"><strong>TRANSAÇÃO (ENVIO DE DINHEIRO)</strong></td>
<td><p id="envio-com-saldo" class="heading"><strong>Envio com
saldo</strong></p></td>
<td>Envio com saldo suficiente</td>
<td>TRANS-001</td>
</tr>
<tr class="odd">
<td rowspan="2"><p id="envio-sem-saldo" class="heading"><strong>Envio
sem saldo</strong></p></td>
<td>Enviar valor maior que o saldo</td>
<td>TRANS-002</td>
</tr>
<tr class="even">
<td>Enviar valor com saldo zero</td>
<td>TRANS-003</td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>Visualizar Histórico de Transações</strong></td>
<td><p id="histórico-disponível" class="heading"><strong>Histórico
disponível</strong></p></td>
<td>Listar transações existentes</td>
<td>HIST-001</td>
</tr>
<tr class="even">
<td><p id="histórico-vazio" class="heading"><strong>Histórico
vazio</strong></p></td>
<td>Conta nova acessa histórico</td>
<td>HIST-002</td>
</tr>
</tbody>
</table>

A tabela acima foi criada com o objetivo de manter um controle
estruturado dos testes para assim garantirmos a qualidade do software de
forma eficiente. A atribuição de IDS únicos a cada Caso de Teste permite
rastrear facilmente a relação entre testes, requisitos e bugs, além de
facilitar a priorização e a manutenção dos testes. Se um bug for
encontrado, por exemplo, é possível identificar rapidamente qual Caso de
Teste falhou e vinculá-lo à correção. Também promove clareza na
comunicação entre a equipe, evitando ambiguidades e duplicidades. Essa
prática transforma o controle de qualidade em um processo estratégico,
onde cada teste possui propósito definido, histórico rastreável e
impacto mensurável no produto final.

| [CASOS DE TESTE FUNCIONAIS]{.smallcaps} |                      |
|-----------------------------------------|----------------------|
| Feature                                 | **LOGIN DO USUÁRIO** |
| QA/Tester                               | **Marcel Abramo**    |
| Data dos testes                         | **15/08/2025**       |
| Software/Site                           | **Real World App**   |

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>LOGIN-001</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login com credenciais válidas</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o usuário consegue fazer login com usuário e senha
corretos.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Usuário cadastrado no sistema.<br />
2. Aplicativo/web aberto na tela de login.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página de login.</p>
<p>2. Inserir email válido.</p>
<p>3. Inserir senha válida.</p>
<p>4. Clicar em "Entrar".</p></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>O usuário é redirecionado para a página inicial/dashboard.</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Login válido</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>LOGIN-002</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login com senha incorreta.</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema exibe mensagem de erro para senha
inválida.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Usuário cadastrado no sistema.<br />
2. Username válido conhecido.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página de login.</p>
<p>2. Inserir username válido.</p>
<p>3. Inserir senha incorreta.</p>
<p>4. Clicar em "Entrar".</p></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Alerta de erro “Username or password is invalid”</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Login inválido</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>LOGIN-003</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Login com nome de usuário inexistente.</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema exibe mensagem de erro para usuário
inexistente.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Username não cadastrado conhecido.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Acessar a página de login.</p>
<p>2. Inserir email inexistente.</p>
<p>3. Inserir qualquer senha.</p>
<p>4. Clicar em "Entrar".</p></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Alerta de erro “Username or password is invalid”</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Login inválido</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

| [CASOS DE TESTE FUNCIONAIS]{.smallcaps} |                         |
|-----------------------------------------|-------------------------|
| Feature                                 | **REGISTRO DE USUÁRIO** |
| QA/Tester                               | **Marcel Abramo**       |
| Data dos testes                         | **15/08/2025**          |
| Software/Site                           | **Real World App**      |

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>REG-001</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Campos obrigatórios preenchidos</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se é possível registrar um novo usuário com informações
válidas.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Aplicativo/Web na tela de registro.<br />
2. Dados válidos disponíveis</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Preencher nome, sobrenome, username, senha, confirmação de
senha.<br />
2. Clicar em "SIGN UP".</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Usuário é direcionado para a página de login.</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Registro válido</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>REG-002</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Campo "senha" vazio.</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema valida campos obrigatórios durante o
registro.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Aplicativo/Web na tela de registro.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Preencher todos os campos exceto "senha".<br />
2. Clicar em "SIGN UP".</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Alerta de erro “Password does not match”</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Registro inválido.</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>REG-003</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Campo "Nome" vazio</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar se o sistema impede cadastro sem nome completo.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Aplicativo/Web na tela de registro.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Deixar nome ou sobrenome vazio.</p>
<p>2. Preencher os demais campos.</p>
<p>3. Clicar em " SIGN UP ".</p></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Alerta de erro “First Name is required”</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Registro inválido.</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>REG-004</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Campo "Nome de usuário" vazio</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema valida campos obrigatórios durante o
registro.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Aplicativo/Web na tela de registro.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td><p>1. Preencher nome e sobrenome.</p>
<p>2. Não preencher username.<br />
3. Preencher senha válida e confirmar</p>
<p>4. Clicar em " SIGN UP ".</p></td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Alerta de erro “Username is required”</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td>Registro inválido.</td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

| [CASOS DE TESTE FUNCIONAIS]{.smallcaps} |                                   |
|-----------------------------------------|-----------------------------------|
| Feature                                 | **TRANSAÇÃO (ENVIO DE DINHEIRO)** |
| QA/Tester                               | **Marcel Abramo**                 |
| Data dos testes                         | **15/08/2025**                    |
| Software/Site                           | **Real World App**                |

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>TRANS-001</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Envio com saldo suficiente</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se a transação é concluída quando o saldo é
suficiente.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Usuário logado.<br />
2. Saldo na conta: $ 500,00.<br />
3. Contato destinatário cadastrado.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Clicar em "NEW".<br />
2. Seleciona o Contato<br />
3. Inserir um valor válido (ex: “R$100,00”) e uma descrição (ex:
“Conta”)<br />
4. Clicar no botão PAY.</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Mensagem de Confirmação “Transaction Submitted”</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td><strong>Envio com saldo</strong></td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>TRANS-002</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Enviar valor maior que o saldo.</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar se o sistema exibe mensagem de erro ao tentar enviar
dinheiro sem saldo suficiente.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Usuário logado.<br />
2. Saldo na conta: R$ 100,00.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Clicar em "NEW".<br />
2. Seleciona o Contato<br />
3. Inserir um valor válido (ex: “R$200,00”) e uma descrição (ex:
“Conta”)<br />
4. Clicar no botão PAY.</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Mensagem de alerta “Insufficient balance”</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td><strong>Envio sem saldo</strong></td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>Mensagem de Confirmação “Transaction Submitted”</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Falhou</mark></strong></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>TRANS-003</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Enviar valor com saldo zero.</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Validar se o sistema exibe mensagem de erro ao tentar enviar
dinheiro sem saldo em conta.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Usuário logado.<br />
2. Saldo na conta: R$ 0,00.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Clicar em "NEW".<br />
2. Seleciona o Contato<br />
3. Inserir um valor válido (ex: “R$200,00”) e uma descrição (ex:
“Conta”)<br />
4. Clicar no botão PAY.</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Bloquear a transação por falta de saldo</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td><strong>Envio sem saldo</strong></td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O sistema permitiu a transação</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Falhou</mark></strong></td>
</tr>
</tbody>
</table>

| [CASOS DE TESTE FUNCIONAIS]{.smallcaps} |                                        |
|-----------------------------------------|----------------------------------------|
| Feature                                 | **Visualizar Histórico de Transações** |
| QA/Tester                               | **Marcel Abramo**                      |
| Data dos testes                         | **15/08/2025**                         |
| Software/Site                           | **Real World App**                     |

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr class="header">
<th>ID</th>
<th><strong>HIST-001</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TÍTULO</td>
<td>Visualizar histórico de transações com sucesso</td>
</tr>
<tr class="even">
<td>Descrição</td>
<td>Verificar se o sistema lista transações anteriores
corretamente.</td>
</tr>
<tr class="odd">
<td>Precondição</td>
<td>1. Usuário logado.<br />
2. Pelo menos 1 transação realizada no passado.</td>
</tr>
<tr class="even">
<td>Passo-a-passo</td>
<td>1. Acessar "MINE".<br />
2. Verificar lista de transações.</td>
</tr>
<tr class="odd">
<td>Resultado esperado</td>
<td>Sistema lista as transações realizadas</td>
</tr>
<tr class="even">
<td>Cenário de teste</td>
<td><strong>Histórico disponível</strong></td>
</tr>
<tr class="odd">
<td>Ambiente de teste</td>
<td>Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10
Pro</td>
</tr>
<tr class="even">
<td>Resultado encontrado</td>
<td>O mesmo que o esperado.</td>
</tr>
<tr class="odd">
<td>Status</td>
<td><strong><mark>Passou</mark></strong></td>
</tr>
</tbody>
</table>

| ID                   | **HIST-002**                                                           |
|----------------------|------------------------------------------------------------------------|
| TÍTULO               | Conta nova acessa histórico.                                           |
| Descrição            | Validar mensagem quando não há transações.                             |
| Precondição          | 1\. Usuário logado em conta nova (sem transações).                     |
| Passo-a-passo        | 1\. Acessar \"MINE\".                                                  |
| Resultado esperado   | Mensagem de "No Transactions"                                          |
| Cenário de teste     | Histórico vazio                                                        |
| Ambiente de teste    | Chrome Versão 139.0.7258.127 (Versão oficial) 64 bits + Windows 10 Pro |
| Resultado encontrado | O mesmo que o esperado.                                                |
| Status               | **[Passou]{.mark}**                                                    |
