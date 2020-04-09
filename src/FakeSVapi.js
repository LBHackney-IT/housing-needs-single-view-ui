const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

const generateResponse = props => {
  const q = Object.entries(props.query).map(([k, v]) => {
    return `${v}`;
  });
  console.log(q);
  if (q[0] === 'Wednesday')
    return {
      grouped: [
        [
          {
            id: '263272',
            firstName: 'Wednesday',
            lastName: 'Adams',
            dob: '01/02/1969',
            nino: 'NR006660A',
            address: '50 HUSHMORE ROAD E5 0ET',
            source: 'JIGSAW'
          },
          {
            id: '60940760/1',
            firstName: 'Wednesday',
            lastName: 'Adams',
            dob: '01/02/1969',
            nino: 'NR006660A',
            address: '001 Cemetery Lane, London, E7 8LS',
            postcode: 'E7 8LS',
            source: 'ACADEMY-Benefits',
            links: {
              hbClaimId: 6094076
            }
          },
          {
            id: '333333399',
            firstName: 'Wednesday',
            lastName: 'Adams',
            dob: null,
            nino: null,
            address: '001 Cemetery Lane, London, E7 8LS',
            postcode: 'E7 8LS',
            source: 'ACADEMY-CouncilTax',
            links: { hbClaimId: 5058118 }
          },
          {
            id: '0122132/1',
            firstName: 'Wednesday',
            lastName: 'Adams',
            dob: '01/02/1969',
            nino: 'NR006660A',
            address: '001 Cemetery Lane, London, E7 8LS',
            postcode: 'E7 8LS',
            source: 'UHT-Contacts',
            links: {
              uhContact: 100087201
            }
          },
          {
            id: 'DIR0148754/1',
            firstName: 'Wednesday',
            lastName: 'Adams',
            dob: '01/02/1969',
            nino: 'NR006660A',
            address:
              'Housing Action Management, 001 Cemetery Lane, London, E7 8LS',
            postcode: null,
            source: 'UHT-HousingRegister',
            links: {
              uhContact: 100087201
            }
          },
          {
            id: '334351',
            firstName: 'Wednesday',
            lastName: 'Adams',
            dob: '01/02/1969',
            nino: 'NR006660A',
            address: '',
            postcode: null,
            source: 'UHW',
            links: {
              uhContact: 100087201
            }
          }
        ],
        [
          {
            id: '068366/1',
            firstName: 'Gomez Wednesday',
            lastName: 'Adams',
            dob: '03/11/1955',
            nino: null,
            address: null,
            postcode: 'E8 4JS',
            source: 'UHT-Contacts',
            links: {
              uhContact: 42558
            }
          },
          {
            id: '16681',
            firstName: 'Gomez Wednesday',
            lastName: 'Adams',
            dob: '03/11/1955',
            nino: null,
            address: '',
            postcode: null,
            source: 'UHW',
            links: {
              uhContact: 42558
            }
          },
          {
            id: '066567/1',
            firstName: 'Gomez Wednesday',
            lastName: 'Adams',
            dob: '03/11/1955',
            nino: null,
            address: null,
            postcode: null,
            source: 'UHT-Contacts',
            links: {
              uhContact: 38308
            }
          }
        ]
      ],
      ungrouped: [
        {
          id: '308405993',
          firstName: 'Wednesday',
          lastName: 'Adams',
          dob: null,
          nino: null,
          address: 'Mais 2nd Flr & Attic, 146d Graveman Road, London, E8 1BS',
          postcode: 'E8 1BS',
          source: 'ACADEMY-CouncilTax',
          links: {
            hbClaimId: null
          }
        },
        {
          id: '310226430',
          firstName: 'Wednesday',
          lastName: 'Adams',
          dob: null,
          nino: null,
          address: 'Flat 3 At, 110 Kingssea Road, London, E2 8DP',
          postcode: 'E2 8DP',
          source: 'ACADEMY-CouncilTax',
          links: {
            hbClaimId: null
          }
        },
        {
          id: '311356021',
          firstName: 'Fester',
          lastName: 'Adams',
          dob: null,
          nino: null,
          address: 'Flat 7, Block A, 100 Nightmare Street, London, E8 3FG',
          postcode: 'E8 3FG',
          source: 'ACADEMY-CouncilTax',
          links: {
            hbClaimId: null
          }
        },
        {
          id: '311820520',
          firstName: 'Wednesday',
          lastName: 'Adams',
          dob: null,
          nino: null,
          address: '131 Riverside Close, Mount Unpleasant Hill, London, E5 9ST',
          postcode: 'E5 9ST',
          source: 'ACADEMY-CouncilTax',
          links: {
            hbClaimId: null
          }
        },
        {
          id: '50131089/1',
          firstName: 'Wednesdaya',
          lastName: 'Adams',
          dob: '07/10/1935',
          nino: null,
          address: "28 Deadman's Court, Pownall Road, London, E8 4PZ",
          postcode: 'E8 4PZ',
          source: 'ACADEMY-Benefits',
          links: {
            hbClaimId: 5013108
          }
        },
        {
          id: '6023790X/1',
          firstName: 'Augustine Wednesday',
          lastName: 'Adams',
          dob: '28/05/1965',
          nino: 'SH123456B',
          address:
            'Mais 1st & 2nd Flrs, 108 Lower Claypot Road, London, E5 0QR',
          postcode: 'E5 0QR',
          source: 'ACADEMY-Benefits',
          links: {
            hbClaimId: 6023790
          }
        },
        {
          id: '308328514',
          firstName: 'Gomez',
          lastName: 'Adams',
          dob: null,
          nino: null,
          address: '17 Casket Close, Broadway Market, London, E8 4JS',
          postcode: 'E8 4JS',
          source: 'ACADEMY-CouncilTax',
          links: {
            hbClaimId: 6030343
          }
        },
        {
          id: '60532586/1',
          firstName: 'Wednesday',
          lastName: 'Adams',
          dob: '05/07/1959',
          nino: 'WE086421C',
          address: 'Room 4, 52 Peril Road, London, N16 8AT',
          postcode: 'N16 8AT',
          source: 'ACADEMY-Benefits',
          links: {
            hbClaimId: 6053258
          }
        }
      ],
      connected: [
        {
          id: 10,
          firstName: props.firstName || 'Rick',
          lastName: props.lastName || 'Sanchez',
          dob: null,
          nino: null,
          address: '',
          source: 'SINGLEVIEW',
          links: [
            {
              id: 26,
              customer_id: 10,
              system_id: 5,
              remote_id: '111111/1',
              first_name: props.firstName || 'Rick',
              last_name: props.lastName || 'Sanchez',
              address:
                '33 address Street, Address, Stamford Hill, LAMAMA, ZO6 5FE',
              nino: 'SC1234565',
              dob: '1946-02-03T00:00:00.000Z',
              created_at: '2020-02-10T16:32:28.405Z',
              updated_at: '2020-02-10T16:32:28.405Z',
              system_name: 'Test-test'
            }
          ]
        }
      ]
    };
  return {
    grouped: [],
    ungrouped: [],
    connected: []
  };
};

