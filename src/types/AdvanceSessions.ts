export type AdvancesSessions = {
    advanceId: number;
    advanceTitle: string;
    isPaid: number;
    sessionTitle: string;
    date: string;
    time: string;
    unix_time: string;
    link: string | null;
  };
  
  export type GroupedAdvanceSessions = {
    advanceId: number;
    advanceTitle: string;
    unix_time: string;
    isPaid: number;
    sessions: [
      {
        link: string | null;
        sessionTitle: string;
        date: string;
        time: string;
      },
    ];
  };