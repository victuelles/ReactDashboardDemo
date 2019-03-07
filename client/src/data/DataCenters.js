const DATA_CENTERS = [
  {
    id: 1,
    pid: "AEC2",
    provider: "AWS EC2",
    locations: [
      {
        geo: "APAC",
        name: "Asia Pacific",
        country: [
          {
            name: "Mumbai",
            image: "flag-in"
          },
          {
            name: "Seoul",
            image: "flag-kr"
          },
          {
            name: "Singapore",
            image: "flag-sg"
          },
          {
            name: "Sydney",
            image: "flag-au"
          },
          {
            name: "Tokyo",
            image: "flag-jp"
          }
        ]
      },
      {
        geo: "CAN",
        name: "Canada",
        country: [
          {
            name: "Central",
            image: "flag-ca"
          }
        ]
      },
      {
        geo: "EU",
        name: "Europe",
        country: [
          {
            name: "Frankfurt",
            image: "flag-de"
          },
          {
            name: "Ireland",
            image: "flag-ie"
          },
          {
            name: "London",
            image: "flag-gb"
          },
          {
            name: "Paris",
            image: "flag-fr"
          }
        ]
      },
      {
        geo: "SAM",
        name: "South America",
        country: [
          {
            name: "Sao Paulo",
            image: "flag-br"
          }
        ]
      },
      {
        geo: "USE",
        name: "US East",
        country: [
          {
            name: "N. Virginia",
            image: "flag-us"
          },
          {
            name: "Ohio",
            image: "flag-us"
          }
        ]
      },
      {
        geo: "USW",
        name: "US West",
        country: [
          {
            name: "N. California",
            image: "flag-us"
          },
          {
            name: "Oregon",
            image: "flag-us"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    pid: "GCP",
    provider: "Google Cloud Platform",
    locations: [
      {
        geo: "EU-N1",
        name: "Europe North 1",
        country: [
          {
            name: "Finland",
            image: "flag-fi"
          }
        ]
      },
      {
        geo: "EU-W2",
        name: "Europe West 2",
        country: [
          {
            name: "London",
            image: "flag-gb"
          }
        ]
      },
      {
        geo: "US-W1",
        name: "US West 1",
        country: [
          {
            name: "Oregon",
            image: "flag-us"
          }
        ]
      },
      {
        geo: "US-E1",
        name: "US East 1",
        country: [
          {
            name: "South Carolina",
            image: "flag-us"
          }
        ]
      },
      {
        geo: "AS-SE1",
        name: "Asia South East 1",
        country: [
          {
            name: "Singapore",
            image: "flag-sg"
          }
        ]
      },
      {
        geo: "AU-SE1",
        name: "Australia South East 1",
        country: [
          {
            name: "Sydney",
            image: "flag-au"
          }
        ]
      },
      {
        geo: "SAMR-E1",
        name: "South America East 1",
        country: [
          {
            name: "Sao Paulo",
            image: "flag-br"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    pid: "PC",
    provider: "Packet Cloud",
    locations: [
      {
        geo: "EU ",
        name: "Europe ",
        country: [
          {
            name: "Frankfurt",
            image: "flag-de"
          }
        ]
      },
      {
        geo: "CAN",
        name: "Canada",
        country: [
          {
            name: "Toronto",
            image: "flag-ca"
          }
        ]
      },
      {
        geo: "US-W",
        name: "US",
        country: [
          {
            name: "Seattle",
            image: "flag-us"
          },
          {
            name: "Los Angeles",
            image: "flag-us"
          }
        ]
      }
    ]
  }
];

export default DATA_CENTERS;
