import { supabase } from "@/integrations/supabase/client";
import { DemoItem } from "@/data/content";

export interface DemoEntry extends DemoItem {
  id: string;
  location: 'hero' | 'grid';
  order_index: number;
  created_at?: string;
}

export const demoService = {
  async getDemos() {
    const { data, error } = await (supabase as any)
      .from("demos")
      .select("*")
      .order("order_index", { ascending: true });
    
    if (error) throw error;
    return data as DemoEntry[];
  },

  async addDemo(demo: Omit<DemoEntry, "id" | "created_at">) {
    const { data, error } = await (supabase as any)
      .from("demos")
      .insert(demo)
      .select()
      .single();
    
    if (error) throw error;
    return data as DemoEntry;
  },

  async updateDemo(id: string, updates: Partial<DemoEntry>) {
    const { data, error } = await (supabase as any)
      .from("demos")
      .update(updates)
      .eq("id", id)
      .select()
      .single();
    
    if (error) throw error;
    return data as DemoEntry;
  },

  async deleteDemo(id: string) {
    const { error } = await (supabase as any)
      .from("demos")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
  },

  async uploadAudio(file: File) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `demos/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("audio-files")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from("audio-files")
      .getPublicUrl(filePath);

    return publicUrl;
  }
};
