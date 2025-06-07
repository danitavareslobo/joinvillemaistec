export interface Plant {
  id: string;
  name: string;
  price: number;
  light: "sun" | "shade";
}

export type ButtonVariant = "primary" | "secondary";
export type IconSize = "sm" | "md" | "lg";