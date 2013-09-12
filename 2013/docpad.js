module.exports = {

  prompts: false,
  outPath: "www/",

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
        name: "Stretch Conference — First you grew. Now you lead.",
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
      url: "http://stretchcon.com/2013/",
      googleanalytics: "UA-43412556-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'callforproposals',
      'programcommittee',
      // 'schedule',
      'sponsors',
      // 'partners'
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      callforproposals: "Call for Proposals",
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
            bio: "<p>Andreas is Wrapp's co-founder and chief technology officer (CTO). Previously he was Spotify’s first employee and CTO, where he brought together the world-class tech team that designed and built the platform and product for the music service. Before that he worked for the Swedish online-gaming company Stardoll. Andreas is a board member and angel investor in several companies, and he is frequently hired as an advisor by promising Internet start-ups and venture capital funds.</p>",
            company: "Wrapp",
            link: {
                href: "http://twitter.com/ehn",
                text: "@ehn"
            },
            presentation: []
        },
        {
            name: "Andrew Stellman",
            photo: "themes/stretchcon/img/andrewstellman.jpg",
            bio: "<p>O'Reilly author, developer, architect, speaker, agile coach, project manager, general all-around expert in building better software</p>",
            company: "Stellman & Greene Consulting",
            link: {
                href: "http://twitter.com/AndrewStellman",
                text: "@AndrewStellman"
            },
            presentation: []
        },
        {
            name: "Francois Mazoudier",
            photo: "themes/stretchcon/img/francoismazoudier.jpg",
            bio: "<p>Francois Mazoudier is the co-founder and Managing Partner of Tech Leaders Capital, a tech CEO co-investment club. He has 20 years+ experience in TMT (Technology, Media and Telecom), early stage Venture Capital and M&A.</p><p>He spent half of his career in operational roles (from product management to customer services to sales and marketing) then senior management functions, all within TMT firms. Examples include Central Point Software (sold to Symantec - Product Marketing), RealNetworks (IPO – Head of Marketing, founding team, from startup to IPO), The Cloud (WiFi operator network, sold to SKY CORP - Marketing Head) and PictureTel (Videoconferencing, Channel Marketing, Business Development - IPO, now Polycom).</p><p>He spent the second part of his career in Private Equity. He was the co-founder of Speed Ventures, a $100m pan-European seed stage Venture Capital firm backed by Soros Partners and Permira (sold in 2001), then helped VC funds with the operational turnaround of underperforming investments before setting up EQUATE, a specialist boutique advisory firm helping TMT firms through growth, funding and strategic transactions. Francois also remains a Venture Partner for LD&A, a pan-European tech M&A advisory and corporate finance firm.</p><p>Francois is an active advisor, board mentor and early stage investor.</p><p>Francois speaks French, English, German and some Spanish and has lived in even more countries; he holds a BA in Sales & Marketing from the University of Paris. He loves tennis, travel, epicurean pleasures and constant change. He hates stagnation, London’s weather, his total lack of work-life balance and pomp.</p>",
            company: "EQUATE, LD&A",
            link: {
                href: "http://twitter.com/franco1s",
                text: "@franco1s"
            },
            presentation: []
        },
        {
            name: "Jason Hoffman",
            photo: "themes/stretchcon/img/jasonhoffman.jpg",
            bio: "<p>Jason is the founder and CTO at Joyent, where he is responsible for overseeing the engineering, operations and product groups’ development and implementation of Joyent’s Cloud Computing technology. He is also responsible for research and advanced development, technical outreach, evangelism, consultative efforts for partners and business units, and manages Joyent’s intellectual property portfolio including involvement in open source projects, licensing, technology transfer, assessments of potential partnerships, mergers and acquisitions. His specialties include bioinformatics, grid computing, cloud computing, distributed systems, collaborative applications and deploying and scaling web applications.</p>",
            company: "Joyent",
            link: {
                href: "http://twitter.com/jasonh",
                text: "@jasonh"
            },
            presentation: []
        },
        {
            name: "Michael Lopp",
            photo: "themes/stretchcon/img/michaellopp.jpg",
            bio: "<p>Michael Lopp is a Silicon Valley-based engineering leader who builds both people and software at companies such as Borland, Netscape, Apple, and Palantir. While he's not worrying about staying relevant, he writes about pens, bridges, people, poker, and werewolves at the popular weblog, Rands in Repose. Michael has written two books. \"Being Geek\" is a career handbook for geeks and nerds alike. His first book \"Managing Humans, 2nd Edition\" is a popular guide to the art of engineering leadership and clearly explains that while you might be rewarded for what you build, you will only be successful because of your people. Michael surfs, plays hockey, and drinks red wine in the redwoods of Northern California whenever he can because staying sane is more important than staying busy.</p>",
            company: "Palantir Technologies",
            link: {
                href: "http://twitter.com/rands",
                text: "@rands"
            },
            presentation: []
        },
        {
            name: "Oren Ellenbogen",
            photo: "themes/stretchcon/img/orenellenbogen.jpg",
            bio: "<p>Oren Ellenbogen is the curator of the successful newsletter SoftwareLeadWeekly and author of TeamLeadToolbox. Oren is also an Engineer at Commerce Sciences (#2 employee), where he focuses on building the company's data infrastructure. Prior to Commerce Sciences, Oren served as Director of Engineering at Delver (acquired by Sears), where he was responsible for the development process, delivering kick-ass products and growing the next generation of Team Leads in his group.</p>",
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
            bio: "<p>Roy Osherove is a senior consultant at ITVerket, and the author of \"The Art Of Unit Testing\" and \"Notes to a software team leader\". He is also one of the original ALT.NET organizers. He consults and trains teams worldwide on the gentle art of unit testing, test-driven development and how to lead software teams. He frequently speaks at international conferences on these topics and others.</p>",
            company: "ITVerket.no",
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
            bio: "I am the Senior Engineering Manager at Ustream and I oversee all site, streaming, and infrastructure teams. Early on, I specialized in building and operating large scale web applications, including the design and development of several Alexa Top 100 sites. Nowadays I focus on improving the way we develop at Ustream, creating effective processes and building a culture where our engineers can not just continuously deliver but also continuously improve. I strongly believe in teamwork, devops and lifelong learning.",
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
        name: "InfoQ",
        logo: "themes/stretchcon/img/infoq.png",
        url: "http://infoq.com"
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
