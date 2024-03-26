// "use client";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import React, { useEffect, useState } from "react";

// const supabase = createClientComponentClient();

// const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
//   const [views, setViews] = useState(0);

//   useEffect(() => {
//     const incrementView = async () => {
//       try {
//         let { data, error } = await supabase.rpc("increment", {
//           slug_text:slug,
//         });
//         if (error) {
//           console.error("Error 1 incrementing view count insdie try block ", error);
//         }
//       } catch (error) {
//         console.error("An error  occrued while incrementing view coutns", error);
//       }
//     };
//     if (!noCount) {
//       incrementView();
//     }
//   }, [slug, noCount]);
//   if (showCount) {
//     return <div>{views} views </div>;
//   } else {
//     return null;
//   }
// };

// export default ViewCounter;

"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        // Ensure slug has a value before making the RPC call
        if (!slug) {
          console.error("Slug is undefined or null.");
          return;
        }

        // Make the RPC call only if slug has a value
        let { data, error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error) {
          console.error("Error incrementing view count:", error);
        } else {
          // Update the views state with the new count
          setViews(data);
        }
      } catch (error) {
        console.error(
          "An error occurred while incrementing view counts:",
          error
        );
      }
    };
    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  if (showCount) {
    return <div>{views} views </div>;
  } else {
    return null;
  }
};

export default ViewCounter;
