// Database types for Supabase YDS integration
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          avatar_url: string | null;
          level: string | null;
          target_score: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          level?: string | null;
          target_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          level?: string | null;
          target_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_progress: {
        Row: {
          id: number;
          user_id: string;
          module: string;
          question_id: string;
          correct: boolean;
          time_spent_ms: number | null;
          answered_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          module: string;
          question_id: string;
          correct: boolean;
          time_spent_ms?: number | null;
          answered_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          module?: string;
          question_id?: string;
          correct?: boolean;
          time_spent_ms?: number | null;
          answered_at?: string;
        };
        Relationships: [];
      };
      deneme_sonuclari: {
        Row: {
          id: number;
          user_id: string;
          deneme_adi: string;
          dogru: number;
          yanlis: number;
          bos: number;
          sure_sn: number | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          deneme_adi: string;
          dogru: number;
          yanlis: number;
          bos: number;
          sure_sn?: number | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          deneme_adi?: string;
          dogru?: number;
          yanlis?: number;
          bos?: number;
          sure_sn?: number | null;
          created_at?: string;
        };
        Relationships: [];
      };
      user_words: {
        Row: {
          id: number;
          user_id: string;
          word: string;
          meaning: string | null;
          known: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          word: string;
          meaning?: string | null;
          known?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          word?: string;
          meaning?: string | null;
          known?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      keep_alive: {
        Row: {
          id: number;
          pinged_at: string;
        };
        Insert: {
          id?: number;
          pinged_at?: string;
        };
        Update: {
          id?: number;
          pinged_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
