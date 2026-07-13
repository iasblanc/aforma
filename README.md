# A FORMA — Webpage do livro + Raio-X da Forma

Site estático (sem build) pronto para deploy na Vercel.

## Estrutura

```
index.html              → home institucional do livro
raiox/index.html        → o Raio-X da Forma (diagnóstico interativo)
assets/style.css        → design system "Operador"
assets/raiox.js         → lógica do diagnóstico (21 afirmações, 7 componentes)
assets/leads.js         → registro de e-mails no Supabase
assets/config.js        → ⚠️ PREENCHER: URL e chave do Supabase
downloads/A_FORMA_Plano_90_Dias.pdf → material liberado após e-mail
vercel.json             → clean URLs + headers de segurança
```

## 1. Configurar o Supabase (captura de e-mails)

No SQL Editor do seu projeto Supabase, execute:

```sql
create table public.leads (
  id bigint generated always as identity primary key,
  email text not null,
  origem text not null default 'raiox',   -- 'raiox' ou 'lancamento'
  criado_em timestamptz not null default now(),
  unique (email, origem)
);

alter table public.leads enable row level security;

-- Público pode APENAS inserir (nunca ler, alterar ou apagar)
create policy "insert_publico" on public.leads
  for insert to anon with check (true);
```

Depois, em **Settings → API**, copie a **Project URL** e a **anon/publishable key**
e preencha em `assets/config.js`.

> A anon key é pública por design — a segurança vem da política RLS acima,
> que permite somente INSERT. Ninguém consegue ler a lista pela chave pública.

Para exportar os e-mails: Table Editor → leads → Export CSV.

## 2. Publicar na Vercel (integração nativa com GitHub)

1. Crie um repositório no GitHub e envie esta pasta:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/a-forma-site.git
   git push -u origin main
   ```
2. Acesse **vercel.com/new**, importe o repositório e clique em **Deploy**
   (framework: *Other* — não há build).
3. Pronto: a cada `git push`, a Vercel republica automaticamente.

O endereço final (ex.: `aforma.com.br/raiox`) é o que entra no QR code do livro.

## 3. Observações

- O resultado do Raio-X é calculado **inteiramente no navegador** — nenhuma
  resposta é enviada a servidor algum. Só o e-mail (opcional do visitante) é
  registrado, quando ele pede o plano de 90 dias ou o aviso de lançamento.
- O PDF em `/downloads/` fica em URL pública (o gate de e-mail é de cortesia,
  não de segurança). Se quiser trancar de verdade no futuro, o caminho é uma
  Edge Function do Supabase servindo o arquivo após o registro.
- Textos do site e do PDF derivam do manuscrito (rascunhos 1–2). Ao fechar a
  versão final do livro, revisar as citações.
