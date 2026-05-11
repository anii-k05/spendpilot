import { supabase } from "../lib/supabase";

export const saveAuditReport = async (reportData) => {
  try {
    const { data, error } = await supabase
      .from("audit_reports")
      .insert([reportData])
      .select();

    if (error) {
      console.error("Error saving report:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};

export const getAuditReports = async () => {
  try {
    const { data, error } = await supabase
      .from("audit_reports")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching reports:", error);
      return [];
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};