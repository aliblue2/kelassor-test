export async function BuyWorkshopAdvance(
  advanceTitle: string,
  phone?: string,
  hashedId?: string
) {
  const response = await fetch(`${process.env.BASE_URL}/advance/advance.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      title : advanceTitle,
      hashedId,
      phone,
    }),
  });

  if (response.status >= 500) {
    throw new Error("cant buy advance . server error");
  }

  if (!response.ok) {
    throw new Error("An error occured during to buy advance.!");
  }
  const result = await response.json();
  return result;
}