app.get('/customers', (req, res) => {
  res.send(generateResponse({ query: req.query }));
});

app.post('/customers', (req, res) => {
  res.send({ customer: { id: 946 } });
});

app.get('/customers/:id/record', (req, res) => {
  res.send({
    customer: {
      systemIds: {
        jigsaw: ['263272'],
        academyBenefits: ['60940760', '60940888'],
        academyCouncilTax: ['333333399', '399999999'],
        uhtContacts: '0',
        householdRef: '0122132   ',
        rent: '0122132/01',
        paymentRef: '12345',
        uhtHousingRegister: ['DIR0148754/1'],
        uhw: ['334351']
      },
      housingNeeds: {
        jigsawCaseId: '270305',
        status: 'Main duty accepted',
        currentPlacement: {
          address: '001 Cemetery Lane, London, E7 8LS',
          duty: 'Section 193(2)',
          type: 'Accommodation secured by the Local Authority',
          rentCostCustomer: 0,
          tenancyId: 59538,
          startDate: '2019-09-28 12:00:00'
        }
      },
      team: {},
      address: [
        { source: ['JIGSAW'], address: ['50 HUSHMORE ROAD, LONDON, E5 0ET'] },
        {
          source: ['ACADEMY-Benefits', 'UHT-Contacts'],
          address: ['001 Cemetery Lane', 'Forest Gate', 'London', 'E7 8LS']
        },
        {
          source: ['UHT-HousingRegister-WaitingList'],
          address: ['50', 'Hushmore Road', 'Hackney', 'London', 'E5 0ET']
        },
        {
          source: ['UHT-HousingRegister-Correspondence'],
          address: [
            'Housing Action Management',
            '001 Cemetery Lane',
            'Newham',
            'London',
            'E7 8LS'
          ]
        }
      ],
      dob: ['1969-02-01 12:00:00'],
      email: ['w.day@yahoo.co.uk'],
      phone: ['07666666666', '07999666999'],
      nino: ['NR006660A'],
      name: [{ first: 'Wednesday', last: 'Adams', title: 'Miss' }],
      postcode: ['E7 8LS'],
      benefits: {
        live: true,
        income: [
          {
            amount: 34.4,
            description: 'Child Benefit',
            period: 'Weekly',
            frequency: 1
          },
          {
            amount: 0,
            description: 'Miscellaneous Income',
            period: 'N/A',
            frequency: 0
          },
          {
            amount: 826.57,
            description: 'Universal Credit Award',
            period: 'Monthly',
            frequency: 1
          }
        ]
      },
      household: [
        {
          title: 'Mr',
          first: 'Pugsley',
          last: 'Adams',
          dob: '2008-09-05 12:00:00'
        },
        {
          title: 'Miss',
          first: 'Lurch',
          last: 'Adams',
          dob: '2001-11-21 12:00:00'
        }
      ],
      councilTax: {
        accountBalance: 55.55,
        paymentMethod: 'CASH MONTHLY',
        transactions: [
          {
            date: '2010-01-08T00:00:00.000Z',
            amount: -2.5,
            description: 'SOME COSTS'
          },
          {
            date: '2007-01-08T00:00:00.000Z',
            amount: -2.5,
            description: 'SOME COSTS'
          },
          {
            date: '2006-01-08T00:00:00.000Z',
            amount: -2.5,
            description: 'SOME COSTS'
          }
        ]
      },
      tenancies: {
        current: [],
        previous: [
          {
            tagRef: '0122132/01',
            startDate: '2019-07-18T00:00:00.000Z',
            endDate: '1900-01-01T00:00:00.000Z',
            tenure: 'Temp Annex',
            currentBalance: 2,
            rentAmount: 216.54,
            propRef: '10090323559',
            address: ['001 Cemetery Lane', 'Forest Gate', 'London', 'E7 8LS']
          }
        ]
      },
      housingRegister: [
        {
          applicationRef: 'DIR0148754',
          biddingNo: '2156200',
          band: 'Homeless',
          startDate: '2019-07-18T00:00:00.000Z',
          bedroomReq: '2',
          applicationStatus: 'Active'
        }
      ]
    }
  });
});

