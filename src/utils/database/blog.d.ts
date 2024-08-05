export type blogCategory = "design"|"programming"|"hr"|"marketing"
export interface blog {
  id: number;
  slug:string;
  title: string;
  category:"design"|"programming"|"hr"|"marketing";
  content: string;
  createdAt: Date;
}
