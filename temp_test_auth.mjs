import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from siteNovo/.env
dotenv.config({ path: path.resolve(__dirname, '../../siteNovo/.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Erro: NEXT_PUBLIC_SUPABASE_URL ou NEXT_PUBLIC_SUPABASE_ANON_KEY não encontrados no .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testLogin(email, password) {
  console.log(`🚀 Testando login para: ${email}...`);
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('❌ Erro ao fazer login:', error.message);
    process.exit(1);
  }

  console.log('✅ Login bem-sucedido!');
  console.log('👤 Usuário ID:', data.user.id);
  console.log('📧 E-mail verificado:', data.user.email);

  // Check if admin role exists
  console.log('🔍 Verificando permissões de admin...');
  const { data: roleData, error: roleError } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', data.user.id)
    .single();

  if (roleError) {
    console.error('❌ Erro ao verificar roles:', roleError.message);
  } else {
    console.log('👑 Role encontrada:', roleData.role);
    if (roleData.role === 'admin') {
      console.log('🏆 ACESSO ADMIN CONFIRMADO!');
    } else {
      console.warn('⚠️ Usuário logado, mas NÃO é admin.');
    }
  }

  process.exit(0);
}

const email = 'sanzonyvoz@gmail.com';
const password = 'SanzonyVoz@2026';

testLogin(email, password);
