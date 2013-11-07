module.exports = {

  prompts: false,
  outPath: "www/",

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Stretch Conference — First you grew. Now you lead.",
      tagline: "Leadership conference",
      description: "Join us at Stretch in Budapest this December and get inspired by stories from leads and founders of great organisations as they talk about the challenges of leadership and management.",
      date: "December 5-6, 2013",
      price: "$210",
      venue: "Uránia National Film Theatre",
      address: "1088 Rákóczi Way 21",
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
      'schedule',
      'speakers',
      'tickets',
      'programcommittee',
      'sponsors',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      programcommittee: "Program Committee",
      schedule: "Schedule",
      tickets: "Tickets",
      sponsors: "Sponsors",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
        {
            anchor: "AnnemieRess",
            name: "Annemie Ress",
            photo: "themes/stretchcon/img/annemieress.jpg",
            bio: "<p>Annemie Ress is the Founder of PurpleBeach, which is a forum that encourages diversity of thinking and promotes the topic of people innovation. Accepting that innovation in business is underpinned by people, PurpleBeach acts as catalyst for change at the intersection between business and people.</p><p>Annemie has wide ranging experience in designing and implementing significant organizational change and transformation in multi-national businesses including: innovation and people and focusing on future trends as they specifically impact leadership, talent, culture, diversity and complexity.</p>",
            company: "Purple Beach",
            link: {
                href: "",
                text: ""
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "AndreasEhn",
            name: "Andreas Ehn",
            photo: "themes/stretchcon/img/andreasehn.jpg",
            bio: "<p>Andreas is Wrapp's co-founder and chief technology officer (CTO). Previously he was Spotify’s first employee and CTO, where he brought together the world-class tech team that designed and built the platform and product for the music service. Before that he worked for the Swedish online-gaming company Stardoll. Andreas is a board member and angel investor in several companies, and he is frequently hired as an advisor by promising Internet start-ups and venture capital funds.</p>",
            company: "Wrapp",
            link: {
                href: "http://twitter.com/ehn",
                text: "@ehn"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "OrenEllenbogen",
            name: "Oren Ellenbogen",
            photo: "themes/stretchcon/img/orenellenbogen.jpg",
            bio: "<p>Oren Ellenbogen is the curator of the successful newsletter SoftwareLeadWeekly and author of TeamLeadToolbox.</p><p>Oren is also an Engineer at Commerce Sciences (#2 employee), where he focuses on building the company's data infrastructure. Prior to Commerce Sciences, Oren served as Director of Engineering at Delver (acquired by Sears), where he was responsible for the development process, delivering kick-ass products and growing the next generation of Team Leads in his group.</p>",
            company: "Commerce Sciences, Software Lead Weekly",
            link: {
                href: "http://twitter.com/orenellenbogen",
                text: "@orenellenbogen"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "JasonHoffman",
            name: "Jason Hoffman",
            photo: "themes/stretchcon/img/jasonhoffman.jpg",
            bio: "<p>Jason is the founder and CTO at Joyent, where he is responsible for overseeing the engineering, operations and product groups’ development and implementation of Joyent’s Cloud Computing technology. He is also responsible for research and advanced development, technical outreach, evangelism, consultative efforts for partners and business units, and manages Joyent’s intellectual property portfolio including involvement in open source projects, licensing, technology transfer, assessments of potential partnerships, mergers and acquisitions. His specialties include bioinformatics, grid computing, cloud computing, distributed systems, collaborative applications and deploying and scaling web applications.</p>",
            company: "Joyent",
            link: {
                href: "http://twitter.com/jasonh",
                text: "@jasonh"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "KristianLindwall",
            name: "Kristian Lindwall",
            photo: "themes/stretchcon/img/kristianlindwall.jpg",
            bio: "<p>Kristian is a Chapter Lead and Agile Coach at Spotify. Kristian has been coaching agile teams for the last 5 years, he is an experienced scrum master, agile coach and development manager.</p>",
            company: "Spotify",
            link: {
                href: "http://twitter.com/klindwall",
                text: "@klindwall"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "MichaelLopp",
            name: "Michael Lopp",
            photo: "themes/stretchcon/img/michaellopp.jpg",
            bio: "<p>Michael Lopp is a Silicon Valley-based engineering leader who builds both people and software at companies such as Borland, Netscape, Apple, and Palantir. While he's not worrying about staying relevant, he writes about pens, bridges, people, poker, and werewolves at the popular weblog, Rands in Repose.</p><p>Michael has written two books. \"Being Geek\" is a career handbook for geeks and nerds alike. His first book \"Managing Humans, 2nd Edition\" is a popular guide to the art of engineering leadership and clearly explains that while you might be rewarded for what you build, you will only be successful because of your people. </p><p>Michael surfs, plays hockey, and drinks red wine in the redwoods of Northern California whenever he can because staying sane is more important than staying busy.</p>",
            company: "Palantir Technologies",
            link: {
                href: "http://twitter.com/rands",
                text: "@rands"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "BrendanMarsh",
            name: "Brendan Marsh",
            photo: "themes/stretchcon/img/brendanmarsh.jpg",
            bio: "<p>Brendan is an Agile Coach in the Infrastructure &amp; Operations tribe at Spotify. An Australian expat, Brendan now lives in Stockholm and coaches teams that build and maintain Spotify's big data infrastructure. Brendan has been coaching &amp; growing teams for the past 5 years.</p>",
            company: "Spotify",
            link: {
                href: "http://twitter.com/brendanmarsh",
                text: "@brendanmarsh"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "FrancoisMazoudier",
            name: "Francois Mazoudier",
            photo: "themes/stretchcon/img/francoismazoudier.jpg",
            bio: "<p>Francois Mazoudier is the co-founder and Managing Partner of Tech Leaders Capital, a tech CEO co-investment club. He has 20 years+ experience in TMT (Technology, Media and Telecom), early stage Venture Capital and M&amp;A.</p><p>He spent half of his career in operational roles (from product management to customer services to sales and marketing) then senior management functions, all within TMT firms. Examples include Central Point Software (sold to Symantec - Product Marketing), RealNetworks (IPO – Head of Marketing, founding team, from startup to IPO), The Cloud (WiFi operator network, sold to SKY CORP - Marketing Head) and PictureTel (Videoconferencing, Channel Marketing, Business Development - IPO, now Polycom).</p><p>He spent the second part of his career in Private Equity. He was the co-founder of Speed Ventures, a $100m pan-European seed stage Venture Capital firm backed by Soros Partners and Permira (sold in 2001), then helped VC funds with the operational turnaround of underperforming investments before setting up EQUATE, a specialist boutique advisory firm helping TMT firms through growth, funding and strategic transactions. Francois also remains a Venture Partner for LD&amp;A, a pan-European tech M&amp;A advisory and corporate finance firm.</p><p>Francois is an active advisor, board mentor and early stage investor.</p><p>Francois speaks French, English, German and some Spanish and has lived in even more countries; he holds a BA in Sales &amp; Marketing from the University of Paris. He loves tennis, travel, epicurean pleasures and constant change. He hates stagnation, London’s weather, his total lack of work-life balance and pomp.</p>",
            company: "EQUATE, LD&A",
            link: {
                href: "http://twitter.com/franco1s",
                text: "@franco1s"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "DarioNardi",
            name: "Dario Nardi",
            photo: "themes/stretchcon/img/darionardi.jpg",
            bio: "<p>Dario Nardi, PhD is a research fellow and teaching award winner at University of California, Los Angeles. He also heads Radiance House, a books, media, and training company. Dario does hands-on brain research, conducts workshops around the world, and has authored numerous books on personality for organizational development including \"Neuroscience of Personality: Brain-Savvy Insights for All Types of People\". His background includes programming and game design.</p>",
            company: "Radiance House",
            link: {
                href: "http://twitter.com/DarioNardi22",
                text: "@DarioNardi22"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "SarahNovotny",
            name: "Sarah Novotny",
            photo: "themes/stretchcon/img/sarahnovotny.jpg",
            bio: "<p>Sarah Novotny has recently resigned in order to pursue some personal projects.  She was most recently the CIO for Meteor Entertainment. Novotny has run large scale technology infrastructures as a Systems Engineer and a Database administrator for Amazon.com and the ill fated Ads.com.  In 2001, she founded Blue Gecko, a remote database administration company with two peers from Amazon. Blue Gecko, was sold to DatAvail in 2012. </p><p>Novotny regularly talks about technology infrastructure and geek lifestyle.  She is additionally a program chair for O'Reilly Media's OSCON.   Her technology writing and adventures as well as her more esoteric musings are found at <a href=\"http://sarahnovotny.com\">http://sarahnovotny.com</a>.</p>",
            company: "Meteor Entertainment",
            link: {
                href: "http://twitter.com/sarahnovotny",
                text: "@sarahnovotny"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "RoyOsherove",
            name: "Roy Osherove",
            photo: "themes/stretchcon/img/royosherove.jpg",
            bio: "<p>Roy Osherove is a senior consultant at ITVerket, and the author of \"The Art Of Unit Testing\" and \"Notes to a software team leader\". He is also one of the original ALT.NET organizers. He consults and trains teams worldwide on the gentle art of unit testing, test-driven development and how to lead software teams. He frequently speaks at international conferences on these topics and others.</p>",
            company: "ITVerket.no",
            link: {
                href: "http://twitter.com/RoyOsherove",
                text: "@RoyOsherove"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "AndrewClayShafer",
            name: "Andrew Clay Shafer",
            photo: "themes/stretchcon/img/andrewclayshafer.jpg",
            bio: "<p>Andrew Shafer is a lead engineer and infrastructure consultant at Cloudscaling where he helps organizations leverage and create next generation cloud computing resources and platforms.</p><p>Andrew brings with him a background in computational science, embedded Linux, database administration, web frameworks, and operations. In addition to technical expertise, Andrew focuses on helping organizations navigate the technology Renaissance triple point between people, process and tools.</p>",
            company: "Parvus Captus",
            link: {
                href: "http://twitter.com/littleidea",
                text: "@littleidea"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        },
        {
            anchor: "AndrewStellman",
            name: "Andrew Stellman",
            photo: "themes/stretchcon/img/andrewstellman.jpg",
            bio: "<p>Andrew is a bestselling O'Reilly author (Beautiful Teams, Head First C#, Head First PMP, Applied Software Project Management), developer, architect, speaker, agile coach, project manager, and general all-around expert in building better software. He has been a Vice President at a major investment bank, architected large-scale real-time back end systems, managed large international software teams, and consulted for companies, schools, and organizations, including Microsoft, the National Bureau of Economic Research, and MIT. He’s had the privilege of working with some pretty amazing programmers during that time, and likes to think that he’s learned a few things from them. Andrew's upcoming book, \"Learning Agile\", will be published by O'Reilly in early 2014.</p>",
            company: "Bestselling O'Reilly Author",
            link: {
                href: "http://twitter.com/AndrewStellman",
                text: "@AndrewStellman"
            },
            presentation: {
                title: "Great teams start with great people, goals, and practices... but is that enough?",
                description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>."
            }
        },
        {
            anchor: "AlexanderGrosse",
            name: "Alexander Grosse",
            photo: "themes/stretchcon/img/alexandergrosse.jpg",
            bio: "<p>Alexander is currently VP Engineering at SoundCloud, the world’s leading social sound platform. Before SoundCloud he worked as R&amp;D director at Nokia, where he headed Places Development at Nokia’s Location Services and had overall responsibility for the Operations department. Alexander has worked in a wide range of positions (Development, Consulting, CTO) in the software industry since 1996, including co-founding two start-ups.He holds a Masters in computer science from the University of Oldenburg and an Executive MBA from FOM Berlin. Besides computer science Alexander works(ed) as a techno DJ in Berlin’s party scene.</p>",
            company: "SoundCloud",
            link: {
                href: "http://twitter.com/klangberater",
                text: "@klangberater"
            },
            presentation: {
                description: "<i>Coming soon</i>"
            }
        }
    ],

    programcommittee: [
        {
            name: "Gábor Török, program chair",
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
            bio: "I'm CTO and founder of Prezi, a fast growing startup changing how people share ideas.  I build the organization, stretch engineers, and code in Haskell for a better life. I care about entrepreneurship in Europe especially in Hungary. I believe that Budapest is going to be a one of the best places for high-tech startup.",
            company: "Prezi",
            link: {
                href: "http://twitter.com/halacsy",
                text: "@halacsy"
            },
        },
    ],

    // List of Sponsors
    sponsors: [
    ],

    // List of Partners
    partners: [
      {
        name: "InfoQ",
        logo: "themes/stretchcon/img/infoq.png",
        url: "http://infoq.com"
      },
      {
        name: "Software Lead Weekly",
        logo: "themes/stretchcon/img/softwareleadweekly.jpg",
        url: "http://softwareleadweekly.com/"
      },
      {
        name: "ComputerWorld Számítástechnika",
        logo: "themes/stretchcon/img/computerworld.jpg",
        url: "http://http://computerworld.hu/"
      },
      {
        name: "popforms",
        logo: "themes/stretchcon/img/popforms_logo.png",
        url: "https://popforms.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
