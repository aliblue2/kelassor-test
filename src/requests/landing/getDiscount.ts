export const getDiscounts = async (name: string, phone: string) => {
  const res = await fetch(`${process.env.BASE_URL}/Discounts/discount.php`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({
      name,
      phone,
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    }),
  });

  const result = await res.json();

  return result;
};
