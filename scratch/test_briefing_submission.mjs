import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing env vars");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSubmission() {
  const testBrief = {
    nome: "Test User Migration",
    empresa: "Migration Lab",
    email: "test@example.com",
    whatsapp: "11999999999",
    tipo_locucao: "Comercial",
    texto: "This is a test briefing submitted during migration verification.",
    tom: "Sério / Corporativo",
    regiao: "Nacional",
    periodo: "12 meses",
    status: 'recebido'
  };

  console.log("Submitting test brief...");
  const { data, error } = await supabase.from('briefs').insert(testBrief).select();

  if (error) {
    console.error("Error submitting brief:", error);
  } else {
    console.log("Success! Submitted brief ID:", data[0].id);
    
    // Verify it appears in the database
    const { data: verifyData } = await supabase.from('briefs').select('id').eq('id', data[0].id).single();
    if (verifyData) {
      console.log("Verification successful: Record exists in database.");
    } else {
      console.error("Verification failed: Record not found after insert.");
    }

    // Cleanup
    // await supabase.from('briefs').delete().eq('id', data[0].id);
    // console.log("Cleaned up test record.");
  }
}

testSubmission();
