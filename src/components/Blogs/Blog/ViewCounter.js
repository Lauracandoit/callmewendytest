// Use createClient instead of createClientComponentClient
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

// const supabase = createClientComponentClient();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);
  useEffect(() => {
    const incrementView = async () => {
      try {
        console.log("Attempting to increment view for slug:", slug);

        const { data, error } = await supabase.rpc("public.increment", {
          slug_text: slug,
        });

        if (error) {
          console.error("Error incrementing view count:", error);
        } else if (data) {
          // Update the state with the new view count
          setViews(data.new_count);
        }
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count",
          error
        );
      }
    };
    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
