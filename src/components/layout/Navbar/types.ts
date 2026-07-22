export type Language = "EN" | "HI";

export interface NavbarState {
  scrolled: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
  language: Language;
}

export interface NavbarProps {
  heroId?: string;
}

export interface ScrollOptions {
  heroId: string;
  offset?: number;
}