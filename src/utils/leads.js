import { supabase } from "../lib/supabase";

export const saveLead = async (leadData) => {
  try {

    const { data, error } = await supabase
      .from("leads")
      .insert([leadData])
      .select();

    if (error) {
      console.error("Error saving lead:", error);
      return null;
    }

    return data;

  } catch (err) {

    console.error("Unexpected error:", err);
    return null;

  }
};

export const getLeads = async () => {
  try {

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
      return [];
    }

    return data;

  } catch (err) {

    console.error("Unexpected error:", err);
    return [];

  }
};