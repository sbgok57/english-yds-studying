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
      listening_progress: {
        Row: {
          id: string;
          user_id: string;
          topic_slug: string;
          completed: boolean;
          position_seconds: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_slug: string;
          completed?: boolean;
          position_seconds?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          topic_slug?: string;
          completed?: boolean;
          position_seconds?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_stats: {
        Row: {
          user_id: string;
          points: number;
          total_questions: number;
          total_correct: number;
          total_listen_sec: number;
          total_study_sec: number;
          current_streak: number;
          longest_streak: number;
          last_active_on: string | null;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          points?: number;
          total_questions?: number;
          total_correct?: number;
          total_listen_sec?: number;
          total_study_sec?: number;
          current_streak?: number;
          longest_streak?: number;
          last_active_on?: string | null;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          points?: number;
          total_questions?: number;
          total_correct?: number;
          total_listen_sec?: number;
          total_study_sec?: number;
          current_streak?: number;
          longest_streak?: number;
          last_active_on?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      activity_log: {
        Row: {
          id: number;
          user_id: string;
          activity_type: string;
          topic_slug: string | null;
          points: number;
          seconds: number;
          payload: Json;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          activity_type: string;
          topic_slug?: string | null;
          points?: number;
          seconds?: number;
          payload?: Json;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          activity_type?: string;
          topic_slug?: string | null;
          points?: number;
          seconds?: number;
          payload?: Json;
          created_at?: string;
        };
        Relationships: [];
      };
      quiz_answers: {
        Row: {
          id: number;
          user_id: string;
          topic_slug: string;
          question_id: string;
          chosen: string;
          correct_answer: string;
          is_correct: boolean;
          time_spent_sec: number;
          answered_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          topic_slug: string;
          question_id: string;
          chosen: string;
          correct_answer: string;
          is_correct: boolean;
          time_spent_sec?: number;
          answered_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          topic_slug?: string;
          question_id?: string;
          chosen?: string;
          correct_answer?: string;
          is_correct?: boolean;
          time_spent_sec?: number;
          answered_at?: string;
        };
        Relationships: [];
      };
      vocab_progress: {
        Row: {
          user_id: string;
          word: string;
          meaning: string | null;
          status: string;
          correct_count: number;
          wrong_count: number;
          next_review_at: string | null;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          word: string;
          meaning?: string | null;
          status?: string;
          correct_count?: number;
          wrong_count?: number;
          next_review_at?: string | null;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          word?: string;
          meaning?: string | null;
          status?: string;
          correct_count?: number;
          wrong_count?: number;
          next_review_at?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      exam_results: {
        Row: {
          id: number;
          user_id: string;
          exam_name: string;
          score: number;
          correct: number;
          wrong: number;
          empty: number;
          duration_sec: number;
          breakdown: Json;
          taken_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          exam_name?: string;
          score?: number;
          correct?: number;
          wrong?: number;
          empty?: number;
          duration_sec?: number;
          breakdown?: Json;
          taken_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          exam_name?: string;
          score?: number;
          correct?: number;
          wrong?: number;
          empty?: number;
          duration_sec?: number;
          breakdown?: Json;
          taken_at?: string;
        };
        Relationships: [];
      };
      push_subscriptions: {
        Row: {
          id: string;
          user_id: string;
          endpoint: string;
          p256dh: string;
          auth_key: string;
          user_agent: string | null;
          created_at: string;
          last_success_at: string | null;
          fail_count: number;
        };
        Insert: {
          id?: string;
          user_id: string;
          endpoint: string;
          p256dh: string;
          auth_key: string;
          user_agent?: string | null;
          created_at?: string;
          last_success_at?: string | null;
          fail_count?: number;
        };
        Update: {
          id?: string;
          user_id?: string;
          endpoint?: string;
          p256dh?: string;
          auth_key?: string;
          user_agent?: string | null;
          created_at?: string;
          last_success_at?: string | null;
          fail_count?: number;
        };
        Relationships: [];
      };
      notification_settings: {
        Row: {
          user_id: string;
          enabled: boolean;
          reminders: boolean;
          motivation: boolean;
          funny: boolean;
          reminder_time: string;
          exam_date: string | null;
          timezone: string;
          last_reminder_on: string | null;
          last_motivation_on: string | null;
          last_funny_on: string | null;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          enabled?: boolean;
          reminders?: boolean;
          motivation?: boolean;
          funny?: boolean;
          reminder_time?: string;
          exam_date?: string | null;
          timezone?: string;
          last_reminder_on?: string | null;
          last_motivation_on?: string | null;
          last_funny_on?: string | null;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          enabled?: boolean;
          reminders?: boolean;
          motivation?: boolean;
          funny?: boolean;
          reminder_time?: string;
          exam_date?: string | null;
          timezone?: string;
          last_reminder_on?: string | null;
          last_motivation_on?: string | null;
          last_funny_on?: string | null;
          updated_at?: string;
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
    Views: {
      topic_mastery: {
        Row: {
          user_id: string;
          topic_slug: string;
          attempts: number;
          correct: number;
          success_rate: number;
        };
        Relationships: [];
      };
    };
    Functions: {
      track_activity: {
        Args: {
          p_type: string;
          p_topic?: string | null;
          p_points?: number;
          p_seconds?: number;
          p_payload?: Json;
        };
        Returns: {
          user_id: string;
          points: number;
          total_questions: number;
          total_correct: number;
          total_listen_sec: number;
          total_study_sec: number;
          current_streak: number;
          longest_streak: number;
          last_active_on: string | null;
          updated_at: string;
        };
      };
    };
    Enums: Record<string, never>;
  };
}
