import {
  AdvancesSessions,
  GroupedAdvanceSessions,
} from "@/types/AdvanceSessions";

export const getPanelWorkshopsSessions = async (userHashedId: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}/profile/advanceSessions.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashedId: userHashedId,
      }),
    }
  );

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant fetch all sessions of advances . server error");
  }

  if (!response.ok) {
    throw new Error("Cant fetch all sessions of advances.an error occured");
  }

  const data = await response.json();
  const result = clearAdvanceSessions(data);
  return result;
};

function clearAdvanceSessions(
  sessions: AdvancesSessions[]
): GroupedAdvanceSessions[] {
  return sessions.reduce((acc, currentVal) => {
    const existingItem = acc.findIndex(
      (item) => item.advanceId === currentVal.advanceId
    );

    if (existingItem != -1) {
      acc[existingItem].sessions.push({
        link: currentVal.link,
        date: currentVal.date,
        sessionTitle: currentVal.sessionTitle,
        time: currentVal.time,
      });
    } else {
      acc.push({
        advanceId: currentVal.advanceId,
        advanceTitle: currentVal.advanceTitle,
        isPaid: currentVal.isPaid,
        unix_time: currentVal.unix_time,
        sessions: [
          {
            date: currentVal.date,
            link: currentVal.link,
            time: currentVal.time,
            sessionTitle: currentVal.sessionTitle,
          },
        ],
      });
    }

    return acc;
  }, [] as GroupedAdvanceSessions[]);
}
