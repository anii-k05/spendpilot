import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tvgozppbvdzretventzm.supabase.co";
const supabasePublishableKey = "sb_publishable_YjaPDR70QSbJpBT5HgKsgA_Vtx_0WnF";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);