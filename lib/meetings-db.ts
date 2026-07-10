import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-07-05',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Johnson',
    announcements: [
      'Ward temple night this Friday',
      'Youth activity next Saturday',
    ],
    openingHymn: {
      number: 2,
      title: 'The Spirit of God',
    },
    openingPrayer: 'Sister Williams',
    wardBusiness: [
      {
        description: 'Sustaining of new Primary presidency',
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'In Remembrance of Thy Suffering',
    },
    speakers: [
      {
        name: 'Brother Brown',
        topic: 'Faith in Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Youth Choir',
        topic: 'Musical Number',
        type: 'musical-number',
      },
    ],
    closingHymn: {
      number: 31,
      title: 'O God, Our Help in Ages Past',
    },
    closingPrayer: 'Brother Davis',
  },

  {
    id: 2,
    date: '2026-06-28',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Lee',
    openingHymn: {
      number: 85,
      title: 'How Great Thou Art',
    },
    openingPrayer: 'Sister Brown',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 193,
      title: 'I Stand All Amazed',
    },
    speakers: [
      {
        name: 'Ward Members',
        topic: 'Testimony Meeting',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 152,
      title: 'God Be With You Till We Meet Again',
    },
    closingPrayer: 'Brother White',
  },

  {
    id: 3,
    date: '2026-06-21',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Green',
    openingHymn: {
      number: 1,
      title: 'The Morning Breaks',
    },
    openingPrayer: 'Brother Adams',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 190,
      title: 'In Memory of the Crucified',
    },
    speakers: [
      {
        name: 'Sister Taylor',
        topic: 'Service',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 153,
      title: 'Come, Come Ye Saints',
    },
    closingPrayer: 'Sister Clark',
  },

  {
    id: 4,
    date: '2026-06-14',
    meetingType: 'stake',
    presiding: 'Stake President',
    conducting: 'Counselor Smith',
    openingHymn: {
      number: 26,
      title: 'Oh May My Soul Commune',
    },
    openingPrayer: 'Brother Hill',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 169,
      title: 'In Remembrance of Thy Suffering',
    },
    speakers: [
      {
        name: 'Stake President',
        topic: 'Strengthening Families',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 152,
      title: 'God Be With You',
    },
    closingPrayer: 'Brother King',
  },

  {
    id: 5,
    date: '2026-06-07',
    meetingType: 'general',
    presiding: 'Conference Leader',
    conducting: 'Conference Leader',
    openingHymn: {
      number: 3,
      title: 'Now Let Us Rejoice',
    },
    openingPrayer: 'Sister White',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 191,
      title: 'Behold the Great Redeemer Die',
    },
    speakers: [
      {
        name: 'General Authority',
        topic: 'Following Christ',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 30,
      title: 'Come Thou Fount',
    },
    closingPrayer: 'Brother Hall',
  },
];


export function getMeetings(
  date?: string | null
): SacramentMeeting[] {
  if (date) {
    return meetings.filter(
      (meeting) => meeting.date === date
    );
  }

  return meetings;
}


export function getMeetingById(
  id: number
): SacramentMeeting | null {
  return (
    meetings.find(
      (meeting) => meeting.id === id
    ) ?? null
  );
}