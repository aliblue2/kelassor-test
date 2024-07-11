type bootcampFormSubmitInput = {
  name: string;
  phone: string;
  discount: string;
  title: string;
};
type bootcampFormSubmitOutput = { statusCode: number };
export const bootcampFormSubmit: (
  input: bootcampFormSubmitInput
) => Promise<bootcampFormSubmitOutput> = async (input) => {
  return fetch(`${process.env.BASE_URL}/bootcamp/bootcamp.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      ...input,
    }),
  }).then((res) => res.json());
};