app.get('/customers/:id/notes', (req, res) => {
  res.send({
    notes: [
      {
        id: 1188205,
        title: 'Case Note',
        text: 'TA Address Amended\nRent Account Number Entered',
        date: '2019-07-23 01:00:00',
        user: 'Eugene Krabs',
        system: 'JIGSAW'
      },
      {
        id: 1173914,
        title: 'Case Note',
        text:
          "Phone call made to client's partner (mother of 2 children) Natalie Campbell on 07983 486 391.\n\nShe confirmed that the police attended home whilst she was there to visit her children. She was also implicated in the incident.\nShe told me that she is currently staying with her sister in Catford in South London.\nShe confirmed that the children are currently with their father.",
        date: '2019-07-18 01:00:00',
        user: 'Franco Manco',
        system: 'JIGSAW'
      },
      {
        id: 1173663,
        title: 'Case Note',
        text: 'Client was asked to leave after a report of assault and abuse.',
        date: '2019-07-18 01:00:00',
        user: 'Franco Manco',
        system: 'JIGSAW'
      },
      {
        id: 1175825,
        title: 'Case Note',
        text:
          "Client has presented as homeless on the day.  He has lived at his mother's house since 2008 with his two children.  Due to an allegation of domestic abuse by the client's mother and sister the police was called and the client was asked by the police to leave.  He has been living with the children in his car for the last two days.  He has no family or friends he can stay with.  The client ha been referred to duty and triaged (jigsaw 270305) and placed in the holding queue(ticket 1507).  His contact number is 07957783064.",
        date: '2019-07-18 12:00:00',
        user: 'Paul John',
        system: 'JIGSAW'
      },
      {
        id: '939972436UCDS',
        title: 'Note',
        text: 'file date 13/10/19 - uploaded and assessed.',
        date: '2019-10-15 08:27:14',
        user: 'Clarisa',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '939743648DHP',
        title: 'Note',
        text: 'declined as per recommendation made on 12/10/2019.',
        date: '2019-10-12 04:54:08',
        user: 'bandit',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '937641388UCDS',
        title: 'Note',
        text:
          'notified 16/9/19 loaded and assessed, claim desuspended, no change of award',
        date: '2019-09-18 08:56:27',
        user: 'gadegboy',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '936613480Tc',
        title: 'Note',
        text:
          'from clmt to query HB susp, stating he has applied for UC and is waiting for a reply. Clmt was advised once he receives Uc award to supply evidence to HB.',
        date: '2019-09-06 11:24:38',
        user: 'abarr',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '935405817Atlas',
        title: 'Note',
        text:
          '21/8/19  tax credit has ended, changes uploaded and further info reqd',
        date: '2019-08-23 11:56:57',
        user: 'gadegboy',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '935403993WTX',
        title: 'Note',
        text:
          'Income removed for -  ROGER JOHNSONCTX Income removed for -  ROGER JOHNSON',
        date: '2019-08-23 11:26:32',
        user: 'gadegboy',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '935220703UC',
        title: 'Note',
        text:
          '- HB stop received.  TA Claim therefore exempt from UC migration - follow up letter for UC evidence/income sent.',
        date: '2019-08-21 08:31:43',
        user: 'MOSS',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '934833687UCDS',
        title: 'Note',
        text: 'Automation Update UCDS record Completed',
        date: '2019-08-16 09:01:27',
        user: 'hb9785',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '934717618Clmt',
        title: 'Note',
        text:
          'seen. States that his rent is £226.92 and not £216.54 a week. Submitted his TA.',
        date: '2019-08-15 12:46:57',
        user: 'jivowi',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '933850328TA',
        title: 'Note',
        text:
          'claim received 24/07/19, move in/rent liability date 18/07/19.phoned claimant 05/08/19, claimant stated not currently working and only current income is Tax credit and Child Benefit, claimant stated will claim UC.CIS. checked confirmed CTC and WTC paid 4 weekly.TA HB New claim assessed.No Ctax liability',
        date: '2019-08-05 11:52:07',
        user: 'josobawa',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '932886642Clm',
        title: 'Note',
        text:
          'received under temp number, i have linked to this case, clm is in a HOMELESS accommodation, case reindex to the TA team.',
        date: '2019-07-25 08:10:41',
        user: 'psmiles',
        system: 'ACADEMY-Benefits'
      },
      {
        id: '932819421Risk',
        title: 'Note',
        text:
          "Score = 5SupportingDocumentsSupplied = noOtherInformation = BECS Reference - HA2-008-G0EOther Information:***MEDIUM RISK***. THE CLAIMANTS RISK SCORE IS [ 5 ]. THE CLAIMANTS RISK CATEGORY IS [MEDIUM RISK]. VERIFICATION NINO [NR596126A] HAS THE VALIDATION REASON [VALID]. THE CLAIMANT MOVED OUT OF THEIR PREVIOUS ADDRESS ON 2019-07-15. THE CLAIMANT STATED THEIR EMAIL ADDRESS IS [W.DAY@YAHOO.CO.UK]. THE CLAIMANT IS IN RECEIPT OF WORKING TAX CREDIT AND RECEIVES THE WORKING TAX CREDIT 30 HOURS ELEMENT. THE CLAIMANT DID NOT WANT TO DISCLOSE THEIR ETHNICITY. CAPITAL: BUILDING SOCIETY ACCOUNT [BUILDING SOCIETY NAME:LONDON COMMUNITY CREDIT UNION, ACCOUNT HOLDER:ROGER BROWN, AMOUNT:0.2, ACCOUNT NUMBER:10160892, BRANCH:608367]. THE CLAIMANT GIVES PERMISSION TO SHARE INFORMATION WITH THEIR LANDLORD OR REPRESENTATIVE ABOUT THE STATUS OF THEIR HOUSING BENEFIT CLAIM. THE CLAIMANT STATED THEY HAVE 2 BEDROOMS. DEPENDANT CHILD JEVON BROWN HAS BEEN PLACED UNDER THE CLAIMANT/PARTNER'S GUARDIANSHIP. DEPENDANT CHILD KADEHDRA JOHNSON HAS BEEN PLACED UNDER THE CLAIMANT/PARTNER'S GUARDIANSHIP.Household Type = HOMELESSSHORTTERMLEASEDRelationshipWithOtherNonDependant - InRelationship = noUnearnedIncome-Description = CHILD BENEFITUnearnedIncome-Description = CHILD TAX CREDITUnearnedIncome-Description = WORKING TAX CREDITHouseholdMember-RelationshipToClaimant = sonRelationshipWithOtherNonDependant - InRelationship = noHouseholdMember-RelationshipToClaimant = step-daughterRelationshipWithOtherNonDependant - InRelationship = noRent Free Weeks = 0THE CLAIMANT WOULD LIKE TO BACKDATE AND THEIR CIRCUMSTANCES WERE THE SAME AS THEY ARE NOW. THE CLAIMANT STATED THE FOLLOWING REASON FOR BACKDATING [ THE REASON WHY I HAVE NOT BEEN ABLE TO SUBMIT THE HOUSING BENEFIT FORM I'VE BEEN UNABLE TO GET ACCESS TO MY PREVIOUS PREMISES TO GET MY DOCUMENTS ]",
        date: '2019-07-24 01:30:21',
        user: 'spjoseph',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 11497172,
        title: 'Note',
        text: 'UCDS file date 13/10/19 - uploaded and assessed.',
        date: '2019-10-15 08:27:55',
        user: 'Clarisa',
        system: 'COMINO'
      },
      {
        id: 11496044,
        title: 'Note',
        text: 'DHP declined as per recommendation made on 12/10/2019.',
        date: '2019-10-12 04:53:54',
        user: 'bandit',
        system: 'COMINO'
      },
      {
        id: 11477852,
        title: 'Note',
        text:
          'UCDS notified 16/9/19 loaded and assessed, claim desuspended, no change of award',
        date: '2019-09-18 08:56:25',
        user: 'GABOOYA',
        system: 'COMINO'
      },
      {
        id: 11469814,
        title: 'Note',
        text:
          'Tc from clmt to query HB susp, stating he has applied for UC and is waiting for a reply. Clmt was advised once he receives Uc award to supply evidence to HB.',
        date: '2019-09-06 11:24:49',
        user: 'ABARRY',
        system: 'COMINO'
      },
      {
        id: 11460867,
        title: 'Note',
        text:
          'Atlas 21/8/19  tax credit has ended, changes uploaded and further info reqd',
        date: '2019-08-23 11:55:43',
        user: 'GABOOYA',
        system: 'COMINO'
      },
      {
        id: 11460611,
        title: 'Note',
        text:
          'DIS32330  - Online DHP Application Received - file path created for allocation 23/08/2019',
        date: '2019-08-23 08:29:45',
        user: 'BROIL',
        system: 'COMINO'
      },
      {
        id: 11458676,
        title: 'Note',
        text:
          'UC - HB stop received.  TA Claim therefore exempt from UC migration - follow up letter for UC evidence/income sent.',
        date: '2019-08-21 08:31:53',
        user: 'MOSS',
        system: 'COMINO'
      },
      {
        id: 11455229,
        title: 'Note',
        text:
          'Clmt seen. States that his rent is £226.92 and not £216.54 a week. Submitted his TA.',
        date: '2019-08-15 12:46:42',
        user: 'JIVOWI',
        system: 'COMINO'
      },
      {
        id: 11446937,
        title: 'Note',
        text:
          'TA claim received 24/07/19, move in/rent liability date 18/07/19.\r\nphoned claimant 05/08/19, claimant stated not currently working and only current income is Tax credit and Child Benefit, claimant stated will claim UC.\r\nCIS. checked confirmed CTC and WTC paid 4 weekly.\r\nTA HB New claim assessed.\r\nNo Ctax liability',
        date: '2019-08-05 11:52:19',
        user: 'JOSOBOWALE',
        system: 'COMINO'
      },
      {
        id: 11439685,
        title: 'Note',
        text:
          'Clm received under temp number, i have linked to this case, clm is in a HOMELESS accommodation, case reindex to the TA team.',
        date: '2019-07-25 08:10:50',
        user: 'PSMILES',
        system: 'COMINO'
      },
      {
        id: 183920260,
        title: 'Action Diary Note',
        text: 'Suggested Action',
        date: '2019-08-10 12:00:00',
        user: 'SYSTEM',
        system: 'UHT-ActionDiary'
      },
      {
        id: 186050385,
        title: 'Action Diary Note',
        text: 'Suggested Action',
        date: '2019-09-21 12:00:00',
        user: 'SYSTEM',
        system: 'UHT-ActionDiary'
      },
      {
        id: 187128807,
        title: 'Action Diary Note',
        text: 'Account checked, payment due, diarised to monitor.',
        date: '2019-11-12 11:31:00',
        user: 'Kim Possible',
        system: 'UHT-ActionDiary'
      },
      {
        title: 'Note',
        text:
          'BOOKED IN\r\nFLAT 15\r\n453 KATHERINE ROAD\r\nNEWHAM\r\nLONDON\r\nE7 8LS',
        date: '2019-07-19 12:24:42',
        user: 'Simba Belion                            ',
        system: 'UHT-HousingRegister'
      },
      {
        id: 9891076,
        title: 'Note',
        text:
          '\r\n\r\nFrom: Kevin Murphy \r\nSent: 18 July 2019 13:37\r\nTo: Alexandra Lambourde <Alexandra.Lambourde@Hackbae.gov.uk>\r\nSubject: ABORT DIR0148754 FW: DIR number request\r\n\r\nHello,\t\r\n\r\nPlease abort thanks\r\n\r\n \r\n\r\n\r\n\r\nFrom: Housing Register \r\nSent: 18 July 2019 13:36\r\nTo: Franco Manco <Franco.Manco@Hackbae.gov.uk>\r\nSubject: RE: DIR number request\r\n\r\n \r\n\r\nFrom: Franco Manco [mailto:Franco.Manco@Hackbae.gov.uk] \r\nSent: 18 July 2019 13:29\r\nTo: Housing Register <Housing.Register@Hackbae.gov.uk>; Jordan Belford <Jordan.Belford@Hackbae.gov.uk>; Janet Jackson <Janet.Jackson@Hackbae.gov.uk>; Frances Hayhow <Frances.Hayhow@Hackbae.gov.uk>; Simba Belion (Housing Needs) <Simba.Belion2@Hackbae.gov.uk>; Muhithur Rahman <Muhithur.Rahman@Hackbae.gov.uk>; Eugene Krabs <Eugene.Krabs@Hackbae.gov.uk>; Sibel Duru <Sibel.Duru@Hackbae.gov.uk>\r\nSubject: DIR number request\r\n\r\n\r\n\r\nPlease create DIR number for this client.\r\n\r\nMr Robert Johnson]\r\nDoB: 01/02/1969\r\nUH CN: 334351\r\n-- \r\nWarm regards\r\nFranco Manco\r\nBenefits & Housing Needs Officer\r\nHomelessness & Housing Advice Team\r\nBenefits & Housing Needs Service\r\nFinance & Resources Directorate\r\nLondon Borough of Hackney\r\nHackney Service Centre\r\n1 Hillman Street\r\nLondon E8 1DY\r\n T: 020 8356 4224\r\nE: Franco.Manco@Hackbae.gov.uk\r\nE: Franco.Manco@Hackbae.gov.uk.cjsm.net',
        date: '2019-07-18 01:37:41',
        user: 'KMURPHY',
        system: 'UHW'
      },
      {
        id: 9891080,
        title: 'Note',
        text:
          'duty email\r\ndir created for franco\r\nemail to alex \r\nemails below\r\n\r\n\r\nFrom: Kevin Murphy \r\nSent: 18 July 2019 13:37\r\nTo: Alexandra Lambourde <Alexandra.Lambourde@Hackbae.gov.uk>\r\nSubject: ABORT DIR0148754 FW: DIR number request\r\n\r\nHello,\t\r\n\r\nPlease abort thanks\r\n\r\n \r\n\r\n\r\n\r\nFrom: Housing Register \r\nSent: 18 July 2019 13:36\r\nTo: Franco Manco <Franco.Manco@Hackbae.gov.uk>\r\nSubject: RE: DIR number request\r\n\r\n \r\n\r\nFrom: Franco Manco [mailto:Franco.Manco@Hackbae.gov.uk] \r\nSent: 18 July 2019 13:29\r\nTo: Housing Register <Housing.Register@Hackbae.gov.uk>; Jordan Belford <Jordan.Belford@Hackbae.gov.uk>; Janet Jackson <Janet.Jackson@Hackbae.gov.uk>; Frances Hayhow <Frances.Hayhow@Hackbae.gov.uk>; Simba Belion (Housing Needs) <Simba.Belion2@Hackbae.gov.uk>; Muhithur Rahman <Muhithur.Rahman@Hackbae.gov.uk>; Eugene Krabs <Eugene.Krabs@Hackbae.gov.uk>; Sibel Duru <Sibel.Duru@Hackbae.gov.uk>\r\nSubject: DIR number request\r\n\r\n\r\n\r\nPlease create DIR number for this client.\r\n\r\nMr Robert Johnson]\r\nDoB: 01/02/1969\r\nUH CN: 334351\r\n-- \r\nWarm regards\r\nFranco Manco\r\nBenefits & Housing Needs Officer\r\nHomelessness & Housing Advice Team\r\nBenefits & Housing Needs Service\r\nFinance & Resources Directorate\r\nLondon Borough of Hackney\r\nHackney Service Centre\r\n1 Hillman Street\r\nLondon E8 1DY\r\n T: 020 8356 4224\r\nE: Franco.Manco@Hackbae.gov.uk\r\nE: Franco.Manco@Hackbae.gov.uk.cjsm.net',
        date: '2019-07-18 01:38:22',
        user: 'KMURPHY',
        system: 'UHW'
      },
      {
        id: 10384516,
        title: 'Note',
        text:
          'Client needed assistance bidding, I checked his ELLC account which was working fine. The client wanted more time to check out the properties on offer so did not place a bid this morning. \r\n\r\nI also gave the client details of the homefinders website.',
        date: '2019-12-13 09:37:05',
        user: 'DCROSBY',
        system: 'UHW'
      },
      {
        id: 10482644,
        title: 'Note',
        text:
          'Applicant came to the office to check the progress on his bidding.',
        date: '2020-01-20 10:07:06',
        user: 'DAFOLABI',
        system: 'UHW'
      }
    ]
  });
});
app.get('/customers/:id/documents', (req, res) => {
  res.send({
    documents: [
      {
        id: 714579,
        title: 'Document',
        text: 'PHP RJ.pdf',
        date: '2019-07-18 02:34:15',
        user: 'Wednesday  Adams',
        system: 'JIGSAW'
      },
      {
        id: 19532919,
        title: 'Academy Document',
        text: 'CL-COMMENCE',
        date: '2019-08-05 12:00:00',
        user: 'josobawa',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19532922,
        title: 'Academy Document',
        text: 'CL-NONASSESS-NIL',
        date: '2019-08-05 12:00:00',
        user: 'josobawa',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19532920,
        title: 'Academy Document',
        text: 'CL-COMMENCE-SUMM',
        date: '2019-08-05 12:00:00',
        user: 'josobawa',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19566957,
        title: 'Academy Document',
        text: 'UCDS-FURTHER-INFO',
        date: '2019-08-21 12:00:00',
        user: 'sross',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19573933,
        title: 'Academy Document',
        text: 'CL-SUSPEND',
        date: '2019-08-23 12:00:00',
        user: 'gadegboy',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19623199,
        title: 'Academy Document',
        text: 'CL-ADJUSTMENT-SUMM',
        date: '2019-09-18 12:00:00',
        user: 'gadegboy',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19623198,
        title: 'Academy Document',
        text: 'CL-ADJUSTMENT',
        date: '2019-09-18 12:00:00',
        user: 'gadegboy',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19674786,
        title: 'Academy Document',
        text: 'CL-DHP-UNSUCCESS',
        date: '2019-10-12 12:00:00',
        user: 'hpandit',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19677638,
        title: 'Academy Document',
        text: 'CL-ADJUSTMENT',
        date: '2019-10-15 12:00:00',
        user: 'anavsa',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 19677639,
        title: 'Academy Document',
        text: 'CL-ADJUSTMENT-SUMM',
        date: '2019-10-15 12:00:00',
        user: 'anavsa',
        system: 'ACADEMY-Benefits'
      },
      {
        id: 40564358,
        title: 'Document',
        text:
          'ATLAS Change of Contact Details Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2020-01-16 10:13:25',
        user: '@AUTO',
        system: 'COMINO'
      },
      {
        id: 40424304,
        title: 'Document',
        text: 'DHP Recommendation',
        date: '2019-10-12 04:55:26',
        user: 'HPANDIT',
        system: 'COMINO'
      },
      {
        id: 40344131,
        title: 'Document',
        text: 'Change in Circs ICL',
        date: '2019-08-23 11:54:28',
        user: 'GADEGBOYEGA',
        system: 'COMINO'
      },
      {
        id: 40343634,
        title: 'Document',
        text: 'On-line DHP Application Received - Legislation Changes',
        date: '2019-08-23 08:27:31',
        user: 'BWOBIL',
        system: 'COMINO'
      },
      {
        id: 40343392,
        title: 'Document',
        text: 'ATLAS Claim Termination',
        date: '2019-08-22 10:02:03',
        user: '@AUTO',
        system: 'COMINO'
      },
      {
        id: 40339126,
        title: 'Document',
        text: 'Benefits Blank Letter',
        date: '2019-08-21 08:55:43',
        user: 'SROSS',
        system: 'COMINO'
      },
      {
        id: 40331498,
        title: 'Document',
        text: 'Proof of Rent',
        date: '2019-08-15 12:47:44',
        user: 'VBANTON',
        system: 'COMINO'
      },
      {
        id: 40314284,
        title: 'Document',
        text: 'Income Verification Document',
        date: '2019-08-05 11:48:27',
        user: 'JOSOBOWALE',
        system: 'COMINO'
      },
      {
        id: 40314211,
        title: 'Document',
        text: 'CIS Enquiry',
        date: '2019-08-05 11:32:19',
        user: 'JOSOBOWALE',
        system: 'COMINO'
      },
      {
        id: 40294824,
        title: 'Document',
        text: 'Multiple Evidence',
        date: '2019-07-24 04:39:32',
        user: 'PSMILES',
        system: 'COMINO'
      },
      {
        id: 40294087,
        title: 'Document',
        text: 'Evidence Checklist (eBenefits)',
        date: '2019-07-24 12:45:01',
        user: 'PSMILES',
        system: 'COMINO'
      },
      {
        id: 40294088,
        title: 'Document',
        text: 'Claim (eBenefits)',
        date: '2019-07-24 12:45:01',
        user: 'PSMILES',
        system: 'COMINO'
      },
      {
        id: 8049563,
        title: 'Document',
        text: 'Manual Process',
        date: '2019-07-18 01:34:41',
        user: 'KMURPHY',
        system: 'UHW'
      },
      {
        id: 8051829,
        title: 'Document',
        text: 'Tenancy Agreement - LICENCE',
        date: '2019-07-19 11:05:58',
        user: 'MRAHMAN',
        system: 'UHW'
      },
      {
        id: 8052285,
        title: 'Document',
        text: 'Manual Process',
        date: '2019-07-19 12:17:38',
        user: 'SABIBEGUM',
        system: 'UHW'
      },
      {
        id: 8052289,
        title: 'Document',
        text: 'Manual Process',
        date: '2019-07-19 12:18:47',
        user: 'SABIBEGUM',
        system: 'UHW'
      },
      {
        id: 8052312,
        title: 'Document',
        text: 'Order',
        date: '2019-07-19 12:25:05',
        user: 'SABIBEGUM',
        system: 'UHW'
      },
      {
        id: 8052321,
        title: 'Document',
        text: 'Manual Process',
        date: '2019-07-19 12:27:07',
        user: 'SABIBEGUM',
        system: 'UHW'
      },
      {
        id: 8052322,
        title: 'Document',
        text: 'Manual Process',
        date: '2019-07-19 12:27:14',
        user: 'SABIBEGUM',
        system: 'UHW'
      },
      {
        id: 8052469,
        title: 'Document',
        text: 'Receipt (Jigsaw)',
        date: '2019-07-19 01:00:31',
        user: 'JREMI',
        system: 'UHW'
      },
      {
        id: 8052472,
        title: 'Document',
        text: 'Correspondence (Jigsaw)',
        date: '2019-07-19 01:01:33',
        user: 'JREMI',
        system: 'UHW'
      },
      {
        id: 8052476,
        title: 'Document',
        text: 'Proof of identity (Jigsaw)',
        date: '2019-07-19 01:02:30',
        user: 'JREMI',
        system: 'UHW'
      },
      {
        id: 8058546,
        title: 'Document',
        text: 'New Account letter (TA) - New Rent Account Letter',
        date: '2019-07-22 04:33:08',
        user: 'EKUMBARJI',
        system: 'UHW'
      },
      {
        id: 8062152,
        title: 'Document',
        text: 'Tenancy Agreement - AMENDED LICENCE',
        date: '2019-07-23 03:56:41',
        user: 'MRAHMAN',
        system: 'UHW'
      },
      {
        id: 8062445,
        title: 'Document',
        text:
          'Email from LBH - TA Booking Form - Robert Johnson Flat 15, 453 Katherine Road E7 8LS',
        date: '2019-07-23 04:58:51',
        user: 'EKUMBARJI',
        system: 'UHW'
      },
      {
        id: 8124811,
        title: 'Document',
        text: 'Receipt (Jigsaw)',
        date: '2019-08-16 12:06:24',
        user: 'RNOOR',
        system: 'UHW'
      },
      {
        id: 8124814,
        title: 'Document',
        text: 'Proof of identity (Jigsaw)',
        date: '2019-08-16 12:06:49',
        user: 'RNOOR',
        system: 'UHW'
      },
      {
        id: 8124815,
        title: 'Document',
        text: 'Proof of tenancy (Jigsaw)',
        date: '2019-08-16 12:07:17',
        user: 'RNOOR',
        system: 'UHW'
      },
      {
        id: 8204597,
        title: 'Document',
        text:
          'Experian Checks - MR ROGER BROWN - Voters Roll  Address Link Report',
        date: '2019-09-19 10:14:23',
        user: 'FAUKO',
        system: 'UHW'
      },
      {
        id: 8229390,
        title: 'Document',
        text: 'HAT Dec Accepted full duty',
        date: '2019-09-28 10:07:34',
        user: 'FAUKO',
        system: 'UHW'
      },
      {
        id: 8355548,
        title: 'Document',
        text: 'Arrears Action Diary Entry',
        date: '2019-11-12 11:30:35',
        user: 'KHINGE',
        system: 'UHW'
      }
    ]
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
