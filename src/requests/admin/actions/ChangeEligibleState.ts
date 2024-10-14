"use server";

import { revalidatePath } from "next/cache";

export async function changeEligibleState(
  hashed_id: string,
  bootcampTitle: string,
  kelaasor_eligible: string,
  phoneNumber: string
) {
  const response = await fetch(
    `${process.env.BASE_URL}/admin/snapEligible.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashed_id: hashed_id,
        bootcampTitle: bootcampTitle,
        kelaasor_eligible: kelaasor_eligible,
        phone: phoneNumber,
      }),
    }
  );

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant update eligible.! server error");
  }

  if (!response.ok) {
    throw new Error("cant update eligible.! server error");
  }

  const result = await response.json();
  if (result.statusCode === 200) {
    revalidatePath("/admin/users/bootcamps");
    return "success";
  } else {
    return "failed";
  }
}
