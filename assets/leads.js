// ============================================================
// A FORMA — Registro de leads (Supabase REST, insert-only)
// Tabela: public.leads (email text, origem text, criado_em timestamptz)
// ============================================================
window.registrarLead = async function (email, origem) {
  const cfg = window.AFORMA_CONFIG || {};
  if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
    console.warn('[A FORMA] Supabase não configurado em assets/config.js');
    return false;
  }
  try {
    const res = await fetch(cfg.SUPABASE_URL + '/rest/v1/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': cfg.SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + cfg.SUPABASE_ANON_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ email: email.toLowerCase(), origem: origem })
    });
    // 201 = inserido; 409 = e-mail já cadastrado (tratamos como sucesso)
    return res.status === 201 || res.status === 409;
  } catch (e) {
    console.error('[A FORMA] Erro ao registrar lead:', e);
    return false;
  }
};
