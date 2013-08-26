module.exports = {

  prompts: false,
  outPath: "www/",

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
        name: "Stretch conference. First you grew. Now you lead.",
        description: "Join us at Stretch in Budapest this December and get inspired by stories from leads and founders of great organisations as they talk about the challenges of leadership and management.",
      date: "December 5-6, 2013",
//      price: "$100",
//      venue: "Coco Bongo",
//      address: "Boulevard Kukulcan, 30",
      city: "Budapest",
      state: "Hungary"
    },

    // Site info
    site: {
      theme: "stretchcon",
      url: "http://stretchcon.com",
      googleanalytics: "UA-43412556-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'programcommittee',
      // 'schedule',
      // 'sponsors',
      // 'partners'
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      programcommittee: "Program Committee",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
        {
            name: "Andreas Ehn",
            photo: "themes/stretchcon/img/andreasehn.jpg",
            bio: "",
            company: "Spotify",
            link: {
                href: "http://twitter.com/ehn",
                text: "@ehn"
            },
            presentation: []
        },
        {
            name: "Oren Ellenbogen",
            photo: "themes/stretchcon/img/orenellenbogen.jpg",
            bio: "",
            company: "Commerce Sciences, Software Lead Weekly",
            link: {
                href: "http://twitter.com/orenellenbogen",
                text: "@orenellenbogen"
            },
            presentation: []
        },
        {
            name: "Roy Osherove",
            photo: "themes/stretchcon/img/royosherove.jpg",
            bio: "",
            company: "Bouvet ASA",
            link: {
                href: "http://twitter.com/RoyOsherove",
                text: "@RoyOsherove"
            },
            presentation: []
        }
    ],

    programcommittee: [
        {
            name: "Gábor Török, chair",
            photo: "themes/stretchcon/img/gabortorok.jpg",
            bio: "I'm engineering manager at Prezi. I enjoy working in agile teams. I'm passionate about process improvements, continuous delivery and acceptance test driven development, and people management. I strongly believe knowledge belongs to everyone hence I regularly organise tech meetups in Budapest to help people share ideas.",
            company: "Prezi",
            link: {
                href: "http://twitter.com/processpirate",
                text: "@processpirate"
            },
        },
        {
            name: "Gergely Hodicska",
            photo: "themes/stretchcon/img/gergelyhodicska.jpg",
            bio: "",
            company: "Ustream",
            link: {
                href: "http://twitter.com/felhobacsi",
                text: "@felhobacsi"
            },
        },
        {
            name: "Gábor Vészi",
            photo: "themes/stretchcon/img/gaborveszi.jpg",
            bio: "I'm responsible for the teams that manage Prezi's critical backend systems. I'm passionate about availability, scalable architectures, automation, metrics, and bridging the gap between development and operations.",
            company: "Prezi",
            link: {
                href: "http://twitter.com/veszig",
                text: "@veszig"
            },
        },
        {
            name: "Péter Halácsy",
            photo: "themes/stretchcon/img/peterhalacsy.jpg",
            bio: "Today I'm CTO of Prezi.com which is a fast growing startup changing how people share ideas. What I'm doing? Building organization, stretching engineers, and coding in Haskell for a better life.",
            company: "Prezi",
            link: {
                href: "http://twitter.com/halacsy",
                text: "@halacsy"
            },
        },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
